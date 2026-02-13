import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";

import img01 from "@/assets/client_transformation_01.jpg";
import img02 from "@/assets/client_transformation_02.jpg";
import img03 from "@/assets/client_transformation_03.jpg";
import img04 from "@/assets/client_transformation_04.jpg";
import img05 from "@/assets/client_transformation_05.jpg";
import img06 from "@/assets/client_transformation_06.jpg";
import img07 from "@/assets/client_transformation_07.jpg";
import img08 from "@/assets/client_transformation_08.jpg";

const results = [
  { name: "Bangalore Nationals", quote: "Weighted Endurance — First Place 🥇", stat: "1st Place", image: img01 },
  { name: "6-Month Transformation", quote: "From skinny to muscular in just 6 months.", stat: "+12kg LBM", image: img02 },
  { name: "1-Year Transformation", quote: "Complete physique overhaul in 12 months.", stat: "Transformed", image: img03 },
  { name: "Back Development", quote: "May to November — insane back gains.", stat: "6 Months", image: img04 },
  { name: "Maharashtra State", quote: "Bronze Medal — State Powerlifting Championship.", stat: "🥉 Bronze", image: img05 },
  { name: "Client & Coach", quote: "ISC Streetlifting National Championship 2025.", stat: "Winner", image: img06 },
  { name: "Australian Nationals", quote: "2nd Place at Australian Streetlifting Championship.", stat: "2nd Place", image: img07 },
  { name: "Classic Bodybuilding", quote: "2nd Place — Classic Bodybuilding stage.", stat: "2nd Place", image: img08 },
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
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
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
              <div className="glass glow-border p-4 group hover:scale-105 hover:shadow-[0_0_40px_hsl(0_0%_100%/0.15)] transition-all duration-500 relative overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4">
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
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
