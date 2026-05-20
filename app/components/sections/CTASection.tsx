"use client";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section id="demo" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-top" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue/5 blur-[200px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue/20 bg-blue/5 text-xs tracking-[0.2em] uppercase text-blue mb-8"
          >
            Get Started
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Hospital Operations
            <br />
            <span className="text-gradient">with AI</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Join leading hospitals that have eliminated paper-based workflows, reduced maintenance delays by 60%, and achieved continuous NABH compliance.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" href="#demo">
              Schedule Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
            <Button variant="secondary" size="lg" href="mailto:hello@aiopscare.com">
              Contact Sales
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted">
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
              30-day free pilot
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
              Dedicated onboarding
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
