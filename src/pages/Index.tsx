import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PartnersSection } from "@/components/PartnersSection";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseUs />
        <PartnersSection />
        <FacilitiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
