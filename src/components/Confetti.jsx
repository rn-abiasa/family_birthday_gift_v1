import { useMemo } from "react";

const COLORS = ["#1e3a8a", "#3b82f6", "#93c5fd", "#f9fafb", "#fbbf24"];

/* ── a fixed burst, generated once per mount ────────────────
   Each piece gets its own delay, duration, drift and spin so
   the fall never looks like one shape repeated — and because
   it's built once with useMemo, a re-render never reshuffles
   a piece mid-air. Pure CSS keyframes do the falling; this
   only decides where each piece starts and how it's dressed. */
export default function Confetti({ count = 70 }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2.4 + Math.random() * 1.8,
        drift: (Math.random() - 0.5) * 160,
        spin: (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 360),
        color: COLORS[i % COLORS.length],
        rounded: i % 3 === 0,
      })),
    [count],
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            borderRadius: p.rounded ? "9999px" : "2px",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ["--drift"]: `${p.drift}px`,
            ["--spin"]: `${p.spin}deg`,
          }}
        />
      ))}
    </div>
  );
}
