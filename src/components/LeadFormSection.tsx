import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, AlertCircle, ArrowRight, Sparkles, TrendingUp, Users, Target } from "lucide-react";

export default function LeadFormSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    brand: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Direct API integration with the agency's Formspree endpoint (or high-performance fallback)
      const response = await fetch("https://formspree.io/f/mzdqwdva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        // Clear standard input state on successful transmission
        setFormState({
          name: "",
          email: "",
          brand: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("[LeadFormSection Submission Exception]:", err);
      setStatus("error");
    }
  };

  return (
    <section 
      id="acquisition-blueprint-section" 
      className="py-24 md:py-32 bg-[#0C0C0E] border-t border-white/5 relative z-10 select-none overflow-hidden"
    >
      {/* Background radial gradient glow (Linear / Stripe style luxury atmospheric texture) */}
      <div 
        id="luxury-atmospheric-glow-left"
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.015] rounded-full blur-[160px] pointer-events-none" 
      />
      <div 
        id="luxury-atmospheric-glow-right"
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" 
      />

      <div 
        id="acquisition-container"
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        <div 
          id="acquisition-grid"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          
          {/* LEFT COLUMN: Authoritycopy & Agency Metrics (~$10k/month brand atmosphere) */}
          <div 
            id="agency-copy-column"
            className="lg:col-span-5 flex flex-col justify-center h-full pt-2 lg:pt-8"
          >
            <motion.div
              id="agency-badge-wrapper"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div 
                id="agency-badge"
                className="px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span className="font-mono text-[9px] text-[#A6A6AB] tracking-[0.25em] uppercase">
                  Campaign Engine v4.2
                </span>
              </div>
            </motion.div>

            <motion.h2
              id="agency-headline"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans font-medium text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-white leading-[1.05] mb-6"
            >
              Let's launch <br />
              <span className="text-[#8E8E93] font-light">something vital.</span>
            </motion.h2>

            <motion.p
              id="agency-description"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans font-light text-[#8E8E93] text-sm sm:text-base leading-relaxed max-w-md mb-10"
            >
              We engineer viral velocity, pairing premier tech, B2B SaaS, and lifestyle brands with 
              uncompromising creator networks globally. Start your blueprint below.
            </motion.p>

            {/* Micro specifications table / bento elements */}
            <motion.div 
              id="metrics-bento"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8"
            >
              <div id="metric-item-reach">
                <div className="flex items-center gap-1.5 text-white/50 mb-1">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8E8E93]">REACH</span>
                </div>
                <div className="text-xl sm:text-2xl font-sans font-medium text-white tracking-tight">120M+</div>
                <p className="text-[10px] text-[#8E8E93] mt-1 font-light">Targeted developers</p>
              </div>

              <div id="metric-item-roas">
                <div className="flex items-center gap-1.5 text-white/50 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8E8E93]">AVG ROAS</span>
                </div>
                <div className="text-xl sm:text-2xl font-sans font-medium text-white tracking-tight">2.44x</div>
                <p className="text-[10px] text-[#8E8E93] mt-1 font-light">Direct-attributed revenue</p>
              </div>

              <div id="metric-item-retention">
                <div className="flex items-center gap-1.5 text-white/50 mb-1">
                  <Target className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8E8E93]">RETENTION</span>
                </div>
                <div className="text-xl sm:text-2xl font-sans font-medium text-white tracking-tight">91%</div>
                <p className="text-[10px] text-[#8E8E93] mt-1 font-light">Long-term creator trust</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The High-Conversion Form (Linear / Stripe style aesthetic card) */}
          <div 
            id="form-card-column"
            className="lg:col-span-7 flex justify-center w-full"
          >
            <motion.div
              id="form-card-wrapper"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full max-w-xl bg-[#121214] border border-white/[0.06] rounded-[32px] p-6 sm:p-10 shadow-2xl relative overflow-hidden group"
            >
              {/* Subtle top edge specular lighting border */}
              <div 
                id="specular-card-top-glow"
                className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" 
              />

              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form
                    id="premium-conversion-form"
                    key="campaign-lead-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    
                    <div id="form-header-group" className="border-b border-white/5 pb-4">
                      <h3 id="form-card-title" className="text-lg sm:text-xl font-medium text-white tracking-tight">
                        Launch Your Parameters
                      </h3>
                      <p id="form-card-subtitle" className="text-xs text-[#8E8E93] font-light mt-1">
                        Complete this brief query to initiate brand calibration.
                      </p>
                    </div>

                    {/* TWO COLUMN ROW FOR NAME & EMAIL */}
                    <div id="form-row-contacts" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div id="field-wrapper-name">
                        <label 
                          htmlFor="form-input-name" 
                          className="block text-[9px] font-mono uppercase text-[#A6A6AB] tracking-[0.18em] mb-2 font-medium"
                        >
                          Full Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          id="form-input-name"
                          name="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="e.g. Sterling Archer"
                          className="w-full bg-[#161619] border border-white/[0.08] focus:border-white/30 focus:ring-1 focus:ring-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 outline-none transition-all duration-200"
                        />
                      </div>

                      {/* Email input */}
                      <div id="field-wrapper-email">
                        <label 
                          htmlFor="form-input-email" 
                          className="block text-[9px] font-mono uppercase text-[#A6A6AB] tracking-[0.18em] mb-2 font-medium"
                        >
                          Email Address <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          id="form-input-email"
                          name="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="e.g. sterling@isis.agency"
                          className="w-full bg-[#161619] border border-white/[0.08] focus:border-white/30 focus:ring-1 focus:ring-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* TWO COLUMN ROW FOR BRAND & BUDGET */}
                    <div id="form-row-details" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Brand/Company input */}
                      <div id="field-wrapper-brand">
                        <label 
                          htmlFor="form-input-brand" 
                          className="block text-[9px] font-mono uppercase text-[#A6A6AB] tracking-[0.18em] mb-2 font-medium"
                        >
                          Brand Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          id="form-input-brand"
                          name="brand"
                          type="text"
                          required
                          value={formState.brand}
                          onChange={handleChange}
                          placeholder="e.g. Linear"
                          className="w-full bg-[#161619] border border-white/[0.08] focus:border-white/30 focus:ring-1 focus:ring-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 outline-none transition-all duration-200"
                        />
                      </div>

                      {/* Budget FREE TEXT Input */}
                      <div id="field-wrapper-budget">
                        <label 
                          htmlFor="form-input-budget" 
                          className="block text-[9px] font-mono uppercase text-[#A6A6AB] tracking-[0.18em] mb-2 font-medium"
                        >
                          Monthly Budget <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          id="form-input-budget"
                          name="budget"
                          type="text"
                          required
                          value={formState.budget}
                          onChange={handleChange}
                          placeholder="e.g. $15k - $30k"
                          className="w-full bg-[#161619] border border-white/[0.08] focus:border-white/30 focus:ring-1 focus:ring-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* About your brand textarea */}
                    <div id="field-wrapper-message">
                      <label 
                        htmlFor="form-input-message" 
                        className="block text-[9px] font-mono uppercase text-[#A6A6AB] tracking-[0.18em] mb-2 font-medium"
                      >
                        About Your Campaign & Goals <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        id="form-input-message"
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your brand, objectives, and targeted demographics..."
                        className="w-full bg-[#161619] border border-white/[0.08] focus:border-white/30 focus:ring-1 focus:ring-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 outline-none transition-all duration-200 resize-none leading-relaxed"
                      />
                    </div>

                    {/* Submit CTA */}
                    <div id="submit-wrapper" className="pt-2">
                      <button
                        id="form-launch-campaign-btn"
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full bg-white text-black font-semibold text-xs py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-[#E5E5E5] transition-all duration-300 disabled:opacity-30 cursor-pointer uppercase tracking-widest font-mono group"
                      >
                        {status === "submitting" ? (
                          <>
                            Verifying Parameters...
                            <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          </>
                        ) : (
                          <>
                            Launch My Campaign
                            <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      {status === "error" && (
                        <div 
                          id="submit-error-banner"
                          className="mt-4 flex items-start gap-2 text-red-400 font-mono text-[9px] uppercase tracking-wide bg-red-400/[0.04] border border-red-400/10 p-3.5 rounded-xl"
                        >
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-red-400" />
                          <span>Transmission encounter. Please verify parameters or retry.</span>
                        </div>
                      )}
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    id="success-message-canvas"
                    key="campaign-success-canvas"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 flex flex-col items-center justify-center"
                  >
                    <div 
                      id="success-checkmark-outer"
                      className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.15)] animate-pulse"
                    >
                      <Check className="w-6 h-6" />
                    </div>
                    
                    <h3 id="success-header-title" className="text-2xl font-sans font-medium text-white tracking-tight mb-2">
                      Transmission Confirmed
                    </h3>
                    <p id="success-header-desc" className="text-xs text-[#8E8E93] font-light max-w-sm mx-auto leading-relaxed mb-8">
                      Your scaling blueprint has been safely synchronized. A dedicated campaign strategist will reach out to you within the upcoming business cycle.
                    </p>

                    {/* Decorative luxury metadata blueprint lines */}
                    <div 
                      id="success-status-blueprint"
                      className="p-5 bg-[#161619] border border-white/5 rounded-2xl text-left w-full font-mono text-[9px] text-[#8E8E93] space-y-2.5 max-w-sm"
                    >
                      <div className="flex justify-between">
                        <span>CALIBRATION RATIO:</span>
                        <span className="text-white font-medium">99.8% READY</span>
                      </div>
                      <div className="flex justify-between">
                        <span>API STATUS:</span>
                        <span className="text-cyan-400 font-medium">SYNCHRONIZED</span>
                      </div>
                      <div className="flex justify-between">
                        <span>PRIORITY ROUTE:</span>
                        <span className="text-white font-bold">VIP_LEAD_ACQUISITION</span>
                      </div>
                    </div>

                    <button
                      id="success-restart-form-btn"
                      onClick={() => setStatus("idle")}
                      className="mt-8 px-6 py-2.5 bg-white/[0.03] hover:bg-white/[0.06] text-[#A6A6AB] hover:text-white text-[10px] font-mono rounded-full transition-colors border border-white/10 uppercase tracking-widest cursor-pointer"
                    >
                      Transmit new blueprint
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
