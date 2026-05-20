"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564473185935-58113cba1e80?q=80&w=2232&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* Content container — with strict inline padding */}
      <div
        className="relative z-10 w-full h-full max-w-[1600px] mx-auto flex flex-col justify-center"
        style={{ paddingLeft: '48px', paddingRight: '48px', paddingTop: '120px', paddingBottom: '60px' }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 h-full pt-20">
          {/* Left — Large Typography */}
          <div className="flex-1 max-w-[800px] flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-light leading-[1.05] tracking-[-0.025em] text-white mb-8"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              }}
            >
              The AI Platform
              <br />
              for Hospital
              <br />
              Operations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/65 leading-relaxed mb-8"
              style={{ fontSize: '16px', maxWidth: '520px' }}
            >
              Leading hospitals trust AiOpsCare to automate complex
              operational tasks so their teams can focus on outcomes, not obstacles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a
                href="#demo"
                className="inline-flex items-center gap-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium tracking-[0.15em] uppercase transition-all duration-300"
                style={{ fontSize: '13px', padding: '16px 28px' }}
              >
                Request a Demo
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </motion.div>
          </div>

          {/* Right — Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hidden lg:block shrink-0 self-end"
            style={{ width: '380px' }}
          >
            <div
              className="rounded-2xl overflow-hidden backdrop-blur-2xl bg-white/[0.07] border border-white/[0.08]"
              style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '40px', paddingBottom: '40px' }}
            >
              <div className="flex justify-center mb-7">
                <div className="w-14 h-14 rounded-2xl bg-[#2563eb] flex items-center justify-center shadow-[0_4px_30px_rgba(37,99,235,0.4)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>

              <p
                className="text-center text-white/85 leading-[1.4] tracking-[-0.01em] mb-8"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontSize: '22px',
                }}
              >
                Introducing AiOpsCare,
                <br />
                the AI platform for
                <br />
                hospital operations
              </p>

              <div className="flex justify-center">
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2.5 text-white/60 hover:text-white tracking-[0.15em] uppercase border border-white/15 hover:border-white/30 rounded-full transition-all duration-300"
                  style={{ fontSize: '12px', padding: '12px 24px' }}
                >
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
