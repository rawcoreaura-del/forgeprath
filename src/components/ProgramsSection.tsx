import { useState } from "react";
import { Check } from "lucide-react";
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

const ProgramsSection = () => {
  const [modal, setModal] = useState<{ name: string; price: string } | null>(null);

  return (
    <section id="programs" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground text-center mb-3">
            The Method
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-center text-gradient mb-16">
            Select Your Protocol
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.15}>
              <div className="glass glow-border h-full flex flex-col p-6 md:p-8 group hover:bg-[hsl(var(--glass-hover))] transition-all duration-500">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {p.tag}
                </span>
                <h3 className="font-heading text-2xl uppercase tracking-wide mb-2">
                  {p.name}
                </h3>
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
              </div>
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

export default ProgramsSection;
