import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import CheckoutModal from "@/components/CheckoutModal";

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

const ProgramsPage = () => {
  const [modal, setModal] = useState<{ name: string; price: string } | null>(null);

  return (
    <PageTransition>
      <section className="min-h-screen pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="mono-label text-center mb-4">The Method</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase text-center text-gradient mb-20">
              Select Your
              <br />
              Protocol
            </h1>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="glass glow-border h-full flex flex-col p-6 md:p-8 group"
                >
                  <span className="mono-label mb-5">{p.tag}</span>
                  <h3 className="font-heading text-3xl uppercase tracking-wide mb-2">
                    {p.name}
                  </h3>
                  <p className="text-5xl font-heading font-bold mb-8">{p.price}</p>
                  <ul className="space-y-3 mb-10 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[hsl(0_0%_100%/0.6)]">
                        <Check size={14} className="mt-0.5 text-[hsl(0_0%_100%/0.4)] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setModal({ name: p.name, price: p.price })}
                    className="w-full btn-solid group-hover:shadow-[0_0_30px_hsl(0_0%_100%/0.15)]"
                  >
                    Buy Now
                  </button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CheckoutModal
        open={!!modal}
        onClose={() => setModal(null)}
        planName={modal?.name ?? ""}
        price={modal?.price ?? ""}
      />
    </PageTransition>
  );
};

export default ProgramsPage;
