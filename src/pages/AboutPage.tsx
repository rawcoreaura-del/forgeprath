import { User } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "500+", label: "Clients Coached" },
  { value: "8+", label: "Years Experience" },
  { value: "98%", label: "Goal Achievement" },
];

const AboutPage = () => (
  <PageTransition>
    <section className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="mono-label mb-4">The Coach</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase text-gradient mb-8">
              Philosophy
            </h1>
            <p className="text-[hsl(0_0%_100%/0.6)] leading-relaxed mb-4 text-lg">
              No fads. No shortcuts. Every program is built on peer-reviewed research, periodization
              principles, and years of hands-on experience with hundreds of clients.
            </p>
            <p className="text-[hsl(0_0%_100%/0.6)] leading-relaxed mb-10 text-lg">
              Data-driven results mean every decision — from your caloric deficit to your rep scheme —
              is backed by evidence and tailored to your body, your lifestyle, and your goals.
            </p>
            <div className="flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-4xl font-heading font-bold">{s.value}</p>
                  <p className="mono-label mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass glow-border aspect-[3/4] rounded-2xl flex items-center justify-center">
              <User size={80} className="text-[hsl(0_0%_100%/0.1)]" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default AboutPage;
