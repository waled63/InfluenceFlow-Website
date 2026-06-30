import { motion } from "motion/react";
import { Linkedin, MessageCircle } from "lucide-react";

export default function ContactIconsSection() {
  const whatsappNum = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890";
  // Strip any non-numeric characters for valid wa.me links
  const whatsappFormatted = whatsappNum.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappFormatted}`;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/company/influenceflow";

  const contacts = [
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      href: linkedinUrl,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      href: whatsappUrl,
    },
  ];

  return (
    <>
      <motion.section 
        id="contact-channels" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-[#0A0A0B] relative z-10 select-none"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Header indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="font-mono text-[9px] text-[#A6A6AB] tracking-[0.3em] uppercase">
              05 / DIRECT CHANNELS
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-light text-[#8E8E93] text-xs sm:text-sm tracking-wide mb-8 max-w-md mx-auto"
          >
            Connect with our team directly. We maintain zero-latency communications across all channels.
          </motion.p>

          {/* Solid premium centered horizontal row */}
          <div className="flex items-center justify-center gap-5 sm:gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.id}
                  id={`contact-${contact.id}`}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col items-center cursor-pointer"
                >
                  <div 
                    className="w-14 h-14 bg-white/5 border border-white/10 rounded-[12px] flex items-center justify-center transition-all duration-300 ease-out hover:bg-[#00b4d8] hover:text-black hover:border-[#00b4d8] hover:shadow-[0_0_20px_rgba(0,180,216,0.45)] text-white/80"
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="font-mono text-[8px] tracking-[0.15em] text-[#8E8E93]/60 group-hover:text-white transition-colors uppercase mt-2">
                    {contact.label}
                  </span>
                </motion.a>
              );
            })}
          </div>

        </div>
      </motion.section>
    </>
  );
}
