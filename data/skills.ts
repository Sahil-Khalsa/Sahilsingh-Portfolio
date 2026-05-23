import type { Skill, SkillCategory } from "@/types";

export const skills: Skill[] = [
  // Languages
  { name: "Python",       category: "languages",  level: 5 },
  { name: "TypeScript",   category: "languages",  level: 5 },
  { name: "JavaScript",   category: "languages",  level: 5 },
  { name: "SQL",          category: "languages",  level: 5 },
  { name: "C++",          category: "languages",  level: 4 },
  { name: "Java",         category: "languages",  level: 4 },

  // Frontend
  { name: "React",          category: "frontend", level: 4 },
  { name: "Next.js",        category: "frontend", level: 4 },
  { name: "TypeScript",     category: "frontend", level: 5 },
  { name: "JavaScript",     category: "frontend", level: 5 },
  { name: "HTML5",          category: "frontend", level: 5 },
  { name: "CSS3",           category: "frontend", level: 5 },
  { name: "Tailwind CSS",   category: "frontend", level: 5 },
  { name: "Redux Toolkit",  category: "frontend", level: 4 },
  { name: "Zustand",        category: "frontend", level: 4 },
  { name: "React Hook Form",category: "frontend", level: 4 },
  { name: "Axios",          category: "frontend", level: 5 },
  { name: "Chart.js",       category: "frontend", level: 4 },

  // Backend & Frameworks
  { name: "REST APIs",       category: "frameworks", level: 5 },
  { name: "FastAPI",         category: "frameworks", level: 5 },
  { name: "Node.js/Express", category: "frameworks", level: 5 },
  { name: "Microservices",   category: "frameworks", level: 5 },
  { name: "Django REST",     category: "frameworks", level: 4 },
  { name: "System Design",   category: "frameworks", level: 4 },

  // Cloud, Data & DevOps
  { name: "PostgreSQL",      category: "databases", level: 5 },
  { name: "MongoDB",         category: "databases", level: 5 },
  { name: "AWS",             category: "databases", level: 4 },
  { name: "Docker",          category: "databases", level: 5 },
  { name: "GitHub Actions",  category: "databases", level: 5 },
  { name: "DynamoDB",        category: "databases", level: 4 },
  { name: "Firebase",        category: "databases", level: 4 },

  // AI & ML
  { name: "LangGraph",          category: "ai", level: 5 },
  { name: "LangChain",          category: "ai", level: 4 },
  { name: "OpenAI",             category: "ai", level: 5 },
  { name: "Claude",             category: "ai", level: 5 },
  { name: "RAG Pipelines",      category: "ai", level: 5 },
  { name: "Vector Search",      category: "ai", level: 5 },
  { name: "Prompt Engineering", category: "ai", level: 5 },
  { name: "Tool Calling",       category: "ai", level: 5 },
  { name: "Structured Outputs", category: "ai", level: 5 },
  { name: "LLM-as-Judge",       category: "ai", level: 4 },
  { name: "Guardrails",         category: "ai", level: 4 },
  { name: "Pandas",             category: "ai", level: 5 },
  { name: "Scikit-learn",       category: "ai", level: 4 },
  { name: "PyTorch",            category: "ai", level: 3 },
  { name: "OpenCV",             category: "ai", level: 4 },
  { name: "MediaPipe",          category: "ai", level: 4 },
  { name: "U²Net",              category: "ai", level: 4 },

  // Reliability & DevOps
  { name: "Debugging",     category: "devops", level: 5 },
  { name: "Monitoring",    category: "devops", level: 4 },
  { name: "Unit Testing",  category: "devops", level: 4 },
  { name: "CI/CD",         category: "devops", level: 5 },
  { name: "Code Reviews",  category: "devops", level: 4 },
  { name: "Logging",       category: "devops", level: 4 },
];

export const skillCategories: { id: SkillCategory | "all"; label: string; color: string; textColor: string }[] = [
  { id: "all",        label: "All",              color: "rgba(139,92,246,0.18)",  textColor: "hsl(252,65%,72%)" },
  { id: "languages",  label: "Languages",        color: "rgba(6,182,212,0.18)",   textColor: "hsl(190,80%,62%)" },
  { id: "frontend",   label: "Frontend",         color: "rgba(251,146,60,0.18)",  textColor: "hsl(25,95%,65%)" },
  { id: "frameworks", label: "Backend",          color: "rgba(139,92,246,0.18)",  textColor: "hsl(252,65%,72%)" },
  { id: "databases",  label: "Cloud & DevOps",   color: "rgba(16,185,129,0.18)",  textColor: "hsl(160,64%,55%)" },
  { id: "ai",         label: "AI & ML",          color: "rgba(239,68,68,0.18)",   textColor: "hsl(0,80%,65%)" },
  { id: "devops",     label: "Reliability",      color: "rgba(234,179,8,0.18)",   textColor: "hsl(48,96%,60%)" },
];
