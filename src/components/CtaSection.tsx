import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface CtaSectionProps {
  onStartCampaignClick: () => void;
}

export default function CtaSection({ onStartCampaignClick }: CtaSectionProps) {
  return (
    <section
      id="cta"
      className="relative py-32 md:py-48 bg-[#0A0A0B] overflow-hidden flex items-center justify-center text-center select-none"
    >
      {/* Absolute center large soft lighting flare */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-white/[0.015] rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center">
        
        {/* Simple visual microtag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="font-mono text-[9px] text-[#A6A6AB] tracking-[0.3em] uppercase">
            04 / PARTNERSHIP
          </span>
        </motion.div>

        {/* Big centered emotional text */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans font-medium text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.1] text-white mb-8"
        >
          Let’s build your <br />
          creator pipeline.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans font-light text-[#8E8E93] text-sm sm:text-base max-w-[500px] mx-auto leading-relaxed mb-12 tracking-wide"
        >
          No complex contracts or vague vanity reports. Just direct, high-efficiency technical creator campaigns managed entirely for your product.
        </motion.p>

        {/* Tactile button trigger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-4 w-full"
        >
          <button
            onClick={onStartCampaignClick}
            className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-[#E5E5E5] text-black font-semibold text-xs tracking-widest font-mono uppercase rounded-full shadow-sm transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            Book a Consultation
            <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <span className="font-mono text-[8px] text-white/30 uppercase tracking-[0.15em] pt-4">
            Currently accepting 3 active partner brands.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
