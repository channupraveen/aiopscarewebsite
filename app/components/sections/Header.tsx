"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  {
    label: "PLATFORM",
    displayLabel: "Platform",
    href: "#platform",
    submenu: [
      { label: "Overview", href: "#platform" },
      { label: "The AiOpsCare Engine", href: "#agents" },
      { label: "Use Cases", href: "#workflows" },
    ],
  },
  {
    label: "SECURITY",
    displayLabel: "Security",
    href: "#compliance",
    submenu: [
      { label: "Overview", href: "#compliance" },
      { label: "Compliance & Certifications", href: "#compliance" },
      { label: "Data Protection", href: "#compliance" },
    ],
  },
  {
    label: "CAREERS",
    displayLabel: "Careers",
    href: "#",
    submenu: [
      { label: "Open Positions", href: "#" },
      { label: "Life at AiOpsCare", href: "#" },
      { label: "Engineering Team", href: "#" },
    ],
  },
  {
    label: "ABOUT",
    displayLabel: "About",
    href: "#about",
    submenu: [
      { label: "Our Mission", href: "#about" },
      { label: "Leadership", href: "#about" },
      { label: "Investors & Partners", href: "#about" },
    ],
  },
  {
    label: "BLOG",
    displayLabel: "Blog",
    href: "#",
    submenu: [
      { label: "Latest Articles", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Product Updates", href: "#" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const activeLink = NAV_LINKS.find((l) => l.label === hoveredItem);

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onMouseLeave={() => setHoveredItem(null)}
        className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10"
      >
        {/* Top bar */}
        <div id="header-bar" className="flex items-center justify-between gap-4 md:gap-6" style={{ minHeight: '65px', paddingLeft: '20px', paddingRight: '20px' }}>
          {/* Mobile Hamburger — LEFT side on mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[60]"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 z-[60] shrink-0 md:mr-0 mr-auto">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-blue to-cyan flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-base md:text-lg font-semibold tracking-tight text-white">
              AiOps<span className="text-blue">Care</span>
            </span>
          </a>

          {/* Mobile right — CONTACT US button */}
          <a
            href="#demo"
            className="md:hidden text-[11px] text-white tracking-[0.1em] font-medium border border-white/40 z-[60] shrink-0"
            style={{ padding: '8px 14px' }}
          >
            CONTACT US
          </a>

          {/* Center Nav — desktop only */}
          <nav className="hidden md:flex items-center gap-9 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                onMouseEnter={() => setHoveredItem(link.label)}
                className="relative py-2"
              >
                <a
                  href={link.href}
                  className={`text-[13px] tracking-[0.1em] font-medium transition-colors duration-300 ${
                    hoveredItem === link.label ? "text-white" : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
                {hoveredItem === link.label && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right CTA — desktop only */}
          <a
            href="#demo"
            className="hidden md:inline-flex items-center gap-3 text-[13px] text-white tracking-[0.15em] font-medium border border-white/40 hover:border-white/70 hover:bg-white/5 transition-all duration-300 shrink-0"
            style={{ padding: '10px 20px' }}
          >
            REQUEST A DEMO
            <span className="text-[15px] font-light ml-1">&gt;</span>
          </a>
        </div>


        {/* MEGA MENU DROPDOWN — desktop only */}
        <AnimatePresence>
          {activeLink && activeLink.submenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/10 bg-black hidden md:block"
            >
              <div className="max-w-[1600px] mx-auto grid grid-cols-[1fr_2fr] gap-10" style={{ paddingTop: '40px', paddingBottom: '40px', paddingLeft: '48px', paddingRight: '48px' }}>
                <div>
                  <motion.h3
                    key={activeLink.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white font-light tracking-tight"
                    style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '22px' }}
                  >
                    {activeLink.displayLabel}
                  </motion.h3>
                </div>

                <div className="flex flex-col">
                  {activeLink.submenu.map((sub, i) => (
                    <motion.a
                      key={`${activeLink.label}-${sub.label}`}
                      href={sub.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                      onClick={() => setHoveredItem(null)}
                      className="group flex items-center justify-between border-b border-white/[0.08] last:border-b-0 text-white hover:text-white transition-colors"
                      style={{ paddingTop: '14px', paddingBottom: '14px' }}
                    >
                      <span
                        className="font-light tracking-tight"
                        style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '17px' }}
                      >
                        {sub.label}
                      </span>
                      <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                      >
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Nav — Luminai style fullscreen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black flex flex-col md:hidden"
          >
            {/* Mobile nav header */}
            <div className="flex items-center justify-between" style={{ minHeight: '65px', paddingLeft: '20px', paddingRight: '20px' }}>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18"/><path d="M6 6l12 12"/>
                </svg>
              </button>
              <a href="/" className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue to-cyan flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-base font-semibold tracking-tight text-white">
                  AiOps<span className="text-blue">Care</span>
                </span>
              </a>
              <div className="w-10" />
            </div>

            {/* Spacer + Links */}
            <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
              <a
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-[32px] font-light text-white tracking-tight py-2"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Home
              </a>
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <button
                    onClick={() => setExpandedMobile(expandedMobile === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between py-2"
                  >
                    <span
                      className="text-[32px] font-light text-white tracking-tight"
                      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                    >
                      {link.displayLabel}
                    </span>
                    {link.submenu && (
                      <svg
                        width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        className={`transition-transform duration-300 ${expandedMobile === link.label ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedMobile === link.label && link.submenu && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-4"
                      >
                        {link.submenu.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-white/60 text-lg py-2 hover:text-white transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Bottom CTA — blue full-width like Luminai */}
            <div className="px-6 pb-8">
              <a
                href="#demo"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-3 w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium tracking-[0.15em] uppercase text-[13px] transition-all duration-300"
                style={{ padding: '18px 24px' }}
              >
                REQUEST A DEMO
                <span className="text-[16px] font-light">&gt;</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
