"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TECHS = [
  "Python", "FastAPI", "LangGraph", "ColPali", "Next.js 15",
  "TypeScript", "PostgreSQL", "pgvector", "Claude AI", "GPT-4o",
  "Supabase", "tRPC", "Docker", "GitHub Actions", "Tailwind CSS",
  "FHIR R4", "Mapbox", "Twilio", "AWS", "WebSocket", "Prisma", "React",
];

const PHRASES = [
  "AI systems that ship",
  "Full-stack, end to end",
  "Built for real users",
  "From idea to production",
  "RAG pipelines that verify",
  "Agents that reason",
  "Backend systems at scale",
  "Cloud-native by default",
  "Multimodal by design",
  "Zero compromise on quality",
  "Data-driven decisions",
  "Production-grade AI",
];

function TechPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-300"
      style={{
        background: "rgba(139,92,246,0.07)",
        border: "1px solid rgba(139,92,246,0.18)",
        color: "hsl(252,65%,72%)",
        boxShadow: "0 0 0 0 rgba(139,92,246,0)",
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: "linear-gradient(135deg, hsl(252,65%,65%), hsl(190,80%,55%))" }} />
      {label}
    </span>
  );
}

function PhrasePill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0"
      style={{
        background: "rgba(6,182,212,0.05)",
        border: "1px solid rgba(6,182,212,0.16)",
      }}
    >
      <span className="text-[9px]" style={{ color: "hsl(190,80%,55%)", opacity: 0.7 }}>◆</span>
      <span className="gradient-text">{label}</span>
    </span>
  );
}

export function StatsMarquee() {
  const [pauseRow1, setPauseRow1] = useState(false);
  const [pauseRow2, setPauseRow2] = useState(false);

  const doubledTechs   = [...TECHS,   ...TECHS];
  const doubledPhrases = [...PHRASES, ...PHRASES];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 py-8 space-y-3"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(var(--background)) 30%, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsl(var(--background)) 30%, transparent)" }} />

      {/* Row 1: tech names — scrolls left */}
      <div
        className="overflow-hidden cursor-default"
        onMouseEnter={() => setPauseRow1(true)}
        onMouseLeave={() => setPauseRow1(false)}
      >
        <div
          className="flex gap-3 w-max"
          style={{
            animation: "marquee-left 55s linear infinite",
            animationPlayState: pauseRow1 ? "paused" : "running",
          }}
        >
          {doubledTechs.map((tech, i) => <TechPill key={i} label={tech} />)}
        </div>
      </div>

      {/* Row 2: phrases — scrolls right */}
      <div
        className="overflow-hidden cursor-default"
        onMouseEnter={() => setPauseRow2(true)}
        onMouseLeave={() => setPauseRow2(false)}
      >
        <div
          className="flex gap-3 w-max"
          style={{
            animation: "marquee-right 45s linear infinite",
            animationPlayState: pauseRow2 ? "paused" : "running",
          }}
        >
          {doubledPhrases.map((phrase, i) => <PhrasePill key={i} label={phrase} />)}
        </div>
      </div>
    </motion.section>
  );
}
