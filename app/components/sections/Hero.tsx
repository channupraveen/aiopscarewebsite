"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-bleed video background */}
      <div className="absolute inset-0">
        {/* Fallback image while video loads */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564473185935-58113cba1e80?q=80&w=2232&auto=format&fit=crop')`,
          }}
        />

        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/videos/vedio.mp4" type="video/mp4" />
        </video>

        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Content container */}
      <div
        className="relative z-10 w-full h-full max-w-[1600px] mx-auto flex flex-col justify-center min-h-screen"
        style={{ paddingLeft: 'clamp(20px, 4vw, 48px)', paddingRight: 'clamp(20px, 4vw, 48px)', paddingTop: 'clamp(100px, 15vw, 120px)', paddingBottom: 'clamp(40px, 5vw, 60px)' }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 h-full pt-0 md:pt-20">
          {/* Left — Large Typography */}
          <div className="flex-1 max-w-[800px] flex flex-col justify-center items-center text-center md:items-start md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-light leading-[1.08] tracking-[-0.025em] text-white mb-6 md:mb-8"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: 'clamp(2rem, 8vw, 5rem)',
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
              className="text-white/65 leading-relaxed mb-6 text-sm md:text-base"
              style={{ maxWidth: '520px' }}
            >
              Leading hospitals trust AiOpsCare to automate complex
              operational tasks so their teams can focus on outcomes, not obstacles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{ marginTop: '16px' }}
            >
              <a
                href="#demo"
                className="inline-flex items-center gap-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium tracking-[0.15em] uppercase transition-all duration-300 text-[12px] md:text-[13px]"
                style={{ padding: '14px 24px' }}
              >
                Request a Demo
                <span className="text-[15px] font-light">&gt;</span>
              </a>
            </motion.div>
          </div>

          {/* Right — Glass Card — hidden on mobile */}
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
