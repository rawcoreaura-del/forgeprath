import { useState, useRef } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import CheckoutModal from "./CheckoutModal";

const programs = [
  {
    name: "Fat Loss",
    price: "₹4,999",
    tag: "Most Popular",
    features: [
      "12-Week Transformation Plan",
      "Custom Nutrition Protocol",
      "Weekly Check-ins & Adjustments",
      "24/7 Chat Support",
      "Progress Tracking Dashboard",
    ],
  },
  {
    name: "Muscle Gain",
    price: "₹5,999",
    tag: "Best Value",
    features: [
      "16-Week Hypertrophy Program",
      "Macro-Optimized Meal Plans",
      "Bi-Weekly Video Calls",
      "Form Check Video Reviews",
      "Supplement Guidance",
    ],
  },
  {
    name: "Contest Prep",
    price: "₹9,999",
    tag: "Elite",
    features: [
      "Full Competition Prep Cycle",
      "Peak Week Protocol",
      "Daily Coach Communication",
      "Posing Practice Sessions",
      "Post-Show Reverse Diet",
    ],
  },
];

const HorizontalPrograms = () => {
  const [modal, setModal] = useState<{ name: string; price: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="mono-label mb-4">The Method</p>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase text-gradient">
              Select Your Protocol
            </h2>
          </div>
        </ScrollReveal>

        {/* Scroll controls */}
        <div className="flex justify-end gap-2 mb-6 px-2">
          <button onClick={() => scroll("left")} className="glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <ChevronLeft size={18} className="text-foreground" />
          </button>
          <button onClick={() => scroll("right")} className="glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <ChevronRight size={18} className="text-foreground" />
          </button>
        </div>

        {/* Horizontal snap scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {programs.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="glass glow-border min-w-[320px] w-[340px] flex-shrink-0 snap-center flex flex-col p-6 md:p-8 group hover:scale-[1.02]"
              >
                <span className="mono-label mb-4">{p.tag}</span>
                <h3 className="font-heading text-2xl uppercase tracking-wide mb-2">{p.name}</h3>
                <p className="text-4xl font-heading font-bold mb-6">{p.price}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="mt-0.5 text-foreground/60 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setModal({ name: p.name, price: p.price })}
                  className="w-full bg-foreground text-background py-3.5 rounded-xl font-semibold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                >
                  Buy Now
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <CheckoutModal
        open={!!modal}
        onClose={() => setModal(null)}
        planName={modal?.name ?? ""}
        price={modal?.price ?? ""}
      />
    </section>
  );
};

export default HorizontalPrograms;
