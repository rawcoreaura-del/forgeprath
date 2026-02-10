import { Home, Dumbbell, BarChart3, User, Mail } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { motion } from "framer-motion";

const links = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/programs", icon: Dumbbell, label: "Programs" },
  { to: "/results", icon: BarChart3, label: "Results" },
  { to: "/about", icon: User, label: "About" },
  { to: "/contact", icon: Mail, label: "Contact" },
];

const DockNav = () => (
  <motion.nav
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass glow-sm px-3 py-2 rounded-2xl flex items-center gap-1"
  >
    {links.map(({ to, icon: Icon, label }) => (
      <NavLink
        key={to}
        to={to}
        end={to === "/"}
        className="relative flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-[hsl(0_0%_100%/0.08)] group"
        activeClassName="bg-[hsl(0_0%_100%/0.10)]"
      >
        <Icon size={20} className="text-[hsl(0_0%_100%/0.5)] group-hover:text-foreground transition-colors" />
        <span className="mono-label text-[0.55rem]">{label}</span>
      </NavLink>
    ))}
  </motion.nav>
);

export default DockNav;
