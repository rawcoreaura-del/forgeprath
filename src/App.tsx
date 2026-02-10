import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useState, useCallback } from "react";
import DockNav from "@/components/DockNav";
import MagneticCursor from "@/components/MagneticCursor";
import Preloader from "@/components/Preloader";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";

const ProgramsPage = lazy(() => import("@/pages/ProgramsPage"));
const ResultsPage = lazy(() => import("@/pages/ResultsPage"));
const LifestylePage = lazy(() => import("@/pages/LifestylePage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<Suspense><ProgramsPage /></Suspense>} />
        <Route path="/results" element={<Suspense><ResultsPage /></Suspense>} />
        <Route path="/social" element={<Suspense><LifestylePage /></Suspense>} />
        <Route path="/contact" element={<Suspense><ContactPage /></Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const handlePreloaderComplete = useCallback(() => setLoaded(true), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!loaded && <Preloader onComplete={handlePreloaderComplete} />}
        <BrowserRouter>
          <div className="bg-background min-h-screen noise-bg relative">
            <MagneticCursor />
            <AnimatedRoutes />
            <DockNav />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
