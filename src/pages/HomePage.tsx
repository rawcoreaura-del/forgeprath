import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import PageTransition from "@/components/PageTransition";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import { User } from "lucide-react";

const results = [
  { name: "Arjun K.", stat: "-18kg", quote: "Lost 18kg in 14 weeks. Best shape of my life." },
  { name: "Priya M.", stat: "+6kg LBM", quote: "Gained lean muscle while dropping body fat." },
  { name: "Rahul S.", stat: "1st Place", quote: "Won my first bodybuilding show." },
  { name: "Sneha T.", stat: "-12kg", quote: "Finally understand nutrition. Changed everything." },
  { name: "Vikram D.", stat: "+80kg DL", quote: "Deadlift went from 100kg to 180kg." },
  { name: "Ananya R.", stat: "Transformed", quote: "Postpartum recovery done right. Stronger than ever." },
];

const HomePage = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const spotX = useTransform(mouseX, [0, 1], ["30%", "70%"]);
  const spotY = useTransform(mouseY, [0, 1], ["20%", "60%"]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <PageTransition>
      {/* ——— HERO ——— */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax spotlight */}
        <motion.div
          className="absolute w-[800px] h-[800px] pointer-events-none"
          style={{
            left: spotX,
            top: spotY,
            x: "-50%",
            y: "-50%",
            background: "radial-gradient(circle, hsl(0 0% 100% / 0.07) 0%, transparent 70%)",
          }}
        />

        {/* Hero image with mask */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Dark gym atmosphere"
            className="w-full h-full object-cover opacity-30 img-grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mono-label mb-8"
          >
            Online Fitness Coaching
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold uppercase leading-[0.9] tracking-tight text-gradient mb-8"
          >
            Build Your
            <br />
            Dream
            <br />
            Physique
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-[hsl(0_0%_100%/0.6)] max-w-md mx-auto mb-12"
          >
            Science-based coaching without the guesswork.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/programs" className="btn-invert">
              View Plans
            </Link>
            <Link
              to="/results"
              className="text-sm uppercase tracking-widest text-[hsl(0_0%_100%/0.5)] hover:text-foreground transition-colors underline underline-offset-4 decoration-[hsl(0_0%_100%/0.2)]"
            >
              Client Results
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="mono-label">Scroll Down</span>
          <div className="w-px h-8 bg-gradient-to-b from-[hsl(0_0%_100%/0.3)] to-transparent" />
        </motion.div>
      </section>

      {/* ——— THE PROOF (Marquee) ——— */}
      <section className="py-24 md:py-32">
        <ScrollReveal>
          <div className="text-center mb-16 px-6">
            <p className="mono-label mb-4">The Proof</p>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase text-gradient">
              Real Transformations
            </h2>
          </div>
        </ScrollReveal>

        <Marquee speed={40}>
          {results.map((r) => (
            <div
              key={r.name}
              className="glass glow-border w-[340px] flex-shrink-0 overflow-hidden group"
            >
              {/* Before/After placeholder */}
              <div className="flex">
                <div className="flex-1 aspect-[3/4] bg-[hsl(0_0%_100%/0.03)] flex items-center justify-center border-r border-[hsl(0_0%_100%/0.06)]">
                  <div className="text-center">
                    <User size={32} className="mx-auto text-[hsl(0_0%_100%/0.15)] mb-1" />
                    <span className="mono-label">Before</span>
                  </div>
                </div>
                <div className="flex-1 aspect-[3/4] bg-[hsl(0_0%_100%/0.03)] flex items-center justify-center">
                  <div className="text-center">
                    <User size={32} className="mx-auto text-[hsl(0_0%_100%/0.15)] mb-1" />
                    <span className="mono-label">After</span>
                  </div>
                </div>
              </div>
              {/* Info pane */}
              <div className="p-5 border-t border-[hsl(0_0%_100%/0.06)]">
                <div className="flex items-baseline justify-between mb-2">
                  <p className="font-heading text-lg uppercase">{r.name}</p>
                  <p className="font-heading text-xl font-bold">{r.stat}</p>
                </div>
                <p className="text-sm text-[hsl(0_0%_100%/0.5)] leading-relaxed">"{r.quote}"</p>
              </div>
            </div>
          ))}
        </Marquee>
      </section>
    </PageTransition>
  );
};

export default HomePage;
