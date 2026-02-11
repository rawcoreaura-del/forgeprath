import { Dumbbell, Leaf, MessageCircle, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: Dumbbell,
    title: "Customized Training",
    text: "Workouts designed for your specific body type and goals.",
  },
  {
    icon: Leaf,
    title: "Precision Nutrition",
    text: "No starving. Just calculated macros to fuel performance.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Priority Support",
    text: "Direct access to me for form checks and adjustments.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    text: "Weekly check-ins to ensure you never hit a plateau.",
  },
];

const BenefitsGrid = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="mono-label text-center mb-4">The Edge</p>
        <h2 className="text-4xl md:text-6xl font-heading font-black uppercase text-center text-gradient mb-16">
          Why Choose Parth?
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((b, i) => (
          <ScrollReveal key={b.title} delay={i * 0.1}>
            <div className="glass glow-border p-8 rounded-2xl group hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
              <b.icon size={32} className="text-foreground/70 mb-4" />
              <h3 className="font-heading text-xl uppercase tracking-wide mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsGrid;
