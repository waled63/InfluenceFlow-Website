import { motion } from "motion/react";
import { ShieldAlert, ArrowUpRight, Compass, Key, Users } from "lucide-react";

export default function TransparencySection() {
  const corePrinciples = [
    {
      icon: Compass,
      title: "No Middlemen",
      description: "You work directly with the partners executing your campaigns. Zero communication lag."
    },
    {
      icon: Key,
      title: "Clean Attribution",
      description: "Every sign-up and pipeline event is tracked with verifiable, technical funnel metrics."
    },
    {
      icon: Users,
      title: "Manual Sourcing",
      description: "No generic list scraping. We personally audit and recruit technical creators with verified audience overlap."
    }
  ];

  return (
    <section
      id="transparency"
      className="relative py-28 md:py-40 bg-[#0A0A0B] border-b border-white/[0.04] overflow-hidden select-none"
    >
      {/* Floating abstract dark radial lighting flare */}
      <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] bg-cyan-500/[0.015] rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Understated Section Header Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10 md:mb-16 text-left"
        >
          <span className="font-mono text-[9px] text-[#A6A6AB] tracking-[0.3em]">03 / OUR POSITION</span>
          <span className="h-[1px] w-12 bg-white/10" />
          <span className="font-mono text-[9px] text-white/50 uppercase">AUTHENTIC INTEGRITY</span>
        </motion.div>

        {/* Headline */}
        <div className="mb-16 md:mb-24 text-left max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-white leading-[1.1]"
          >
            We are early-stage.<br />
            <span className="text-[#8E8E93] font-light">Here is why that is your competitive advantage.</span>
          </motion.h2>
        </div>

        {/* Dual column: Narrative copy (Left) vs. Structural Process/Principles (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Paragraph copy (Left Column) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col space-y-7 text-left">
            <motion.p 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-40px" }}
               transition={{ duration: 0.6 }}
               className="font-sans font-medium text-white text-base sm:text-lg md:text-xl leading-relaxed"
            >
              We don't buy legacy databases or recycle generic campaign metrics. We launched <span className="text-white underline decoration-white/20 underline-offset-4">InfluenceFlow</span> with a single focus: to execute direct, high-impact technical influencer campaigns without agent bloat or overhead.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-light text-[#8E8E93] text-sm sm:text-base leading-relaxed"
            >
              We strictly cap our active partner roster to three brands at any given time. This guarantees that your campaigns receive undivided expert focus. We personally handle developer sourcing, write custom high-context briefings, and deploy tailored post-click tracking.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans font-light text-[#8E8E93] text-sm sm:text-base leading-relaxed"
            >
              No lengthy procurement cycles. No vague vanity parameters like estimated reach or impressions. Just direct action, absolute transparency, and clean, technical campaign execution.
            </motion.p>
          </div>

          {/* Process Metrics/Principles card lists (Right Column) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-start space-y-5">
            
            <span className="font-mono text-[9px] text-white/40 tracking-wider uppercase text-left mb-2 block">
              OUR PARAMETERS
            </span>

            <div className="space-y-4">
              {corePrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 bg-white/[0.015] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 text-left space-y-2 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/[0.03] group-hover:bg-white/[0.06] rounded-lg transition-colors">
                        <Icon className="w-4 h-4 text-white/70" />
                      </div>
                      <h4 className="font-sans text-xs font-semibold text-white tracking-wide">
                        {principle.title}
                      </h4>
                    </div>
                    <p className="font-sans font-light text-[11px] sm:text-xs text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                      {principle.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Micro-callout badge */}
            <div className="pt-3 flex">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-xl text-[10px] text-white/50 font-mono">
                <ShieldAlert className="w-3.5 h-3.5 text-white/40" />
                <span>Zero legacy overheads. Entirely aligned incentives.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
