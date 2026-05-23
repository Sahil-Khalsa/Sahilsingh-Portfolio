"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading title="Featured" highlight="Projects" subtitle="A selection of projects built across AI pipelines, backend systems, and full-stack SaaS." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              whileHover={{ y: -5, borderColor: "rgba(139,92,246,0.25)", boxShadow: "0 16px 56px rgba(0,0,0,0.55), 0 0 0 1px rgba(139,92,246,0.2)" }}
              className="glass rounded-2xl overflow-hidden flex flex-col group transition-all duration-300"
            >
              {/* Accent line on hover */}
              <div className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, transparent, hsl(252,65%,65%), transparent)" }} />

              {/* Thumbnail or gradient fallback */}
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                {project.image && project.image !== "" && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                {/* Overlay gradient for readability */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }} />
                {/* Hover overlay with links */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-5"
                  style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
                  {project.demoUrl !== "#" && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
                      onClick={(e) => e.stopPropagation()}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }}>
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                      onClick={(e) => e.stopPropagation()}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }}>
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.demoUrl === "#" && project.githubUrl === "#" && (
                    <span className="text-white/70 text-sm font-medium">Coming soon</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
                <div className="flex items-center gap-4 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  {project.demoUrl !== "#" && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl !== "#" ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
                      <GithubIcon size={12} /> Source
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground/40 cursor-default select-none">
                      <GithubIcon size={12} /> Private
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="text-center mt-10">
          <a href="https://github.com/Sahil-Khalsa?tab=repositories" target="_blank" rel="noopener noreferrer"
            className="cosmic-btn inline-flex items-center gap-2">
            More on GitHub <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
