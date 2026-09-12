import { useEffect, useRef, useState } from "react";

const stillness = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* ── types out `text`, one character at a time ─────────────
   Reduced motion (or a "skip" from the caller) shows the
   whole letter at once — the reveal is a decoration, not the
   message, and it should never be the thing standing between
   someone and the words. */
export default function Typewriter({
  text,
  speed = 26,
  startDelay = 250,
  skip = false,
  onDone,
  className = "",
}) {
  const [shown, setShown] = useState(() => (stillness() ? text.length : 0));
  const [done, setDone] = useState(() => stillness());
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    if (stillness()) {
      setShown(text.length);
      setDone(true);
      doneRef.current?.();
      return;
    }

    let i = 0;
    let timer = 0;
    const tick = () => {
      i += 1;
      setShown(i);
      if (i >= text.length) {
        setDone(true);
        doneRef.current?.();
        return;
      }
      timer = window.setTimeout(tick, speed);
    };
    const kickoff = window.setTimeout(tick, startDelay);
    return () => {
      window.clearTimeout(kickoff);
      window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, startDelay]);

  useEffect(() => {
    if (!skip || done) return;
    setShown(text.length);
    setDone(true);
    doneRef.current?.();
  }, [skip, done, text]);

  return (
    <span className={className}>
      {text.slice(0, shown)}
      {!done && (
        <span className="type-cursor" aria-hidden="true">
          &nbsp;
        </span>
      )}
    </span>
  );
}
