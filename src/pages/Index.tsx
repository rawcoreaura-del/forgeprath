import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => (
  <div className="bg-background min-h-screen noise-bg">
    <Navbar />
    <HeroSection />
    <ProgramsSection />
    <ResultsSection />
    <AboutSection />
    <ContactFooter />
  </div>
);

export default Index;
