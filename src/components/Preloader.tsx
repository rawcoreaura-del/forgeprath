import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["DISCIPLINE", "POWER", "RESULTS", "TRANSFORM", "DOMINATE"];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 300);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <div className="fixed inset-0 z-[200] flex">
          {/* Left half */}
          <motion.div
            className="w-1/2 h-full bg-[hsl(0_0%_2%)] flex items-center justify-end pr-4"
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="font-heading text-[12vw] font-bold text-foreground leading-none select-none">
              {count}
            </span>
          </motion.div>

          {/* Right half */}
          <motion.div
            className="w-1/2 h-full bg-[hsl(0_0%_2%)] flex items-center pl-4"
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col gap-2">
              <span className="font-heading text-[4vw] font-bold text-foreground/20 leading-none select-none">
                %
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="mono-label text-base tracking-[0.3em]"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Center line */}
          <motion.div
            className="absolute left-1/2 top-0 w-px h-full bg-[hsl(0_0%_100%/0.08)]"
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
