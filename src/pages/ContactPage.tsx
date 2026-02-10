import { MessageCircle, Instagram, Mail, ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const ContactPage = () => (
  <PageTransition>
    <section className="min-h-screen pt-24 pb-32 px-6 flex items-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        <ScrollReveal>
          <p className="mono-label mb-4">Let's Work Together</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase text-gradient mb-8">
            Book a
            <br />
            Consultation
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-12 text-lg">
            Ready to start your transformation? Schedule a free discovery call and let's build your roadmap.
          </p>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid inline-flex items-center gap-2"
          >
            Schedule Free Call
            <ExternalLink size={16} />
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center gap-4 mt-20">
            {[
              { href: "https://wa.me/919999999999", icon: MessageCircle },
              { href: "https://instagram.com", icon: Instagram },
              { href: "mailto:coach@forge.fit", icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-14 h-14 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--glass-hover))] transition-all duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-24 pt-8 border-t border-[hsl(var(--border))]">
          <p className="mono-label">© 2026 FORGE Fitness. All rights reserved.</p>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default ContactPage;
