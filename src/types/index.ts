export type Language = 'en' | 'ar';

export type BilingualText = {
  en: string;
  ar: string;
};

export type CategoryKey = 'Space' | 'Earth' | 'Physics' | 'Biology' | 'Technology' | 'StrangeFacts';

export interface CategoryInfo {
  key: CategoryKey;
  label: BilingualText;
  description: BilingualText;
  iconName: string;
}

export type IllustrationType = 
  | 'blackhole' 
  | 'neptune' 
  | 'earth' 
  | 'quantum' 
  | 'dna' 
  | 'telescope'
  | 'space';

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: BilingualText;
  shortDescription: BilingualText;
  fullDescription: BilingualText;
  keyTakeaways: {
    en: string[];
    ar: string[];
  };
  category: CategoryKey;
  duration: string;
  publishDate: string;
  featured?: boolean;
  illustrationType: IllustrationType;
}

export interface ArticleSection {
  id: string;
  heading: BilingualText;
  content: BilingualText;
  evidenceType?: 'empirical_fact' | 'scientific_hypothesis' | 'established_theory';
  evidenceNote?: BilingualText;
}

export interface ReferenceItem {
  title: string;
  institutionOrJournal: string;
  year?: string;
  doiOrUrl?: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: BilingualText;
  excerpt: BilingualText;
  category: CategoryKey;
  readTimeMinutes: number;
  publishDate: string;
  author: BilingualText;
  isDraftNotice: boolean;
  illustrationType: IllustrationType;
  featured?: boolean;
  sections: ArticleSection[];
  references: ReferenceItem[];
}

export interface QuizQuestionItem {
  id: number;
  category: CategoryKey;
  difficulty: 'Elementary' | 'Intermediate' | 'Advanced';
  question: BilingualText;
  options: {
    en: string[];
    ar: string[];
  };
  correctIndex: number;
  explanation: BilingualText;
  scientificContext: BilingualText;
}

export interface DailyFactItem {
  id: string;
  fact: BilingualText;
  category: CategoryKey;
  explanation: BilingualText;
  verifiedSource: string;
}

export interface SiteConfig {
  channelName: string;
  tagline: BilingualText;
  youtubeChannelUrl: string;
  youtubeHandle: string;
  subscriberCountPlaceholder: string;
  videoCountPlaceholder: string;
  socials: {
    youtube: string;
    xTwitter: string;
    instagram: string;
    tiktok: string;
    githubRepo: string;
  };
  contactEmail: string;
  logoText: string;
}
