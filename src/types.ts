export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
}

export interface CaseStudyItem {
  id: string;
  views: string;
  title: string;
  brand: string;
  description: string;
  image: string;
  results: { label: string; value: string }[];
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  badge: string;
}
