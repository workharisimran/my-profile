import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrackerProvider from '@/components/TrackerProvider';
import ScriptIntegrations from '@/components/ScriptIntegrations';

export const metadata: Metadata = {
  metadataBase: new URL('https://myrestotoday.com'),
  title: 'HARIS I M | Portfolio',
  description:
    'Portfolio website for Haris I M, Founder, MD & CEO at myResto Today Pvt. Ltd and Hospitality Tech & SOP Consultant.',
  keywords: [
    'Haris I M',
    'myResto Today',
    'Hospitality Tech',
    'SOP Consultant',
    'FoodTech SaaS',
    'EduTrack',
    'Software Architect',
    'Vibe Coder',
    'Entrepreneur',
  ],
  authors: [{ name: 'Haris I M', url: 'https://myrestotoday.com' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'HARIS I M | Founder, MD & CEO | Hospitality Tech & SOP Consultant',
    description:
      'AI-Powered FoodTech SaaS Builder | Restaurant Growth Consultant & SOP Implementer | F&B & EduTech Innovator | Entrepreneur',
    images: [{ url: '/PROFILE.png', width: 800, height: 800, alt: 'Haris I M' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N49SMPBK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </head>
      <body>
        <div className="backdrop" aria-hidden="true" />
        <Header />
        {children}
        <Footer />
        <TrackerProvider />
        <ScriptIntegrations />
      </body>
    </html>
  );
}
