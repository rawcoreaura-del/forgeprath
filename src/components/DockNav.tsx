import { Home, Dumbbell, Trophy, UserCircle, Mail } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/programs", icon: Dumbbell, label: "Programs" },
  { to: "/results", icon: Trophy, label: "Results" },
  { to: "/about", icon: UserCircle, label: "About" },
  { to: "/contact", icon: Mail, label: "Contact" },
];

const DockNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.5;
    if (distance === 1) return 1.25;
    return 1;
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:w-auto md:max-w-none px-4 py-3 rounded-[2rem] flex items-end justify-center gap-1 backdrop-blur-xl bg-background/80 border border-border"
    >
      {links.map(({ to, icon: Icon, label }, index) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className="relative flex flex-col items-center justify-end"
          activeClassName="dock-active"
        >
          <motion.div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{ scale: getScale(index) }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-11 h-11 rounded-xl flex items-center justify-center hover:bg-accent transition-colors duration-200 origin-bottom"
            aria-label={label}
          >
            <Icon size={20} className="text-muted-foreground group-[.dock-active]:text-foreground transition-colors" />
          </motion.div>
          {/* Active glow dot */}
          <div className="dock-dot absolute -bottom-1.5 w-1 h-1 rounded-full bg-foreground opacity-0 transition-opacity" />
        </NavLink>
      ))}
    </motion.nav>
  );
};

export default DockNav;
