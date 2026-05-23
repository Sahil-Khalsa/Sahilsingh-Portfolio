"use client";

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { name: "Home",       href: "#hero" },
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects" },
  { name: "Skills",          href: "#skills" },
  { name: "Certifications",  href: "#certifications" },
  { name: "Contact",         href: "#contact" },
];

const ALL_IDS = ["hero", "about", "experience", "projects", "skills", "certifications", "contact"];

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored !== "light";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return { dark, toggle };
}

function NavPill({ active, scrolled }: { active: string; scrolled: boolean }) {
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });

  const measure = () => {
    const idx = navItems.findIndex((i) => i.href.slice(1) === active);
    const el = itemRefs.current[idx];
    const nav = navRef.current;
    if (!el || !nav) return;
    const nr = nav.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    setPill({ left: er.left - nr.left, width: er.width, ready: true });
  };

  useLayoutEffect(measure, [active]);
  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <nav
      ref={navRef}
      className={cn(
        "relative flex items-center px-1.5 py-1.5 rounded-full transition-all duration-500",
        scrolled
          ? "bg-card/80 backdrop-blur-xl border border-white/10 shadow-lg"
          : "bg-white/5 backdrop-blur-md border border-white/8"
      )}
    >
      <span
        aria-hidden
        className="absolute top-1.5 bottom-1.5 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(135deg, hsl(252,65%,60%) 0%, hsl(190,80%,50%) 100%)",
          boxShadow: "0 0 16px rgba(139,92,246,0.5)",
          left: pill.left,
          width: pill.width,
          opacity: pill.ready ? 1 : 0,
          transition: pill.ready
            ? "left 0.35s cubic-bezier(0.4,0,0.2,1), width 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.15s"
            : "none",
        }}
      />
      {navItems.map((item, i) => (
        <a
          key={item.name}
          ref={(el) => { itemRefs.current[i] = el; }}
          href={item.href}
          className={cn(
            "relative z-10 px-4 py-1.5 text-sm font-semibold whitespace-nowrap rounded-full transition-colors duration-200 select-none",
            active === item.href.slice(1) ? "text-white" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("hero");
  const [open, setOpen]         = useState(false);
  const { dark, toggle }        = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const getActive = () => {
      let closestId = "hero";
      let closestDist = Infinity;
      for (const id of ALL_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const dist = Math.abs(el.getBoundingClientRect().top - 80);
        if (dist < closestDist) { closestDist = dist; closestId = id; }
      }
      return closestId;
    };

    const onScroll = () => setActive(getActive());
    window.addEventListener("scroll", onScroll, { passive: true });
    getActive();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const themeBtn = (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shrink-0"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
      }}
    >
      {dark
        ? <Sun  className="h-4 w-4 text-yellow-400" />
        : <Moon className="h-4 w-4 text-blue-400"   />}
    </button>
  );

  const inHero = active === "hero";

  return (
    <>
      {/* ── Desktop ─────────────────────────────────────────────── */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 hidden md:flex items-center px-8 transition-all duration-500",
        scrolled ? "py-3" : "py-4",
      )}>
        {/* Logo */}
        <a href="#hero" className={cn(
          "flex items-center gap-2.5 group flex-shrink-0 transition-all duration-500",
          inHero ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <span className="relative flex h-10 w-10 shrink-0">
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 via-cyan-400 to-violet-400 opacity-80"
              style={{ animation: "spin 3s linear infinite" }} />
            <span className="absolute inset-[2.5px] rounded-full overflow-hidden bg-background">
              <Image src="/profile.jpg" alt="Sahilsingh" width={40} height={40} priority
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300" />
            </span>
          </span>
          <span className="text-base font-extrabold tracking-tight gradient-text-hero">
            Sahilsingh<span className="text-primary">.</span>
          </span>
        </a>

        {/* Centered pill nav */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <NavPill active={active} scrolled={scrolled} />
        </div>

        {/* Right side: theme toggle + Hire Me */}
        <div className={cn(
          "ml-auto flex items-center gap-3 flex-shrink-0 transition-all duration-500",
          inHero ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          {themeBtn}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, hsl(252,65%,60%) 0%, hsl(190,80%,50%) 100%)",
              color: "white",
              boxShadow: "0 0 18px rgba(139,92,246,0.35)",
            }}
          >
            Hire Me
          </a>
        </div>
      </header>

      {/* ── Mobile ──────────────────────────────────────────────── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className={cn(
          "flex items-center justify-between px-5 py-3 transition-all duration-500",
          scrolled || open ? "bg-background/90 backdrop-blur-xl border-b border-white/8" : "bg-transparent"
        )}>
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <span className="relative flex h-9 w-9 shrink-0">
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 via-cyan-400 to-violet-400 opacity-80"
                style={{ animation: "spin 3s linear infinite" }} />
              <span className="absolute inset-[2.5px] rounded-full overflow-hidden bg-background">
                <Image src="/profile.jpg" alt="Sahilsingh" width={36} height={36} priority
                  className="w-full h-full object-cover object-top" />
              </span>
            </span>
            <span className="text-sm font-bold">Sahilsingh<span className="text-primary">.</span></span>
          </a>

          {/* Theme toggle + hamburger — side by side, no overlap */}
          <div className="flex items-center gap-2">
            {themeBtn}
            <button
              onClick={() => setOpen((p) => !p)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <span className={cn("block h-0.5 w-4 rounded-full bg-foreground transition-all duration-300 origin-center", open && "rotate-45 translate-y-[5px]")} />
              <span className={cn("block h-0.5 w-4 rounded-full bg-foreground transition-all duration-300", open && "opacity-0 scale-x-0")} />
              <span className={cn("block h-0.5 w-4 rounded-full bg-foreground transition-all duration-300 origin-center", open && "-rotate-45 -translate-y-[5px]")} />
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div className={cn(
          "overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-xl border-b border-white/8",
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navItems.map((item, i) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${i * 35}ms` : "0ms" }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                    open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
                    isActive ? "bg-primary text-white" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", isActive ? "bg-white" : "bg-primary")} />
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="px-5 pb-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, hsl(252,65%,60%) 0%, hsl(190,80%,50%) 100%)",
                color: "white",
                boxShadow: "0 4px 16px rgba(139,92,246,0.35)",
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
