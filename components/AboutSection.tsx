"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, Bot, Database, GraduationCap } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { education } from "@/data/experience";

function useCountUp(end: number, duration = 1800, decimals = 0) {
  const [count, setCount] = useState(0);
  const ref  = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true;
        const start = performance.now();
        const tick  = (now: number) => {
          const p     = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Number((end * eased).toFixed(decimals)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, decimals]);
  return [count, ref] as const;
}

function Stat({ end, suffix, label, decimals = 0, delay = 0 }: {
  end: number; suffix: string; label: string; decimals?: number; delay?: number;
}) {
  const [count, ref] = useCountUp(end, 1800, decimals);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-1"
    >
      <span ref={ref} className="text-4xl md:text-5xl font-black gradient-text leading-none tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{label}</span>
    </motion.div>
  );
}

const EXPERTISE = [
  {
    icon: Code2,
    color: "hsl(252,65%,65%)",
    glow: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.25)",
    label: "Backend & Systems",
    detail: "FastAPI · Node.js · Microservices · REST APIs",
    desc: "Production APIs and multi-service backends built for real traffic.",
  },
  {
    icon: Bot,
    color: "hsl(190,80%,55%)",
    glow: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.25)",
    label: "AI Engineering",
    detail: "LangGraph · RAG Pipelines · OpenAI · LLMs",
    desc: "End-to-end AI pipelines from retrieval to multi-agent orchestration.",
  },
  {
    icon: Database,
    color: "hsl(160,64%,50%)",
    glow: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.25)",
    label: "Cloud & Infrastructure",
    detail: "AWS · PostgreSQL · MongoDB · Docker",
    desc: "Cloud-native deployments with CI/CD, observability, and zero downtime.",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="container mx-auto max-w-7xl space-y-6">
        <SectionHeading title="About" highlight="Me" subtitle="A quick look at who I am and what I do." />

        {/* ── Top: bio + stats ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative rounded-2xl p-8 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Subtle top-left glow inside card */}
            <div aria-hidden className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", filter: "blur(24px)" }} />

            <div className="relative space-y-4">
              <p className="text-lg font-semibold text-foreground leading-relaxed">
                Two years ago, I came to the United States from India with uncertainty, pressure, and a clear goal:{" "}
                <span className="gradient-text">become someone who can build real things</span>, not just talk about them.
              </p>
              <p className="text-base text-muted-foreground leading-[1.8]">
                During my Master&apos;s at Illinois Tech, I started seeing software as more than assignments. It became
                a way to solve messy problems and build systems people depend on. Since then, I&apos;ve gained hands-on
                experience at Find Me LLC, Gabriel AI, and The Special Character, working across full-stack engineering,
                backend systems, cloud workflows, DevOps, and applied AI.
              </p>
              <p className="text-base text-muted-foreground leading-[1.8]">
                What drives me is turning unclear problems into usable software. I like building reliable APIs, secure systems,
                and intelligent applications that survive beyond the demo stage. I&apos;m still early in my career, but
                building with clear direction: learn fast, take ownership, and ship software that actually matters.
              </p>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-around gap-6 rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <Stat end={18} suffix="+" label="Projects Shipped" delay={0.2} />
            <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.07)" }} />
            <Stat end={2}  suffix="+" label="Years Experience" delay={0.27} />
            <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.07)" }} />
            <Stat end={3}  suffix=""  label="Companies"        delay={0.34} />
          </motion.div>
        </div>

        {/* ── Bottom: expertise cards ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {EXPERTISE.map(({ icon: Icon, color, glow, border, label, detail, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, borderColor: border }}
              className="group relative rounded-2xl p-6 transition-all duration-300 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${glow}, transparent 65%)` }} />

              <div className="relative">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: glow, border: `1px solid ${color}40` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors duration-300">{label}</h4>
                <p className="text-[11px] font-medium mb-2" style={{ color }}>{detail}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Education ─────────────────────────────────────────────── */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2"
          >
            <GraduationCap size={18} style={{ color: "hsl(252,65%,65%)" }} />
            <h3 className="text-lg font-bold">Education</h3>
          </motion.div>

          <div className="relative pl-6">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px" style={{ background: "rgba(139,92,246,0.3)" }} />

            <div className="space-y-4">
              {education.map((e, i) => (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-[1.625rem] top-5 w-3 h-3 rounded-full border-2 border-primary bg-background" />

                  <div className="p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <h4 className="font-bold text-base">{e.institution}</h4>
                      <span className="text-sm font-semibold shrink-0" style={{ color: "hsl(252,65%,68%)" }}>{e.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{e.degree}</p>
                    <p className="text-xs text-muted-foreground mb-3">{e.location} &nbsp;·&nbsp; GPA: {e.gpa}</p>
                    <div className="flex flex-wrap gap-2">
                      {e.courses.map((c) => (
                        <span key={c} className="tag-pill">{c}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
