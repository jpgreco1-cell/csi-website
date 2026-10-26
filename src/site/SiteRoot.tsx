"use client";
/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/refs */
// Hosts the converted design (CSIGroupWebsite) and maps its in-page navigation onto Next.js URLs.
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import { CSIGroupWebsite } from "./CSIGroupWebsite.generated";
import { pathFor, stateFor, TITLES } from "./routes";
import type { DCLogic } from "./runtime";

export function SiteRoot() {
  const pathname = usePathname();
  const router = useRouter();
  const pathRef = useRef(pathname);
  pathRef.current = pathname;

  const hooks = useMemo(
    () => ({
      setup(inst: DCLogic) {
        const orig = inst.setState.bind(inst);
        inst.setState = (update: any, cb?: () => void) => {
          const u = typeof update === "function" ? update(inst.state) : update;
          if (u && "page" in u) {
            const { page, ...rest } = u;
            orig(rest, cb);
            const slug = rest.slug ?? inst.state.slug;
            const idx = rest.articleIdx ?? inst.state.articleIdx ?? 0;
            const target = pathFor(page, slug, idx);
            if (target !== pathRef.current) router.push(target);
            return;
          }
          orig(update, cb);
        };
      },
      beforeRender(inst: DCLogic) {
        const s = stateFor(pathRef.current);
        inst.state.page = s.page;
        if (s.slug) inst.state.slug = s.slug;
        if (s.articleIdx !== undefined) inst.state.articleIdx = s.articleIdx;
      },
    }),
    [router],
  );

  // /desktop, /tablet and /mobile are preview frames that load the site in an iframe; they carry no site content of their own.
  const isPreview = /^\/(desktop|tablet|mobile)\/?$/.test(pathname);

  useEffect(() => {
    if (isPreview) return;
    document.title = TITLES[stateFor(pathname).page] ?? TITLES.home;
    window.scrollTo(0, 0);
  }, [pathname, isPreview]);

  // Landmarks: the design is built from plain divs, so tag the header, navigation and main
  // content for screen readers and the skip link. Attributes only; nothing visual changes.
  useEffect(() => {
    const tag = () => {
      const row = document.querySelector('[data-csi="header-row"]');
      const header = row?.parentElement;
      if (header && !header.getAttribute("role")) header.setAttribute("role", "banner");
      const nav = row?.children[1];
      if (nav && nav.tagName === "DIV" && nav.querySelectorAll("button").length >= 3 && !nav.getAttribute("role")) {
        nav.setAttribute("role", "navigation");
        nav.setAttribute("aria-label", "Main");
      }
      const main = document.querySelector("section[data-reveal]")?.parentElement;
      if (main && main.id !== "main") {
        main.id = "main";
        main.setAttribute("role", "main");
        main.setAttribute("tabindex", "-1");
      }
    };
    tag();
    const obs = new MutationObserver(tag);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  if (isPreview) return null;
  return <CSIGroupWebsite __hooks={hooks} />;
}
