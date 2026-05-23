import type { Experience, Education } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Find Me LLC",
    role: "Software Development Engineer",
    location: "Chicago, Illinois",
    period: "Jan 2026 – May 2026",
    logo: "FM",
    color: "from-violet-500 to-purple-600",
    achievements: [
      "Scaled FyndMe.net to support 9 portfolio types and 4 template tiers by architecting a 3-service microservices platform across Next.js, Node.js/Express, and FastAPI.",
      "Collaborated with product and engineering teams to ship 11+ public and protected workflows by translating portfolio requirements into React/Next.js pages, API routing, and JWT-secured client-to-backend communication.",
      "Unified 9 portfolio schemas into a single MongoDB model using Mongoose discriminators, with per-type validation, visibility controls, and soft-delete support.",
      "Developed a containerized AI-powered FastAPI image-processing service using U²Net, MediaPipe, and OpenCV.",
    ],
    technologies: ["Next.js", "React", "FastAPI", "Node.js", "MongoDB", "Docker", "JWT", "Azure Blob", "Mongoose", "Python", "PyTorch"],
  },
  {
    id: 2,
    company: "Gabriel AI",
    role: "Backend Engineer",
    location: "Chicago, Illinois",
    period: "Jul 2025 – Dec 2025",
    logo: "GA",
    color: "from-cyan-500 to-teal-600",
    achievements: [
      "Owned campaign workflow reliability by designing Firebase state tracking for CSV imports, delivery updates, analytics, and 4-stage execution across AI voice campaigns.",
      "Engineered an AI voice-cloning pipeline that generated 1,000+ personalized messages per campaign in under 10 minutes, saving 33+ hours of manual recording, by integrating ElevenLabs, AWS S3, and Drop Cowboy.",
      "Developed 10+ protected campaign, billing, analytics, and voice workflows for a 0-to-1 SaaS platform by integrating React 18, TypeScript, and Django REST.",
      "Collaborated across teams to secure 1M+ generated audio assets by implementing Stripe access checks, HTTPOnly JWT auth and CloudWatch-backed debugging.",
    ],
    technologies: ["Python", "Django REST", "React 18", "TypeScript", "Firebase", "AWS S3", "ElevenLabs", "Stripe", "Docker", "NGINX"],
  },
  {
    id: 3,
    company: "The Build Fellowship",
    role: "Developer Build Student Consultant",
    location: "Chicago, Illinois · Remote",
    period: "Jul 2025 – Sep 2025",
    logo: "BF",
    color: "from-indigo-500 to-blue-600",
    achievements: [
      "Built a full-stack credential management tool for Bookkeep.com with AES-256 end-to-end encryption. Passphrases are never stored or transmitted, keeping credentials unreadable even if the database is compromised.",
      "Developed Node.js/Express backend APIs for credential CRUD, JWT auth, and encrypted PostgreSQL storage with protection against SQL injection and XSS; built the frontend in Retool with team-based sharing, RBAC, and email notifications.",
      "Deployed on Render with live previews and GitHub-based version control; documented encryption architecture and deployment steps for self-hosting and enterprise use.",
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "AES-256", "Retool", "Render", "GitHub"],
  },
  {
    id: 4,
    company: "The Special Character",
    role: "Software Engineer",
    location: "Ahmedabad, India",
    period: "Dec 2023 – May 2024",
    logo: "SC",
    color: "from-orange-500 to-rose-500",
    achievements: [
      "Led backend development for advertiser-facing workflows using TypeScript/Node.js, building 7+ REST APIs that enabled 4 business-critical product flows across the platform.",
      "Reduced noisy production failures by 32% across critical endpoints by hardening request validation, standardizing API contracts, and adding defensive error handling to backend services.",
      "Improved deployment reliability by embedding automated tests into the CI/CD pipeline, enabling zero-downtime releases across 6 production deployments and increasing confidence in rollout stability.",
    ],
    technologies: ["TypeScript", "Node.js", "REST APIs", "CI/CD", "PostgreSQL"],
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Illinois Institute of Technology",
    degree: "Master of Science, Computer Science",
    location: "Chicago, IL",
    period: "Aug 2024 – May 2026",
    gpa: "3.7 / 4.0",
    color: "from-violet-500 to-cyan-500",
    courses: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Organization", "Healthcare AI"],
  },
  {
    id: 2,
    institution: "Vidush Somany Institute of Technology",
    degree: "Bachelor of Science, Computer Engineering",
    location: "India",
    period: "Aug 2020 – May 2024",
    gpa: "4.0 / 4.0",
    color: "from-violet-500 to-purple-600",
    courses: ["Information Security", "Software Engineering", "Big Data Technologies", "Probability & Statistics", "Database Systems"],
  },
];
