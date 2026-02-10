import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Fitness background"
        className="w-full h-full object-cover opacity-40"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      <div className="absolute inset-0 noise-bg" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
      >
        Online Fitness Coaching
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase leading-[0.95] tracking-tight text-gradient mb-6"
      >
        Build Your
        <br />
        Dream Physique
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
      >
        Science-based coaching without the guesswork.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#programs"
          className="glass glow-border px-8 py-3.5 rounded-full text-sm uppercase tracking-widest font-semibold text-foreground hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          View Plans
        </a>
        <a
          href="#results"
          className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground"
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
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-5 h-8 rounded-full border border-muted-foreground/40 flex items-start justify-center p-1">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-2 rounded-full bg-muted-foreground/60"
        />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
