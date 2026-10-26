"use client";
// Stand-in for the design tool's <image-slot>. Photos live in /public/photos.
import React from "react";

// Slots the designer filled by dragging a photo in (saved in .image-slots.state.json).
const OVERRIDES: Record<string, string> = {
  "home-hero": "/photos/home-hero.webp",
};

// Above-the-fold images load immediately; everything else loads lazily.
const EAGER = new Set(["home-hero"]);

export function ImageSlot({
  id,
  src,
  shape = "rounded",
  radius = 12,
  fit = "cover",
  style,
  placeholder,
  mask,
}: {
  id?: string;
  src?: string;
  shape?: "rect" | "rounded" | "circle" | "pill";
  radius?: number | string;
  fit?: "cover" | "contain";
  style?: React.CSSProperties;
  placeholder?: string;
  mask?: string;
}) {
  const url = (id && OVERRIDES[id]) || (src ? src.replace(/^(\.\/)?assets\/photos\//, "/photos/") : "");
  const eager = !!id && EAGER.has(id);
  const borderRadius =
    shape === "circle" ? "50%" : shape === "pill" ? 999 : shape === "rect" ? 0 : radius;
  return (
    <div
      data-slot={id}
      style={{ position: "relative", overflow: "hidden", display: "block", borderRadius, clipPath: mask, ...style }}
    >
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={url}
          alt=""
          loading={eager ? "eager" : "lazy"}
          decoding={eager ? "sync" : "async"}
          fetchPriority={eager ? "high" : "auto"}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: fit }}
        />
      ) : (
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
            textAlign: "center",
            background: "#e7ecf1",
            color: "#6b7280",
            fontFamily: "var(--font-display)",
            fontSize: 13,
          }}
        >
          {placeholder}
        </span>
      )}
    </div>
  );
}
