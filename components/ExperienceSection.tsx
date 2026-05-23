"use client";

import { useState } from "react";
import { Briefcase, MapPin, Calendar, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import type { Experience } from "@/types";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";

type WorkEntry = { kind: "work" } & Experience;

const TIMELINE: WorkEntry[] = [
  { kind: "work", ...experiences[0] },
  { kind: "work", ...experiences[1] },
  { kind: "work", ...experiences[2] },
  { kind: "work", ...experiences[3] },
];

function Badge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-semibold"
      style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)", color: "hsl(252,65%,72%)" }}>
      <Briefcase className="h-2.5 w-2.5" /> Work
    </span>
  );
}

function WorkCard({ e, open, onToggle }: { e: WorkEntry; open: boolean; onToggle: () => void }) {
  return (
    <motion.div layout onClick={onToggle} whileHover={{ y: -2 }} className="glass rounded-2xl p-5 cursor-pointer select-none"
      transition={{ layout: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } }}>
      <div className="flex items-start gap-3">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${e.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
          {e.logo}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-bold text-base leading-snug truncate">{e.company}</h3>
              <p className="text-sm font-semibold mt-0.5 truncate" style={{ color: "hsl(252,65%,72%)" }}>{e.role}</p>
            </div>
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.28 }} className="shrink-0 mt-0.5">
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </motion.div>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3 shrink-0" />{e.period}</span>
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3 shrink-0" />{e.location}</span>
          </div>
          <div className="mt-2"><Badge /></div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <ul className="space-y-2 mb-4">
                {e.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-[5px] w-1 h-1 rounded-full bg-primary shrink-0" />{a}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {e.technologies.map((t) => <span key={t} className="tag-pill">{t}</span>)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TimelineDot({ color }: { color: string }) {
  return (
    <motion.div
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
      className={`w-4 h-4 rounded-full bg-gradient-to-br ${color} ring-[3px] ring-background z-10 shrink-0`}
      style={{ boxShadow: "0 0 14px rgba(139,92,246,0.55)" }}
    />
  );
}

export function ExperienceSection() {
  const [openId, setOpenId] = useState<string>("work-1");
  const toggle = (id: string) => setOpenId(prev => prev === id ? "" : id);

  return (
    <SectionWrapper id="experience">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading title="Journey &" highlight="Timeline" subtitle="Professional milestones and academic background, all in one view." />

        <div className="relative">
          <div aria-hidden className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.35) 12%, rgba(139,92,246,0.35) 88%, transparent 100%)" }} />
          <div aria-hidden className="md:hidden absolute left-[18px] top-4 bottom-4 w-px pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.35) 12%, rgba(139,92,246,0.35) 88%, transparent 100%)" }} />

          <div className="flex flex-col gap-6 md:gap-8">
            {TIMELINE.map((item, index) => {
              const id = `work-${item.id}`;
              const isLeft = index % 2 === 0;

              return (
                <motion.div key={id}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Mobile */}
                  <div className="md:hidden relative pl-10">
                    <div className="absolute left-[10px] top-[18px]">
                      <TimelineDot color={item.color} />
                    </div>
                    <WorkCard e={item} open={openId === id} onToggle={() => toggle(id)} />
                  </div>

                  {/* Desktop */}
                  <div className="hidden md:grid grid-cols-[1fr_3rem_1fr] items-start gap-2">
                    <div className="pr-2">
                      {isLeft && <WorkCard e={item} open={openId === id} onToggle={() => toggle(id)} />}
                    </div>
                    <div className="flex justify-center pt-[18px]">
                      <TimelineDot color={item.color} />
                    </div>
                    <div className="pl-2">
                      {!isLeft && <WorkCard e={item} open={openId === id} onToggle={() => toggle(id)} />}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
