import { useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const InstagramFeed = () => {
  useEffect(() => {
    // Only append the script once
    if (document.querySelector('script[src*="elfsightcdn"]')) return;
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="mono-label mb-4">Follow the Journey</p>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase text-gradient">
              On Instagram
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl overflow-hidden p-4">
            <div className="elfsight-app-33dfb9d2-8ebf-4317-9a3a-3dd9610d1cff" data-elfsight-app-lazy />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InstagramFeed;
