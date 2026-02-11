import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I get my plan?",
    a: "Instantly via the App after enrollment. You'll get immediate access to your customized training and nutrition plan.",
  },
  {
    q: "Do you offer veg/non-veg options?",
    a: "Yes, 100% customized to your preferences. Whether you're vegetarian, vegan, or non-veg, your meal plan is built around foods you actually enjoy.",
  },
  {
    q: "Can a beginner join?",
    a: "Absolutely. The program is built around your current experience level. Every exercise includes detailed video guides so you can train with confidence from day one.",
  },
];

const FAQSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="mono-label text-center mb-4">Common Questions</p>
        <h2 className="text-4xl md:text-6xl font-heading font-black uppercase text-center text-gradient mb-16">
          FAQ
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="glass glow-border rounded-2xl p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[hsl(var(--border))]">
                <AccordionTrigger className="font-heading text-lg uppercase tracking-wide hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
