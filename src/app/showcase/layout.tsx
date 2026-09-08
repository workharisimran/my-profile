import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Showcase & Previous Works | HARIS I M',
  description:
    'Explore previous website development projects, FoodTech SaaS platforms, educational portals, and rapid web applications architected and engineered by Haris I M.',
  openGraph: {
    title: 'Web Development Showcase | Haris I M',
    description:
      'Explore live websites, FoodTech SaaS applications, EduTech systems, and responsive web platforms built with modern technology.',
    images: [{ url: '/PROFILE.png', width: 800, height: 800, alt: 'Haris I M' }],
  },
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
