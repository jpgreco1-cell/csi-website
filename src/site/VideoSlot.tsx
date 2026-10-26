"use client";
// Plays a video from /public/videos when its file exists (see scripts/scan-videos.mjs).
// "background" mode is a muted looping hero layer; "inline" mode is a normal player with controls.
import React, { useState, useSyncExternalStore } from "react";
import { VIDEOS } from "./videos.generated";

const reduceQuery = "(prefers-reduced-motion: reduce)";
function subscribe(cb: () => void) {
  const m = window.matchMedia(reduceQuery);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
}
const getReduce = () => window.matchMedia(reduceQuery).matches;
const getReduceServer = () => false;

export function VideoSlot({
  id,
  mode = "inline",
  title,
  style,
}: {
  id: string;
  mode?: "inline" | "background";
  title?: string;
  style?: React.CSSProperties;
}) {
  const v = VIDEOS[id];
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const reduce = useSyncExternalStore(subscribe, getReduce, getReduceServer);
  if (!v) return null;

  // A YouTube video: show a poster with a play button, and load the player only when it is pressed.
  if (v.youtube) {
    const label = v.title ?? title ?? "video";
    return (
      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          borderRadius: 12,
          overflow: "hidden",
          background: "var(--csi-navy)",
          boxShadow: "0 18px 40px rgba(30,58,95,0.18)",
          ...style,
        }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.youtube}?autoplay=1&rel=0&modestbranding=1`}
            title={label}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${label}`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              padding: 0,
              border: 0,
              cursor: "pointer",
              background: v.poster ? `center / cover no-repeat url(${v.poster})` : "var(--csi-navy)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 72,
                height: 72,
                marginLeft: -36,
                marginTop: -36,
                borderRadius: "50%",
                background: "rgba(30,58,95,0.88)",
                border: "2px solid rgba(255,255,255,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff" aria-hidden="true" style={{ marginLeft: 3 }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    );
  }

  if (mode === "background") {
    // People who ask for reduced motion keep the still photo underneath.
    if (reduce || !v.src) return null;
    return (
      <video
        src={v.src}
        poster={v.poster}
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setReady(true)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: ready ? 1 : 0,
          transition: "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1)",
          ...style,
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "16 / 9",
        borderRadius: 12,
        overflow: "hidden",
        background: "var(--csi-navy)",
        boxShadow: "0 18px 40px rgba(30,58,95,0.18)",
        ...style,
      }}
    >
      <video
        src={v.src}
        poster={v.poster}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
      >
        {v.captions && <track kind="captions" src={v.captions} srcLang="en" label="English" default />}
      </video>
    </div>
  );
}
