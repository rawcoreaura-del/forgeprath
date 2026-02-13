import { motion } from "framer-motion";
import trainerImg from "@/assets/trainer-hero.png";
import HeroParticles from "./HeroParticles";

const ReededHero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
    {/* Z-5: Typography in front of reeded glass */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[5]">
      <div className="flex flex-col items-center leading-none">
        <span className="font-heading font-black uppercase text-[clamp(6rem,15vw,15rem)] tracking-tight text-transparent hero-text-outline">
          DEFINE
        </span>
        <span className="font-heading font-black uppercase text-[clamp(6rem,15vw,15rem)] tracking-tight text-white">
          REALITY
        </span>
      </div>
    </div>

    {/* Z-1: Reeded glass overlay — blurs the text behind it */}
    <div className="reeded-glass absolute inset-0 z-[1]" />

    {/* Z-2: Gradient fade edges */}
    <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#030303]/40 via-transparent to-[#030303]" />
    <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent" />

    {/* Z-3: Smoke / fog layer */}
    <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[120%] h-[60%] bottom-0 left-[-10%]"
        style={{
          background: "radial-gradient(ellipse at center bottom, hsl(0 0% 100% / 0.06) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 30, -20, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[80%] h-[40%] bottom-[10%] right-[-5%]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(0 0% 100% / 0.04) 0%, transparent 70%)",
        }}
        animate={{ x: [0, -40, 20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    {/* Z-4: Floating dust particles */}
    <div className="absolute inset-0 z-[4]">
      <HeroParticles />
    </div>

    {/* Z-10: Trainer (sharp, in front of everything) */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-[10] flex items-end justify-center h-screen w-full pointer-events-none"
    >
      <img
        src={trainerImg}
        alt="Parth — Fitness Coach"
        className="h-[85vh] sm:h-[90vh] w-auto object-contain object-bottom drop-shadow-[0_0_40px_rgba(255,255,255,0.12)]"
        loading="eager"
      />
    </motion.div>

    {/* Z-15: CTA overlay */}
    <div className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 z-[15] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 100, damping: 20 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a href="#programs" className="btn-invert">
          View Plans
        </a>
        <a
          href="#results"
          className="text-sm uppercase tracking-widest text-[hsl(0_0%_100%/0.5)] hover:text-white transition-colors underline underline-offset-4 decoration-[hsl(0_0%_100%/0.2)]"
        >
          Client Results
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[15]"
    >
      <span className="mono-label">Scroll Down</span>
      <div className="w-px h-8 bg-gradient-to-b from-[hsl(0_0%_100%/0.3)] to-transparent" />
    </motion.div>
  </section>
);

export default ReededHero;
