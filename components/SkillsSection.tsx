"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/types";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";

function Dots({ level }: { level: number }) {
  return (
    <span className="flex items-center gap-0.5 shrink-0">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: i < level ? "hsl(252,65%,65%)" : "rgba(255,255,255,0.12)" }} />
      ))}
    </span>
  );
}

export function SkillsSection() {
  const [active, setActive] = useState<SkillCategory | "all">("all");

  const filtered = skills.filter((s) => active === "all" || s.category === active);

  return (
    <SectionWrapper id="skills">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading title="My" highlight="Skills" subtitle="Technologies and tools I work with across backend, cloud, and AI." />

        {/* Filter pills */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10">
          {skillCategories.map((c) => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={active === c.id
                ? { background: c.color, border: `1px solid ${c.textColor}44`, color: c.textColor, boxShadow: `0 0 16px ${c.color}` }
                : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "hsl(215,20%,55%)" }}>
              {c.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3">
            {filtered.map((skill, i) => (
              <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.02, duration: 0.28 }}
                whileHover={{ y: -2, scale: 1.04 }}
                className="glass flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default">
                <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                <Dots level={skill.level} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-8">
          Dots indicate proficiency: ●●●●● expert · ●●●●○ advanced · ●●●○○ proficient
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
