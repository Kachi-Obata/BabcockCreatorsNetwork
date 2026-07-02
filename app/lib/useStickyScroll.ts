import { useRef, useState, useEffect } from "react";

// Renders: <trigger(h=0) /> <section sticky /> <spacer(h=maxScroll) />
// The trigger marks where sticking starts; scroll progress = -trigger.top.
// The spacer (same z-context as surrounding content) provides scroll budget
// so the next section enters the viewport exactly when content is fully revealed,
// letting the sticky section stay put while the next section slides over it.
export function useStickyScroll() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const measure = () => {
      setMaxScroll(Math.max(0, content.scrollHeight - window.innerHeight));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(content);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;
      const scrolled = Math.max(0, -trigger.getBoundingClientRect().top);
      setTranslateY(-Math.min(scrolled, maxScroll));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [maxScroll]);

  return { triggerRef, contentRef, spacerHeight: maxScroll, translateY };
}
