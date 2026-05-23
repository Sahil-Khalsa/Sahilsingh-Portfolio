"use client";

import { motion } from "framer-motion";
import { Calendar, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="Licenses &"
          highlight="Certifications"
          subtitle="Verified credentials across AI, cloud, and data engineering."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, borderColor: "rgba(139,92,246,0.3)" }}
              className="glass rounded-2xl p-5 flex flex-col gap-4 group transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white text-xs font-black shrink-0`}>
                  {cert.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 font-medium">{cert.issuer}</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3 shrink-0" />
                  Issued {cert.issued}
                </span>
                {cert.expires && (
                  <span className="text-muted-foreground/50">· Exp {cert.expires}</span>
                )}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {cert.skills.map((s) => (
                  <span key={s} className="tag-pill">{s}</span>
                ))}
              </div>

              {/* Verified badge */}
              <div className="flex items-center gap-1.5 text-[11px] font-semibold pt-1"
                style={{ color: "hsl(252,65%,68%)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <BadgeCheck className="h-3.5 w-3.5" />
                Verified Credential
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
