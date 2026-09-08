import { WebsiteItem, ShowcaseDatabase, ShowcaseCategory } from './types';
import showcaseRaw from '@/data/showcase.json';

export const SHOWCASE_DB: ShowcaseDatabase = showcaseRaw as ShowcaseDatabase;
export const SHOWCASE_DATA: WebsiteItem[] = SHOWCASE_DB.websites;
export const SHOWCASE_CATEGORIES_LIST: string[] = SHOWCASE_DB.categories;

// Map categories with icons
export const CATEGORY_ICONS: Record<string, string> = {
  all: '🌟',
  'Islamic Platform': '🕌',
  'Islamic Education': '📖',
  'Education SaaS': '🎓',
  'Hospitality & Resort': '🌴',
  'Luxury Stay': '✨',
  'FoodTech SaaS': '🍽️',
  'E-Commerce': '🛍️',
  'Personal Portfolio': '💼',
};

export const SHOWCASE_CATEGORIES: { id: ShowcaseCategory; label: string; icon: string }[] = [
  { id: 'all', label: 'All Works', icon: '🌟' },
  ...SHOWCASE_CATEGORIES_LIST.map((cat) => ({
    id: cat,
    label: cat,
    icon: CATEGORY_ICONS[cat] || '🌐',
  })),
];

export function getShowcaseByCategory(category: string): WebsiteItem[] {
  if (category === 'all') {
    return SHOWCASE_DATA;
  }
  return SHOWCASE_DATA.filter((item) => item.category === category);
}

export function getFeaturedShowcases(): WebsiteItem[] {
  return SHOWCASE_DATA.filter((item) => item.featured);
}

export function getShowcaseBySlug(slug: string): WebsiteItem | undefined {
  return SHOWCASE_DATA.find((item) => item.slug === slug);
}
