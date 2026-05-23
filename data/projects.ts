import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "SIGMA: Multi-Agent AI Trading System",
    description:
      "Full-stack autonomous trading system that monitors 20 stocks in real time, detects 9 technical signals, and routes them through a LangGraph ReAct agent that reasons across 6 research tools before deciding to trade. Every decision passes an 8-rule deterministic risk agent and streams live to a 7-page React dashboard via WebSocket. Built with a 6-call budget cap (~$0.02 per trade), 20 passing tests, Docker deployment, and GitHub Actions CI/CD.",
    image: "/SIGMA_IMAGE.png",
    tags: ["LangGraph", "Claude AI", "FastAPI", "PostgreSQL", "WebSocket", "Python"],
    demoUrl: "https://lnkd.in/gSgzAjGJ",
    githubUrl: "https://github.com/Sahil-Khalsa/sigma-trading-system",
    accent: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "ARIA: Adherence Risk Intelligence Agent",
    description:
      "Full-stack clinical intelligence platform for hypertension management. Ingests patient EHR data via FHIR R4, runs a three-layer nightly AI pipeline (deterministic rule engine, numeric risk scorer, and LLM clinical briefing) and delivers a structured pre-visit briefing to clinicians at 7:30 AM on appointment days. Features patient-adaptive BP thresholds, drug interaction detection, an AI chatbot for patient Q&A, a patient PWA for home readings, and 583 passing tests.",
    image: "/ARIA_IMAGE.png",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "FHIR R4", "Claude AI", "OpenAI", "TypeScript"],
    demoUrl: "https://youtu.be/Dnuikyftd-k",
    githubUrl: "https://github.com/Sahil-Khalsa/ARIA",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Outreach Revival: Community Health Platform",
    description:
      "Multi-agent community health platform connecting elderly and homebound residents with vetted volunteers from local faith organizations. An 8-agent Claude network handles intake triage, volunteer matching, SMS dispatch, FHIR R4 referral ingestion, daily risk scans, and audit logging via MCP servers and the A2A protocol. A 6-signal weighted formula scores volunteers by distance, schedule overlap, skills, rating, language, and relationship history. Finishes a 2003 NIH-funded proof of concept that the technology of the time could not deliver.",
    image: "",
    tags: ["Claude AI", "Next.js", "Supabase", "Mapbox", "FHIR R4", "Twilio", "pgvector"],
    demoUrl: "#",
    githubUrl: "#",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    title: "Ace Prep: AI Interview Simulator",
    description:
      "Full-stack AI mock-interview SaaS platform scaled to 200+ users. Reduced transcript retrieval latency 35% (1.2s faster) by redesigning PostgreSQL schema and indexes. Increased release velocity 20% via test-backed CI/CD pipelines.",
    image: "",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript", "CI/CD", "AI"],
    demoUrl: "#",
    githubUrl: "#",
    accent: "from-cyan-500 to-teal-600",
  },
];
