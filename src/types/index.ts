export interface Project {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: 'backend' | 'architecture' | 'databases' | 'testing' | 'security' | 'devops' | 'languages' | 'other';
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

