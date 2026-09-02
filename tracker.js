/**
 * Site Analytics & Click Tracker for HARIS I M Portfolio
 * Tracks page views, user clicks, outbound links, and pushes to GTM dataLayer & localStorage
 */
(function () {
  const STORAGE_KEY = 'haris_portfolio_analytics';

  // Helper to get stored analytics
  function getAnalytics() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn('Analytics storage access error:', e);
    }
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
          other: 0
        },
        byTarget: {}
      },
      events: []
    };
  }

  // Helper to save analytics
  function saveAnalytics(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      window.dispatchEvent(new CustomEvent('analytics_updated', { detail: data }));
    } catch (e) {
      console.warn('Analytics save error:', e);
    }
  }

  // Identify current page name
  function getCurrentPageName() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    if (path.includes('experience')) return 'Experience Page';
    if (path.includes('admin')) return 'Admin Dashboard';
    return 'Home Page';
  }

  // Record Page View
  function recordPageView() {
    const data = getAnalytics();
    const page = getCurrentPageName();

    data.pageViews.total = (data.pageViews.total || 0) + 1;
    data.pageViews.byPage[page] = (data.pageViews.byPage[page] || 0) + 1;

    // Push event to GTM dataLayer if present
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view_tracked',
      page_name: page,
      timestamp: new Date().toISOString()
    });

    // Push to Vercel Analytics if available
    if (typeof window.va === 'function') {
      window.va('event', { name: 'page_view', data: { page: page } });
    }

    saveAnalytics(data);
  }

  // Categorize click
  function categorizeClick(href, text, element) {
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
      return { category: 'contact', label: 'Contact Action: ' + (lowerHref.startsWith('mailto:') ? 'Email' : lowerHref.startsWith('tel:') ? 'Phone' : 'Contact Section') };
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

  // Setup click tracking listener
  function setupClickTracker() {
    document.addEventListener('click', function (e) {
      const target = e.target;
      const link = target.closest('a');
      const button = target.closest('button');
      const interactive = link || button;

      if (!interactive) return;

      const href = link ? (link.getAttribute('href') || '') : '';
      const text = interactive.innerText || interactive.getAttribute('title') || interactive.getAttribute('aria-label') || '';
      
      const { category, label } = categorizeClick(href, text, interactive);
      const page = getCurrentPageName();

      const data = getAnalytics();

      // Increment counters
      data.clicks.total = (data.clicks.total || 0) + 1;
      data.clicks.byCategory[category] = (data.clicks.byCategory[category] || 0) + 1;
      data.clicks.byTarget[label] = (data.clicks.byTarget[label] || 0) + 1;

      // Add to recent events log (keep max 100)
      const eventObj = {
        id: Date.now() + Math.random().toString(36).substr(2, 4),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        date: new Date().toLocaleDateString(),
        page: page,
        category: category,
        label: label,
        href: href || 'Button Action'
      };

      data.events = [eventObj, ...(data.events || [])].slice(0, 100);

      saveAnalytics(data);

      // Push to GTM dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'portfolio_click',
        click_category: category,
        click_label: label,
        click_href: href,
        page_name: page
      });

      // Push to Vercel Analytics if available
      if (typeof window.va === 'function') {
        window.va('event', {
          name: 'click_' + category,
          data: { label: label, page: page, href: href }
        });
      }

      // Push to Google Analytics 4 (gtag.js)
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'click_' + category, {
          event_category: category,
          event_label: label,
          page_path: window.location.pathname
        });
      }

      // Push to Microsoft Clarity
      if (typeof window.clarity === 'function') {
        window.clarity('event', (category + '_' + label.slice(0, 25)).replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase());
      }
    }, true);
  }

  // Expose global tracker API for Admin Dashboard
  window.PortfolioAnalytics = {
    getData: getAnalytics,
    resetData: function () {
      localStorage.removeItem(STORAGE_KEY);
      const fresh = getAnalytics();
      saveAnalytics(fresh);
      return fresh;
    },
    exportData: function () {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(getAnalytics(), null, 2));
      const dlAnchor = document.createElement('a');
      dlAnchor.setAttribute("href", dataStr);
      dlAnchor.setAttribute("download", `haris_portfolio_analytics_${Date.now()}.json`);
      dlAnchor.click();
    },
    simulateClick: function (category, label) {
      const data = getAnalytics();
      data.clicks.total = (data.clicks.total || 0) + 1;
      data.clicks.byCategory[category] = (data.clicks.byCategory[category] || 0) + 1;
      data.clicks.byTarget[label] = (data.clicks.byTarget[label] || 0) + 1;
      data.events = [{
        id: Date.now() + Math.random().toString(36).substr(2, 4),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        date: new Date().toLocaleDateString(),
        page: getCurrentPageName(),
        category: category,
        label: label,
        href: 'Simulated'
      }, ...(data.events || [])].slice(0, 100);
      saveAnalytics(data);
    }
  };

  // Secret admin access shortcut: Ctrl + Shift + A or triple click brand logo
  function setupAdminShortcut() {
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        window.location.href = 'admin.html';
      }
    });

    let logoClicks = 0;
    let logoTimer = null;
    document.addEventListener('click', (e) => {
      if (e.target.closest('.brand-link') || e.target.closest('.brand-mark') || e.target.closest('.footer-logo')) {
        logoClicks++;
        clearTimeout(logoTimer);
        if (logoClicks >= 3) {
          logoClicks = 0;
          window.location.href = 'admin.html';
        } else {
          logoTimer = setTimeout(() => { logoClicks = 0; }, 800);
        }
      }
    });
  }

  // Run on DOM loaded or immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      recordPageView();
      setupClickTracker();
      setupAdminShortcut();
    });
  } else {
    recordPageView();
    setupClickTracker();
    setupAdminShortcut();
  }
})();
