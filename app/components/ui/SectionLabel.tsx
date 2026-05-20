"use client";

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface-2/50 text-xs tracking-[0.2em] uppercase text-muted mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse-glow" />
      {children}
    </div>
  );
}
