"use client";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#2563eb' }}
    >
      {/* Top fade from black to blue */}
      <div
        className="absolute top-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, transparent 100%)',
        }}
      />

      <div className="relative" style={{ paddingTop: '120px' }}>
        {/* Giant AiOpsCare wordmark */}
        <div
          className="w-full overflow-hidden flex items-center justify-center select-none"
          style={{ paddingLeft: '24px', paddingRight: '24px' }}
        >
          <h1
            className="text-white/30 font-bold leading-none tracking-[-0.04em] text-center"
            style={{
              fontSize: 'clamp(4rem, 22vw, 22rem)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AiOpsCare
          </h1>
        </div>

        {/* Bottom info */}
        <div
          className="max-w-[1600px] mx-auto"
          style={{ paddingLeft: 'clamp(20px, 4vw, 48px)', paddingRight: 'clamp(20px, 4vw, 48px)', paddingTop: '60px', paddingBottom: '40px' }}
        >
          {/* Mobile: stacked centered layout / Desktop: horizontal row */}
          <div className="hidden lg:grid grid-cols-[auto_1fr_auto] gap-12 items-end">
            {/* Left — Compliance badges */}
            <div className="flex gap-3">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex flex-col items-center justify-center">
                <span className="text-white/90 font-bold leading-none" style={{ fontSize: '7px', letterSpacing: '0.1em' }}>AICPA</span>
                <span className="text-white font-bold leading-none mt-1" style={{ fontSize: '12px' }}>SOC2</span>
                <span className="text-white/70 font-medium leading-none mt-1" style={{ fontSize: '7px' }}>TYPE 2</span>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" />
                  <path d="M8 6h8" />
                  <path d="M6 10h12" />
                  <circle cx="12" cy="14" r="2" />
                  <path d="M10 18l4-4" />
                  <path d="M14 18l-4-4" />
                </svg>
              </div>
            </div>

            {/* Middle — Secure by Default text */}
            <div className="max-w-[500px]">
              <h4
                className="text-white font-medium tracking-[0.15em] uppercase mb-3"
                style={{ fontSize: '13px' }}
              >
                Secure by Default
              </h4>
              <p
                className="text-white/80 leading-[1.6]"
                style={{ fontSize: '13px' }}
              >
                All AiOpsCare deployments follow the highest compliance and security standards, full inspectability, and strict data and access controls.
              </p>
            </div>

            {/* Right — Nav links */}
            <nav className="flex flex-wrap items-center gap-7 justify-end">
              {['PLATFORM', 'SECURITY', 'TERMS', 'CAREERS', 'ABOUT', 'BLOG'].map(link => (
                <a
                  key={link}
                  href="#"
                  className="text-white hover:text-white/70 transition-colors tracking-[0.12em] font-medium"
                  style={{ fontSize: '13px' }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile layout — centered & stacked like Luminai */}
          <div className="lg:hidden flex flex-col items-center text-center gap-8">
            {/* Compliance badges */}
            <div className="flex gap-3 justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex flex-col items-center justify-center">
                <span className="text-white/90 font-bold leading-none" style={{ fontSize: '6px', letterSpacing: '0.1em' }}>AICPA</span>
                <span className="text-white font-bold leading-none mt-0.5" style={{ fontSize: '11px' }}>SOC2</span>
                <span className="text-white/70 font-medium leading-none mt-0.5" style={{ fontSize: '6px' }}>TYPE 2</span>
              </div>
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" />
                  <path d="M8 6h8" />
                  <path d="M6 10h12" />
                  <circle cx="12" cy="14" r="2" />
                  <path d="M10 18l4-4" />
                  <path d="M14 18l-4-4" />
                </svg>
              </div>
            </div>

            {/* Secure by Default */}
            <div>
              <h4
                className="text-white font-medium tracking-[0.15em] uppercase mb-3"
                style={{ fontSize: '12px' }}
              >
                Secure by Default
              </h4>
              <p
                className="text-white/80 leading-[1.6]"
                style={{ fontSize: '13px' }}
              >
                All AiOpsCare deployments follow the highest compliance and security standards, full inspectability, and strict data and access controls.
              </p>
            </div>

            {/* Nav links — stacked centered */}
            <nav className="flex flex-col items-center gap-5 pt-4">
              {['PLATFORM', 'SECURITY', 'TERMS', 'CAREERS', 'ABOUT', 'BLOG'].map(link => (
                <a
                  key={link}
                  href="#"
                  className="text-white hover:text-white/70 transition-colors tracking-[0.12em] font-medium"
                  style={{ fontSize: '13px' }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom copyright */}
          <div
            className="mt-12 pt-6 border-t border-white/20 flex flex-col items-center md:flex-row md:justify-between gap-4"
          >
            <span className="text-white/60" style={{ fontSize: '12px' }}>
              © {new Date().getFullYear()} AiOpsCare. All rights reserved.
            </span>
            <span className="text-white/60 tracking-wide" style={{ fontSize: '12px' }}>
              Made with care for hospital operations.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
