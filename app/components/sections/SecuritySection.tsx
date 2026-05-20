"use client";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";

const BADGES = [
  { label: "NABH Aligned" },
  { label: "HIPAA Grade" },
  { label: "SOC 2 Ready" },
  { label: "ISO 27001" },
  { label: "Encrypted Data" },
  { label: "Role-Based Access" },
];

export default function SecuritySection() {
  return (
    <section className="relative bg-black overflow-hidden border-t border-white/10">
      <div
        className="max-w-[1600px] mx-auto"
        style={{ paddingLeft: 'clamp(20px, 4vw, 48px)', paddingRight: 'clamp(20px, 4vw, 48px)', paddingTop: 'clamp(80px, 12vw, 140px)', paddingBottom: 'clamp(50px, 8vw, 80px)' }}
      >
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          {/* Left — small label */}
          <Reveal>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12 11 14 15 10" />
                </svg>
              </div>
              <div className="pt-1">
                <h4 className="text-white font-medium leading-tight" style={{ fontSize: '15px' }}>
                  Enterprise Grade Security<br/>is at the core of our<br/>operating thesis
                </h4>
              </div>
            </div>
          </Reveal>

          {/* Right — Big serif text */}
          <div>
            <Reveal>
              <h3
                className="text-white font-light leading-[1.2] tracking-[-0.02em] mb-8 md:mb-12 max-w-[900px]"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: 'clamp(1.4rem, 3.2vw, 2.75rem)',
                }}
              >
                A secure, compliant platform with flexible deployment—on-prem, VPC, or managed—featuring encrypted data, isolated execution, customer-owned credentials, and continuous HIPAA, SOC 2, and NABH alignment.
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href="#security"
                className="inline-flex items-center gap-2.5 text-white tracking-[0.12em] uppercase border border-white/30 hover:border-white/60 transition-all duration-300"
                style={{ fontSize: '12px', padding: '12px 22px' }}
              >
                More about security
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom badges — grid on mobile, marquee on desktop */}
      <div className="border-t border-white/10">
        {/* Mobile: wrapped grid */}
        <div
          className="md:hidden grid grid-cols-2 gap-4"
          style={{ padding: 'clamp(30px, 5vw, 50px) clamp(20px, 4vw, 48px)' }}
        >
          {BADGES.map((badge, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12 11 14 15 10" />
                </svg>
              </div>
              <span className="text-white/70 text-[13px]">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Desktop: scrolling marquee */}
        <div
          className="hidden md:block overflow-hidden"
          style={{ paddingTop: '50px', paddingBottom: '50px' }}
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...BADGES, ...BADGES, ...BADGES].map((badge, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12 11 14 15 10" />
                  </svg>
                </div>
                <span className="text-white/70" style={{ fontSize: '15px' }}>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
