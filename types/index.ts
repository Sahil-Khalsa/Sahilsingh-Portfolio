export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  accent: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  location: string;
  period: string;
  logo: string;
  color: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
  color: string;
  courses: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: 1 | 2 | 3 | 4 | 5;
}

export type SkillCategory = "languages" | "frontend" | "frameworks" | "databases" | "devops" | "ai";

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  skills: string[];
  color: string;
  logo: string;
  credentialUrl?: string;
}

export interface NavItem {
  name: string;
  href: string;
}
