"use client";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const AGENTS = [
  {
    icon: "🔧",
    name: "Maintenance AI Agent",
    desc: "Automatically categorizes tickets, assigns technicians by skill and shift, tracks SLA in real-time, and escalates before breaches.",
    gradient: "from-blue to-cyan",
    workflows: ["Auto-assign", "SLA tracking", "Escalation"],
  },
  {
    icon: "🧹",
    name: "Housekeeping AI Agent",
    desc: "Monitors room turnover, schedules cleaning workflows, tracks hygiene compliance, and generates audit-ready logs.",
    gradient: "from-cyan to-emerald-400",
    workflows: ["Room status", "Schedule", "Compliance"],
  },
  {
    icon: "👔",
    name: "Laundry Workflow AI",
    desc: "Tracks linen from collection through washing, QC, and distribution. Reduces loss and ensures lifecycle visibility.",
    gradient: "from-purple to-blue",
    workflows: ["RFID track", "QC gates", "Distribution"],
  },
  {
    icon: "🛡️",
    name: "Compliance AI Agent",
    desc: "Continuous NABH monitoring. Auto-generates audit logs, validates checklist completion, and flags gaps before inspections.",
    gradient: "from-blue-deep to-purple",
    workflows: ["Audit logs", "Gap analysis", "Auto-reports"],
  },
  {
    icon: "📋",
    name: "Audit Intelligence Agent",
    desc: "Consolidates maintenance history, cleaning records, and inspection data into inspection-ready documentation.",
    gradient: "from-emerald-400 to-cyan",
    workflows: ["Data merge", "PDF export", "History"],
  },
  {
    icon: "📊",
    name: "Asset Monitoring Agent",
    desc: "Tracks equipment health, predicts failures, manages lifecycle from procurement through decommission.",
    gradient: "from-cyan to-blue",
    workflows: ["Health score", "Predict fail", "Lifecycle"],
  },
  {
    icon: "⚡",
    name: "Utility Monitoring Agent",
    desc: "Tracks energy, water, and gas consumption across departments. Detects anomalies and recommends optimization.",
    gradient: "from-amber-400 to-orange-500",
    workflows: ["Meter read", "Anomaly", "Optimize"],
  },
  {
    icon: "🚀",
    name: "Technician Dispatch AI",
    desc: "Intelligent dispatch based on proximity, skill match, shift timing, and current workload for fastest resolution.",
    gradient: "from-blue to-purple",
    workflows: ["Skill match", "Proximity", "Workload"],
  },
];

export default function AgentsSection() {
  return (
    <section id="agents" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue/5 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal>
            <SectionLabel>AI Agents</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Intelligent Agents. <span className="text-gradient-blue">Autonomous Operations.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Each AI agent is purpose-built for a specific operational domain, continuously learning and optimizing workflows across your hospital.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {AGENTS.map((agent, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-6 h-full group relative overflow-hidden"
              >
                {/* Top glow on hover */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="text-2xl mb-4">{agent.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{agent.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{agent.desc}</p>
                
                {/* Workflow tags */}
                <div className="flex flex-wrap gap-1.5">
                  {agent.workflows.map((w) => (
                    <span key={w} className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted">
                      {w}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
