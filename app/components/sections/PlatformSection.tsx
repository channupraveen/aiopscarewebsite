"use client";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const MODULES = [
  { icon: "📦", name: "Asset Management", desc: "Full lifecycle tracking from procurement to decommission with health scoring and predictive alerts.", stat: "2,400+ assets" },
  { icon: "🎫", name: "Maintenance Tickets", desc: "AI-powered ticket routing, SLA enforcement, technician dispatch, and resolution tracking.", stat: "127 active" },
  { icon: "🧹", name: "Housekeeping", desc: "Real-time room status, cleaning workflows, discharge triggers, and hygiene compliance.", stat: "98% turnover" },
  { icon: "👔", name: "Laundry Lifecycle", desc: "RFID-tracked linen flow — collection, washing, QC, distribution — with loss analytics.", stat: "< 2% loss" },
  { icon: "🛡️", name: "Compliance Engine", desc: "Continuous NABH monitoring, automated audit trails, gap analysis, and inspection readiness.", stat: "NABH-ready" },
  { icon: "✅", name: "Checklist System", desc: "Digital checklists with photo capture, e-signatures, geofencing, and schedule enforcement.", stat: "340 daily" },
  { icon: "📋", name: "Audit Tracking", desc: "Consolidated records across all modules. Generate inspection reports with one click.", stat: "Auto-reports" },
  { icon: "⚡", name: "Utility Monitoring", desc: "Energy, water, gas tracking with anomaly detection and department-level breakdowns.", stat: "24/7 live" },
  { icon: "📜", name: "Certification Tracking", desc: "Equipment calibration schedules, safety certifications, and renewal alerts.", stat: "Zero lapses" },
  { icon: "📊", name: "Operational Dashboards", desc: "Real-time KPIs, department analytics, trend visualization, and executive summaries.", stat: "Live data" },
];

export default function PlatformSection() {
  return (
    <section id="platform" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal><SectionLabel>Platform Modules</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One Platform. <span className="text-gradient-blue">Every Operation.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Ten integrated modules covering every aspect of hospital facility operations — unified under a single AI-powered platform.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
          {MODULES.map((mod, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -3 }}
                className="glass-card rounded-xl p-5 h-full group relative overflow-hidden"
              >
                {/* Animated border glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(59,130,246,0.2)" }} />
                
                <div className="text-xl mb-3">{mod.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{mod.name}</h3>
                <p className="text-xs text-muted leading-relaxed mb-3">{mod.desc}</p>
                
                <div className="flex items-center gap-1.5 mt-auto">
                  <div className="w-1 h-1 rounded-full bg-cyan" />
                  <span className="text-[10px] text-cyan font-mono">{mod.stat}</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
