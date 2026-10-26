"use client";
// Shows the live site at a fixed desktop, tablet or phone width so each version can be reviewed side by side.
// The site itself is not touched: it loads in an iframe, so its own responsive layout sees the frame width.
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Device = "desktop" | "tablet" | "mobile";

const DEVICES: Record<Device, { label: string; w: number; h: number | null; bezel: number; radius: number }> = {
  desktop: { label: "Desktop", w: 1440, h: null, bezel: 0, radius: 10 },
  tablet: { label: "Tablet", w: 768, h: 1024, bezel: 14, radius: 34 },
  mobile: { label: "Mobile", w: 375, h: 812, bezel: 12, radius: 44 },
};

export function DeviceFrame({ device }: { device: Device }) {
  const spec = DEVICES[device];
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [path, setPath] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [stageH, setStageH] = useState(700);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("p");
    setPath(p && p.startsWith("/") && !p.startsWith("//") ? p : "/");
  }, []);

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => {
      const pad = 32;
      const availW = el.clientWidth - pad * 2;
      const availH = el.clientHeight - pad * 2;
      const outerW = spec.w + spec.bezel * 2;
      const outerH = spec.h ? spec.h + spec.bezel * 2 : availH;
      const s = Math.min(1, availW / outerW, spec.h ? availH / outerH : 1);
      setScale(s > 0 ? s : 1);
      setStageH(availH);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [spec]);

  const onLoad = () => {
    try {
      const loc = frameRef.current?.contentWindow?.location;
      if (!loc) return;
      const next = loc.pathname + loc.search;
      const url = new URL(window.location.href);
      url.searchParams.set("p", next);
      window.history.replaceState(null, "", url);
      setLinkPath(next);
    } catch {
      /* cross-origin: leave the address as is */
    }
  };

  const [linkPath, setLinkPath] = useState("/");
  useEffect(() => {
    if (path) setLinkPath(path);
  }, [path]);

  const innerH = spec.h ?? Math.round(stageH / scale);
  const outerW = spec.w + spec.bezel * 2;
  const outerH = innerH + spec.bezel * 2;

  return (
    <div className="dv-shell">
      <style>{CSS}</style>
      <header className="dv-bar">
        <span className="dv-title">CSI Group site preview</span>
        <nav className="dv-switch" aria-label="Choose a version">
          {(Object.keys(DEVICES) as Device[]).map((d) => (
            <Link
              key={d}
              href={`/${d}?p=${encodeURIComponent(linkPath)}`}
              className={d === device ? "is-on" : undefined}
              aria-current={d === device ? "page" : undefined}
            >
              {DEVICES[d].label}
              <small>{DEVICES[d].w}px</small>
            </Link>
          ))}
        </nav>
        <a className="dv-open" href={linkPath} target="_blank" rel="noreferrer">
          Open full page
        </a>
      </header>
      <div className="dv-stage" ref={stageRef}>
        <div className="dv-slot" style={{ width: outerW * scale, height: outerH * scale }}>
          <div
            className="dv-device"
            style={{
              width: outerW,
              height: outerH,
              padding: spec.bezel,
              borderRadius: spec.radius + spec.bezel,
              transform: `scale(${scale})`,
            }}
          >
            {path && (
              <iframe
                ref={frameRef}
                src={path}
                title={`CSI Group site, ${spec.label.toLowerCase()} version`}
                onLoad={onLoad}
                style={{ width: spec.w, height: innerH, borderRadius: spec.radius }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
.dv-shell{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;background:#e9eef4;font-family:Montserrat,system-ui,sans-serif;color:#1E3A5F}
.dv-bar{flex:none;display:flex;align-items:center;gap:16px;padding:10px 20px;background:#1E3A5F;color:#fff}
.dv-title{font-weight:700;font-size:15px;letter-spacing:.01em;margin-right:auto}
.dv-switch{display:flex;gap:4px;padding:4px;border-radius:999px;background:rgba(255,255,255,.12)}
.dv-switch a{display:flex;align-items:baseline;gap:6px;padding:8px 16px;border-radius:999px;font-size:14px;font-weight:600;color:#e3f1fb;text-decoration:none;min-height:36px;align-items:center}
.dv-switch a small{font-size:13px;font-weight:500;opacity:.75}
.dv-switch a.is-on{background:#fff;color:#1E3A5F}
.dv-switch a:hover:not(.is-on){background:rgba(255,255,255,.14)}
.dv-open{font-size:14px;font-weight:600;color:#e3f1fb;text-decoration:underline;text-underline-offset:3px;padding:8px 4px}
.dv-stage{flex:1;min-height:0;display:flex;align-items:flex-start;justify-content:center;padding:32px;overflow:auto}
.dv-slot{flex:none}
.dv-device{box-sizing:border-box;transform-origin:top left;background:#1E3A5F;box-shadow:0 0 0 1px rgba(30,58,95,.2)}
.dv-device iframe{display:block;border:0;background:#fff}
@media (max-width:640px){
  .dv-bar{flex-wrap:wrap;gap:8px;padding:10px 12px}
  .dv-title{flex:1 0 100%}
  .dv-switch a small{display:none}
  .dv-stage{padding:12px}
}
`;
