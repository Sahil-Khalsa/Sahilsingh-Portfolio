"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 4,   suffix: "",  label: "Projects Shipped" },
  { value: 8,   suffix: "+", label: "AI Agents Built"  },
  { value: 583, suffix: "+", label: "Tests Written"    },
  { value: 0,   suffix: "%", label: "Hallucination Rate" },
];

const TECHS = [
  "Python", "FastAPI", "LangGraph", "ColPali", "Next.js 15",
  "TypeScript", "PostgreSQL", "pgvector", "Claude AI", "GPT-4o",
  "Supabase", "tRPC", "Docker", "GitHub Actions", "Tailwind CSS",
  "FHIR R4", "Mapbox", "Twilio", "AWS", "WebSocket", "Prisma", "React",
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    if (value === 0) { setCount(0); return; }
    const steps = Math.min(value, 60);
    const increment = value / steps;
    const interval = 1400 / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, interval);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsMarquee() {
  const doubled = [...TECHS, ...TECHS];

  return (
    <div className="relative z-10 py-6">
      {/* Stats Bar */}
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-2xl px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x"
          style={{ borderColor: "rgba(139,92,246,0.15)" }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-4">
              <span className="text-3xl md:text-4xl font-black gradient-text">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-xs text-muted-foreground font-medium text-center leading-snug">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tech Marquee */}
      <div className="mt-6 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />

        <motion.div
          className="flex gap-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((tech, i) => (
            <span key={i} className="tag-pill whitespace-nowrap shrink-0">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
