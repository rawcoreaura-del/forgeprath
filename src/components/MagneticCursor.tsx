import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { stiffness: 300, damping: 28 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { stiffness: 400, damping: 25 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleEnter = () => scale.set(2);
    const handleLeave = () => scale.set(1);

    window.addEventListener("mousemove", move);

    const observe = () => {
      const targets = document.querySelectorAll("a, button, [data-magnetic]");
      targets.forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    observe();
    const observer = new MutationObserver(observe);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [cursorX, cursorY, scale]);

  // Don't render on touch
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x,
        y,
        scale: springScale,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div className="w-5 h-5 rounded-full border border-foreground" />
    </motion.div>
  );
};

export default MagneticCursor;
