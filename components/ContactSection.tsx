"use client";

import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send, Copy, Check, AlertCircle, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, InstagramIcon } from "./icons";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";

const EMAIL = "sahilkhalsa0516@outlook.com";

const contactInfo = [
  { icon: Mail,   label: "Email",    value: EMAIL,               href: `mailto:${EMAIL}`, copyable: true },
  { icon: Phone,  label: "Phone",    value: "+1 (872) 279-5791", href: "tel:+18722795791", copyable: false },
  { icon: MapPin, label: "Location", value: "United States", href: null, copyable: false },
];

const socials = [
  { icon: LinkedinIcon,  href: "https://www.linkedin.com/in/sahilsingh-khalsa-9a460025b/", label: "LinkedIn"  },
  { icon: GithubIcon,    href: "https://github.com/Sahil-Khalsa",                          label: "GitHub"    },
  { icon: TwitterXIcon,  href: "https://x.com/SahilKhals67192",                            label: "Twitter"   },
  { icon: InstagramIcon, href: "https://www.instagram.com/sahil.khalsa_/",                 label: "Instagram" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 12,
  background: "rgba(139,92,246,0.05)",
  border: "1px solid rgba(139,92,246,0.25)",
  color: "hsl(var(--foreground))",
  outline: "none",
  fontSize: 14,
  transition: "border-color 0.2s, box-shadow 0.2s",
  fontFamily: "inherit",
};

const focusHandlers = {
  onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(139,92,246,0.5)";
    e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,0.08)";
  },
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(255,255,255,0.09)";
    e.target.style.boxShadow = "none";
  },
};

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent]             = useState(false);
  const [error, setError]           = useState(false);
  const [copied, setCopied]         = useState(false);

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); }
    catch { const el = Object.assign(document.createElement("textarea"), { value: EMAIL }); document.body.appendChild(el); el.select(); document.execCommand("copy"); document.body.removeChild(el); }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true); setError(false);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );
      setSent(true);
      (e.target as HTMLFormElement).reset();
    } catch { setError(true); }
    finally { setSubmitting(false); }
  };

  return (
    <SectionWrapper id="contact">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading title="Get In" highlight="Touch" subtitle="Have a project or opportunity? I reply within 24 hours." />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ── Left panel ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Availability badge */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "hsl(152,60%,55%)" }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "hsl(152,60%,55%)" }} />
                </span>
                <span className="text-sm font-semibold" style={{ color: "hsl(152,60%,55%)" }}>Available for opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to full-time SDE and AI engineering roles. Also happy to collaborate on freelance projects or research.
              </p>
            </div>

            {/* Contact info */}
            <div className="glass rounded-2xl p-5 space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, copyable }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}>
                    <Icon className="h-4 w-4" style={{ color: "hsl(252,65%,70%)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
                    <div className="flex items-center gap-2">
                      {href
                        ? <a href={href} className="text-sm font-semibold hover:text-primary transition-colors truncate">{value}</a>
                        : <p className="text-sm font-semibold truncate">{value}</p>}
                      {copyable && (
                        <button onClick={copyEmail} aria-label="Copy email"
                          className="shrink-0 p-1 rounded-md transition-colors hover:text-primary"
                          style={{ color: copied ? "hsl(152,60%,55%)" : "hsl(215,20%,50%)" }}>
                          {copied ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="glass rounded-2xl p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-4">Find me on</p>
              <div className="grid grid-cols-2 gap-2.5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-primary text-muted-foreground"
                    style={{ background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.15)" }}>
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Form ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
            className="glass lg:col-span-3 rounded-2xl p-7 relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div aria-hidden className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", filter: "blur(24px)" }} />

            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-4 w-4" style={{ color: "hsl(252,65%,68%)" }} />
                <h3 className="text-lg font-bold">Send a Message</h3>
              </div>

              {sent ? (
                <div className="flex flex-col items-center justify-center h-64 gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)" }}>
                    <Send className="h-7 w-7" style={{ color: "hsl(252,65%,72%)" }} />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg mb-1">Message sent!</p>
                    <p className="text-muted-foreground text-sm">I&apos;ll get back to you within 24 hours.</p>
                  </div>
                  <button onClick={() => setSent(false)}
                    className="text-xs text-primary hover:underline mt-1">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">Name</label>
                      <input type="text" name="name" required placeholder="John Doe" style={inputStyle} {...focusHandlers} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">Email</label>
                      <input type="email" name="email" required placeholder="john@example.com" style={inputStyle} {...focusHandlers} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">Subject</label>
                    <input type="text" name="subject" placeholder="Full-time role, freelance project..." style={inputStyle} {...focusHandlers} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">Message</label>
                    <textarea name="message" required rows={5}
                      placeholder="Tell me about the role or project..."
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(139,92,246,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,0.08)"; }}
                      onBlur={(e)  => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-3 rounded-xl text-sm"
                      style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "hsl(0,80%,65%)" }}>
                      <AlertCircle size={14} className="shrink-0" />
                      Failed to send.{" "}
                      <a href={`mailto:${EMAIL}`} className="underline">Email me directly.</a>
                    </div>
                  )}

                  <motion.button type="submit" disabled={submitting}
                    whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, hsl(252,65%,60%) 0%, hsl(190,80%,50%) 100%)", color: "white", boxShadow: "0 4px 24px rgba(139,92,246,0.4)" }}>
                    {submitting ? "Sending..." : "Send Message"}
                    <Send size={14} />
                  </motion.button>

                  <p className="text-center text-xs text-muted-foreground">
                    Or reach me directly at{" "}
                    <a href={`mailto:${EMAIL}`} className="text-primary hover:underline font-medium">{EMAIL}</a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
