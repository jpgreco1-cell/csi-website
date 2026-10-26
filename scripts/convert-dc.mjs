// Converts Claude Design ".dc.html" files (a small template language that runs on React)
// into real React/TSX components, preserving every element, inline style and binding.
//
//   node scripts/convert-dc.mjs "<Name>" "<design-source file>" "<output .tsx>"
//
// Template grammar (see support.js in the design export):
//   <sc-if value="{{ expr }}">, <sc-for list="{{ expr }}" as="x">, {{ expr }} in text and attributes,
//   <x-import component-from-global-scope="NS.Component">, <dc-import name="Other Component">,
//   <image-slot>, <helmet>, style-hover="..." pseudo-class attributes.
// Expressions: dotted/bracket paths, ==, !=, ===, !==, !, literals.

import fs from "node:fs";
import { parseFragment } from "parse5";

const [, , NAME, INPUT, OUTPUT] = process.argv;
if (!NAME || !INPUT || !OUTPUT) {
  console.error("usage: convert-dc.mjs <ComponentName> <input.dc.html> <output.tsx>");
  process.exit(1);
}

const src = fs.readFileSync(INPUT, "utf8");

// ---------- split the file ----------
const dcMatch = src.match(/<x-dc>([\s\S]*)<\/x-dc>/);
if (!dcMatch) throw new Error("no <x-dc> block");
let template = dcMatch[1];

const helmetStyles = [];
template = template.replace(/<helmet[\s\S]*?<\/helmet>/i, (m) => {
  for (const s of m.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) helmetStyles.push(s[1]);
  return "";
});

const scriptMatch = src.match(/<script type="text\/x-dc"([^>]*)>([\s\S]*?)<\/script>\s*<\/body>/);
if (!scriptMatch) throw new Error("no x-dc logic script");
const propsAttr = scriptMatch[1].match(/data-props="([^"]*)"/);
const decodeEntities = (s) =>
  s.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&amp;/g, "&");
const propsSchema = propsAttr ? JSON.parse(decodeEntities(propsAttr[1])) : {};
let logic = scriptMatch[2];

const rewriteAssets = (s) =>
  s
    .replace(/assets\/photos\//g, "/photos/")
    .replace(/assets\/logos\//g, "/logos/")
    .replace(/(["'(])\.\/assets\//g, "$1/")
    .replace(/_ds\/[a-z0-9-]+\//g, "/ds/");
logic = rewriteAssets(logic);

// ---------- encode like the runtime (support.js encodeCase) ----------
const CAMEL = "sc-camel-";
const RAW_WRAP = {
  select: "sc-raw-select", table: "sc-raw-table", tbody: "sc-raw-tbody", thead: "sc-raw-thead",
  tfoot: "sc-raw-tfoot", tr: "sc-raw-tr", td: "sc-raw-td", th: "sc-raw-th", caption: "sc-raw-caption",
};
const RAW_UNWRAP = Object.fromEntries(Object.entries(RAW_WRAP).map(([k, v]) => [v, k]));
const ATTRS = `(?:[^>"']|"[^"]*"|'[^']*')*`;
let enc = template.replace(new RegExp("<(x-import|dc-import)(" + ATTRS + ")/>", "gi"), (_, t, a) => `<${t}${a}></${t}>`);
enc = enc.replace(/(\s)([a-z]+[A-Z][A-Za-z0-9]*)(\s*=)/g, (_, sp, name, eq) =>
  sp + CAMEL + name.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase()) + eq);
for (const [real, alias] of Object.entries(RAW_WRAP)) {
  enc = enc.replace(new RegExp("(</?)" + real + "(?=[\\s>])", "gi"), "$1" + alias);
}
enc = rewriteAssets(enc);

const tree = parseFragment(enc);

// ---------- helpers ----------
const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const VOID = new Set(["br", "hr", "img", "input", "source", "col", "wbr", "area", "base", "link", "meta", "track", "embed"]);
const TABLEISH = new Set(["table", "tbody", "thead", "tfoot", "tr"]);
const EVENT_MAP = {
  onclick: "onClick", onchange: "onChange", oninput: "onInput", onsubmit: "onSubmit", onkeydown: "onKeyDown",
  onkeyup: "onKeyUp", onkeypress: "onKeyPress", onmousedown: "onMouseDown", onmouseup: "onMouseUp",
  onmouseenter: "onMouseEnter", onmouseleave: "onMouseLeave", onfocus: "onFocus", onblur: "onBlur",
  ondoubleclick: "onDoubleClick", onmousemove: "onMouseMove", onmouseover: "onMouseOver", onmouseout: "onMouseOut",
  ontouchstart: "onTouchStart", ontouchend: "onTouchEnd", ontouchmove: "onTouchMove",
};
const ATTR_RENAME = {
  class: "className", for: "htmlFor", tabindex: "tabIndex", readonly: "readOnly", maxlength: "maxLength",
  colspan: "colSpan", rowspan: "rowSpan", autocomplete: "autoComplete", autofocus: "autoFocus",
  inputmode: "inputMode", enterkeyhint: "enterKeyHint", contenteditable: "contentEditable",
  spellcheck: "spellCheck", crossorigin: "crossOrigin", srcset: "srcSet", novalidate: "noValidate",
  "xlink:href": "xlinkHref", "xml:space": "xmlSpace", viewbox: "viewBox", preserveaspectratio: "preserveAspectRatio",
};
const BOOLEAN_ATTRS = new Set(["disabled", "checked", "required", "readOnly", "autoFocus", "multiple", "selected", "hidden", "open", "noValidate"]);

// ---------- expression compiler (mirrors support.js resolve) ----------
const IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*/;
function parensWrapWhole(expr) {
  let depth = 0;
  for (let i = 0; i < expr.length - 1; i++) {
    if (expr[i] === "(") depth++;
    else if (expr[i] === ")") { depth--; if (depth === 0) return false; }
  }
  return true;
}
function findTopLevelEquality(expr) {
  let depth = 0;
  for (let i = 0; i < expr.length; i++) {
    const c = expr[i];
    if (c === "[" || c === "(") depth++;
    else if (c === "]" || c === ")") depth--;
    else if (depth === 0 && (c === "=" || c === "!") && expr[i + 1] === "=") {
      if (i > 0 && (expr[i - 1] === "=" || expr[i - 1] === "!")) continue;
      if (!expr.slice(0, i).trim()) continue;
      const op = expr[i + 2] === "=" ? c + "==" : c + "=";
      return { index: i, op };
    }
  }
  return null;
}
function compileExpr(srcExpr, scope) {
  const expr = String(srcExpr).trim();
  if (!expr) return "undefined";
  if (expr[0] === "(" && expr[expr.length - 1] === ")" && parensWrapWhole(expr)) return compileExpr(expr.slice(1, -1), scope);
  const eq = findTopLevelEquality(expr);
  if (eq) return `(${compileExpr(expr.slice(0, eq.index), scope)} ${eq.op} ${compileExpr(expr.slice(eq.index + eq.op.length), scope)})`;
  if (expr[0] === "!") return `!(${compileExpr(expr.slice(1), scope)})`;
  if (["true", "false", "null", "undefined"].includes(expr)) return expr;
  if (/^-?\d+(\.\d+)?$/.test(expr)) return expr;
  if (expr.length >= 2 && (expr[0] === '"' || expr[0] === "'") && expr[expr.length - 1] === expr[0]) return JSON.stringify(expr.slice(1, -1));
  const head = expr.match(IDENT);
  if (!head) return "undefined";
  const name = head[0];
  let out = name === "$index" || scope.has(name) ? name : `vm.${name}`;
  let i = name.length;
  while (i < expr.length) {
    if (expr[i] === ".") {
      const m = expr.slice(i + 1).match(IDENT) || expr.slice(i + 1).match(/^\d+/);
      if (!m) return "undefined";
      out += /^\d/.test(m[0]) ? `?.[${m[0]}]` : `?.${m[0]}`;
      i += 1 + m[0].length;
    } else if (expr[i] === "[") {
      let depth = 1, j = i + 1;
      while (j < expr.length && depth > 0) {
        if (expr[j] === "[") depth++;
        else if (expr[j] === "]") { depth--; if (depth === 0) break; }
        j++;
      }
      out += `?.[${compileExpr(expr.slice(i + 1, j), scope)}]`;
      i = j + 1;
    } else return "undefined";
  }
  return out;
}

// compile an attribute / text value that may contain {{ }}
function compileInterpolated(raw, scope) {
  const whole = raw.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
  if (whole) return { dynamic: true, whole: true, code: compileExpr(whole[1], scope) };
  if (raw.includes("{{")) {
    const parts = raw.split(/\{\{([\s\S]+?)\}\}/g);
    const code = "`" + parts.map((s, i) => (i & 1 ? "${" + compileExpr(s, scope) + " ?? \"\"}" : s.replace(/[`\\$]/g, "\\$&"))).join("") + "`";
    return { dynamic: true, whole: false, code };
  }
  return { dynamic: false, value: raw };
}

function cssToObjLiteral(css) {
  const entries = [];
  for (const decl of css.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    if (!prop) continue;
    const key = prop.startsWith("--") ? prop : kebabToCamel(prop);
    entries.push(`${JSON.stringify(key)}: ${JSON.stringify(decl.slice(i + 1).trim())}`);
  }
  return `{ ${entries.join(", ")} }`;
}

// Hooks for the small-screen fixes in src/app/globals.css. These only add a data attribute;
// the design's own markup and inline styles are untouched.
const STYLE_HOOKS = {
  "display: flex; align-items: center; gap: 22px; font-family: var(--font-display); font-size: 13px; letter-spacing: 0.04em": "util-actions",
  "display: flex; align-items: center; gap: 10px": "gap10",
  "position: relative; max-width: 1200px; margin: 0 auto; padding: 16px clamp(20px, 5vw, 40px); display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: nowrap": "header-row",
};

const STYLE_PREFIX_HOOKS = [["pointer-events: auto; width: min(360px, calc(100vw - 40px))", "chat-panel"]];

// pseudo-class rules (style-hover="..." etc.)
const pseudoRules = new Map();
function pseudoClass(pseudo, css) {
  const k = pseudo + "|" + css;
  if (pseudoRules.has(k)) return pseudoRules.get(k).cls;
  const cls = "scp" + pseudoRules.size.toString(36);
  const isEl = pseudo === "before" || pseudo === "after";
  const body = isEl ? css : css.split(";").map((d) => d.trim()).filter(Boolean).map((d) => d + " !important").join("; ");
  let rule = `.${cls}${isEl ? "::" : ":"}${pseudo} { ${body} }`;
  // Touch devices fire :hover on tap, so hover effects only apply where a real pointer can hover.
  if (pseudo === "hover") rule = `@media (hover: hover) and (pointer: fine) { ${rule} }`;
  pseudoRules.set(k, { cls, rule });
  return cls;
}

// ---------- emitter ----------
const dcImports = new Map();

function attrKey(rawName, kind) {
  let name = rawName;
  let camel = false;
  if (name.startsWith(CAMEL)) { name = kebabToCamel(name.slice(CAMEL.length)); camel = true; }
  if (kind === "dom") {
    if (ATTR_RENAME[name]) return ATTR_RENAME[name];
    if (name.startsWith("on") && name.length > 2) return EVENT_MAP[name] || "on" + name[2].toUpperCase() + name.slice(3);
    if (!camel && name.includes("-") && !name.startsWith("data-") && !name.startsWith("aria-")) return kebabToCamel(name);
    return name;
  }
  // components: kebab -> camel, except aria-/data- on x-import
  if (name.includes("-") && !(name.startsWith("aria-") || name.startsWith("data-"))) return kebabToCamel(name);
  return name;
}

function emitAttrs(el, scope, kind, extraClass) {
  const out = [];
  const classes = [];
  let hasOnChange = false, hasValue = false, hasChecked = false, hasInput = false, hasReadOnly = false;
  const staged = [];
  for (const a of el.attrs) {
    if (a.name === "data-dc-tpl") continue;
    if (kind === "dom" || kind === "dc" || kind === "x" || kind === "slot") {
      if (a.name.startsWith("style-")) { classes.push(JSON.stringify(pseudoClass(a.name.slice(6), a.value))); continue; }
    }
    if (a.name === "hint-size" || a.name === "hint-placeholder-count" || a.name === "hint-placeholder-val") continue;
    if (kind === "x" && ["component-from-global-scope", "component", "from"].includes(a.name)) continue;
    if (kind === "dc" && (a.name === "name" || a.name === "component" || a.name === "style")) continue;
    if (kind === "x" && a.name === "style") continue; // host positioning only; none used
    staged.push(a);
  }
  for (const a of staged) {
    const key = attrKey(a.name, kind);
    if (key === "onChange") hasOnChange = true;
    if (key === "onInput") hasInput = true;
    if (key === "value") hasValue = true;
    if (key === "checked") hasChecked = true;
    if (key === "readOnly") hasReadOnly = true;
  }
  for (const a of staged) {
    let key = attrKey(a.name, kind);
    const v = compileInterpolated(a.value, scope);
    if (key === "onInput" && kind === "dom" && !hasOnChange) key = "onChange"; // controlled inputs
    if (key === "dcProps") { out.push(`{...(${v.dynamic ? v.code : "{}"})}`); continue; }
    if (key === "style") {
      if (!v.dynamic) {
        out.push(`style={${cssToObjLiteral(v.value)}}`);
        const norm = v.value.trim().replace(/\s+/g, " ");
        const hook = STYLE_HOOKS[norm] || (STYLE_PREFIX_HOOKS.find(([p]) => norm.startsWith(p)) || [])[1];
        if (hook) out.push(`data-csi="${hook}"`);
      }
      else out.push(`style={css(${v.code})}`);
      continue;
    }
    if (key === "className" && classes.length) {
      out.push(v.dynamic ? `className={[${v.code}, ${classes.join(", ")}].filter(Boolean).join(" ")}` : `className={${JSON.stringify([v.value].concat([]).join(" "))} + " " + ${classes.map((c) => c).join(' + " " + ')}}`);
      classes.length = 0;
      continue;
    }
    if (!v.dynamic) {
      if (a.value === "" && BOOLEAN_ATTRS.has(key)) out.push(key);
      else out.push(`${key}={${JSON.stringify(v.value)}}`);
    } else {
      let code = v.code;
      if (key === "value" && kind === "dom") code = `(${code}) ?? ""`;
      if (key === "checked" && kind === "dom") code = `!!(${code})`;
      const k = /^[A-Za-z_$][\w$-]*$/.test(key) ? key : JSON.stringify(key);
      out.push(`${k}={${code}}`);
    }
  }
  if (classes.length) out.push(`className={${classes.join(' + " " + ')}}`);
  if (kind === "dom" && hasValue && !hasOnChange && !hasInput && !hasReadOnly) out.push("readOnly");
  if (kind === "dom" && hasChecked && !hasOnChange && !hasInput) out.push("onChange={() => {}}");
  return out.join(" ");
}

function emitChildren(nodes, scope, parentTag) {
  const parts = [];
  for (const n of nodes) {
    const code = emit(n, scope, parentTag);
    if (code) parts.push(code);
  }
  return parts.join("\n");
}

function emit(node, scope, parentTag) {
  if (node.nodeName === "#comment") return "";
  if (node.nodeName === "#text") {
    const txt = node.value;
    if (!txt.includes("{{")) {
      if (!txt.trim()) {
        if (!txt.includes(" ") || TABLEISH.has(parentTag)) return "";
        return `{" "}`;
      }
      return `{${JSON.stringify(txt)}}`;
    }
    const parts = txt.split(/\{\{([\s\S]+?)\}\}/g);
    return parts
      .map((p, i) => (i & 1 ? `{${compileExpr(p, scope)}}` : p ? `{${JSON.stringify(p)}}` : ""))
      .join("");
  }
  const tag = node.nodeName;
  if (tag === "sc-if") {
    const val = (node.attrs.find((a) => a.name === "value") || { value: "" }).value;
    const v = compileInterpolated(val, scope);
    const cond = v.dynamic ? v.code : JSON.stringify(v.value);
    return `{(${cond}) ? (<>\n${emitChildren(node.childNodes, scope, parentTag)}\n</>) : null}`;
  }
  if (tag === "sc-for") {
    const list = compileInterpolated((node.attrs.find((a) => a.name === "list") || { value: "" }).value, scope);
    const as = (node.attrs.find((a) => a.name === "as") || { value: "item" }).value;
    const inner = new Set(scope); inner.add(as);
    return `{asArray(${list.dynamic ? list.code : "[]"}).map((${as}, $index) => (<React.Fragment key={$index}>\n${emitChildren(node.childNodes, inner, parentTag)}\n</React.Fragment>))}`;
  }
  if (tag === "x-import") {
    const g = (node.attrs.find((a) => a.name === "component-from-global-scope") || { value: "" }).value;
    const compName = g.split(".").pop();
    let attrs = emitAttrs(node, scope, "x");
    // Accessibility: a design-system Input with no visible label uses its placeholder as its name.
    if (compName === "Input") {
      const has = (n) => node.attrs.some((a) => a.name === n);
      const ph = node.attrs.find((a) => a.name === "placeholder");
      if (!has("label") && !has("aria-label") && ph) {
        const v = compileInterpolated(ph.value, scope);
        attrs += ` aria-label={${v.dynamic ? v.code : JSON.stringify(v.value)}}`;
      }
    }
    const kids = emitChildren(node.childNodes, scope, tag);
    return kids.trim() ? `<DS.${compName} ${attrs}>\n${kids}\n</DS.${compName}>` : `<DS.${compName} ${attrs} />`;
  }
  if (tag === "dc-import") {
    const nm = (node.attrs.find((a) => a.name === "name" || a.name === "component") || { value: "" }).value;
    const id = nm.replace(/[^A-Za-z0-9]+(.)?/g, (_, c) => (c || "").toUpperCase()).replace(/^./, (c) => c.toUpperCase());
    dcImports.set(id, { nm, id });
    const attrs = emitAttrs(node, scope, "dc");
    return `<Dc${id} ${attrs} />`;
  }
  if (tag === "image-slot") {
    const attrs = emitAttrs(node, scope, "slot");
    return `<ImageSlot ${attrs} />`;
  }
  if (tag === "branch-map") {
    const attrs = emitAttrs(node, scope, "slot");
    return `<BranchMap ${attrs} />`;
  }
  if (tag === "video-slot") {
    const attrs = emitAttrs(node, scope, "slot");
    return `<VideoSlot ${attrs} />`;
  }
  if (tag === "style") {
    const css = node.childNodes.map((c) => c.value || "").join("");
    return `<style dangerouslySetInnerHTML={{ __html: ${JSON.stringify(css)} }} />`;
  }
  if (tag === "script") return "";
  const real = RAW_UNWRAP[tag] || tag;
  let attrs = emitAttrs(node, scope, "dom");
  // Accessibility: a text field with no visible label gets its placeholder as an accessible name.
  if (["input", "textarea", "select"].includes(real)) {
    const has = (n) => node.attrs.some((a) => a.name === n);
    const type = (node.attrs.find((a) => a.name === "type") || { value: "text" }).value;
    const labelled = node.parentNode && node.parentNode.nodeName === "label";
    const ph = node.attrs.find((a) => a.name === "placeholder");
    if (!has("aria-label") && !has("id") && !labelled && ph && !["checkbox", "radio", "hidden"].includes(type)) {
      const v = compileInterpolated(ph.value, scope);
      attrs += ` aria-label={${v.dynamic ? v.code : JSON.stringify(v.value)}}`;
    }
  }
  const kids = VOID.has(real) ? "" : emitChildren(node.childNodes, scope, real);
  if (VOID.has(real) || !kids.trim()) return `<${real}${attrs ? " " + attrs : ""} />`;
  return `<${real}${attrs ? " " + attrs : ""}>\n${kids}\n</${real}>`;
}

const body = emitChildren(tree.childNodes, new Set(), "");

// ---------- write module ----------
const dcImportLines = [...dcImports.values()].map(({ nm, id }) => `import { ${id} as Dc${id} } from "./${id}.generated";`);
const defaults = Object.fromEntries(Object.entries(propsSchema).map(([k, v]) => [k, v.default]));
const dsBlock = pseudoRules.size ? [...pseudoRules.values()].map((r) => r.rule).join("\n") : "";

const out = `// @ts-nocheck
// GENERATED by scripts/convert-dc.mjs from design-source/${INPUT.split(/[\\/]/).pop()}. Do not edit by hand:
// edit the source in Claude Design (or the design-source copy) and re-run the converter.
"use client";
import React from "react";
import * as DS from "@/ds";
import { ImageSlot } from "./ImageSlot";
import { VideoSlot } from "./VideoSlot";
import { BranchMap } from "./BranchMap";
import { DCLogic, asArray, css, useDcLogic } from "./runtime";
${dcImportLines.join("\n")}

${logic}

// Note: the design runtime passes only the props given in the template (no editor schema defaults).
export function ${NAME}(props) {
  const { __hooks, ...rest } = props;
  const vm = useDcLogic(Component, rest, __hooks);
  return (
    <>
${body}
    </>
  );
}
`;
fs.writeFileSync(OUTPUT, out);
fs.writeFileSync(OUTPUT.replace(/\.tsx$/, ".css"), [...helmetStyles, dsBlock].join("\n"));
console.log(`wrote ${OUTPUT} (${out.length} chars, ${pseudoRules.size} pseudo rules, ${dcImports.size} dc-imports)`);
