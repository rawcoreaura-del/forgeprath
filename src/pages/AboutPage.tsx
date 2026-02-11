import { User } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const AboutPage = () => (
  <PageTransition>
    <section className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="mono-label mb-4">My Story</p>
            <h1 className="text-5xl md:text-7xl font-heading font-black uppercase text-gradient mb-8">
              Hi, I'm Parth
              <br />
              Chamaria.
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading uppercase text-muted-foreground mb-8">
              And This Is My Story.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
              I wasn't always the fittest guy in the room. My journey started from being skinny and
              unsure, to mastering the science of hypertrophy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              I spent years learning, failing, and refining my methods so you don't have to. Today,
              I help people skip the trial and error and get straight to results.
            </p>
            <div className="flex gap-10">
              <div>
                <p className="text-4xl font-heading font-bold">500+</p>
                <p className="mono-label mt-1">Clients Coached</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold">8+</p>
                <p className="mono-label mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold">98%</p>
                <p className="mono-label mt-1">Goal Achievement</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass glow-border aspect-[3/4] rounded-2xl flex items-center justify-center overflow-hidden">
              <User size={80} className="text-muted-foreground/20" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default AboutPage;
