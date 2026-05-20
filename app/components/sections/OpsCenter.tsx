"use client";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const ALERTS = [
  { type: "critical", msg: "AHU-3 vibration anomaly detected — predictive maintenance triggered", time: "2m ago" },
  { type: "warning", msg: "SLA breach approaching: Ticket #4821 — Plumbing, Ward B", time: "8m ago" },
  { type: "info", msg: "Room 412 housekeeping completed — QC passed", time: "12m ago" },
  { type: "success", msg: "Laundry batch #89 QC complete — 98.4% pass rate", time: "15m ago" },
  { type: "info", msg: "Compliance checklist: ICU daily audit 100% completed", time: "22m ago" },
];

const DASHBOARD_METRICS = [
  { label: "Active Tickets", value: "127", change: "+12", color: "#3b82f6" },
  { label: "Equipment Online", value: "94.2%", change: "+0.3%", color: "#10b981" },
  { label: "Rooms Ready", value: "89/102", change: "+5", color: "#06b6d4" },
  { label: "SLA Compliance", value: "98.7%", change: "+1.2%", color: "#8b5cf6" },
];

export default function OpsCenter() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-top" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal><SectionLabel>Operations Center</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hospital Operations <span className="text-gradient-blue">Control Center</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real-time visibility into every operational dimension. AI-powered recommendations. Predictive alerts before problems escalate.
            </p>
          </Reveal>
        </div>

        {/* Dashboard mockup */}
        <Reveal>
          <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            
            <div className="relative z-10">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse" />
                  <span className="text-sm text-white font-medium">Live Operations Dashboard</span>
                </div>
                <span className="text-xs text-muted font-mono">Last updated: 2s ago</span>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {DASHBOARD_METRICS.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-surface-2 rounded-lg p-4 border border-border"
                  >
                    <div className="text-xs text-muted mb-2">{m.label}</div>
                    <div className="text-2xl font-bold text-white">{m.value}</div>
                    <div className="text-xs mt-1" style={{ color: m.color }}>↑ {m.change}</div>
                  </motion.div>
                ))}
              </div>

              {/* Alerts feed */}
              <div className="bg-surface rounded-lg border border-border">
                <div className="px-4 py-3 border-b border-border flex items-center gap-2">
                  <span className="text-xs text-muted tracking-widest uppercase">AI Alerts & Recommendations</span>
                </div>
                <div className="divide-y divide-border">
                  {ALERTS.map((alert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="px-4 py-3 flex items-start gap-3 hover:bg-surface-2/50 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                        alert.type === "critical" ? "bg-red-500" :
                        alert.type === "warning" ? "bg-amber-500" :
                        alert.type === "success" ? "bg-emerald-500" : "bg-blue"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white/80 leading-relaxed">{alert.msg}</p>
                      </div>
                      <span className="text-xs text-muted shrink-0">{alert.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
