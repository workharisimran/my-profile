'use client';

import React, { useState, useEffect } from 'react';
import LockOverlay from './LockOverlay';
import { getStoredAnalytics, saveStoredAnalytics, getDefaultAnalytics, STORAGE_KEY } from '@/lib/analytics';
import { AnalyticsData, ClickCategory } from '@/lib/types';

interface FormSubmission {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [analytics, setAnalytics] = useState<AnalyticsData>(getDefaultAnalytics());
  const [dbSubmissions, setDbSubmissions] = useState<FormSubmission[]>([]);
  const [dbStats, setDbStats] = useState<{ totalPageViews: number; totalClicks: number } | null>(null);
  const [loadingDb, setLoadingDb] = useState(false);

  const fetchDbStats = async () => {
    try {
      setLoadingDb(true);
      const res = await fetch('/api/admin/stats');
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.stats) {
          setDbSubmissions(data.stats.submissions || []);
          setDbStats({
            totalPageViews: data.stats.totalPageViews || 0,
            totalClicks: data.stats.totalClicks || 0,
          });
        }
      }
    } catch (e) {
      console.warn('Failed to fetch DB stats:', e);
    } finally {
      setLoadingDb(false);
    }
  };

  const refreshData = () => {
    const data = getStoredAnalytics();
    setAnalytics(data);
    fetchDbStats();
  };

  useEffect(() => {
    const auth = sessionStorage.getItem('haris_admin_auth');
    if (auth === 'unlocked') {
      setUnlocked(true);
    }
    refreshData();

    window.addEventListener('analytics_updated', refreshData);
    window.addEventListener('storage', refreshData);

    return () => {
      window.removeEventListener('analytics_updated', refreshData);
      window.removeEventListener('storage', refreshData);
    };
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem('haris_admin_auth', 'unlocked');
    setUnlocked(true);
    refreshData();
  };

  const handleLock = () => {
    sessionStorage.removeItem('haris_admin_auth');
    setUnlocked(false);
  };

  const handleExport = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(analytics, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `haris_portfolio_analytics_${Date.now()}.json`);
    dlAnchor.click();
  };

  const handleSimulateBmc = () => {
    if (window.PortfolioAnalytics) {
      window.PortfolioAnalytics.simulateClick('bmc', 'Buy Me a Coffee');
    }
    refreshData();
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all local analytics records?')) {
      localStorage.removeItem(STORAGE_KEY);
      const fresh = getDefaultAnalytics();
      saveStoredAnalytics(fresh);
      setAnalytics(fresh);
    }
  };

  const totalClicks = analytics.clicks.total || 0;
  const cats = analytics.clicks.byCategory || {};

  const catLabels: Record<ClickCategory, { label: string; class: string }> = {
    bmc: { label: '☕ Buy Me a Coffee Support', class: 'bmc' },
    linkedin: { label: '💼 LinkedIn Profile Inquiries', class: 'linkedin' },
    projects: { label: '🚀 Projects (EduTrack, myResto, etc.)', class: 'projects' },
    contact: { label: '📞 Direct Contact (Email & Phone)', class: 'contact' },
    services: { label: '💡 Core Services (15 Offerings)', class: 'services' },
    navigation: { label: '🧭 Site Navigation Clicks', class: 'navigation' },
    filter: { label: '🔍 Timeline Category Filters', class: 'filter' },
    other: { label: '⚡ Other Interactive Clicks', class: 'other' },
  };

  const sortedTargets = Object.entries(analytics.clicks.byTarget || {}).sort((a, b) => b[1] - a[1]);

  return (
    <main id="top">
      <LockOverlay unlocked={unlocked} onUnlock={handleUnlock} />

      <div id="adminContent" className={!unlocked ? 'locked-view' : ''}>
        {/* Admin Intro */}
        <section className="section admin-hero">
          <div className="section-heading">
            <div className="headline-badge">Neon DB Telemetry &amp; Intelligence</div>
            <h1>Click Tracker &amp; Audience Insights</h1>
            <p className="hero-text" style={{ marginTop: '0.6rem', maxWidth: '44rem' }}>
              Connected to Neon PostgreSQL database. Real-time telemetry measuring visitor engagement,
              form entries, referral clicks, Buy Me a Coffee support, and project interaction.
            </p>
          </div>

          <div className="admin-controls" style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <button className="button button-primary" onClick={refreshData} type="button">
              🔄 {loadingDb ? 'Loading DB...' : 'Refresh Live DB'}
            </button>
            <button className="button button-secondary" onClick={handleExport} type="button">
              📥 Export JSON
            </button>
            <button className="button button-secondary" onClick={handleSimulateBmc} type="button">
              ☕ Test +1 BMC Click
            </button>
            <button
              className="button button-secondary"
              onClick={handleReset}
              type="button"
              style={{ color: '#ef4444' }}
            >
              🗑️ Reset Local
            </button>
            <button
              className="button button-secondary"
              onClick={handleLock}
              type="button"
              style={{ marginLeft: 'auto' }}
            >
              🔒 Lock Screen
            </button>
          </div>
        </section>

        {/* 4 Metrics Cards Grid */}
        <section className="section" style={{ paddingTop: '1rem' }}>
          <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
            <div className="stat-chip">
              <span className="stat-desc">Neon DB Total Views</span>
              <p className="stat-number">{dbStats ? dbStats.totalPageViews : analytics.pageViews.total}</p>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--muted)' }}>
                Live logged in PostgreSQL table `page_views`
              </p>
            </div>

            <div className="stat-chip">
              <span className="stat-desc">Neon DB Total Clicks</span>
              <p className="stat-number">{dbStats ? dbStats.totalClicks : totalClicks}</p>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--muted)' }}>
                Live logged in PostgreSQL table `click_events`
              </p>
            </div>

            <div className="stat-chip">
              <span className="stat-desc">Form Inquiries</span>
              <p className="stat-number">{dbSubmissions.length}</p>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--muted)' }}>
                Saved in `form_submissions` table
              </p>
            </div>

            <div className="stat-chip">
              <span className="stat-desc">☕ Coffee Support</span>
              <p className="stat-number">{cats.bmc || 0}</p>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--muted)' }}>
                Buy Me a Coffee conversion clicks
              </p>
            </div>
          </div>
        </section>

        {/* Form Submissions Table (from Neon DB) */}
        <section className="section" style={{ paddingTop: '1rem' }}>
          <div className="section-heading" style={{ marginBottom: '1.5rem' }}>
            <p className="section-tag">Form Submissions</p>
            <h2>Recent Inquiries &amp; Messages</h2>
          </div>

          {dbSubmissions.length === 0 ? (
            <div className="info-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <p style={{ margin: 0 }}>No form submissions recorded yet. Messages sent via the contact form will appear here in real time.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(52, 211, 153, 0.25)', background: 'rgba(10, 24, 17, 0.85)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(52, 211, 153, 0.2)', color: 'var(--accent)' }}>
                    <th style={{ padding: '1rem' }}>ID</th>
                    <th style={{ padding: '1rem' }}>Name</th>
                    <th style={{ padding: '1rem' }}>Email / Phone</th>
                    <th style={{ padding: '1rem' }}>Service</th>
                    <th style={{ padding: '1rem' }}>Message</th>
                    <th style={{ padding: '1rem' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {dbSubmissions.map((sub) => (
                    <tr key={sub.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '1rem', color: 'var(--accent)' }}>#{sub.id}</td>
                      <td style={{ padding: '1rem', fontWeight: 'bold' }}>{sub.name}</td>
                      <td style={{ padding: '1rem' }}>
                        <div>{sub.email}</div>
                        {sub.phone && <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{sub.phone}</div>}
                      </td>
                      <td style={{ padding: '1rem', color: 'var(--accent-light)' }}>{sub.service || 'General'}</td>
                      <td style={{ padding: '1rem', maxWidth: '300px' }}>{sub.message}</td>
                      <td style={{ padding: '1rem', color: 'var(--muted)', fontSize: '0.82rem' }}>
                        {new Date(sub.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Category Breakdown */}
        <section className="section" style={{ paddingTop: '1rem' }}>
          <div className="section-heading" style={{ marginBottom: '1.5rem' }}>
            <p className="section-tag">Category Analytics</p>
            <h2>Click Category Breakdown</h2>
          </div>

          <div className="card-grid">
            {(Object.keys(catLabels) as ClickCategory[]).map((cat) => {
              const count = cats[cat] || 0;
              const pct = totalClicks > 0 ? Math.round((count / totalClicks) * 100) : 0;
              return (
                <article key={cat} className="info-card">
                  <span className="card-index">{pct}%</span>
                  <h3 style={{ fontSize: '1.1rem' }}>{catLabels[cat].label}</h3>
                  <p>
                    <strong>{count}</strong> total clicks recorded
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
