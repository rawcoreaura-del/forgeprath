import { useState } from "react";
import { Check, X } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import CheckoutModal from "@/components/CheckoutModal";

import nutritionImg from "@/assets/feature_nutrition_tracking.png";
import progressImg from "@/assets/feature_progress_tracking.png";

const features = [
  {
    title: "Nutrition Tracking",
    description:
      "Log your meals, scan barcodes, and hit your macros with zero guesswork. Every meal is planned around your preferences — veg, non-veg, or flexible.",
    image: nutritionImg,
  },
  {
    title: "Progress Tracking",
    description:
      "Track body measurements, weight trends, and check stats over time. Weekly check-ins ensure you never hit a plateau.",
    image: progressImg,
  },
];

const comparisonRows = [
  { feature: "Custom Diet Plan", standard: true, pro: true },
  { feature: "Workout Plan", standard: true, pro: true },
  { feature: "Weekly Check-ins", standard: false, pro: true },
  { feature: "WhatsApp Support", standard: false, pro: true },
  { feature: "Form Check Videos", standard: false, pro: true },
  { feature: "Supplement Guidance", standard: false, pro: true },
];

const ProgramsPage = () => {
  const [modal, setModal] = useState<{ name: string; price: string } | null>(null);

  return (
    <PageTransition>
      <section className="min-h-screen pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <p className="mono-label text-center mb-4">The Method</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase text-center text-gradient mb-6">
              A Look Inside
              <br />
              The App
            </h1>
            <p className="text-center text-muted-foreground max-w-lg mx-auto mb-20">
              Everything you need — training, nutrition, and coaching — in one seamless experience.
            </p>
          </ScrollReveal>

          {/* App Features with real images */}
          <div className="space-y-16 mb-32">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.15}>
                <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                  {/* Phone Mockup with real image */}
                  <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="max-w-[320px] mx-auto">
                      <img src={f.image} alt={f.title} className="w-full h-auto" loading="lazy" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className={`${i % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                    <h3 className="font-heading text-3xl md:text-4xl font-black uppercase mb-4">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{f.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Comparison Table */}
          <ScrollReveal>
            <p className="mono-label text-center mb-4">Choose Your Plan</p>
            <h2 className="text-4xl md:text-6xl font-heading font-black uppercase text-center text-gradient mb-16">
              Standard vs Pro
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass glow-border rounded-2xl overflow-hidden">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-[hsl(var(--border))]">
                    <th className="text-left p-3 sm:p-5 font-heading uppercase tracking-wide text-xs sm:text-sm">Feature</th>
                    <th className="p-3 sm:p-5 text-center font-heading uppercase tracking-wide text-xs sm:text-sm">
                      Standard
                      <span className="block text-xl sm:text-2xl font-bold mt-1">₹2,999</span>
                    </th>
                    <th className="p-3 sm:p-5 text-center font-heading uppercase tracking-wide text-xs sm:text-sm">
                      Pro
                      <span className="block text-xl sm:text-2xl font-bold mt-1">₹5,999</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-[hsl(var(--border))] last:border-0">
                      <td className="p-3 sm:p-5 text-muted-foreground">{row.feature}</td>
                      <td className="p-3 sm:p-5 text-center">
                        {row.standard ? (
                          <Check size={18} className="mx-auto text-foreground/70" />
                        ) : (
                          <X size={18} className="mx-auto text-muted-foreground/30" />
                        )}
                      </td>
                      <td className="p-3 sm:p-5 text-center">
                        {row.pro ? (
                          <Check size={18} className="mx-auto text-foreground/70" />
                        ) : (
                          <X size={18} className="mx-auto text-muted-foreground/30" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 border-t border-[hsl(var(--border))]">
                <button
                  onClick={() => setModal({ name: "Standard", price: "₹2,999" })}
                  className="p-5 text-center font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--glass-hover))] transition-all duration-300"
                >
                  Get Standard
                </button>
                <button
                  onClick={() => setModal({ name: "Pro", price: "₹5,999" })}
                  className="p-5 text-center font-semibold uppercase tracking-wider bg-foreground text-background hover:opacity-90 transition-opacity duration-300"
                >
                  Get Pro
                </button>
              </div>
            </div>
          </ScrollReveal>
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
