"use client";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative bg-black overflow-hidden border-t border-white/10">
      <div
        className="max-w-[1600px] mx-auto"
        style={{ paddingLeft: '48px', paddingRight: '48px', paddingTop: '160px', paddingBottom: '160px' }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Illustration */}
          <Reveal>
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563eb]/20 via-[#06b6d4]/10 to-transparent blur-3xl" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="relative w-full h-full"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <radialGradient id="logoGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="url(#logoGrad)" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="url(#logoGrad)" strokeWidth="0.5" opacity="0.5" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="url(#logoGrad)" strokeWidth="0.5" opacity="0.7" />
                  <circle cx="100" cy="100" r="20" fill="url(#logoGrad)" opacity="0.9" />
                </svg>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-[#2563eb] flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.5)]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — Text + CTA */}
          <div>
            <Reveal>
              <h2
                className="text-white font-light leading-[1.1] tracking-[-0.025em] mb-8"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                }}
              >
                Ready to transform how your hospital operates?
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="text-white/60 leading-[1.6] mb-10 max-w-[500px]"
                style={{ fontSize: '17px' }}
              >
                Give valuable time back to your maintenance teams, housekeeping staff, and administrators to focus on what matters most: patient care.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#demo"
                className="inline-flex items-center gap-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium tracking-[0.15em] uppercase transition-all duration-300"
                style={{ fontSize: '13px', padding: '16px 28px' }}
              >
                Request a Demo
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
