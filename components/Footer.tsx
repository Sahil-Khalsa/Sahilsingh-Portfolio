import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
        {/* Logo — left */}
        <span className="sm:flex-1 text-base font-extrabold tracking-tight gradient-text-hero">
          Sahilsingh<span className="text-primary">.</span>
        </span>

        {/* Center */}
        <p className="text-xs text-muted-foreground sm:flex-1 text-center">Made with ❤️</p>

        {/* Right */}
        <div className="sm:flex-1 flex items-center justify-center sm:justify-end gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <a href="#hero" aria-label="Back to top"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)", color: "hsl(252,65%,72%)" }}>
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
