import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ willChange: "transform" }}
    >
      {/* Spotlight border effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, hsl(0 0% 100% / 0.12), transparent 60%)`,
        }}
      />
      {/* Inner content with border */}
      <div className="absolute inset-px rounded-[calc(1rem-1px)] bg-[hsl(0_0%_2%)] pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
      {/* Base border */}
      <div className="absolute inset-0 rounded-2xl border border-[hsl(0_0%_100%/0.06)] pointer-events-none" />
    </motion.div>
  );
};

export default SpotlightCard;
