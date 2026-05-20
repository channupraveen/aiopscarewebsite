"use client";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";

const USE_CASES = [
  "Maintenance Ticket Routing",
  "Housekeeping Automation",
  "Linen Lifecycle Tracking",
  "NABH Audit Preparation",
  "Equipment Calibration",
  "Utility Anomaly Detection",
  "Compliance Documentation",
  "Asset Performance Analytics",
];

export default function UseCasesMarquee() {
  return (
    <section className="relative bg-black overflow-hidden border-t border-white/10">
      <div
        className="max-w-[1600px] mx-auto"
        style={{ paddingLeft: '48px', paddingRight: '48px', paddingTop: '120px', paddingBottom: '120px' }}
      >
        <div className="grid lg:grid-cols-[1fr_2.2fr] gap-16 items-start">
          {/* Left — Small label with icon */}
          <Reveal>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="pt-1">
                <h4 className="text-white font-medium leading-tight" style={{ fontSize: '15px' }}>
                  Hospitals<br/>use AiOpsCare for:
                </h4>
              </div>
            </div>
          </Reveal>

          {/* Right — Vertical marquee */}
          <div
            className="relative overflow-hidden"
            style={{
              height: '380px',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
            }}
          >
            <motion.div
              animate={{ y: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="flex flex-col"
            >
              {[...USE_CASES, ...USE_CASES].map((useCase, i) => (
                <div
                  key={i}
                  className="text-white font-light leading-[1.4]"
                  style={{
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                    fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                    paddingTop: '14px',
                    paddingBottom: '14px',
                  }}
                >
                  {useCase}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
