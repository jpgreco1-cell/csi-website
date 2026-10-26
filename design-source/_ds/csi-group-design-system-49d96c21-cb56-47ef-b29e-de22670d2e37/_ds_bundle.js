/* @ds-bundle: {"format":3,"namespace":"CSIGroupDesignSystem_49d96c","components":[{"name":"Disclosure","sourcePath":"components/brand/Disclosure.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"SectionRule","sourcePath":"components/brand/SectionRule.jsx"},{"name":"Tagline","sourcePath":"components/brand/Tagline.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checklist","sourcePath":"components/feedback/Checklist.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/brand/Disclosure.jsx":"f1e6954cefa4","components/brand/Eyebrow.jsx":"62b73544b2af","components/brand/Logo.jsx":"676d0d548a7b","components/brand/SectionRule.jsx":"2c022dba3150","components/brand/Tagline.jsx":"0adfc347de19","components/core/Badge.jsx":"066a1c3a6ced","components/core/Button.jsx":"bbd3e17ee7bf","components/core/Card.jsx":"791dceac7efd","components/feedback/Checklist.jsx":"87011325852b","components/forms/Checkbox.jsx":"28f798490f32","components/forms/Input.jsx":"b9b8917ad14b","postcard/image-slot.js":"9309434cb09c","ui_kits/website/App.jsx":"55b0db129527","ui_kits/website/CSI360Band.jsx":"1fd9342b86d0","ui_kits/website/ContactPage.jsx":"6dc32a4d389f","ui_kits/website/Footer.jsx":"d84f5a4624e5","ui_kits/website/Hero.jsx":"f414b9262463","ui_kits/website/Icon.jsx":"4dd1e19f3743","ui_kits/website/Nav.jsx":"db8b2de9c0be","ui_kits/website/ServiceLines.jsx":"7b3f7632d6d5","ui_kits/website/Testimonial.jsx":"457847d1290f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CSIGroupDesignSystem_49d96c = window.CSIGroupDesignSystem_49d96c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Disclosure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CSI Group — Disclosure
 * 6–7pt disclosure-gray legal text. Use the variant matching the piece.
 * NEVER reorder, drop, or shrink the LPL block below 6pt.
 */
const STANDARD = 'Securities offered through LPL Financial LLC, a FINRA/SIPC member broker/dealer. Advisory services offered through CSI Group Advisors, LLC, a registered investment advisor. LPL Financial LLC and CSI Group Advisors, LLC are unaffiliated separate legal entities. Contents are for information purposes and do not constitute an offer to buy or sell securities nor is it investment advice. All investments involve the risk of loss including the entire principal amount invested. Past performance is not indicative of future results. Prior to investing, please consult with a qualified professional who is familiar with your financial objectives, risk tolerance, and investment time horizon. "CSI" is a trade name and stands for Confidence, Service, Integrity. CSI Group\u00ae is a registered trademark.';
const TAX_ONLY = 'CSI Group LLP is a licensed CPA Firm by the New Jersey State Board of Accountancy & New York State Boards of Accountancy.';
function Disclosure({
  variant = 'standard',
  text,
  style = {},
  ...rest
}) {
  const body = text || (variant === 'tax-only' ? TAX_ONLY : STANDARD);
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-disclosure)',
      lineHeight: 'var(--leading-disclosure)',
      color: 'var(--text-disclosure)',
      margin: 0,
      ...style
    }
  }, rest), body);
}
Object.assign(__ds_scope, { Disclosure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Disclosure.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CSI Group — Eyebrow
 * The widely letter-spaced uppercase section label, e.g. "0 1 — FOUNDATION".
 */
function Eyebrow({
  children,
  tone = 'mid',
  style = {},
  ...rest
}) {
  const tones = {
    mid: 'var(--csi-mid-blue)',
    accent: 'var(--csi-light-blue)',
    onNavy: 'var(--csi-sky-blue)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CSI Group — Logo
 * Renders a supplied brand artwork file. Always use the real PNG (never
 * reconstruct). Keep clear space around the mark equal to the height of the "C".
 * Pass `src` resolved relative to the consuming page; the four approved files live
 * in assets/logos/.
 */
function Logo({
  src,
  variant = 'group',
  height = 48,
  withRule = false,
  alt,
  style = {},
  ...rest
}) {
  const labels = {
    group: 'CSI Group',
    'group-white': 'CSI Group',
    csi360: 'CSI360',
    'csi360-white': 'CSI360'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '10px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || labels[variant],
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  }), withRule && /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '3px solid var(--csi-light-blue)',
      width: '100%',
      margin: 0
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CSI Group — SectionRule
 * The signature thin light-blue rule used beneath logos and headlines.
 */
function SectionRule({
  width = '64px',
  tone = 'accent',
  style = {},
  ...rest
}) {
  const colors = {
    accent: 'var(--csi-light-blue)',
    hairline: 'var(--rule-hairline)'
  };
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: `3px solid ${colors[tone]}`,
      width,
      margin: 'var(--space-4) 0',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { SectionRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionRule.jsx", error: String((e && e.message) || e) }); }

// components/brand/Tagline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CSI Group — Tagline
 * Lora italic, light blue. RESERVED for taglines & brand signatures only.
 */
function Tagline({
  children,
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: '18px',
    md: '24px',
    lg: '34px'
  };
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: sizes[size],
      lineHeight: 1.25,
      color: 'var(--csi-light-blue)',
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tagline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Tagline.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CSI Group — Badge / Tag
 * Used for value phrases ("Complimentary & Commitment-Free!"), service-line
 * labels, and member-benefit callouts. Pill or square.
 */
function Badge({
  children,
  tone = 'accent',
  shape = 'pill',
  style = {},
  ...rest
}) {
  const tones = {
    navy: {
      background: 'var(--csi-navy)',
      color: 'var(--csi-white)'
    },
    accent: {
      background: 'var(--csi-light-blue-12)',
      color: 'var(--csi-mid-blue)',
      border: '1px solid var(--csi-light-blue-24)'
    },
    solid: {
      background: 'var(--csi-light-blue)',
      color: 'var(--csi-white)'
    },
    quiet: {
      background: 'var(--csi-light-gray)',
      color: 'var(--csi-navy)',
      border: '1px solid var(--rule-hairline)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '12px',
      letterSpacing: '0.04em',
      lineHeight: 1,
      padding: shape === 'pill' ? '7px 14px' : '6px 10px',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-xs)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CSI Group — Button
 * Montserrat-labeled, squared-off, document-like. Blue only.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '13px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '15px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '16px'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    letterSpacing: '0.02em',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
    lineHeight: 1.1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--csi-navy)',
      color: 'var(--csi-white)'
    },
    secondary: {
      background: 'var(--csi-mid-blue)',
      color: 'var(--csi-white)'
    },
    accent: {
      background: 'var(--csi-light-blue)',
      color: 'var(--csi-white)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--csi-navy)',
      borderColor: 'var(--csi-navy)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--csi-mid-blue)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: {
      background: 'var(--csi-navy-90)'
    },
    secondary: {
      background: 'var(--csi-navy)'
    },
    accent: {
      background: 'var(--csi-mid-blue)'
    },
    outline: {
      background: 'var(--csi-light-blue-12)'
    },
    ghost: {
      background: 'var(--csi-light-blue-12)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...(hover && !disabled ? hoverStyles[variant] : {}),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CSI Group — Card
 * White surface, modest radius, soft cool-tinted shadow.
 * Optional signature light-blue rule on the top or left edge.
 */
function Card({
  children,
  accent = 'none',
  elevation = 'md',
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const shadows = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const accents = {
    none: {},
    top: {
      borderTop: '3px solid var(--csi-light-blue)'
    },
    left: {
      borderLeft: '3px solid var(--csi-light-blue)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--rule-hairline)',
      boxShadow: shadows[elevation],
      padding,
      ...accents[accent],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Checklist.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CSI Group — Checklist
 * The brand's signature ✓ DO-list. Light-blue checkmarks, prose-length items.
 */
function Checklist({
  items = [],
  tone = 'do',
  size = 'md',
  style = {},
  ...rest
}) {
  const mark = tone === 'dont' ? '✕' : '✓';
  const markColor = tone === 'dont' ? 'var(--csi-disclosure)' : 'var(--csi-light-blue)';
  const fontSize = size === 'lg' ? '17px' : size === 'sm' ? '14px' : '15px';
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: '30px',
      marginBottom: '12px',
      fontFamily: 'var(--font-serif)',
      fontSize,
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: '1px',
      color: markColor,
      fontFamily: 'var(--font-display)',
      fontWeight: 700
    }
  }, mark), item)));
}
Object.assign(__ds_scope, { Checklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Checklist.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CSI Group — Checkbox
 * Squared box, light-blue check when selected.
 */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '20px',
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${checked ? 'var(--csi-light-blue)' : 'var(--csi-disclosure)'}`,
      background: checked ? 'var(--csi-light-blue)' : 'var(--csi-white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--csi-white)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '13px',
      lineHeight: 1
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '15px',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CSI Group — Input
 * Squared-off text field with label. Light-blue focus ring.
 */
function Input({
  label,
  id,
  type = 'text',
  hint,
  value,
  onChange,
  placeholder,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '13px',
      color: 'var(--csi-navy)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '15px',
      color: 'var(--text-body)',
      background: disabled ? 'var(--csi-light-gray)' : 'var(--csi-white)',
      border: `1px solid ${focus ? 'var(--csi-light-blue)' : 'var(--rule-hairline)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '11px 14px',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '12px',
      color: 'var(--text-disclosure)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// postcard/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "postcard/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* CSI Group website — page header band (navy) for interior pages */
function PageHeader({
  eyebrow,
  title,
  sub
}) {
  const {
    Eyebrow
  } = window.CSIGroupDesignSystem_49d96c;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--csi-navy)',
      color: 'var(--csi-white)',
      padding: '64px 48px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onNavy"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'var(--csi-white)',
      fontSize: 48,
      margin: '14px 0 0'
    }
  }, title), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '3px solid var(--csi-light-blue)',
      width: 72,
      margin: '22px 0 0'
    }
  }), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 20,
      color: 'rgba(255,255,255,0.9)',
      maxWidth: 560,
      marginTop: 20
    }
  }, sub)));
}

/* The 7-pillar CSI360 checkup grid */
function Pillars() {
  const {
    Card
  } = window.CSIGroupDesignSystem_49d96c;
  const pillars = [['receipt', 'Taxes', 'Year-round planning, not just April filing.'], ['line-chart', 'Investments', 'Strategy aligned to your goals and risk.'], ['umbrella', 'Retirement', 'Income you cannot outlive.'], ['shield', 'Insurance', 'Protection sized to your real exposures.'], ['scroll-text', 'Estate', 'Wills and legacy, properly documented.'], ['landmark', 'Business', 'Entity, payroll, and books in order.'], ['heart-handshake', 'Family', 'One plan that sees everyone you love.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--csi-light-gray)',
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 34,
      textAlign: 'center',
      marginBottom: 40
    }
  }, "The 7-Pillar Financial Checkup"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, pillars.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p[1],
    elevation: "sm",
    padding: "22px"
  }, /*#__PURE__*/React.createElement(CSIIcon, {
    name: p[0],
    size: 26,
    color: "var(--csi-light-blue)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      margin: '14px 0 6px'
    }
  }, p[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: 'var(--text-body)',
      margin: 0,
      lineHeight: 1.5
    }
  }, p[2]))))));
}
function App() {
  const [page, setPage] = React.useState('home');
  const nav = id => {
    setPage(id);
    window.scrollTo({
      top: 0
    });
  };
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)'
    }
  }, /*#__PURE__*/React.createElement(SiteNav, {
    current: page,
    onNavigate: nav
  }), page === 'home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: nav
  }), /*#__PURE__*/React.createElement(ServiceLines, {
    onNavigate: nav
  }), /*#__PURE__*/React.createElement(CSI360Band, {
    onNavigate: nav
  }), /*#__PURE__*/React.createElement(Testimonial, null)), page === 'csi360' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "CSI360\u2122 \u2014 Your Financial Life. Fully Integrated.\u2122",
    title: "One Team. One Plan. Total Clarity.",
    sub: "A holistic checkup that connects what others leave in silos."
  }), /*#__PURE__*/React.createElement(CSI360Band, {
    onNavigate: nav
  }), /*#__PURE__*/React.createElement(Pillars, null)), page === 'services' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "What We Do",
    title: "Six Disciplines, One Family",
    sub: "From taxes to retirement, every specialist coordinated under one roof."
  }), /*#__PURE__*/React.createElement(ServiceLines, {
    onNavigate: nav
  })), page === 'contact' && /*#__PURE__*/React.createElement(ContactPage, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
Object.assign(window, {
  App,
  PageHeader,
  Pillars
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CSI360Band.jsx
try { (() => {
/* CSI Group website — CSI360 feature band (navy, the sub-brand lockup) */
function CSI360Band({
  onNavigate
}) {
  const {
    Button,
    Checklist,
    Badge
  } = window.CSIGroupDesignSystem_49d96c;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--csi-navy)',
      color: 'var(--csi-white)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/csi360_logo_with_tm__white.png",
    alt: "CSI360",
    style: {
      width: 240,
      maxWidth: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Complimentary & Commitment-Free!"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--csi-white)',
      fontSize: 40,
      margin: '18px 0 6px'
    }
  }, "Your Financial Life. Fully Integrated.\u2122"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 19,
      color: 'rgba(255,255,255,0.9)',
      margin: '0 0 24px'
    }
  }, "One Team | One Plan | Total Clarity"), /*#__PURE__*/React.createElement("div", {
    style: {
      '--text-body': 'rgba(255,255,255,0.92)'
    }
  }, /*#__PURE__*/React.createElement(Checklist, {
    size: "lg",
    items: ['A one-hour review across your taxes, investments, retirement, insurance, and estate plan.', 'Already included in your CSI membership, with nothing to buy.', 'We connect what others leave in silos, then hand you one clear plan.']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNavigate('contact')
  }, "Book Your CSI360\u2122 Checkup")))));
}
Object.assign(window, {
  CSI360Band
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CSI360Band.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactPage.jsx
try { (() => {
/* CSI Group website — Contact / Schedule a Review page (interactive form) */
function ContactPage() {
  const {
    Input,
    Checkbox,
    Button,
    Eyebrow,
    Card,
    Tagline
  } = window.CSIGroupDesignSystem_49d96c;
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    csi360: true
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--csi-light-gray)',
      padding: '72px 48px 96px',
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Schedule Your Review"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      margin: '14px 0 0'
    }
  }, "Let Our Family Guide Yours"), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '3px solid var(--csi-light-blue)',
      width: 72,
      margin: '24px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--text-body)',
      lineHeight: 1.6,
      maxWidth: 420
    }
  }, "A one-hour complimentary review that looks across your taxes, investments, retirement, insurance, and estate plan. Already included in your CSI membership."), /*#__PURE__*/React.createElement(Tagline, {
    size: "md",
    style: {
      marginTop: 24
    }
  }, "Whatever life brings, you'll never face it alone.")), /*#__PURE__*/React.createElement(Card, {
    elevation: "md",
    padding: "36px"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '999px',
      background: 'var(--csi-light-blue-12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px'
    }
  }, /*#__PURE__*/React.createElement(CSIIcon, {
    name: "check",
    size: 32,
    color: "var(--csi-light-blue)",
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24
    }
  }, "Thank you, ", form.name || 'friend', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--text-body)'
    }
  }, "A member of our family will reach out within one business day to schedule your complimentary review."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => {
      setSent(false);
      setForm({
        name: '',
        email: '',
        phone: '',
        csi360: true
      });
    },
    style: {
      marginTop: 12
    }
  }, "Submit another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      margin: 0
    }
  }, "Request your complimentary review"), /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Greg & Kathy",
    value: form.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    value: form.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    placeholder: "(877) 563-0652",
    value: form.phone,
    onChange: set('phone')
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Include the complimentary CSI360\u2122 checkup",
    checked: form.csi360,
    onChange: set('csi360')
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    style: {
      marginTop: 6
    }
  }, "Request My Review"), /*#__PURE__*/React.createElement("p", {
    className: "csi-disclosure",
    style: {
      margin: 0
    }
  }, "Commitment-free. We never share your details. CSI Group LLP is a licensed CPA Firm by the New Jersey State Board of Accountancy & New York State Boards of Accountancy.")))));
}
Object.assign(window, {
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* CSI Group website — footer (navy band) */
function SiteFooter() {
  const {
    Disclosure
  } = window.CSIGroupDesignSystem_49d96c;
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  };
  const item = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: 'var(--font-serif)',
    fontSize: 15,
    color: 'rgba(255,255,255,0.88)'
  };
  const head = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--csi-sky-blue)',
    marginBottom: 4
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--csi-navy)',
      color: 'var(--csi-white)',
      padding: '64px 48px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 48,
      paddingBottom: 40,
      borderBottom: '1px solid rgba(255,255,255,0.16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/CSIGroupLogo_2025_white.png",
    alt: "CSI Group",
    style: {
      height: 40,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--csi-sky-blue)',
      margin: 0,
      maxWidth: 320
    }
  }, "From Taxes to Retirement, Let Our Family Guide Yours.\xAE")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Contact"), /*#__PURE__*/React.createElement("span", {
    style: item
  }, /*#__PURE__*/React.createElement(CSIIcon, {
    name: "phone",
    size: 16,
    color: "var(--csi-sky-blue)"
  }), "877-4-CSI360"), /*#__PURE__*/React.createElement("span", {
    style: item
  }, /*#__PURE__*/React.createElement(CSIIcon, {
    name: "mail",
    size: 16,
    color: "var(--csi-sky-blue)"
  }), "inquiry@csicpa.com"), /*#__PURE__*/React.createElement("span", {
    style: item
  }, /*#__PURE__*/React.createElement(CSIIcon, {
    name: "globe",
    size: 16,
    color: "var(--csi-sky-blue)"
  }), "csicpa.com")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Headquarters"), /*#__PURE__*/React.createElement("span", {
    style: item
  }, /*#__PURE__*/React.createElement(CSIIcon, {
    name: "map-pin",
    size: 16,
    color: "var(--csi-sky-blue)"
  }), "1599 NJ-34", /*#__PURE__*/React.createElement("br", null), "Wall Township, NJ 07727")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Visit"), /*#__PURE__*/React.createElement("span", {
    style: item
  }, "23 Offices across", /*#__PURE__*/React.createElement("br", null), "New Jersey & New York"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      maxWidth: 1040
    }
  }, /*#__PURE__*/React.createElement(Disclosure, {
    variant: "standard",
    style: {
      color: 'rgba(255,255,255,0.55)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 20,
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      color: 'rgba(255,255,255,0.45)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 CSI Group. Confidence \xB7 Service \xB7 Integrity."), /*#__PURE__*/React.createElement("span", null, "PC2026-001"))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* CSI Group website — Hero (navy band, the brand's top band) */
function Hero({
  onNavigate
}) {
  const {
    Button,
    Eyebrow
  } = window.CSIGroupDesignSystem_49d96c;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--csi-navy)',
      color: 'var(--csi-white)',
      padding: '88px 48px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onNavy"
  }, "The Family Doctor of Finance"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'var(--csi-white)',
      fontSize: 60,
      fontWeight: 900,
      lineHeight: 1.03,
      margin: '18px 0 0'
    }
  }, "Plan With", /*#__PURE__*/React.createElement("br", null), "Confidence"), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '3px solid var(--csi-light-blue)',
      width: 84,
      margin: '26px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 23,
      lineHeight: 1.35,
      color: 'rgba(255,255,255,0.92)',
      maxWidth: 460,
      margin: 0
    }
  }, "Your financial life, coordinated by one team. From taxes to retirement, let our family guide yours."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 19,
      color: 'var(--csi-sky-blue)',
      margin: '24px 0 0'
    }
  }, "Whatever life brings, you'll never face it alone."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNavigate('contact')
  }, "Schedule Your Complimentary Review"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNavigate('csi360'),
    style: {
      color: 'var(--csi-white)',
      borderColor: 'rgba(255,255,255,0.5)'
    }
  }, "Explore CSI360\u2122"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,0.06)',
      border: '1px dashed rgba(255,255,255,0.3)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      color: 'rgba(255,255,255,0.6)'
    }
  }, /*#__PURE__*/React.createElement(CSIIcon, {
    name: "image",
    size: 34,
    color: "rgba(255,255,255,0.5)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "[PHOTO: family with advisor at kitchen table]"))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
/* CSI Group website — shared Icon helper (Lucide via CDN) */
function CSIIcon({
  name,
  size = 22,
  color = 'currentColor',
  strokeWidth = 1.75,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': strokeWidth
        }
      });
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  });
}
Object.assign(window, {
  CSIIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* CSI Group website — top navigation bar */
function SiteNav({
  current,
  onNavigate
}) {
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'csi360',
    label: 'CSI360™'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 48px',
      background: 'var(--csi-white)',
      borderBottom: '1px solid var(--rule-hairline)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/CSIGroupLogo_2025.png",
    alt: "CSI Group",
    style: {
      height: 38,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: '#' + l.id,
    onClick: e => {
      e.preventDefault();
      onNavigate(l.id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: current === l.id ? 700 : 500,
      fontSize: 15,
      color: current === l.id ? 'var(--csi-navy)' : 'var(--csi-mid-blue)',
      borderBottom: current === l.id ? '2px solid var(--csi-light-blue)' : '2px solid transparent',
      paddingBottom: 4,
      transition: 'color var(--dur-base) var(--ease-standard)'
    }
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: "tel:18774274360",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--csi-navy)'
    }
  }, /*#__PURE__*/React.createElement(CSIIcon, {
    name: "phone",
    size: 16,
    color: "var(--csi-light-blue)"
  }), "877-4-CSI360")));
}
Object.assign(window, {
  SiteNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceLines.jsx
try { (() => {
/* CSI Group website — Six service lines grid */
function ServiceLines({
  onNavigate
}) {
  const {
    Card,
    Eyebrow
  } = window.CSIGroupDesignSystem_49d96c;
  const lines = [{
    icon: 'calculator',
    title: 'Tax & Accounting',
    body: 'Proactive planning and preparation for individuals and businesses.'
  }, {
    icon: 'trending-up',
    title: 'Wealth Management',
    body: 'Financial advisory that looks across your whole picture, not one account.'
  }, {
    icon: 'scale',
    title: 'Legal',
    body: 'Wills, estate planning, and business law, coordinated with your plan.'
  }, {
    icon: 'shield-check',
    title: 'Insurance',
    body: 'Protection for the people and the legacy that matter most.'
  }, {
    icon: 'briefcase',
    title: 'Business Services',
    body: 'Bookkeeping, entity formation, and payroll handled by one team.'
  }, {
    icon: 'compass',
    title: 'CSI360™',
    body: 'The 7-pillar holistic financial checkup, already included in membership.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--csi-light-gray)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      display: 'block'
    }
  }, "What We Do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      margin: '12px 0 0'
    }
  }, "One Team, Across Six Disciplines"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--text-body)',
      maxWidth: 600,
      margin: '14px auto 0'
    }
  }, "We connect what others leave in silos. The result is a single plan that sees the whole family.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, lines.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.title,
    accent: "top",
    elevation: "sm",
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--csi-light-blue-12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(CSIIcon, {
    name: l.icon,
    size: 24,
    color: "var(--csi-mid-blue)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: '0 0 8px'
    }
  }, l.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--text-body)',
      margin: 0,
      lineHeight: 1.55
    }
  }, l.body))))));
}
Object.assign(window, {
  ServiceLines
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceLines.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonial.jsx
try { (() => {
/* CSI Group website — Testimonial pull quote */
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--csi-white)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '3px solid var(--csi-light-blue)',
      width: 64,
      margin: '0 auto 32px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 30,
      lineHeight: 1.4,
      color: 'var(--csi-navy)',
      margin: 0
    }
  }, "\u201CJoining forces with CSI Group was the best decision we made for our practice. We found a great home for us and our clients within CSI.\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--csi-mid-blue)',
      margin: '28px 0 0'
    }
  }, "Greg & Kathy \u2014 Kendall Park, NJ")));
}
Object.assign(window, {
  Testimonial
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonial.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Disclosure = __ds_scope.Disclosure;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionRule = __ds_scope.SectionRule;

__ds_ns.Tagline = __ds_scope.Tagline;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checklist = __ds_scope.Checklist;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();
