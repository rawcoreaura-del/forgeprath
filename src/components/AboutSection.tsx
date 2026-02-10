import { User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            The Coach
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-gradient mb-6">
            Philosophy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            No fads. No shortcuts. Every program is built on peer-reviewed research, periodization
            principles, and years of hands-on experience with hundreds of clients.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Data-driven results mean every decision — from your caloric deficit to your rep scheme —
            is backed by evidence and tailored to your body, your lifestyle, and your goals.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-heading font-bold">500+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Clients Coached</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold">8+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold">98%</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Goal Achievement</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Image placeholder */}
        <ScrollReveal delay={0.2}>
          <div className="glass glow-border aspect-[3/4] rounded-2xl flex items-center justify-center">
            <User size={80} className="text-muted-foreground/20" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
