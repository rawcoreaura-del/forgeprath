import { Home, ShoppingBag, Trophy, Camera, Mail } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#programs", icon: ShoppingBag, label: "Plans" },
  { href: "#results", icon: Trophy, label: "Results" },
  { href: "#social", icon: Camera, label: "Social" },
  { href: "#contact", icon: Mail, label: "Contact" },
];

const PortfolioDock = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass glow-sm px-3 py-2 rounded-2xl flex items-center gap-1"
    >
      {links.map(({ href, icon: Icon, label }) => (
        <button
          key={href}
          onClick={() => scrollTo(href)}
          className="relative flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-[hsl(var(--glass-hover))] hover:scale-110 group"
        >
          <Icon size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          <span className="mono-label text-[0.55rem]">{label}</span>
        </button>
      ))}
    </motion.nav>
  );
};

export default PortfolioDock;
