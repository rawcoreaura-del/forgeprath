import ScrollReveal from "./ScrollReveal";
import { User } from "lucide-react";

const results = [
  { name: "Arjun K.", quote: "Lost 18kg in 14 weeks. Best shape of my life.", stat: "-18kg" },
  { name: "Priya M.", quote: "Gained lean muscle while dropping body fat. Incredible.", stat: "+6kg LBM" },
  { name: "Rahul S.", quote: "Won my first bodybuilding show. Couldn't have done it alone.", stat: "1st Place" },
  { name: "Sneha T.", quote: "Finally understand nutrition. This changed everything.", stat: "-12kg" },
  { name: "Vikram D.", quote: "Deadlift went from 100kg to 180kg in 6 months.", stat: "+80kg DL" },
  { name: "Ananya R.", quote: "Postpartum recovery done right. Stronger than ever.", stat: "Transformed" },
];

const ResultsSection = () => (
  <section id="results" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground text-center mb-3">
          Proof Over Promises
        </p>
        <h2 className="text-4xl md:text-6xl font-heading font-black uppercase text-center text-gradient mb-16">
          Real Results
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((r, i) => (
          <ScrollReveal key={r.name} delay={i * 0.08}>
            <div className="glass glow-border p-4 group hover:scale-105 hover:shadow-[0_0_40px_hsl(0_0%_100%/0.15)] transition-all duration-500 relative overflow-hidden rounded-2xl">
              {/* Main "After" image placeholder */}
              <div className="aspect-[3/4] bg-[hsl(var(--muted))] rounded-xl flex items-center justify-center mb-4 relative">
                <User size={48} className="text-muted-foreground/20" />
                {/* PiP "Before" inset */}
                <div className="absolute bottom-2 left-2 w-16 h-20 rounded-lg bg-[hsl(var(--muted))] border-2 border-[hsl(var(--glass-border))] flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <User size={14} className="mx-auto text-muted-foreground/30" />
                    <span className="text-[8px] uppercase tracking-wider text-muted-foreground/40">Before</span>
                  </div>
                </div>
              </div>
              <p className="font-heading text-3xl font-black mb-1">{r.stat}</p>
              <p className="text-sm text-muted-foreground italic mb-2">"{r.quote}"</p>
              <p className="mono-label">— {r.name}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
