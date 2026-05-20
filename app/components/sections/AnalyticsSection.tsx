"use client";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const CHART_DATA = [
  { label: "Mon", h: 45 }, { label: "Tue", h: 62 }, { label: "Wed", h: 78 },
  { label: "Thu", h: 55 }, { label: "Fri", h: 90 }, { label: "Sat", h: 70 }, { label: "Sun", h: 40 },
];

const ANALYTICS_CARDS = [
  { title: "Equipment Downtime", value: "2.3%", trend: "down", desc: "↓ 0.8% from last month" },
  { title: "Avg Resolution Time", value: "1.4h", trend: "down", desc: "↓ 23min improvement" },
  { title: "Room Turnover", value: "42min", trend: "down", desc: "↓ 8min faster" },
  { title: "SLA Performance", value: "98.7%", trend: "up", desc: "↑ 1.2% improvement" },
  { title: "Linen Loss Rate", value: "1.8%", trend: "down", desc: "↓ 0.4% reduction" },
  { title: "Energy Efficiency", value: "91%", trend: "up", desc: "↑ 3% optimization" },
];

export default function AnalyticsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal><SectionLabel>Analytics & Intelligence</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Data-Driven <span className="text-gradient-blue">Operational Decisions</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chart mockup */}
          <Reveal className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-medium text-white">Weekly Ticket Resolution</h4>
                <span className="text-xs text-muted font-mono">This Week</span>
              </div>
              <div className="flex items-end gap-3 h-48">
                {CHART_DATA.map((d, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      className="w-full rounded-t-md bg-gradient-to-t from-blue/80 to-blue/30"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${d.h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
                    />
                    <span className="text-[10px] text-muted">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Side stats */}
          <div className="grid grid-cols-1 gap-3">
            {ANALYTICS_CARDS.slice(0, 3).map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-4">
                  <div className="text-xs text-muted mb-1">{card.title}</div>
                  <div className="text-xl font-bold text-white">{card.value}</div>
                  <div className={`text-xs mt-1 ${card.trend === "up" ? "text-emerald-400" : "text-cyan"}`}>
                    {card.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid md:grid-cols-3 gap-3 mt-4">
          {ANALYTICS_CARDS.slice(3).map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-5">
                <div className="text-xs text-muted mb-1">{card.title}</div>
                <div className="text-2xl font-bold text-white">{card.value}</div>
                <div className={`text-xs mt-1 ${card.trend === "up" ? "text-emerald-400" : "text-cyan"}`}>
                  {card.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
