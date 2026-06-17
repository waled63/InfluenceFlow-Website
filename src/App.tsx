import { useState } from "react";
import BackgroundCanvas from "./components/BackgroundCanvas";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StorytellingSection from "./components/StorytellingSection";
import FeaturesSection from "./components/FeaturesSection";
import TransparencySection from "./components/TransparencySection";
import CtaSection from "./components/CtaSection";
import ContactIconsSection from "./components/ContactIconsSection";
import Footer from "./components/Footer";
import BookCallModal from "./components/BookCallModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"call" | "campaign">("call");

  const openCallModal = () => {
    setModalType("call");
    setModalOpen(true);
  };

  const openCampaignModal = () => {
    setModalType("campaign");
    setModalOpen(true);
  };

  return (
    <div 
      id="blueprint-root" 
      className="bg-[#0A0A0B] text-white selection:bg-white selection:text-black overflow-x-hidden min-h-screen relative font-sans leading-relaxed tracking-normal"
    >
      
      {/* Atmospheric flowing lighting backdrop (Apple Style) */}
      <BackgroundCanvas />

      {/* Understated luxury header navigation (60% Apple / 20% Vercel) */}
      <Navbar onContactClick={openCallModal} />

      {/* Section 1: Main Centered Kinetic Storytelling Bold Header (Hero) */}
      <HeroSection onBookCallClick={openCallModal} />

      {/* Section 2: Interactive multi-depth visual storytelling panels */}
      <StorytellingSection />

      {/* Section 3: Quiet ultra-clean specifications spec grid (Features Minimal) */}
      <FeaturesSection />

      {/* Section 4: Understated authentic posture section (Transparency Section) */}
      <TransparencySection />

      {/* Section 6: Space-oriented centered alignment trigger note (CTA) */}
      <CtaSection onStartCampaignClick={openCampaignModal} />

      {/* Section 7: Premium contact icons & channels */}
      <ContactIconsSection />

      {/* Standard professional clean copyright footer */}
      <Footer />

      {/* Monochromatic tactical form popup */}
      <BookCallModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialType={modalType}
      />

    </div>
  );
}
