"use client";
import Reveal from "../ui/Reveal";

const STATS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        <text x="14" y="16" fontSize="6" fill="#3b82f6">A</text>
      </svg>
    ),
    value: "10 million +",
    label: "Workflows Driven by AiOpsCare",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    value: "8 modules",
    label: "Operational Modules Per Deployment",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: "30 days",
    label: "Average Time to Value",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    value: "4.8x",
    label: "ROI",
  },
];

export default function TrustSection() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div
        className="max-w-[1600px] mx-auto"
        style={{ paddingLeft: 'clamp(20px, 4vw, 48px)', paddingRight: 'clamp(20px, 4vw, 48px)', paddingTop: 'clamp(80px, 12vw, 140px)', paddingBottom: 'clamp(80px, 12vw, 140px)' }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Big serif headline */}
          <Reveal>
            <h2
              className="text-white font-light leading-[1.1] tracking-[-0.02em]"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
              }}
            >
              We turn your operational chaos into automated intelligence, with accuracy you can trust, and compliance you can prove.
            </h2>
          </Reveal>

          {/* Right — stats grid: single column on mobile, 2x2 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10">
            {STATS.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="bg-black flex flex-col items-center justify-center text-center p-8 md:p-10"
                  style={{ minHeight: '240px' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">{stat.icon}</div>
                    <div>
                      <div
                        className="text-white font-light mb-2"
                        style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', fontFamily: "'Georgia', serif" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-white/55 text-sm leading-relaxed">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Operating Reality section */}
      <div
        className="max-w-[1600px] mx-auto border-t border-white/10"
        style={{ paddingLeft: 'clamp(20px, 4vw, 48px)', paddingRight: 'clamp(20px, 4vw, 48px)', paddingTop: 'clamp(80px, 12vw, 140px)', paddingBottom: 'clamp(80px, 12vw, 140px)' }}
      >
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Left — Small label */}
          <Reveal>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb] flex items-center justify-center shrink-0 mt-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium" style={{ fontSize: '15px' }}>
                  The Operating<br/>Reality
                </h4>
              </div>
            </div>
          </Reveal>

          {/* Right — Big serif text */}
          <div>
            <Reveal>
              <h3
                className="text-white font-light leading-[1.15] tracking-[-0.02em] mb-8 md:mb-12"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: 'clamp(1.5rem, 3.2vw, 2.75rem)',
                }}
              >
                Healthcare operations have always depended on people to bridge the gaps that technology couldn&apos;t.
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="text-white/60 leading-[1.5] mb-6 max-w-[600px] text-sm md:text-base"
              >
                Unstructured documents. Fragmented data. Disconnected systems.
              </p>
              <p
                className="text-white/60 leading-[1.6] max-w-[600px] text-sm md:text-base"
              >
                AiOpsCare structures the chaos, automates the manual handoffs, and deploys end-to-end workflows across every system, providing the integrated intelligence layer to improve processes over time.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
