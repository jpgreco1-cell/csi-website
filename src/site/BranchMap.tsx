"use client";
// Interactive map of the branches: a pin for each location, and a small bubble with the
// address, phone number and directions when a pin is clicked.
import "leaflet/dist/leaflet.css";
import React, { useEffect, useRef } from "react";
import { BRANCH_COORDS } from "./branchCoords";

type Branch = { town: string; address: string; phone: string };

// Brand pin: navy with a light-blue center.
const PIN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="44" viewBox="0 0 34 44" aria-hidden="true"><path d="M17 1C8.2 1 1 8 1 16.7 1 28.6 17 43 17 43s16-14.4 16-26.3C33 8 25.8 1 17 1z" fill="#1E3A5F" stroke="#fff" stroke-width="2"/><circle cx="17" cy="16.5" r="6" fill="#4A9FD4"/></svg>`;

function bubble(b: Branch): HTMLElement {
  const el = document.createElement("div");
  el.className = "csi-map-bubble";
  const h = document.createElement("p");
  h.className = "csi-map-bubble-title";
  h.textContent = b.town;
  const a = document.createElement("p");
  a.className = "csi-map-bubble-text";
  a.textContent = b.address;
  const tel = document.createElement("a");
  tel.className = "csi-map-bubble-link";
  tel.href = `tel:${b.phone.replace(/\D/g, "")}`;
  tel.textContent = b.phone;
  const dir = document.createElement("a");
  dir.className = "csi-map-bubble-link";
  dir.target = "_blank";
  dir.rel = "noopener noreferrer";
  dir.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(b.address)}`;
  dir.textContent = "Get directions";
  const row = document.createElement("p");
  row.className = "csi-map-bubble-row";
  row.append(tel, dir);
  el.append(h, a, row);
  return el;
}

export function BranchMap({
  branches,
  label = "Map of CSI Group branches",
  style,
}: {
  branches?: Branch[];
  label?: string;
  style?: React.CSSProperties;
}) {
  const host = useRef<HTMLDivElement>(null);
  // The site re-renders often (on scroll, for example) and hands this component a new array each
  // time, so the map is only rebuilt when the branch data itself changes.
  const latest = useRef(branches);
  useEffect(() => {
    latest.current = branches;
  });
  const dataKey = (branches ?? []).map((b) => `${b.town}|${b.address}|${b.phone}`).join(";");

  useEffect(() => {
    const list = (latest.current ?? []).filter((b) => BRANCH_COORDS[b.town]);
    if (!host.current || list.length === 0) return;
    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !host.current) return;
      map = L.map(host.current, { scrollWheelZoom: false, zoomSnap: 0.5 });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      }).addTo(map);

      const icon = L.divIcon({
        html: PIN_SVG,
        className: "csi-map-pin",
        iconSize: [34, 44],
        iconAnchor: [17, 43],
        popupAnchor: [0, -38],
      });

      const points: [number, number][] = [];
      for (const b of list) {
        const pos = BRANCH_COORDS[b.town];
        points.push(pos);
        L.marker(pos, { icon, title: b.town, alt: `${b.town} branch` })
          .bindPopup(bubble(b), { minWidth: 210, maxWidth: 270, closeButton: true })
          .addTo(map);
      }
      map.fitBounds(points, { padding: [36, 36] });

      // Page scrolling should win until the map is clicked.
      map.on("click", () => map?.scrollWheelZoom.enable());
      map.getContainer().addEventListener("mouseleave", () => map?.scrollWheelZoom.disable());
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [dataKey]);

  return (
    <div
      ref={host}
      role="region"
      aria-label={label}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", ...style }}
    />
  );
}
