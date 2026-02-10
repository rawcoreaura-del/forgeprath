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
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        <Outlet />
        <DockNav />
      </div>
    </div>
  );
};

export default Layout;
