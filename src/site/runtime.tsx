"use client";
/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/refs */
// Minimal host for the logic classes exported from Claude Design ("DCLogic").
// Mirrors the design runtime: this.state / this.props / setState / renderVals().
import React from "react";
import { VIDEO_FLAGS } from "./videos.generated";

type Hooks = {
  /** Called once when the instance is created (override setState/go to route with Next). */
  setup?: (inst: DCLogic) => void;
  /** Called on every render before renderVals() (sync URL-derived state into the instance). */
  beforeRender?: (inst: DCLogic) => void;
};

export class DCLogic {
  props: Record<string, any>;
  state: Record<string, any> = {};
  __update: ((cb?: () => void) => void) | null = null;
  constructor(props?: Record<string, any>) {
    this.props = props || {};
  }
  setState(update: any, cb?: () => void) {
    const u = typeof update === "function" ? update(this.state) : update;
    if (u) this.state = { ...this.state, ...u };
    this.__update?.(cb);
  }
  forceUpdate() {
    this.__update?.();
  }
  componentDidMount() {}
  componentDidUpdate(prev?: any) {
    void prev;
  }
  componentWillUnmount() {}
  renderVals(): Record<string, any> {
    return {};
  }
}

// ---- Lead capture ----
// The design only flips "sent" flags in state when a form is submitted. We watch for those
// transitions and POST the form's data to /api/lead (which is where HubSpot gets wired in).
const SENT_FLAGS: [string, string, string[]][] = [
  ["sent", "callback-form", ["name", "phone", "email", "message", "picked"]],
  ["refSent", "referral", ["refName", "refPhone", "refEmail", "refNote", "refConsent"]],
  ["orSent", "client-organizer", ["orName", "orEmail", "orOptIn"]],
  ["nlSent", "newsletter", ["nlEmail"]],
  ["gdSent", "estate-guide", ["gdName", "gdEmail", "gdOptIn"]],
];

function postLead(source: string, data: Record<string, unknown>) {
  const utm: Record<string, string> = {};
  new URLSearchParams(window.location.search).forEach((v, k) => {
    if (k.startsWith("utm_")) utm[k] = v;
  });
  fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source, ...data, ...utm, page: window.location.pathname, ts: new Date().toISOString() }),
  }).catch(() => {});
}

function pick(state: Record<string, any>, keys: string[]) {
  return Object.fromEntries(keys.map((k) => [k, state[k]]));
}

function attachLeadCapture(inst: DCLogic & { __vals?: Record<string, any>; __assessPosted?: boolean }) {
  const orig = inst.setState.bind(inst);
  inst.setState = (update: any, cb?: () => void) => {
    const prev = { ...inst.state };
    orig(update, cb);
    const now = inst.state;
    for (const [flag, source, keys] of SENT_FLAGS) {
      if (!prev[flag] && now[flag]) postLead(source, pick(now, keys));
    }
    // Health Check: the lead form is complete and the user moves on to the results.
    const leadOk = now.aFirst?.trim() && now.aLast?.trim() && now.aEmail?.trim() && now.aPhone?.trim() && now.aConsent;
    if (leadOk && !inst.__assessPosted && now.aStep > prev.aStep) {
      inst.__assessPosted = true;
      postLead("health-check", {
        ...pick(now, ["aFirst", "aLast", "aEmail", "aPhone", "aConsent", "aAnswers"]),
        score: inst.__vals?.aScore,
      });
    }
    // Book Intro Call: the final "Confirm my intro call" step was submitted.
    if (inst.__vals?.nextLabel === "Confirm my intro call" && now.startStep > prev.startStep) {
      postLead("book-intro-call", pick(now, ["answers", "leadName", "leadPhone", "leadEmail", "branch", "day", "slot"]));
    }
  };
}

export function useDcLogic(Logic: new (props: any) => DCLogic, props: Record<string, any>, hooks?: Hooks) {
  const ref = React.useRef<DCLogic | null>(null);
  const [, tick] = React.useReducer((x: number) => x + 1, 0);
  if (!ref.current) {
    const inst = new Logic(props);
    inst.__update = (cb) => {
      tick();
      if (cb) setTimeout(cb, 0);
    };
    attachLeadCapture(inst);
    hooks?.setup?.(inst);
    ref.current = inst;
  }
  const inst = ref.current;
  inst.props = props;
  hooks?.beforeRender?.(inst);
  React.useEffect(() => {
    inst.componentDidMount();
    return () => inst.componentWillUnmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const vals = { videos: VIDEO_FLAGS, ...props, ...(inst.renderVals() || {}) } as Record<string, any>;
  (inst as any).__vals = vals;
  return vals;
}

export const asArray = (v: any): any[] => (Array.isArray(v) ? v : []);

const kebabToCamel = (s: string) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
export function css(str: any): React.CSSProperties {
  if (str && typeof str === "object") return str;
  const o: Record<string, string> = {};
  for (const decl of String(str ?? "").split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    if (!prop) continue;
    o[prop.startsWith("--") ? prop : kebabToCamel(prop)] = decl.slice(i + 1).trim();
  }
  return o as React.CSSProperties;
}
