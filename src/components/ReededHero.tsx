import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const ReededHero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Fitness background"
        className="w-full h-full object-cover opacity-40 img-grayscale"
        loading="eager"
      />
    </div>

    {/* Reeded glass overlay */}
    <div className="reeded-glass absolute inset-0" />

    {/* Gradient fade to background */}
    <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/30 via-transparent to-background" />

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
        className="mono-label mb-8"
      >
        Online Fitness Coaching
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black uppercase leading-[0.9] tracking-tight text-gradient mb-8"
      >
        Sculpt
        <br />
        Your
        <br />
        Reality
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 100, damping: 20 }}
        className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto mb-12"
      >
        Science-based coaching without the guesswork.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 100, damping: 20 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a href="#programs" className="btn-invert">
          View Plans
        </a>
        <a
          href="#results"
          className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-[hsl(var(--border))]"
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
      className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
    >
      <span className="mono-label">Scroll Down</span>
      <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
    </motion.div>
  </section>
);

export default ReededHero;
