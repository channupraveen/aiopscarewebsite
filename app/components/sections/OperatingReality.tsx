"use client";
import Reveal from "../ui/Reveal";

export default function OperatingReality() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
      </div>

      <div
        className="relative z-10 max-w-[1600px] mx-auto"
        style={{ paddingLeft: '48px', paddingRight: '48px', paddingTop: '160px', paddingBottom: '160px' }}
      >
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left — small label */}
          <Reveal>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="pt-1">
                <h4 className="text-white font-medium leading-tight" style={{ fontSize: '15px' }}>
                  The Operating<br/>Reality
                </h4>
              </div>
            </div>
          </Reveal>

          {/* Right — Big serif text */}
          <div>
            <Reveal>
              <h3
                className="text-white font-light leading-[1.15] tracking-[-0.02em] mb-16 max-w-[900px]"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: 'clamp(2rem, 4vw, 3.75rem)',
                }}
              >
                Healthcare operations have always depended on people to bridge the gaps that technology couldn&apos;t.
              </h3>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-12 max-w-[800px]">
              <Reveal delay={0.2}>
                <p className="text-white/70 leading-[1.6]" style={{ fontSize: '17px' }}>
                  Unstructured documents. Fragmented data. Disconnected systems.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-white/70 leading-[1.6]" style={{ fontSize: '17px' }}>
                  AiOpsCare structures the chaos, automates the manual handoffs, and deploys end-to-end workflows across every system, providing the integrated intelligence layer to improve processes over time.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
