export interface Post {
  id: string;
  contents: string;
  title: string;
  subtitle: string;
  date: string;
  layout: string;
  author: string;
  categories: string[];
  cover_image: string;
  permalink: string;
  importance: number;
  cta: string;
  excerpt: string;
}
