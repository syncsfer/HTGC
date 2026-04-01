import { useState, useEffect, useRef } from "react";

export function useVis(t = 0.12) {
  const r = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = r.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setV(true);
          o.disconnect();
        }
      },
      { threshold: t }
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return [r, v];
}
