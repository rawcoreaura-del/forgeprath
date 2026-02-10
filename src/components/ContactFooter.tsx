import { MessageCircle, Instagram, Mail, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactFooter = () => (
  <section id="contact" className="py-24 md:py-32 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
          Let's Work Together
        </p>
        <h2 className="text-4xl md:text-6xl font-heading font-black uppercase text-gradient mb-6">
          Book a Consultation
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10">
          Ready to start your transformation? Schedule a free discovery call and let's build your roadmap.
        </p>

        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform duration-200 animate-glow-pulse"
        >
          Schedule Free Call
          <ExternalLink size={16} />
        </a>
      </ScrollReveal>

      {/* Social links */}
      <ScrollReveal delay={0.2}>
        <div className="flex items-center justify-center gap-6 mt-16">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="glass w-12 h-12 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--glass-hover))] transition-all duration-300"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass w-12 h-12 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--glass-hover))] transition-all duration-300"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:coach@forge.fit"
            className="glass w-12 h-12 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--glass-hover))] transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </div>
      </ScrollReveal>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-[hsl(var(--border))]">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          © 2026 FORGE Fitness. All rights reserved.
        </p>
      </div>
    </div>
  </section>
);

export default ContactFooter;
