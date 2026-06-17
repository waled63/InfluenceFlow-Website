import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070708] border-t border-white/[0.03] py-12 px-6 md:px-12 relative z-10 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & status */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
            <span className="font-sans font-medium text-xs tracking-widest text-white uppercase">
              InfluenceFlow
            </span>
          </div>
          <span className="font-mono text-[8px] text-white/30 lowercase tracking-wider">
            dfy growth infrastructure &bull; all engines active
          </span>
        </div>

        {/* Center: Clean links */}
        <div className="flex items-center gap-6 text-[9px] font-mono text-white/40">
          <a href="#storytelling" className="hover:text-white transition-colors uppercase tracking-widest">SYSTEM</a>
          <a href="#features" className="hover:text-white transition-colors uppercase tracking-widest">CAPABILITIES</a>
          <a href="#studies" className="hover:text-white transition-colors uppercase tracking-widest">RESULTS</a>
          <span className="text-white/10">|</span>
          <span className="tracking-widest">&copy; {currentYear} INFLUENCEFLOW SYSTEM</span>
        </div>

        {/* Right Side: Scroll to top system */}
        <button
          onClick={scrollUp}
          className="p-3 bg-white/[0.02] border border-white/10 rounded-full hover:border-white/20 text-white/40 hover:text-white transition-all text-[9px] flex items-center gap-2 font-mono group cursor-pointer"
        >
          <span>ASCEND</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:translate-y-[-2px] transition-transform text-white/50" />
        </button>

      </div>
    </footer>
  );
}
