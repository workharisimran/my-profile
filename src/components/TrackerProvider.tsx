'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  categorizeClick,
  getStoredAnalytics,
  recordClickEvent,
  recordPageView,
  saveStoredAnalytics,
  STORAGE_KEY,
} from '@/lib/analytics';
import { ClickCategory } from '@/lib/types';

export default function TrackerProvider() {
  const pathname = usePathname();

  // Page view tracking on path change
  useEffect(() => {
    recordPageView(pathname);
  }, [pathname]);

  // Global click listener & Admin API attachment
  useEffect(() => {
    // Expose global tracker API for Admin Dashboard
    window.PortfolioAnalytics = {
      getData: getStoredAnalytics,
      resetData: function () {
        localStorage.removeItem(STORAGE_KEY);
        const fresh = getStoredAnalytics();
        saveStoredAnalytics(fresh);
        return fresh;
      },
      exportData: function () {
        const dataStr =
          'data:text/json;charset=utf-8,' +
          encodeURIComponent(JSON.stringify(getStoredAnalytics(), null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute('href', dataStr);
        dlAnchor.setAttribute('download', `haris_portfolio_analytics_${Date.now()}.json`);
        dlAnchor.click();
      },
      simulateClick: function (category: ClickCategory, label: string) {
        recordClickEvent(category, label, 'Simulated Action');
      },
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest('a') as HTMLAnchorElement | null;
      const button = target.closest('button') as HTMLButtonElement | null;
      const interactive = link || button;

      if (!interactive) return;

      const href = link ? link.getAttribute('href') || '' : '';
      const text =
        interactive.innerText ||
        interactive.getAttribute('title') ||
        interactive.getAttribute('aria-label') ||
        '';

      const { category, label } = categorizeClick(href, text, interactive);
      recordClickEvent(category, label, href);
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return null;
}
