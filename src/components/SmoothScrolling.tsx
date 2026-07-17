import { type ReactNode, useEffect, useRef, useState } from "react";
import { m, LazyMotion, domAnimation, useSpring, useScroll, useTransform } from "motion/react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScrolling({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);
  const [useNativeScroll, setUseNativeScroll] = useState(true);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    damping: 22,
    mass: 0.25,
    stiffness: 120,
  });
  const y = useTransform(smoothY, (value) => -value);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: coarse), (hover: none), (prefers-reduced-motion: reduce)",
    );

    const updateScrollMode = () => setUseNativeScroll(mediaQuery.matches);

    updateScrollMode();
    mediaQuery.addEventListener("change", updateScrollMode);

    return () => mediaQuery.removeEventListener("change", updateScrollMode);
  }, []);

  useEffect(() => {
    if (useNativeScroll || !scrollRef.current) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setPageHeight(entry.contentRect.height);
    });

    resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [useNativeScroll]);

  if (useNativeScroll) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="fixed inset-0 overflow-hidden">
        <LazyMotion features={domAnimation}>
          <m.div ref={scrollRef} style={{ y, willChange: "transform" }}>
            {children}
          </m.div>
        </LazyMotion>
      </div>

      <div style={{ height: pageHeight }} aria-hidden="true" />
    </>
  );
}