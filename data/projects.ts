import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "LedgerLens: Multimodal Financial-Filing Intelligence Engine",
    description:
      "Multimodal RAG engine for SEC financial filings that retrieves over rendered page images via ColPali v1.2 — eliminating the table structure loss that breaks text-only pipelines. A 6-node LangGraph agent cross-checks every extracted figure against SEC XBRL ground truth before it ships, making hallucinated numbers architecturally impossible. Single-fact queries bypass retrieval entirely via a planner fast path, answering directly from the XBRL database in under 1 second. Includes earnings call ASR via Whisper, XBRL trend forecasting via OLS regression, and per-query cost tracking across all nodes. Achieved 83.3% numeric EM and 0% hallucination on NVDA and MSFT 10-Ks.",
    image: "/LedgerLens_Image.png",
    tags: ["LangGraph", "ColPali", "FastAPI", "pgvector", "GPT-4o", "Next.js", "PostgreSQL", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/Sahil-Khalsa/LedgerLens",
    accent: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
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
    id: 3,
    title: "Outreach Revival: Community Health Platform",
    description:
      "AI-triaged volunteer dispatch platform connecting elderly and homebound residents with vetted volunteers from faith-based organizations. An 8-agent Claude network over 5 MCP servers handles intake, matching, SMS dispatch, FHIR R4 referrals, and daily risk scans. Volunteers are ranked by a 6-signal weighted formula covering distance, schedule, skills, rating, language, and relationship history.",
    image: "/Outrach_revival.png",
    tags: ["Claude AI", "Next.js", "Supabase", "tRPC", "FHIR R4", "Twilio", "pgvector", "LangGraph"],
    demoUrl: "https://outreach-production-04e5.up.railway.app",
    githubUrl: "https://github.com/Sahil-Khalsa/outreach-revival",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    title: "ARIA: Adherence Risk Intelligence Agent",
    description:
      "Full-stack clinical intelligence platform for hypertension management. Ingests patient EHR data via FHIR R4, runs a three-layer nightly AI pipeline (deterministic rule engine, numeric risk scorer, and LLM clinical briefing) and delivers a structured pre-visit briefing to clinicians at 7:30 AM on appointment days. Features patient-adaptive BP thresholds, drug interaction detection, an AI chatbot for patient Q&A, a patient PWA for home readings, and 583 passing tests.",
    image: "/ARIA_IMAGE.png",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "FHIR R4", "Claude AI", "OpenAI", "TypeScript"],
    demoUrl: "https://youtu.be/Dnuikyftd-k",
    githubUrl: "https://github.com/Sahil-Khalsa/ARIA",
    accent: "from-blue-500 to-indigo-600",
  },
];
