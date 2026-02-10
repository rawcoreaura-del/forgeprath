import { User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
        <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-center text-gradient mb-16">
          Real Results
        </h2>
      </ScrollReveal>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {results.map((r, i) => (
          <ScrollReveal key={r.name} delay={i * 0.1}>
            <div className="glass glow-border p-6 break-inside-avoid group hover:bg-[hsl(var(--glass-hover))] transition-all duration-500">
              {/* Placeholder for before/after image */}
              <div className="aspect-[4/3] rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center mb-4">
                <User size={40} className="text-muted-foreground/30" />
              </div>
              <p className="font-heading text-2xl font-bold mb-2">{r.stat}</p>
              <p className="text-sm text-muted-foreground italic mb-3">"{r.quote}"</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">— {r.name}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
