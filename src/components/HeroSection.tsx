import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import darkBlueSilkBg from "../assets/images/dark_blue_silk_hero_1781357485660.jpg";

interface HeroSectionProps {
  onBookCallClick: () => void;
}

export default function HeroSection({ onBookCallClick }: HeroSectionProps) {
  // Stagger helper animations for 60% Apple minimal presentation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-[100px] pb-16 px-6 md:px-12 bg-[#0A0A0B] overflow-hidden select-none"
    >
      {/* Luxurious fluid silk background with high-contrast text safety layer */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <img
          src={darkBlueSilkBg}
          alt="Dark Flowing Silk"
          className="w-full h-full object-cover scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay (black with opacity 70%) for immaculate design readability */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Understated structural vignette to frame content and smoothly bleed into background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/40 via-transparent to-[#0A0A0B]" />
      </div>

      {/* Absolute center large soft lighting flare to blend with silk highlights */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[800px] h-[300px] sm:h-[500px] lg:h-[800px] bg-cyan-500/[0.015] rounded-full blur-[145px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-7 md:gap-9 max-w-[800px]"
        >
          {/* Top minimal luxurious category context trigger */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2"
          >
            <span className="font-mono text-[9px] text-[#A6A6AB] tracking-[0.3em] uppercase">
              Influencer Campaigns // For Tech Brands
            </span>
          </motion.div>

          {/* Heading - Large interactive crisp premium text */}
          <motion.h1
            variants={itemVariants}
            className="font-sans font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-[-0.03em] text-white"
          >
            Done-for-you influencer campaigns <br className="hidden sm:inline" />
            <span className="text-[#8E8E93] inline-block font-light">for AI, SaaS, and tech.</span>
          </motion.h1>

          {/* Subtext - Understated luxury, generous spacing */}
          <motion.p
            variants={itemVariants}
            className="font-sans font-light text-[#8E8E93] text-sm sm:text-base md:text-lg max-w-[700px] leading-relaxed tracking-wide"
          >
            We source relevant creators, manage scripts, and track conversion data. Full campaign execution with zero management overhead.
          </motion.p>

          {/* Interactive tactile button triggers */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full"
          >
            <button
              onClick={onBookCallClick}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-[#E5E5E5] text-black font-semibold text-xs tracking-wider font-mono uppercase rounded-full transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group"
            >
              Book a Consultation
              <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => {
                const target = document.getElementById("storytelling");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-transparent hover:bg-white/[0.04] border border-white/10 hover:border-white/25 text-white font-semibold text-xs tracking-wider font-mono uppercase rounded-full transition-all flex items-center justify-center gap-2"
            >
              How It Works
            </button>
          </motion.div>

        </motion.div>

      </div>

      {/* Exquisite bottom down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#8E8E93] uppercase">SCROLL</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#8E8E93] animate-bounce" />
      </div>
    </div>
  );
}
