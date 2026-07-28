// ===============================================
// HERO
// ===============================================

export interface HeroButton {
  title: string;
  icon: string;
  link: string;
  primary: boolean;
}

// ===============================================
// SOCIAL
// ===============================================

export interface Social {
  github: string;
  linkedin: string;
  medium: string;
  twitter?: string;
  kaggle?: string;
  leetcode?: string;
  stackoverflow?: string;
}

// ===============================================
// PROFILE
// ===============================================

export interface Profile {
  firstName: string;
  lastName: string;
  fullName: string;

  title: string;
  company: string;

  subtitle: string;
  tagline: string;

  about: string;

  image: string;

  resume: string;

  email: string;
  phone: string;

  location: string;

  availableForWork: boolean;
}

// ===============================================
// ABOUT
// ===============================================

export interface About {
  title: string;
  subtitle: string;
  paragraphs: string[];

  educationTitle: string;
  educationHighlights: {
    degree: string;
    university: string;
    duration: string;
    score: string;
  }[];

  certificationHighlights: string[];

  skillsTitle: string;
  featuredSkills: {
    name: string;
  }[];
}

// ===============================================
// STATS
// ===============================================

export interface Stat {
  label: string;
  value: string;
}

// ===============================================
// EXPERIENCE
// ===============================================

export interface Experience {
  id: number;

  company: string;

  logo?: string;

  role: string;

  duration: string;

  location: string;

  summary: string;

  technologies: string[];

  achievements: string[];
}

// ===============================================
// PROJECT
// ===============================================

export interface Project {
  id: number;

  featured: boolean;

  title: string;

  company: string;

  duration: string;

  image: string;

  gallery: string[];

  github: string;

  live: string;

  technologies: string[];

  shortDescription: string;

  description: string;

  businessProblem: string;

  responsibilities: string[];

  highlights: string[];

  architecture: string[];
}

// ===============================================
// SKILLS
// ===============================================

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

// ===============================================
// EDUCATION
// ===============================================

export interface Education {
  degree: string;

  university: string;

  duration: string;

  location: string;

  score: string;

  logo: string;
}

// ===============================================
// CERTIFICATIONS
// ===============================================

export interface Certification {
  title: string;

  issuer: string;

  year: string;

  badge: string;

  credential: string;
}

// ===============================================
// BLOGS
// ===============================================

export interface Blog {
  title: string;

  description: string;

  date: string;

  image: string;

  url: string;
}

// ===============================================
// CONTACT
// ===============================================

export interface Contact {
  title: string;

  subtitle: string;

  email: string;

  phone: string;

  location: string;
}

// ===============================================
// FOOTER
// ===============================================

export interface Footer {
  message: string;

  tech: string;
}

// ===============================================
// PORTFOLIO
// ===============================================

export interface Portfolio {
  profile: Profile;

  social: Social;

  heroButtons: HeroButton[];

  navigation: string[];

  about: About;

  stats: Stat[];

  experience: Experience[];

  projects: Project[];

  projectArchive: Project[];

  skills: Record<string, Skill[]>;

  education: Education[];

  certifications: Certification[];

  blogs: Blog[];

  achievements: string[];

  contact: Contact;

  footer: Footer;
}

export interface FeaturedSkill {
  name: string;
}