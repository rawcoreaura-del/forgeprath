import ReededHero from "@/components/ReededHero";
import HorizontalPrograms from "@/components/HorizontalPrograms";
import ResultsSection from "@/components/ResultsSection";
import ElfsightInstagram from "@/components/ElfsightInstagram";
import ContactFooter from "@/components/ContactFooter";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import { User } from "lucide-react";

const results = [
  { name: "Arjun K.", stat: "-18kg", quote: "Lost 18kg in 14 weeks. Best shape of my life." },
  { name: "Priya M.", stat: "+6kg LBM", quote: "Gained lean muscle while dropping body fat." },
  { name: "Rahul S.", stat: "1st Place", quote: "Won my first bodybuilding show." },
  { name: "Sneha T.", stat: "-12kg", quote: "Finally understand nutrition. Changed everything." },
  { name: "Vikram D.", stat: "+80kg DL", quote: "Deadlift went from 100kg to 180kg." },
  { name: "Ananya R.", stat: "Transformed", quote: "Postpartum recovery done right. Stronger than ever." },
];

const PortfolioPage = () => {
  return (
    <>
      {/* Hero with Reeded Glass */}
      <ReededHero />

      {/* Transformation Marquee */}
      <section className="py-24 md:py-32">
        <ScrollReveal>
          <div className="text-center mb-16 px-6">
            <p className="mono-label mb-4">The Proof</p>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase text-gradient">
              Real Transformations
            </h2>
          </div>
        </ScrollReveal>

        <Marquee speed={40}>
          {results.map((r) => (
            <div key={r.name} className="glass glow-border w-[340px] flex-shrink-0 overflow-hidden group">
              <div className="flex">
                <div className="flex-1 aspect-[3/4] bg-[hsl(var(--muted))] flex items-center justify-center border-r border-[hsl(var(--border))]">
                  <div className="text-center">
                    <User size={32} className="mx-auto text-muted-foreground/30 mb-1" />
                    <span className="mono-label">Before</span>
                  </div>
                </div>
                <div className="flex-1 aspect-[3/4] bg-[hsl(var(--muted))] flex items-center justify-center">
                  <div className="text-center">
                    <User size={32} className="mx-auto text-muted-foreground/30 mb-1" />
                    <span className="mono-label">After</span>
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-[hsl(var(--border))]">
                <div className="flex items-baseline justify-between mb-2">
                  <p className="font-heading text-lg uppercase">{r.name}</p>
                  <p className="font-heading text-xl font-bold">{r.stat}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{r.quote}"</p>
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Programs */}
      <HorizontalPrograms />

      {/* Results Gallery */}
      <ResultsSection />

      {/* Instagram Embed */}
      <ElfsightInstagram />

      {/* Contact & Footer */}
      <ContactFooter />
    </>
  );
};

export default PortfolioPage;
