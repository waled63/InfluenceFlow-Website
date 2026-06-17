import { motion } from "motion/react";
import { Compass, Search, Terminal, BarChart3 } from "lucide-react";

export default function StorytellingSection() {
  const steps = [
    {
      id: "01",
      icon: Compass,
      title: "Strategy",
      description: "We define your target developer personas and design a custom campaign playbook. We focus on real product utility and hands-on demonstrations rather than scripted copy."
    },
    {
      id: "02",
      icon: Search,
      title: "Influencer Sourcing",
      description: "We manually audit and review tech creators, engineers, and founders who have highly relevant audiences. We verify engagement metrics and audience quality, avoiding generic databases."
    },
    {
      id: "03",
      icon: Terminal,
      title: "Campaign Execution",
      description: "Our team manages communication, legal agreements, briefs, and video quality checks. We work closely with creators to guarantee your tool's features are presented accurately and cleanly."
    },
    {
      id: "04",
      icon: BarChart3,
      title: "Reporting",
      description: "We supply clear post-campaign analytics tracking signups, active trial users, and engagement. Our team shares verbatim feedback and verifiable reference paths with your core team."
    }
  ];

  return (
    <section
      id="storytelling"
      className="relative py-24 md:py-36 bg-[#0A0A0B] border-b border-white/[0.04] overflow-hidden select-none"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Index Marker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10 md:mb-16 text-left"
        >
          <span className="font-mono text-[9px] text-[#A6A6AB] tracking-[0.3em]">01 / METHOD</span>
          <span className="h-[1px] w-12 bg-white/10" />
          <span className="font-mono text-[9px] text-white/50 uppercase">How We Work</span>
        </motion.div>

        {/* Section Title */}
        <div className="mb-16 md:mb-24 text-left max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-white leading-[1.15]"
          >
            A complete marketing pipeline.<br />
            <span className="text-[#8E8E93] font-light">From strategy to direct execution.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-light text-[#8E8E93] text-sm sm:text-base mt-6 leading-relaxed max-w-xl"
          >
            We operate as an extension of your growth team, taking care of the operational workload so your founders and engineers can stay entirely focused on building product.
          </motion.p>
        </div>

        {/* 4 Steps Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white/[0.015] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Step Code Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-2.5 bg-white/[0.03] group-hover:bg-white/[0.06] rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                      <Icon className="w-4 h-4 text-white/70" />
                    </div>
                    <span className="font-mono text-[10px] text-white/30 group-hover:text-white/50 transition-colors font-medium">
                      STEP {step.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-sans text-sm font-semibold text-white tracking-wide mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans font-light text-xs text-white/45 leading-relaxed group-hover:text-white/60 transition-all duration-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
