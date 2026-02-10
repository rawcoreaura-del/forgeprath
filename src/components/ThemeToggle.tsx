import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => (
  <motion.button
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 100, damping: 20 }}
    onClick={onToggle}
    className="fixed top-6 right-6 z-50 glass w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200"
    aria-label="Toggle theme"
  >
    {isDark ? (
      <Sun size={18} className="text-foreground" />
    ) : (
      <Moon size={18} className="text-foreground" />
    )}
  </motion.button>
);

export default ThemeToggle;
