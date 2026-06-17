import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const items = [
        { id: "hero", offset: 0 },
        { id: "storytelling", offset: document.getElementById("storytelling")?.offsetTop || 600 },
        { id: "features", offset: document.getElementById("features")?.offsetTop || 1200 },
        { id: "transparency", offset: document.getElementById("transparency")?.offsetTop || 1800 },
      ];

      const currentScroll = window.scrollY + 120;
      let currentItem = "hero";

      for (let i = items.length - 1; i >= 0; i--) {
        if (currentScroll >= items[i].offset) {
          currentItem = items[i].id;
          break;
        }
      }
      setActiveItem(currentItem);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "System", targetId: "storytelling" },
    { label: "Capabilities", targetId: "features" },
    { label: "Transparency", targetId: "transparency" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 md:px-8 select-none ${
          isScrolled 
            ? "py-2.5 bg-[#0A0A0B]/85 backdrop-blur-md border-b border-white/[0.04] shadow-sm" 
            : "py-4.5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Left: Serif Logo Badge & Dual Weight Wordmark */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(255,255,255,0.15)] transition-transform duration-300 group-hover:scale-105">
              <span className="text-black font-serif font-extrabold text-[13px] leading-none tracking-tight select-none pt-[1px]">
                IF
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-sans font-extrabold text-[11px] tracking-[0.2em] text-white uppercase">
                INFLUENCE
              </span>
              <span className="font-sans font-light text-[11px] tracking-[0.2em] text-white/50 uppercase">
                FLOW
              </span>
            </div>
          </div>

          {/* Center: Understated Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.targetId)}
                className={`text-[10px] tracking-widest uppercase transition-colors relative py-0.5 hover:text-white font-mono ${
                  activeItem === link.targetId 
                    ? "text-white" 
                    : "text-white/45"
                }`}
              >
                {link.label}
                {activeItem === link.targetId && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right: Tactile Silver Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onContactClick}
              className="px-4 py-1.5 bg-white/[0.03] hover:bg-white/95 text-white/90 hover:text-black hover:scale-102 font-mono text-[9px] font-semibold tracking-wider rounded-full border border-white/10 hover:border-white transition-all duration-300 flex items-center gap-1.5 group cursor-pointer"
            >
              Book a Consultation
              <ArrowUpRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu triggers */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="px-4 py-2 bg-white text-black font-semibold font-mono text-[9px] tracking-wider rounded-full hover:opacity-90 transition-all cursor-pointer"
            >
              CALL
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/60 hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </motion.header>

      {/* Understated Mobile Menu (60% Apple feel) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-0 bg-[#0A0A0B] border-b border-white/[0.05] z-50 p-6 pt-24 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white/50"
            >
              <X className="w-5 h-5" />
            </button>

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.targetId)}
                className="text-left py-2 border-b border-white/[0.02] text-sm font-mono tracking-widest text-white/70 hover:text-white uppercase"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3.5 bg-white/[0.03] text-white rounded-xl text-center text-xs font-mono font-bold border border-white/10 uppercase"
            >
              Book a Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
