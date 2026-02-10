import { useEffect, useRef, useState } from "react";
import { Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ElfsightInstagram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded) {
          setLoaded(true);
          const script = document.createElement("script");
          script.src = "https://static.elfsight.com/platform/platform.js";
          script.async = true;
          document.body.appendChild(script);
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <section id="social" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="mono-label mb-4">Follow the Journey</p>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase text-gradient">
              On Instagram
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div ref={containerRef} className="glass rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Instagram size={20} className="text-foreground" />
              <span className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Follow on Instagram
              </span>
            </div>

            {loaded ? (
              <div
                className="elfsight-app-33dfb9d2-8ebf-4317-9a3a-3dd9610d1cff"
                data-elfsight-app-lazy
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-muted-foreground">
                <div className="text-center">
                  <Instagram size={32} className="mx-auto mb-3 opacity-30" />
                  <p className="mono-label">Loading feed...</p>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ElfsightInstagram;
