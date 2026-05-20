"use client";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const STEPS = [
  {
    num: "01",
    title: "Connect Hospital Operations",
    desc: "Integrate existing systems, IoT sensors, and manual processes into a single platform in under 30 days.",
    details: ["Asset registry import", "Department mapping", "Staff onboarding", "IoT sensor connection"],
  },
  {
    num: "02",
    title: "AI Agents Automate Workflows",
    desc: "Purpose-built AI agents take over ticket routing, scheduling, compliance tracking, and resource allocation.",
    details: ["Auto-categorization", "Smart dispatch", "SLA monitoring", "Predictive alerts"],
  },
  {
    num: "03",
    title: "Gain Operational Visibility",
    desc: "Real-time dashboards, trend analytics, and AI-powered recommendations transform how hospitals operate.",
    details: ["Live KPIs", "Executive reports", "Trend analysis", "NABH audit readiness"],
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal><SectionLabel>How It Works</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              From Chaos to Control <span className="text-gradient-blue">in Three Steps</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="glass-card rounded-2xl p-8 h-full relative group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.span
                  className="text-6xl font-bold text-white/5 block mb-4"
                  whileInView={{ opacity: [0, 1] }}
                  viewport={{ once: true }}
                >
                  {step.num}
                </motion.span>
                
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">{step.desc}</p>
                
                <div className="space-y-2">
                  {step.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
                      <span className="text-xs text-muted">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
