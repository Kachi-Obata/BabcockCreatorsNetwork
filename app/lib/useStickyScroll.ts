import { useRef, useState, useEffect } from "react";

export function useStickyScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState("200vh");
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const measure = () => {
      setWrapperHeight(`${content.scrollHeight + window.innerHeight}px`);
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
      const wrapper = wrapperRef.current;
      const content = contentRef.current;
      if (!wrapper || !content) return;

      const scrolled = -wrapper.getBoundingClientRect().top;
      if (scrolled <= 0) {
        setTranslateY(0);
        return;
      }
      const maxScroll = Math.max(0, content.scrollHeight - window.innerHeight);
      setTranslateY(-Math.min(scrolled, maxScroll));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { wrapperRef, contentRef, wrapperHeight, translateY };
}
