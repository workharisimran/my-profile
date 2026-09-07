export type ExperienceCategory = 'all' | 'founding' | 'tech' | 'advisory' | 'education' | 'growth';

export interface ServiceItem {
  id: string;
  num: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: string;
  linkText?: string;
  featured?: boolean;
}

export interface ExperienceRole {
  id: string;
  role: string;
  company: string;
  period: string;
  badges: string[];
  location?: string;
  focus?: string;
  description: string;
  skills: string[];
  categories: ('founding' | 'tech' | 'advisory' | 'education' | 'growth')[];
}

export type ClickCategory =
  | 'bmc'
  | 'linkedin'
  | 'projects'
  | 'contact'
  | 'navigation'
  | 'services'
  | 'filter'
  | 'other';

export interface ClickEventLog {
  id: string;
  timestamp: string;
  date: string;
  page: string;
  category: ClickCategory;
  label: string;
  href: string;
}

export interface AnalyticsData {
  pageViews: {
    total: number;
    byPage: Record<string, number>;
  };
  clicks: {
    total: number;
    byCategory: Record<ClickCategory, number>;
    byTarget: Record<string, number>;
  };
  events: ClickEventLog[];
}
