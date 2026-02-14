import { Home, Dumbbell, Trophy, UserCircle, Mail } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { icon: Home, label: "Home", to: "/" },
  { icon: Dumbbell, label: "Programs", to: "/programs" },
  { icon: Trophy, label: "Results", to: "/results" },
  { icon: UserCircle, label: "About", to: "/about" },
  { icon: Mail, label: "Contact", to: "/contact" },
];

const DockNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.5;
    if (distance === 1) return 1.25;
    return 1;
  };

  return (
    <motion.nav
      // FIX: Added x: "-50%" to both initial and animate to prevent Framer Motion from removing the centering
      initial={{ x: "-50%", y: 100, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
      className="fixed bottom-6 left-1/2 z-50 w-auto px-3 sm:px-4 py-2.5 sm:py-3 rounded-[2rem] flex items-end justify-center gap-0.5 sm:gap-1 backdrop-blur-[60px] border border-[hsl(var(--glass-border))]"
      style={{
        background: "hsl(var(--glass-bg))",
        boxShadow: "0 8px 32px hsl(0 0% 0% / 0.15), inset 0 1px 0 0 hsl(0 0% 100% / 0.08)",
      }}
    >
      {links.map(({ icon: Icon, label, to }, index) => {
        const isActive = location.pathname === to;
        return (
          <Link
            key={label}
            to={to}
            className="relative flex flex-col items-center justify-end"
          >
            <motion.div
              // FIX: Mouse events on the wrapper to prevent jitter
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ scale: getScale(index) }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center hover:bg-[hsl(var(--glass-hover))] transition-colors duration-200 origin-bottom ${
                isActive ? "bg-[hsl(var(--glass-hover))]" : ""
              }`}
              aria-label={label}
            >
              <Icon
                size={20}
                className={`transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              />
            </motion.div>
          </Link>
        );
      })}
    </motion.nav>
  );
};

export default DockNav;
