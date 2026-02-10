import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import DockNav from "@/components/DockNav";

const Layout = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return (
    <div className={isDark ? "" : "light-theme"}>
      <div className="bg-background min-h-screen noise-bg relative transition-colors duration-500">
        {/* Gradient orbs for light theme depth */}
        <div className="gradient-orbs" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        <div className="relative z-[2]">
          <Outlet />
        </div>
        <DockNav />
      </div>
    </div>
  );
};

export default Layout;
