"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
  className?: string;
}

export function SectionWrapper({ children, id, className = "" }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      className={`py-24 px-4 relative ${className}`}
    >
      {children}
    </motion.section>
  );
}

interface HeadingProps {
  title: string;
  highlight: string;
  subtitle?: string;
}

export function SectionHeading({ title, highlight, subtitle }: HeadingProps) {
  return (
    <div className="text-center mb-14">
      <h2 className="section-title">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
