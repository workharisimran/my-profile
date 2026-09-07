import { AnalyticsData, ClickCategory, ClickEventLog } from './types';

export const STORAGE_KEY = 'haris_portfolio_analytics';

declare global {
  interface Window {
    dataLayer?: any[];
    va?: (action: string, data: any) => void;
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
    PortfolioAnalytics?: {
      getData: () => AnalyticsData;
      resetData: () => AnalyticsData;
      exportData: () => void;
      simulateClick: (category: ClickCategory, label: string) => void;
    };
  }
}

export function getDefaultAnalytics(): AnalyticsData {
  return {
    pageViews: { total: 0, byPage: {} },
    clicks: {
      total: 0,
      byCategory: {
        bmc: 0,
        linkedin: 0,
        projects: 0,
        contact: 0,
        navigation: 0,
        services: 0,
        filter: 0,
        other: 0,
      },
      byTarget: {},
    },
    events: [],
  };
}

export function getStoredAnalytics(): AnalyticsData {
  if (typeof window === 'undefined') return getDefaultAnalytics();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...getDefaultAnalytics(),
        ...parsed,
        clicks: {
          ...getDefaultAnalytics().clicks,
          ...(parsed.clicks || {}),
          byCategory: {
            ...getDefaultAnalytics().clicks.byCategory,
            ...(parsed.clicks?.byCategory || {}),
          },
        },
      };
    }
  } catch (e) {
    console.warn('Analytics storage access error:', e);
  }
  return getDefaultAnalytics();
}

export function saveStoredAnalytics(data: AnalyticsData): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('analytics_updated', { detail: data }));
  } catch (e) {
    console.warn('Analytics save error:', e);
  }
}

export function recordPageView(pathname: string): void {
  if (typeof window === 'undefined') return;
  const data = getStoredAnalytics();
  const pageName = pathname.includes('experience')
    ? 'Experience Page'
    : pathname.includes('admin')
    ? 'Admin Dashboard'
    : 'Home Page';

  data.pageViews.total = (data.pageViews.total || 0) + 1;
  data.pageViews.byPage[pageName] = (data.pageViews.byPage[pageName] || 0) + 1;

  // 1. Neon PostgreSQL Database Real-Time Push
  try {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'pageview',
        pageName,
        path: pathname,
        referrer: document.referrer || '',
      }),
    }).catch((err) => console.warn('Neon DB tracking push failed:', err));
  } catch (e) {
    // ignore
  }

  // 2. GTM
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view_tracked',
      page_name: pageName,
      timestamp: new Date().toISOString(),
    });
  }

  // 3. Vercel Analytics
  if (typeof window.va === 'function') {
    window.va('event', { name: 'page_view', data: { page: pageName } });
  }

  saveStoredAnalytics(data);
}

export function categorizeClick(
  href: string,
  text: string,
  element: HTMLElement
): { category: ClickCategory; label: string } {
  const lowerHref = (href || '').toLowerCase();
  const lowerText = (text || '').toLowerCase();

  if (lowerHref.includes('buymeacoffee.com') || lowerText.includes('buy me a coffee')) {
    return { category: 'bmc', label: 'Buy Me a Coffee' };
  }
  if (lowerHref.includes('linkedin.com') || lowerText.includes('linkedin')) {
    return { category: 'linkedin', label: 'LinkedIn Profile' };
  }
  if (lowerHref.includes('foredu.co.in') || lowerText.includes('edutrack')) {
    return { category: 'projects', label: 'Project: EduTrack' };
  }
  if (lowerHref.includes('myrestotoday.com') || lowerText.includes('myresto')) {
    return { category: 'projects', label: 'Project: myResto Today' };
  }
  if (lowerHref.startsWith('mailto:') || lowerHref.startsWith('tel:') || lowerHref.includes('#contact')) {
    return {
      category: 'contact',
      label:
        'Contact Action: ' +
        (lowerHref.startsWith('mailto:')
          ? 'Email'
          : lowerHref.startsWith('tel:')
          ? 'Phone'
          : 'Contact Section'),
    };
  }
  if (element.classList.contains('filter-btn') || element.closest('.filter-btn')) {
    return { category: 'filter', label: 'Filter: ' + text.trim().slice(0, 30) };
  }
  if (element.closest('.site-nav') || element.closest('.mobile-nav')) {
    return { category: 'navigation', label: 'Nav: ' + text.trim().slice(0, 25) };
  }
  if (element.closest('.service-card') || lowerHref.includes('#services')) {
    return { category: 'services', label: 'Service Item: ' + text.trim().slice(0, 30) };
  }

  return { category: 'other', label: text.trim().slice(0, 40) || href || 'General Interaction' };
}

export function recordClickEvent(category: ClickCategory, label: string, href: string = ''): void {
  if (typeof window === 'undefined') return;
  const data = getStoredAnalytics();
  const pathname = window.location.pathname;
  const pageName = pathname.includes('experience')
    ? 'Experience Page'
    : pathname.includes('admin')
    ? 'Admin Dashboard'
    : 'Home Page';

  data.clicks.total = (data.clicks.total || 0) + 1;
  data.clicks.byCategory[category] = (data.clicks.byCategory[category] || 0) + 1;
  data.clicks.byTarget[label] = (data.clicks.byTarget[label] || 0) + 1;

  const eventObj: ClickEventLog = {
    id: Date.now() + Math.random().toString(36).substring(2, 6),
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    date: new Date().toLocaleDateString(),
    page: pageName,
    category,
    label,
    href: href || 'Button Action',
  };

  data.events = [eventObj, ...(data.events || [])].slice(0, 100);
  saveStoredAnalytics(data);

  // 1. Neon PostgreSQL Real-Time Click Push
  try {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'click',
        category,
        label,
        href,
        page: pageName,
      }),
    }).catch((err) => console.warn('Neon DB click push failed:', err));
  } catch (e) {
    // ignore
  }

  // 2. GTM
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'portfolio_click',
      click_category: category,
      click_label: label,
      click_href: href,
      page_name: pageName,
    });
  }

  // 3. Vercel Analytics
  if (typeof window.va === 'function') {
    window.va('event', {
      name: 'click_' + category,
      data: { label, page: pageName, href },
    });
  }

  // 4. Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'click_' + category, {
      event_category: category,
      event_label: label,
      page_path: window.location.pathname,
    });
  }

  // 5. Microsoft Clarity
  if (typeof window.clarity === 'function') {
    window.clarity('event', (category + '_' + label.slice(0, 25)).replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase());
  }
}
