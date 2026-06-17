import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Loader2, Sparkles, Terminal, FileText } from "lucide-react";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "call" | "campaign";
}

const formatBudget = (value: number): string => {
  if (value >= 100000) {
    return "$100,000+ / mo";
  }
  return `$${value.toLocaleString()} / mo`;
};

const objectives = [
  "Developer Audience Capture",
  "B2B Venture Pipeline Build",
  "Consumer Seeding & Velocity",
  "Global Creator Distribution",
];

const bottleneckOptions = [
  "Cold Infrastructure Decay",
  "Data Enrichment Gaps",
  "Pipeline Stagnation",
  "Creator Attribution Friction",
  "Static Creative Fatigue",
  "Scale Compliance Risks",
];

export default function BookCallModal({ isOpen, onClose, initialType = "call" }: BookCallModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    budget: "$10,000 / mo",
    objective: objectives[0],
    message: "",
  });

  const [selectedBottlenecks, setSelectedBottlenecks] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic budget selection controls
  const [budgetVal, setBudgetVal] = useState<number>(10000);
  const [budgetInput, setBudgetInput] = useState<string>("10000");

  // Success-state preservation storage
  const [submittedName, setSubmittedName] = useState("");
  const [submittedBrand, setSubmittedBrand] = useState("");
  const [submittedBudget, setSubmittedBudget] = useState("");
  const [submittedObjective, setSubmittedObjective] = useState("");

  const handleSliderChange = (val: number) => {
    setBudgetVal(val);
    setBudgetInput(val.toString());
    setFormData((prev) => ({
      ...prev,
      budget: formatBudget(val),
    }));
  };

  const handleInputChange = (valStr: string) => {
    setBudgetInput(valStr);
    const parsed = parseInt(valStr, 10);
    if (!isNaN(parsed) && parsed >= 0) {
      setBudgetVal(parsed);
      setFormData((prev) => ({
        ...prev,
        budget: formatBudget(parsed),
      }));
    }
  };

  const handleInputBlur = () => {
    let parsed = parseInt(budgetInput, 10);
    if (isNaN(parsed) || parsed < 1000) {
      parsed = 1000;
    }
    setBudgetVal(parsed);
    setBudgetInput(parsed.toString());
    setFormData((prev) => ({
      ...prev,
      budget: formatBudget(parsed),
    }));
  };

  const toggleBottleneck = (bottleneck: string) => {
    setSelectedBottlenecks((prev) =>
      prev.includes(bottleneck)
        ? prev.filter((item) => item !== bottleneck)
        : [...prev, bottleneck]
    );
  };

  // 🛡️ DEBUG INSTRUMENTATION & LIFECYCLE CONTROLS
  const renderCount = useRef(0);
  renderCount.current += 1;
  console.log(`[BookCallModal DEPLOY] Render #${renderCount.current} | isOpen prop: ${isOpen}`);

  useEffect(() => {
    console.log("[BookCallModal DEPLOY] Component MOUNTED");
    return () => {
      console.log("[BookCallModal DEPLOY] Component UNMOUNTED");
    };
  }, []);

  // 🛡️ CRITICAL FIX: Persistent lock stops any unexpected reset/close loops
  const hasInitialized = useRef(false);
  const initialTypeRef = useRef(initialType);

  // Sync initialType to a ref when updated
  useEffect(() => {
    initialTypeRef.current = initialType;
  }, [initialType]);

  const handleClose = (reason: string) => {
    console.log(`[BookCallModal DEPLOY] Close requested by reason: "${reason}". Invoking onClose prop.`);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      if (!hasInitialized.current) {
        console.log("[BookCallModal DEPLOY] Initializing form state once on transition to OPEN status");
        setSubmitted(false);
        setIsSubmitting(false);
        setBudgetVal(15000);
        setBudgetInput("15000");
        setSelectedBottlenecks([]);
        setFormData({
          name: "",
          email: "",
          brand: "",
          budget: "$15,000 / mo",
          objective: objectives[0],
          message: "",
        });
        hasInitialized.current = true;
      }
    } else {
      if (hasInitialized.current) {
        console.log("[BookCallModal DEPLOY] Modal transitioned to CLOSED status. Resetting hasInitialized ref lock.");
        hasInitialized.current = false;
      }
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[BookCallModal DEPLOY] Form submit triggered with parameters", formData, "and bottlenecks", selectedBottlenecks);
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mzdqwdva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          submissionType: initialTypeRef.current,
          selectedBottlenecks,
          ...formData,
        }),
      });

      if (response.ok) {
        console.log("[BookCallModal DEPLOY] Lead capture successful.");
        setSubmittedName(formData.name);
        setSubmittedBrand(formData.brand);
        setSubmittedBudget(formData.budget);
        setSubmittedObjective(formData.objective);
        setSubmitted(true);
      } else {
        console.error("[BookCallModal DEPLOY] Formspree error responses status:", response.status);
        alert("Submission transmission failure. Please verify network routing and retry.");
      }
    } catch (err) {
      console.error("[BookCallModal DEPLOY] Form submission exception:", err);
      alert("Submission communication exceptional failure. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="booking-modal-portal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ WebkitOverflowScrolling: "touch" }}
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-black/85 backdrop-blur-lg grid place-items-center p-4 cursor-pointer pointer-events-auto"
          onClick={(e) => {
            if (!isSubmitting) {
              handleClose("Backdrop click");
            }
          }}
        >
          {/* Modal Card wrapper */}
          <motion.div
            id="booking-modal-card"
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ type: "spring", duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#0C0C0E] border border-white/[0.08] rounded-[32px] shadow-3xl z-10 p-6 md:p-10 select-auto cursor-default max-h-none md:max-h-[90vh] overflow-y-visible md:overflow-y-auto scrollbar-none"
          >
            {/* Minimalist Close Element */}
            <button
              id="booking-modal-close-x"
              type="button"
              onClick={() => handleClose("Close Button X")}
              disabled={isSubmitting}
              className="absolute top-6 right-6 p-2 text-white/30 hover:text-white hover:bg-white/[0.04] rounded-full transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Editorial Luxury Header */}
            <div id="booking-modal-header" className="mb-8 border-b border-white/5 pb-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8E8E93]">
                  AGENCY GROWTH ARCHITECTURE
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white font-sans leading-tight">
                Initiate Growth Protocol
              </h3>
              <p className="text-xs text-[#8E8E93] font-light mt-1.5 leading-relaxed">
                Define your engineering parameters and system constraints below to synchronize alignment.
              </p>
            </div>

            <div id="booking-modal-content">
              {!submitted ? (
                <form id="booking-blueprint-form" onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* TWO-COLUMN GRID ARCHITECTURE */}
                  <div id="booking-core-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    
                    {/* LEFT COLUMN: 01 / IDENTITY CONTROLS */}
                    <div id="booking-column-operator" className="space-y-5">
                      <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                        <span className="font-mono text-[9px] text-[#00b4d8] font-bold">01 /</span>
                        <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/50 font-bold">IDENTITY CONTROLS</span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label htmlFor="modal-input-name" className="block text-[8px] font-mono uppercase text-white/40 tracking-[0.18em] mb-2 font-semibold">
                            Operator Name <span className="text-[#00b4d8]">*</span>
                          </label>
                          <input
                            id="modal-input-name"
                            type="text"
                            required
                            disabled={isSubmitting}
                            placeholder="e.g. Sterling Archer"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#121214] border border-white/[0.08] focus:border-white/30 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 outline-none transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label htmlFor="modal-input-email" className="block text-[8px] font-mono uppercase text-white/40 tracking-[0.18em] mb-2 font-semibold">
                            Work Email <span className="text-[#00b4d8]">*</span>
                          </label>
                          <input
                            id="modal-input-email"
                            type="email"
                            required
                            disabled={isSubmitting}
                            placeholder="e.g. s.archer@isis.agency"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#121214] border border-white/[0.08] focus:border-white/30 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 outline-none transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label htmlFor="modal-input-brand" className="block text-[8px] font-mono uppercase text-white/40 tracking-[0.18em] mb-2 font-semibold">
                            Enterprise / Brand Entity <span className="text-[#00b4d8]">*</span>
                          </label>
                          <input
                            id="modal-input-brand"
                            type="text"
                            required
                            disabled={isSubmitting}
                            placeholder="e.g. Linear, Stripe, or Vercel"
                            value={formData.brand}
                            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                            className="w-full bg-[#121214] border border-white/[0.08] focus:border-white/30 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 outline-none transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: 02 / CAPITAL VELOCITY */}
                    <div id="booking-column-scale" className="space-y-5">
                      <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                        <span className="font-mono text-[9px] text-[#00b4d8] font-bold">02 /</span>
                        <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/50 font-bold">CAPITAL VELOCITY</span>
                      </div>

                      <div className="space-y-4">
                        {/* Synchronized dual numeric input and range slider */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label htmlFor="modal-input-budget" className="block text-[8px] font-mono uppercase text-white/40 tracking-[0.18em] font-semibold">
                              Monthly Growth Budget
                            </label>
                            <span className="text-[10px] font-mono text-[#00b4d8] font-bold uppercase tracking-wide">
                              {formatBudget(budgetVal)}
                            </span>
                          </div>

                          <div className="space-y-3 bg-[#121214] border border-white/[0.08] p-4 rounded-2xl">
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-mono text-white/30">$</span>
                              <input
                                id="modal-input-budget"
                                type="number"
                                min="1000"
                                disabled={isSubmitting}
                                value={budgetInput}
                                onChange={(e) => handleInputChange(e.target.value)}
                                onBlur={handleInputBlur}
                                className="w-full bg-[#0C0C0E]/60 border border-white/[0.08] focus:border-white/20 rounded-xl pl-8 pr-12 py-3 text-xs font-mono text-white outline-none transition-colors"
                              />
                              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-mono text-white/35 font-semibold">USD / MO</span>
                            </div>

                            <div className="space-y-1.5 pt-1">
                              <input
                                type="range"
                                min="1000"
                                max="100000"
                                step="1000"
                                disabled={isSubmitting}
                                value={budgetVal > 100000 ? 100000 : budgetVal}
                                onChange={(e) => handleSliderChange(Number(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00b4d8] outline-none"
                              />
                              <div className="flex justify-between text-[7.5px] font-mono text-white/20">
                                <span>$1,000</span>
                                <span>$50,000</span>
                                <span>$100,000+</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Objectives Select Selector */}
                        <div>
                          <label htmlFor="modal-select-objective" className="block text-[8px] font-mono uppercase text-white/40 tracking-[0.18em] mb-2 font-semibold">
                            Primary Target Focus
                          </label>
                          <select
                            id="modal-select-objective"
                            disabled={isSubmitting}
                            value={formData.objective}
                            onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                            className="w-full bg-[#121214] border border-white/[0.08] focus:border-white/30 rounded-xl px-4 py-3.5 text-xs text-white outline-none transition-colors disabled:opacity-50 cursor-pointer font-sans"
                          >
                            {objectives.map((obj) => (
                              <option key={obj} value={obj} className="bg-[#121214] text-white">
                                {obj}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* BOTTOM PANEL: 03 / OPERATIONAL BOTTLENECKS */}
                  <div id="booking-panel-diagnostic" className="border-t border-white/5 pt-6 space-y-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[9px] text-[#00b4d8] font-bold">03 /</span>
                      <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/50 font-bold">OPERATIONAL BOTTLENECKS</span>
                      <span className="text-[9px] font-mono text-white/25">(MULTI-SELECT ARCHITECTURE)</span>
                    </div>

                    <div id="diagnostic-options-grid" className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {bottleneckOptions.map((opt) => {
                        const isSelected = selectedBottlenecks.includes(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            disabled={isSubmitting}
                            onClick={() => toggleBottleneck(opt)}
                            className={`px-4 py-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-white/[0.06] border-white/30 text-white shadow-lg"
                                : "bg-[#121214] border-white/5 text-white/[0.4] hover:text-white/80 hover:border-white/15"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-sans tracking-tight font-medium">{opt}</span>
                              <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isSelected ? "bg-[#00b4d8] animate-pulse" : "bg-white/10"}`} />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* BASE PROJECTS NOTES */}
                  <div id="booking-panel-notes" className="border-t border-white/5 pt-6">
                    <label htmlFor="modal-textarea-context" className="block text-[8px] font-mono uppercase text-white/40 tracking-[0.18em] mb-2 font-semibold">
                      Explicit Deployment Parameters (Context Area)
                    </label>
                    <textarea
                      id="modal-textarea-context"
                      rows={3}
                      disabled={isSubmitting}
                      placeholder="Share current performance metrics, pipeline decay patterns, or asset directories..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#121214] border border-white/[0.08] focus:border-white/30 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 outline-none transition-colors resize-none disabled:opacity-50 leading-relaxed font-sans"
                    />
                  </div>

                  {/* Launch Trigger Grid */}
                  <div id="booking-submit-wrapper">
                    <button
                      id="booking-blueprint-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black font-semibold text-xs py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-[#E5E5E5] transition-all duration-300 cursor-pointer uppercase tracking-widest font-mono disabled:opacity-40"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-black" />
                          Calibrating Acquisition Model...
                        </>
                      ) : (
                        "Launch Growth Blueprint"
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                /* SOPHISTICATED CONFIRMATION & TELEMETRY MODULE */
                <motion.div
                  id="booking-confirmation-feedback animate-fade-in"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 flex flex-col items-center justify-center"
                >
                  <div 
                    id="success-pulse-check"
                    className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-[#00b4d8] mb-6 shadow-[0_0_25px_rgba(34,211,238,0.15)] animate-pulse"
                  >
                    <Check className="w-6 h-6" />
                  </div>
                  
                  <h4 id="success-pulse-title" className="text-2xl font-medium text-white mb-2 tracking-tight">
                    Parameters Locked. Sys Queue: Active Review.
                  </h4>
                  <p id="success-pulse-paragraph" className="text-xs text-white/40 max-w-lg mx-auto leading-relaxed mb-8 font-light">
                    Perfect, <span className="text-white font-medium">{submittedName}</span>. We've recorded your scaling targets for <span className="text-[#00b4d8] font-medium font-mono">{submittedBrand}</span>. One of our operational growth engineers will analyze your parameters and dispatch an audit shortly.
                  </p>

                  {/* Telemetry metadata block */}
                  <div 
                    id="success-transmission-logs"
                    className="p-6 bg-[#121214] border border-white/[0.08] rounded-2xl text-left w-full max-w-md font-mono text-[9px] text-[#8E8E93] space-y-3"
                  >
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-1">
                      <Terminal className="w-3.5 h-3.5 text-[#00b4d8]" />
                      <span className="font-bold text-white uppercase tracking-wider">SYSTEM CALIBRATION TELEMETRY</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CAPITAL FLOW VELOCITY:</span>
                      <span className="text-white">{submittedBudget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TARGET ACQUISITION VECTOR:</span>
                      <span className="text-white/70">{submittedObjective}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>BOTTLENECKS CAPTURED:</span>
                      <span className="text-[#00b4d8] font-bold">{selectedBottlenecks.length > 0 ? `${selectedBottlenecks.length} NODES` : "DEFAULT SET"}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/5 pt-3 mt-1.5">
                      <span>QUEUE ROUTING TARGET:</span>
                      <span className="text-[#00b4d8] font-bold uppercase tracking-wider animate-pulse">DEPLOYMENT_STAGE_A</span>
                    </div>
                  </div>

                  <button
                    id="success-close-window-btn"
                    type="button"
                    onClick={() => handleClose("Success confirmation close button")}
                    className="mt-8 px-6 py-2.5 bg-white/[0.03] hover:bg-white/[0.06] text-white/50 hover:text-white text-[10px] font-mono rounded-full transition-colors border border-white/10 uppercase tracking-widest cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
