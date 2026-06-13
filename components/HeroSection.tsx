"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, FileText, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PHRASES = ["Software Dev Engineer", "AI Engineer", "Backend Developer"];
const TYPE_SPEED   = 85;
const DELETE_SPEED = 40;
const PAUSE_AFTER  = 2000;
const PAUSE_BEFORE = 350;

function useTypewriter(phrases: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex]         = useState(0);
  const [phase, setPhase]         = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");
  const text = phrases[index];

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (displayed.length < text.length)
        t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), TYPE_SPEED);
      else setPhase("pausing");
    } else if (phase === "pausing") {
      t = setTimeout(() => setPhase("deleting"), PAUSE_AFTER);
    } else if (phase === "deleting") {
      if (displayed.length > 0)
        t = setTimeout(() => setDisplayed(text.slice(0, displayed.length - 1)), DELETE_SPEED);
      else { setIndex((p) => (p + 1) % phrases.length); setPhase("waiting"); }
    } else {
      t = setTimeout(() => setPhase("typing"), PAUSE_BEFORE);
    }
    return () => clearTimeout(t);
  }, [displayed, phase, text, phrases.length]);

  return displayed;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

const socials = [
  { icon: GithubIcon,   href: "https://github.com/Sahil-Khalsa",                          label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/sahilsingh-khalsa-9a460025b/", label: "LinkedIn" },
  { icon: Mail,         href: "mailto:sahilkhalsa0516@outlook.com",                         label: "Email" },
];

export function HeroSection() {
  const role = useTypewriter(PHRASES);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 md:pt-0 md:pb-0 overflow-hidden">

      {/* ── Dot grid texture ─────────────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ zIndex: 0,
        backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.35) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* ── Single soft background glow ─────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ zIndex: 1 }}>
        <div style={{
          position: "absolute", width: 900, height: 900,
          top: "50%", left: "35%", transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 65%)",
          filter: "blur(64px)",
        }} />
        <div style={{
          position: "absolute", width: 500, height: 500,
          bottom: "0%", right: "-5%",
          background: "radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)",
          filter: "blur(56px)",
        }} />
      </div>

      <div className="container max-w-5xl mx-auto z-10 w-full">
        <motion.div
          variants={container} initial="hidden" animate="show"
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-4"
        >

          {/* ── Left: text ─────────────────────────────────────────── */}
          <div className="flex-1 text-center md:text-left space-y-5 md:space-y-7 max-w-2xl">

            {/* Availability badge */}
            <motion.div variants={fadeUp} className="flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide"
                style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.3)", color: "rgb(52,211,153)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeUp}>
              <p className="text-lg text-muted-foreground font-medium mb-4 tracking-wider uppercase">Hi, I&apos;m</p>
              <h1 className="font-black tracking-tight leading-[0.92]">
                <span className="gradient-text-hero block pb-2 text-5xl sm:text-6xl md:text-7xl">Sahilsingh</span>
                <span className="text-foreground block text-5xl sm:text-6xl md:text-7xl">
                  Khalsa<span className="text-primary">.</span>
                </span>
              </h1>
            </motion.div>

            {/* Gradient rule + typewriter + location */}
            <motion.div variants={fadeUp} className="space-y-3">
              <div className="h-px w-48 mx-auto md:mx-0" style={{
                background: "linear-gradient(90deg, hsl(252,65%,60%), hsl(190,80%,50%), transparent)",
              }} />
              <p className="text-xl md:text-2xl font-semibold text-muted-foreground min-h-[2rem] flex items-center justify-center md:justify-start">
                {role}
                <span className="inline-block w-[2px] h-[1em] ml-1 align-middle animate-pulse"
                  style={{ background: "hsl(252,65%,65%)" }} />
              </p>
              <p className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 shrink-0" />
                United States
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed">
              I build AI-powered software that turns messy real-world workflows into reliable, usable products.
              My work spans full-stack engineering, backend systems, cloud infrastructure, DevOps, RAG pipelines,
              and agentic AI applications built for real users, not demos.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#projects"
                className="inline-flex items-center px-7 py-3 rounded-lg text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
                style={{
                  background: "hsl(252,65%,58%)",
                  boxShadow: "0 4px 16px rgba(139,92,246,0.4)",
                }}>
                View My Work <ArrowRight size={15} className="ml-1" />
              </a>
              <a href="https://drive.google.com/file/d/1F8W3cOb1qwNrpZ4VyFpRSUlrD_no-0Pv/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "var(--foreground)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}>
                <FileText size={15} className="mr-1" /> Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 justify-center md:justify-start">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "hsl(215,20%,58%)" }}>
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: photo ───────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="flex-shrink-0 flex items-center justify-center relative"
          >
            {/* Ambient glow behind photo */}
            <div aria-hidden className="absolute pointer-events-none" style={{
              inset: -48,
              background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)",
              filter: "blur(32px)",
              borderRadius: "50%",
            }} />

            {/* Static gradient border ring */}
            <div aria-hidden className="absolute rounded-full pointer-events-none"
              style={{
                inset: -3,
                background: "linear-gradient(135deg, hsl(252,65%,60%), hsl(190,80%,50%), hsl(252,65%,45%), hsl(190,80%,50%))",
                borderRadius: "50%",
              }}
            />

            {/* Mask ring */}
            <div className="absolute rounded-full pointer-events-none bg-background" style={{ inset: 1 }} />

            {/* Faint orbit track */}
            <div aria-hidden className="absolute rounded-full pointer-events-none"
              style={{ inset: -28, border: "1px dashed rgba(139,92,246,0.22)", borderRadius: "50%" }} />

            {/* Orbiting dot — violet, clockwise */}
            <motion.div aria-hidden className="absolute pointer-events-none"
              style={{ inset: -28 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                style={{ background: "hsl(252,65%,65%)", boxShadow: "0 0 18px rgba(139,92,246,1)" }} />
            </motion.div>

            {/* Orbiting dot — cyan, counter-clockwise, starts opposite */}
            <motion.div aria-hidden className="absolute pointer-events-none"
              style={{ inset: -28 }}
              initial={{ rotate: 180 }}
              animate={{ rotate: 180 - 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full"
                style={{ background: "hsl(190,80%,55%)", boxShadow: "0 0 16px rgba(6,182,212,1)" }} />
            </motion.div>

            {/* Actual photo — circular crop */}
            <div className="relative rounded-full overflow-hidden w-[170px] h-[170px] md:w-[360px] md:h-[360px]"
              style={{ background: "hsl(224,50%,5%)" }}>
              <Image
                src="/profile.jpg"
                alt="Sahilsingh Khalsa"
                fill
                sizes="320px"
                priority
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
