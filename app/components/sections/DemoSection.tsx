"use client";
import { useState } from "react";
import Reveal from "../ui/Reveal";

const EMAILJS_SERVICE_ID = "service_8b6xhvt";
const EMAILJS_TEMPLATE_ID = "template_qfccnqf";
const EMAILJS_PUBLIC_KEY = "FRHGGG-z5-6-ntrlC";

export default function DemoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);

    const params = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      phone: (data.get("phone") as string) || "Not provided",
      hospital: data.get("hospital") as string,
      message: (data.get("message") as string) || "Not provided",
    };

    try {
      // 1) EmailJS — sends the notification email
      const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: params,
        }),
      });

      // 2) Netlify Forms — backup record in the Netlify dashboard
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      }).catch(() => {});

      if (emailRes.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="demo" className="relative bg-black overflow-hidden border-t border-white/10">
      <div
        className="max-w-[1600px] mx-auto"
        style={{ paddingLeft: 'clamp(20px, 4vw, 48px)', paddingRight: 'clamp(20px, 4vw, 48px)', paddingTop: 'clamp(80px, 12vw, 140px)', paddingBottom: 'clamp(80px, 12vw, 140px)' }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — pitch */}
          <Reveal>
            <div>
              <h2
                className="text-white font-light leading-[1.12] tracking-[-0.02em]"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  marginBottom: '24px',
                }}
              >
                See AiOpsCare on your hospital&apos;s workflows
              </h2>
              <p className="text-white/60 leading-[1.65] text-sm md:text-base" style={{ maxWidth: '480px', marginBottom: '32px' }}>
                A 30-minute walkthrough of maintenance, housekeeping, laundry, and compliance — using scenarios from your own facility. No commitment required.
              </p>
              <div className="flex flex-col gap-3 text-white/55 text-sm">
                <span className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Free pilot for early-adopter hospitals
                </span>
                <span className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
                  NABH-aligned from day one
                </span>
                <span className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Dedicated onboarding support
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.15}>
            {submitted ? (
              <div
                className="rounded-2xl border border-white/10 bg-white/[0.04] flex flex-col items-center justify-center text-center"
                style={{ padding: '60px 32px', minHeight: '380px' }}
              >
                <div className="w-14 h-14 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/40 flex items-center justify-center" style={{ marginBottom: '20px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h3 className="text-white font-light" style={{ fontFamily: "'Georgia', serif", fontSize: '24px', marginBottom: '10px' }}>
                  Request received
                </h3>
                <p className="text-white/55 text-sm" style={{ maxWidth: '320px' }}>
                  Thank you — our team will reach out within one business day to schedule your demo.
                </p>
              </div>
            ) : (
              <form
                name="demo-request"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/10 bg-white/[0.04]"
                style={{ padding: 'clamp(24px, 4vw, 40px)' }}
              >
                <input type="hidden" name="form-name" value="demo-request" />
                <p className="hidden">
                  <label>Don&apos;t fill this out: <input name="bot-field" /></label>
                </p>

                <div className="grid md:grid-cols-2 gap-4" style={{ marginBottom: '16px' }}>
                  <div>
                    <label className="block text-white/60 text-xs tracking-[0.1em] uppercase" style={{ marginBottom: '8px' }}>Name *</label>
                    <input
                      required
                      name="name"
                      type="text"
                      className="w-full bg-black/40 border border-white/15 rounded-lg text-white text-sm focus:border-[#2563eb] focus:outline-none transition-colors"
                      style={{ padding: '12px 14px' }}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs tracking-[0.1em] uppercase" style={{ marginBottom: '8px' }}>Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full bg-black/40 border border-white/15 rounded-lg text-white text-sm focus:border-[#2563eb] focus:outline-none transition-colors"
                      style={{ padding: '12px 14px' }}
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label className="block text-white/60 text-xs tracking-[0.1em] uppercase" style={{ marginBottom: '8px' }}>Work Email *</label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full bg-black/40 border border-white/15 rounded-lg text-white text-sm focus:border-[#2563eb] focus:outline-none transition-colors"
                    style={{ padding: '12px 14px' }}
                    placeholder="you@hospital.com"
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label className="block text-white/60 text-xs tracking-[0.1em] uppercase" style={{ marginBottom: '8px' }}>Hospital / Organization *</label>
                  <input
                    required
                    name="hospital"
                    type="text"
                    className="w-full bg-black/40 border border-white/15 rounded-lg text-white text-sm focus:border-[#2563eb] focus:outline-none transition-colors"
                    style={{ padding: '12px 14px' }}
                    placeholder="Hospital name"
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label className="block text-white/60 text-xs tracking-[0.1em] uppercase" style={{ marginBottom: '8px' }}>What would you like to see?</label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full bg-black/40 border border-white/15 rounded-lg text-white text-sm focus:border-[#2563eb] focus:outline-none transition-colors resize-none"
                    style={{ padding: '12px 14px' }}
                    placeholder="e.g. Maintenance tickets and NABH compliance reports"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm" style={{ marginBottom: '16px' }}>
                    Something went wrong. Please try again or email hello@aiopscare.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#2563eb] hover:bg-[#1d4ed8] disabled:opacity-60 text-white font-medium tracking-[0.15em] uppercase transition-all duration-300"
                  style={{ fontSize: '13px', padding: '16px 28px' }}
                >
                  {submitting ? "Sending..." : "Request a Demo"}
                  {!submitting && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
