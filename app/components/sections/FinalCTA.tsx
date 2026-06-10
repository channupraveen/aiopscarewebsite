"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../ui/Reveal";

const CTA_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    alt: "Medical equipment maintenance and asset management",
    label: "Asset & Maintenance Management",
  },
  {
    src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1200&auto=format&fit=crop",
    alt: "Hospital housekeeping and infection control",
    label: "Housekeeping & Infection Control",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    alt: "Operational dashboards and compliance reporting",
    label: "Compliance & Analytics",
  },
];

export default function FinalCTA() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % CTA_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-black overflow-hidden border-t border-white/10">
      <div
        className="max-w-[1600px] mx-auto"
        style={{ paddingLeft: '48px', paddingRight: '48px', paddingTop: '160px', paddingBottom: '160px' }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Sliding images */}
          <Reveal>
            <div className="flex justify-center">
            <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl" style={{ aspectRatio: '4 / 5' }}>
              <AnimatePresence mode="sync">
                <motion.img
                  key={current}
                  src={CTA_IMAGES[current].src}
                  alt={CTA_IMAGES[current].alt}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Dark + blue grade so it blends into the black section */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.75) 100%), linear-gradient(135deg, rgba(37,99,235,0.25) 0%, transparent 60%)',
                }}
              />
              <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

              {/* Module label */}
              <div className="absolute left-0 right-0 flex justify-center" style={{ bottom: '44px' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="text-white/90 tracking-[0.15em] uppercase font-medium"
                    style={{ fontSize: '11px' }}
                  >
                    {CTA_IMAGES[current].label}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Dots */}
              <div className="absolute left-0 right-0 flex items-center justify-center gap-2" style={{ bottom: '20px' }}>
                {CTA_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
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
