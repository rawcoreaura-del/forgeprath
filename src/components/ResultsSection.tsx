import ScrollReveal from "./ScrollReveal";

import img01 from "@/assets/client_transformation_01.jpg";
import img02 from "@/assets/client_transformation_02.jpg";
import img03 from "@/assets/client_transformation_03.jpg";
import img04 from "@/assets/client_transformation_04.jpg";
import img05 from "@/assets/client_transformation_05.jpg";
import img06 from "@/assets/client_transformation_06.jpg";

const results = [
  { name: "Bangalore Nationals", quote: "Weighted Endurance — First Place 🥇", stat: "1st Place", image: img01 },
  { name: "6-Month Transformation", quote: "From skinny to muscular in just 6 months.", stat: "+12kg LBM", image: img02 },
  { name: "1-Year Transformation", quote: "Complete physique overhaul in 12 months.", stat: "Transformed", image: img03 },
  { name: "Back Development", quote: "May to November — insane back gains.", stat: "6 Months", image: img04 },
  { name: "Maharashtra State", quote: "Bronze Medal — State Powerlifting Championship.", stat: "🥉 Bronze", image: img05 },
  { name: "Client & Coach", quote: "ISC Streetlifting National Championship 2025.", stat: "Winner", image: img06 },
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
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
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
