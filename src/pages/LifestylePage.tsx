import { useState } from "react";
import { Heart, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  { id: 1, caption: "5AM grind. No shortcuts.", likes: 2341, span: "row-span-2" },
  { id: 2, caption: "Meal prep Sunday.", likes: 1892, span: "" },
  { id: 3, caption: "Client check-in day.", likes: 3104, span: "" },
  { id: 4, caption: "The gym is my therapy.", likes: 4521, span: "row-span-2" },
  { id: 5, caption: "Progress over perfection.", likes: 1678, span: "" },
  { id: 6, caption: "Competition day.", likes: 5230, span: "" },
  { id: 7, caption: "Recovery is gains.", likes: 890, span: "row-span-2" },
  { id: 8, caption: "New PR. Again.", likes: 3456, span: "" },
  { id: 9, caption: "Discipline = Freedom.", likes: 2789, span: "" },
  { id: 10, caption: "Built different.", likes: 4102, span: "" },
  { id: 11, caption: "Back day essentials.", likes: 1543, span: "row-span-2" },
  { id: 12, caption: "Sunset sets.", likes: 2100, span: "" },
];

const LifestylePage = () => {
  return (
    <PageTransition>
      <section className="min-h-screen pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="mono-label text-center mb-4">Behind The Scenes</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase text-center text-gradient mb-20">
              Lifestyle
            </h1>
          </ScrollReveal>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {posts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass glow-border overflow-hidden break-inside-avoid group relative cursor-pointer"
                >
                  {/* Image placeholder */}
                  <div
                    className={`bg-[hsl(0_0%_100%/0.03)] flex items-center justify-center ${
                      post.span === "row-span-2" ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  >
                    <ImageIcon
                      size={32}
                      className="text-[hsl(0_0%_100%/0.1)]"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[hsl(0_0%_0%/0.7)] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-4">
                    <div className="flex items-center gap-2">
                      <Heart size={18} className="text-foreground" />
                      <span className="font-heading text-lg">
                        {post.likes.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-[hsl(0_0%_100%/0.6)] text-center">
                      {post.caption}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default LifestylePage;
