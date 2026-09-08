import LaptopMockup from '@/components/LaptopMockup';
import { SHOWCASE_DB, SHOWCASE_DATA } from '@/lib/showcase';
import { WebsiteItem } from '@/lib/types';

export default function ShowcasePage() {
  return (
    <main id="top" className="showcase-page-container">
      {/* Page Hero Section */}
      <section className="section page-intro">
        <div className="page-intro-content">
          <div className="headline-badge">
            <span>💻</span>
            <span>Web Development Works</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.4rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              margin: '0.6rem 0 1rem',
            }}
          >
            {SHOWCASE_DB.title || 'Previous Website Development Works'}
          </h1>

          <p className="profile-tagline">
            {SHOWCASE_DB.subtitle ||
              'A collection of premium websites designed and developed by HARIS I M.'}
          </p>
        </div>
      </section>

      {/* Showcase Grid Section */}
      <section className="section showcase-main-section">
        <div className="showcase-grid">
          {SHOWCASE_DATA.map((item: WebsiteItem) => {
            const accent = item.accentColor || item.brandColor || '#00f59b';
            return (
              <article key={item.id} className="showcase-card">
                {/* Laptop Mockup Image */}
                <div className="showcase-mockup-area">
                  <LaptopMockup item={item} />
                </div>

                {/* Card Information Body */}
                <div className="showcase-card-body">
                  {/* Category & Status Row */}
                  <div className="showcase-meta-row">
                    <span
                      className="showcase-category-badge"
                      style={{
                        borderColor: `${accent}50`,
                        color: accent,
                        backgroundColor: `${accent}14`,
                      }}
                    >
                      {item.category}
                    </span>
                    <span className="showcase-status-indicator">
                      <span
                        className="live-dot"
                        style={{
                          backgroundColor: accent,
                          boxShadow: `0 0 8px ${accent}`,
                        }}
                      />
                      {item.featured ? 'Featured Work' : 'Live Platform'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="showcase-title">{item.name}</h3>

                  {/* Project Description */}
                  <p className="showcase-desc">{item.description}</p>

                  {/* Domain / Live Link */}
                  <div className="showcase-domain-preview">
                    <span className="domain-globe">🌐</span>
                    <span className="domain-text">
                      {item.domain.replace(/^https?:\/\//, '')}
                    </span>
                  </div>

                  {/* Card Bottom Action Link */}
                  <div className="showcase-actions-row">
                    <a
                      className="showcase-visit-btn"
                      href={item.domain}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        background: `linear-gradient(135deg, ${
                          item.brandColor &&
                          item.brandColor !== '#000000' &&
                          item.brandColor !== '#0F0F0F'
                            ? item.brandColor
                            : '#059669'
                        } 0%, ${accent} 100%)`,
                      }}
                    >
                      <span>Visit Website</span>
                      <span className="visit-arrow">↗</span>
                    </a>

                    <span className="showcase-category-tag-sub">
                      {item.category}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom Consultation & Build CTA */}
      <section className="section showcase-cta-section">
        <div className="showcase-cta-card">
          <div className="showcase-cta-text">
            <span className="section-tag">Custom Development &amp; Architecture</span>
            <h2>Need a tailored website or SaaS platform built?</h2>
            <p>
              From Islamic knowledge platforms and FoodTech SaaS to luxury resort websites and
              scalable web applications, let&apos;s build your next digital asset with modern architecture.
            </p>
          </div>
          <div className="showcase-cta-btns">
            <a className="button button-primary" href="/#contact">
              <span>Start a Project Discussion &rarr;</span>
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/harisimetpa/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
