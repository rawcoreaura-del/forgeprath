import { User } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";

const results = [
  { name: "Arjun K.", quote: "Lost 18kg in 14 weeks. Best shape of my life.", stat: "-18kg" },
  { name: "Priya M.", quote: "Gained lean muscle while dropping body fat. Incredible.", stat: "+6kg LBM" },
  { name: "Rahul S.", quote: "Won my first bodybuilding show. Couldn't have done it alone.", stat: "1st Place" },
  { name: "Sneha T.", quote: "Finally understand nutrition. This changed everything.", stat: "-12kg" },
  { name: "Vikram D.", quote: "Deadlift went from 100kg to 180kg in 6 months.", stat: "+80kg DL" },
  { name: "Ananya R.", quote: "Postpartum recovery done right. Stronger than ever.", stat: "Transformed" },
];

const ResultsPage = () => (
  <PageTransition>
    <section className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="mono-label text-center mb-4">Proof Over Promises</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase text-center text-gradient mb-20">
            Real Results
          </h1>
        </ScrollReveal>

        {/* Marquee */}
        <div className="mb-20">
          <Marquee speed={35}>
            {results.map((r) => (
              <div key={r.name} className="glass glow-border w-[320px] flex-shrink-0 overflow-hidden group">
                <div className="flex">
                  <div className="flex-1 aspect-[3/4] bg-[hsl(var(--muted))] flex items-center justify-center border-r border-[hsl(var(--border))]">
                    <div className="text-center">
                      <User size={28} className="mx-auto text-muted-foreground/30 mb-1" />
                      <span className="mono-label">Before</span>
                    </div>
                  </div>
                  <div className="flex-1 aspect-[3/4] bg-[hsl(var(--muted))] flex items-center justify-center">
                    <div className="text-center">
                      <User size={28} className="mx-auto text-muted-foreground/30 mb-1" />
                      <span className="mono-label">After</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 border-t border-[hsl(var(--border))]">
                  <div className="flex items-baseline justify-between mb-2">
                    <p className="font-heading text-lg uppercase">{r.name}</p>
                    <p className="font-heading text-xl font-bold">{r.stat}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">"{r.quote}"</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Grid detail */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 0.1}>
              <div className="glass glow-border p-6 group hover:bg-[hsl(var(--glass-hover))] transition-all duration-500">
                <div className="aspect-[4/3] rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center mb-4">
                  <User size={40} className="text-muted-foreground/30" />
                </div>
                <p className="font-heading text-3xl font-bold mb-2">{r.stat}</p>
                <p className="text-sm text-muted-foreground italic mb-3">"{r.quote}"</p>
                <p className="mono-label">— {r.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default ResultsPage;
