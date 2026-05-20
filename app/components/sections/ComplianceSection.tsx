"use client";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";

const COMPLIANCE_ITEMS = [
  { icon: "📋", label: "Digital Audit Logs", desc: "Every action timestamped and stored" },
  { icon: "🔒", label: "Tamper-Proof Records", desc: "Immutable maintenance and cleaning history" },
  { icon: "📸", label: "Photo Evidence", desc: "Geotagged photos for every checklist item" },
  { icon: "✍️", label: "Digital Signatures", desc: "E-signatures with role-based validation" },
  { icon: "📊", label: "Inspection Reports", desc: "One-click NABH-ready documentation" },
  { icon: "🔔", label: "Gap Alerts", desc: "Proactive notifications before inspections" },
];

export default function ComplianceSection() {
  return (
    <section id="compliance" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-center" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal><SectionLabel>NABH & Compliance</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                NABH-Ready <span className="text-gradient-blue">Operational Intelligence</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Enterprise-grade compliance infrastructure with encrypted data, role-based access, and continuous audit readiness. Built for NABH, scalable for any accreditation framework.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex gap-3">
                <div className="px-4 py-2 rounded-lg border border-border text-sm text-muted">NABH Aligned</div>
                <div className="px-4 py-2 rounded-lg border border-border text-sm text-muted">SOC 2 Ready</div>
                <div className="px-4 py-2 rounded-lg border border-border text-sm text-muted">HIPAA Grade</div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {COMPLIANCE_ITEMS.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass-card rounded-xl p-5 h-full">
                  <div className="text-xl mb-3">{item.icon}</div>
                  <h4 className="text-sm font-semibold text-white mb-1">{item.label}</h4>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
