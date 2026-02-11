import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const GlowCursor = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const x = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    if ("ontouchstart" in window) return;
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-0 glow-cursor-orb"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: 500,
        height: 500,
        borderRadius: "50%",
        filter: "blur(100px)",
      }}
    />
  );
};

export default GlowCursor;
