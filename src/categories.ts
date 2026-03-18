// Auto-generated from site config — do not edit manually.

export interface Category {
  slug: string;
  label: string;
  subtitle: string;
}

export const CATEGORIES: Category[] = [
  { slug: 'main', label: 'Posts from experience', subtitle: 'Experience the posts' },
];

export function getCategoryLabel(slug: string): string {
  return CATEGORIES.find(c => c.slug === slug)?.label || slug;
}

export function getCategorySubtitle(slug: string): string {
  return CATEGORIES.find(c => c.slug === slug)?.subtitle || '';
}
