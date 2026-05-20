"use client";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const STEPS = [
  { label: "Ticket Raised", desc: "Issue reported via app, IoT sensor, or staff", color: "#3b82f6" },
  { label: "AI Categorizes", desc: "NLP classifies urgency, type, and department", color: "#6366f1" },
  { label: "Auto-Assign", desc: "Matched to technician by skill, shift, proximity", color: "#8b5cf6" },
  { label: "SLA Tracking", desc: "Real-time countdown with breach prediction", color: "#06b6d4" },
  { label: "Escalation", desc: "Auto-escalate before SLA breaches occur", color: "#f59e0b" },
  { label: "Resolution", desc: "Verified completion with photo and signature", color: "#10b981" },
  { label: "Audit Logged", desc: "Full trail stored for NABH compliance", color: "#3b82f6" },
];

export default function WorkflowSection() {
  return (
    <section id="workflows" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-center" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal><SectionLabel>Workflow Automation</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              End-to-End <span className="text-gradient-blue">Automated Workflows</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From the moment an issue is reported to final audit log — every step is orchestrated by AI.
            </p>
          </Reveal>
        </div>

        {/* Workflow pipeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-12 left-0 right-0 h-px hidden lg:block">
            <motion.div
              className="h-full bg-gradient-to-r from-blue via-purple to-cyan"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative flex flex-col items-center text-center group">
                  {/* Node */}
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    style={{ borderColor: step.color, background: `${step.color}15` }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ background: step.color }} />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{step.label}</h4>
                  <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Workflow examples */}
        <div className="grid md:grid-cols-3 gap-4 mt-20">
          {[
            { title: "Maintenance Workflow", items: ["IoT trigger", "Auto-categorize", "Technician dispatch", "SLA monitor", "Completion verify"] },
            { title: "Housekeeping Workflow", items: ["Discharge alert", "Room assignment", "Cleaning start", "QC inspection", "Ready status"] },
            { title: "Compliance Workflow", items: ["Checklist trigger", "Photo capture", "Signature verify", "Auto audit log", "NABH report"] },
          ].map((wf, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-6">
                <h4 className="text-base font-semibold text-white mb-4">{wf.title}</h4>
                <div className="space-y-2.5">
                  {wf.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center shrink-0">
                        <span className="text-[10px] text-blue font-mono">{j + 1}</span>
                      </div>
                      <span className="text-sm text-muted">{item}</span>
                      {j < wf.items.length - 1 && (
                        <div className="ml-auto">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg>
                        </div>
                      )}
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
