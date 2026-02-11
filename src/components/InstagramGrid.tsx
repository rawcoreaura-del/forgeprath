import { Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const placeholders = [
  { aspect: "aspect-[3/4]", label: "Training" },
  { aspect: "aspect-square", label: "Nutrition" },
  { aspect: "aspect-[4/5]", label: "Results" },
  { aspect: "aspect-[4/5]", label: "Lifestyle" },
  { aspect: "aspect-square", label: "Coaching" },
  { aspect: "aspect-[3/4]", label: "Community" },
];

const InstagramGrid = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="mono-label mb-4">Follow the Journey</p>
          <h2 className="text-5xl md:text-7xl font-heading font-black uppercase text-gradient">
            On Instagram
          </h2>
        </div>
      </ScrollReveal>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {placeholders.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="break-inside-avoid"
          >
            <div className={`glass glow-border rounded-2xl ${item.aspect} flex items-center justify-center group hover:scale-[1.02] transition-transform duration-500 overflow-hidden`}>
              <div className="text-center">
                <Instagram size={28} className="mx-auto text-muted-foreground/30 mb-2" />
                <span className="mono-label text-muted-foreground/40">{item.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-invert inline-flex items-center gap-2"
          >
            <Instagram size={16} />
            Follow @parthchamaria
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default InstagramGrid;
