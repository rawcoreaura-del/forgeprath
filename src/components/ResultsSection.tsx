import ScrollReveal from "./ScrollReveal";
import BeforeAfterSlider from "./BeforeAfterSlider";

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

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
        {results.map((r, i) => (
          <ScrollReveal key={r.name} delay={i * 0.08}>
            <div className="glass glow-border p-4 break-inside-avoid group hover:scale-[1.02] transition-transform duration-400">
              <BeforeAfterSlider className="mb-4" />
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
