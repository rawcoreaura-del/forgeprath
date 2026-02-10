import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
}

const Marquee = ({ children, speed = 30 }: MarqueeProps) => {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: paused ? undefined : ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={paused ? {} : undefined}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
