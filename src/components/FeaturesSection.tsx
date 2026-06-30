import { motion } from "motion/react";
import { MoveUpRight, UserCheck, MessageSquare, Package, BarChart3 } from "lucide-react";

export default function FeaturesSection() {
  const minimalFeatures = [
    {
      id: "creator-curation",
      num: "01",
      icon: UserCheck,
      title: "Precision Matching",
      description: "We filter out vanity channels. We curate high-concept technical creators, developers, and founders whose audience profiles match your buyer persona exactly.",
      spec: "0% LIFESTYLE / 100% TECH B2B",
    },
    {
      id: "outreach-negotiation",
      num: "02",
      icon: MessageSquare,
      title: "Tactical Outreach",
      description: "We handle 100% of the cold contacts, outreach pipelines, and negotiation contracts. No endless back-and-forth emails for your in-house teams.",
      spec: "DFY CONTRACT LICENSE AGREEMENTS",
    },
    {
      id: "seeding-briefing",
      num: "03",
      icon: Package,
      title: "Directed Seeding",
      description: "We manage SaaS access keys, developer accounts, and brief creators with custom narrative lines to make sure your product value is clear and premium.",
      spec: "NARRATIVE ALIGNMENT GUIDELINES",
    },
    {
      id: "performance-tracking",
      num: "04",
      icon: BarChart3,
      title: "Conversion Tracking",
      description: "Every link has pixel attribution. We monitor signups, registrations, and direct customer conversions, shifting spend dynamically to high-performing pods.",
      spec: "CAC & LTV TELEMETRY INTERFACES",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-28 md:py-36 bg-[#0A0A0B] border-b border-white/[0.04] overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        {/* Section Heading Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10 md:mb-16"
        >
          <span className="font-mono text-[9px] text-[#A6A6AB] tracking-[0.3em]">02 / CORE CAPABILITIES</span>
          <span className="h-[1px] w-12 bg-white/10" />
          <span className="font-mono text-[9px] text-white/50 uppercase">THE END-TO-END SYSTEM</span>
        </motion.div>

        {/* Dynamic Minimalist Title & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-1 lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-white leading-[1.12]"
            >
              Growth infrastructure, <br />
              <span className="text-[#8E8E93] font-light">built for tech companies.</span>
            </motion.h2>
          </div>
          <div className="col-span-1 lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-sans font-light text-[#8E8E93] leading-relaxed max-w-[420px]"
            >
              We streamline the entire creator-led channel so you can harvest clean attention, conversion pipelines, and permanent brand authority.
            </motion.p>
          </div>
        </div>

        {/* Minimal Features 4x1 grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {minimalFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:border-white/10 hover:bg-white/[0.025] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top line with sequence number */}
                  <div className="flex items-center justify-between mb-8 border-b border-white/[0.02] pb-4">
                    <span className="font-mono text-[10px] text-white/30 font-semibold group-hover:text-white/60 transition-colors">
                      {feat.num}
                    </span>
                    <Icon className="w-4 h-4 text-white/30 group-hover:text-white/80 transition-colors" />
                  </div>

                  {/* Feature body */}
                  <h3 className="text-sm font-semibold tracking-wide text-white mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-[#8E8E93] font-sans font-light leading-relaxed mb-8">
                    {feat.description}
                  </p>
                </div>

                {/* Subdued spec caption */}
                <div className="pt-4 border-t border-white/[0.02] flex items-center justify-between">
                  <span className="font-mono text-[8px] text-white/40 tracking-wider">
                    {feat.spec}
                  </span>
                  <MoveUpRight className="w-3 h-3 text-white/0 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
