import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import trainerImg from "@/assets/trainer-cutout.png";

const ReededHero = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Text moves opposite to mouse (depth effect)
  const textX = useTransform(mouseX, [0, 1], [15, -15]);
  const textY = useTransform(mouseY, [0, 1], [10, -10]);

  // Trainer moves with mouse (foreground)
  const trainerX = useTransform(mouseX, [0, 1], [-6, 6]);
  const trainerY = useTransform(mouseY, [0, 1], [-4, 4]);

  // Spotlight follows mouse subtly
  const spotX = useTransform(mouseX, [0, 1], ["40%", "60%"]);
  const spotY = useTransform(mouseY, [0, 1], ["25%", "45%"]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "hsl(0 0% 2%)" }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-30 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Spotlight glow behind trainer */}
      <motion.div
        className="absolute z-[1] pointer-events-none"
        style={{
          left: spotX,
          top: spotY,
          x: "-50%",
          y: "-50%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, hsl(0 0% 20% / 0.3) 0%, transparent 65%)",
        }}
      />

      {/* ——— BACKGROUND TEXT (z-0) ——— */}
      <motion.div
        className="absolute left-6 md:left-12 lg:left-20 top-1/2 z-0 pointer-events-none select-none"
        style={{ x: textX, y: textY, translateY: "-50%" }}
      >
        <h1
          className="font-heading font-black uppercase leading-[0.85] tracking-tighter"
          style={{
            fontSize: "clamp(8rem, 18vw, 14rem)",
            color: "hsl(0 0% 100% / 0.9)",
          }}
        >
          DEFINE
          <br />
          REALITY
        </h1>
      </motion.div>

      {/* ——— TRAINER IMAGE (z-10, overlaps text) ——— */}
      <motion.div
        className="absolute right-[12%] md:right-[18%] bottom-0 z-10 pointer-events-none"
        style={{ x: trainerX, y: trainerY }}
      >
        <img
          src={trainerImg}
          alt="Fitness trainer"
          className="h-[85vh] w-auto object-contain object-bottom"
          style={{ filter: "grayscale(100%) contrast(1.25)" }}
          loading="eager"
        />
      </motion.div>

      {/* ——— SUBTEXT & CTA (z-20) ——— */}
      <div className="absolute bottom-16 md:bottom-20 left-6 md:left-12 lg:left-20 z-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
          className="mono-label mb-4"
        >
          Online Fitness Coaching
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          className="text-lg md:text-xl max-w-sm mb-8"
          style={{ color: "hsl(0 0% 100% / 0.55)" }}
        >
          Science-based coaching without the guesswork.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="flex items-center gap-4"
        >
          <a href="#programs" className="btn-invert">
            View Plans
          </a>
          <a
            href="#results"
            className="text-sm uppercase tracking-widest underline underline-offset-4"
            style={{ color: "hsl(0 0% 100% / 0.4)", textDecorationColor: "hsl(0 0% 100% / 0.15)" }}
          >
            Client Results
          </a>
        </motion.div>
      </div>

      {/* ——— REEDED GLASS SIDEBAR (z-20) ——— */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 80, damping: 22 }}
        className="absolute right-0 top-0 bottom-0 w-[15%] min-w-[80px] z-20 reeded-sidebar"
      >
        <div className="h-full flex flex-col items-center justify-center gap-10">
          {[
            { label: "Home", href: "#home" },
            { label: "Plans", href: "#programs" },
            { label: "Results", href: "#results" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mono-label text-[0.6rem] tracking-[0.25em] transition-colors duration-300 hover:text-white"
              style={{
                color: "hsl(0 0% 100% / 0.4)",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="mono-label">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[hsl(0_0%_100%/0.3)] to-transparent" />
      </motion.div>
    </section>
  );
};

export default ReededHero;
