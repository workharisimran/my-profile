'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SERVICES_DATA, PROJECTS_DATA, EXPERIENCE_DATA } from '@/lib/data';
import { ExperienceCategory } from '@/lib/types';

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState<ExperienceCategory>('all');

  const filteredRoles = EXPERIENCE_DATA.filter((role) => {
    if (activeFilter === 'all') return true;
    return role.categories.includes(activeFilter as any);
  });

  const filterCounts = {
    all: EXPERIENCE_DATA.length,
    founding: EXPERIENCE_DATA.filter((r) => r.categories.includes('founding')).length,
    tech: EXPERIENCE_DATA.filter((r) => r.categories.includes('tech')).length,
    advisory: EXPERIENCE_DATA.filter((r) => r.categories.includes('advisory')).length,
    education: EXPERIENCE_DATA.filter((r) => r.categories.includes('education')).length,
    growth: EXPERIENCE_DATA.filter((r) => r.categories.includes('growth')).length,
  };

  return (
    <main id="top">
      {/* Page Hero / Bio */}
      <section className="section page-intro">
        <div className="page-intro-content">
          <div className="headline-badge">Track Record &amp; Ventures</div>
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 4.8rem)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              margin: '0.5rem 0',
            }}
          >
            Professional Experience &amp; Projects
          </h1>
          <p className="profile-tagline">
            Founder, CEO &amp; MD at <strong>myResto Today Pvt. Ltd.</strong> | AI-Powered FoodTech
            SaaS Builder | Restaurant Growth Consultant &amp; SOP Implementer | F&amp;B &amp; EduTech
            Innovator | Entrepreneur
          </p>

          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <a
              className="button button-primary"
              href="https://www.linkedin.com/in/harisimetpa/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
            <a className="button button-secondary" href="#services">
              Services Provided
            </a>
            <a className="button button-secondary" href="#projects">
              Explore Projects
            </a>
            <a className="button button-secondary" href="#timeline">
              Career Timeline
            </a>
          </div>

          <ul className="stats-bar" aria-label="Key profile milestones">
            <li className="stat-chip">
              <span className="stat-number">10+ Yrs</span>
              <p className="stat-desc">Leadership &amp; Governance</p>
            </li>
            <li className="stat-chip">
              <span className="stat-number">3+</span>
              <p className="stat-desc">Ventures Founded &amp; Directed</p>
            </li>
            <li className="stat-chip">
              <span className="stat-number">15</span>
              <p className="stat-desc">Core Advisory &amp; Tech Services</p>
            </li>
            <li className="stat-chip">
              <span className="stat-number">7+ Builds</span>
              <p className="stat-desc">EduTrack &amp; Software Platforms</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Services Provided Section */}
      <section id="services" className="section">
        <div className="section-heading">
          <p className="section-tag">Areas of Value</p>
          <h2>Services Provided</h2>
          <p className="hero-text" style={{ marginTop: '0.6rem', maxWidth: '46rem' }}>
            Comprehensive consulting, entrepreneurial leadership, software innovation, and hands-on
            guidance for businesses, startups, and institutions.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-top">
                <span className="service-num">{service.num}</span>
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p className="section-tag">Platforms &amp; Innovations</p>
          <h2>Featured Projects &amp; Software Architecture</h2>
          <p className="hero-text" style={{ marginTop: '0.6rem', maxWidth: '44rem' }}>
            Bridging technical systems architecture with real-world business needs across educational
            technology, restaurant operations, and rapid full-stack engineering.
          </p>
        </div>

        <div className="project-grid">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div>
                <div className="project-cat">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.link ? (
                <a
                  className="project-link-btn"
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {project.linkText}
                </a>
              ) : (
                <span className="project-link-btn" style={{ cursor: 'default' }}>
                  {project.linkText}
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="timeline" className="section">
        <div className="section-heading">
          <p className="section-tag">Career History</p>
          <h2>Professional Journey &amp; Leadership Positions</h2>
          <p className="hero-text" style={{ marginTop: '0.6rem', maxWidth: '44rem' }}>
            From founding hospitality tech ventures and architecting digital platforms to mentoring
            early-stage startups and governing educational boards.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar-wrapper" role="tablist" aria-label="Filter experience by category">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveFilter('all')}
          >
            All Roles <span className="filter-count">{filterCounts.all}</span>
          </button>
          <button
            className={`filter-btn ${activeFilter === 'founding' ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveFilter('founding')}
          >
            Founding &amp; Executive <span className="filter-count">{filterCounts.founding}</span>
          </button>
          <button
            className={`filter-btn ${activeFilter === 'tech' ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveFilter('tech')}
          >
            Tech &amp; Architecture <span className="filter-count">{filterCounts.tech}</span>
          </button>
          <button
            className={`filter-btn ${activeFilter === 'advisory' ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveFilter('advisory')}
          >
            Mentorship &amp; Advisory <span className="filter-count">{filterCounts.advisory}</span>
          </button>
          <button
            className={`filter-btn ${activeFilter === 'education' ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveFilter('education')}
          >
            Education &amp; Community <span className="filter-count">{filterCounts.education}</span>
          </button>
          <button
            className={`filter-btn ${activeFilter === 'growth' ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveFilter('growth')}
          >
            Growth, Sales &amp; Media <span className="filter-count">{filterCounts.growth}</span>
          </button>
        </div>

        {/* Timeline List */}
        <div className="exp-timeline" id="experienceList">
          {filteredRoles.map((exp) => (
            <article key={exp.id} className="exp-card">
              <div className="exp-card-header">
                <div className="exp-title-group">
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-badges">
                  {exp.badges.map((b) => (
                    <span
                      key={b}
                      className={`badge-pill ${
                        b.toLowerCase().includes('full')
                          ? 'full-time'
                          : b.toLowerCase().includes('part')
                          ? 'part-time'
                          : b.toLowerCase().includes('self')
                          ? 'self-employed'
                          : b.toLowerCase().includes('remote')
                          ? 'remote'
                          : b.toLowerCase().includes('hybrid')
                          ? 'hybrid'
                          : 'onsite'
                      }`}
                    >
                      {b}
                    </span>
                  ))}
                  <span className="badge-pill period">{exp.period}</span>
                </div>
              </div>
              {(exp.location || exp.focus) && (
                <div className="exp-meta">
                  {exp.location && <span className="exp-meta-item">{exp.location}</span>}
                  {exp.focus && <span className="exp-meta-item">{exp.focus}</span>}
                </div>
              )}
              <p className="exp-desc">{exp.description}</p>
              <div className="exp-skills">
                <span className="skills-label">Core Competencies:</span>
                {exp.skills.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="section contact-section">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="section-tag">Let&apos;s Connect</p>
            <h2>Open for advisory, consulting, and technological partnerships.</h2>
            <p>
              Whether you are building a restaurant brand needing SOP &amp; AI clarity, scaling an
              EduTech initiative, or seeking an experienced founder &amp; software architect, let&apos;s
              talk.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <a
                className="button button-primary"
                href="https://www.linkedin.com/in/harisimetpa/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn &rarr;
              </a>
            </div>
          </div>
          <div className="contact-list" aria-label="Direct contact methods">
            <a
              href="https://buymeacoffee.com/harisimranetpa"
              target="_blank"
              rel="noreferrer"
              style={{
                background:
                  'linear-gradient(145deg, rgba(255, 250, 230, 0.95), rgba(255, 241, 195, 0.9))',
                borderColor: 'rgba(245, 158, 11, 0.45)',
                boxShadow: '0 8px 24px rgba(245, 158, 11, 0.15)',
              }}
            >
              <span style={{ color: '#b45309', fontWeight: 800 }}>Support Creator</span>
              <strong style={{ color: '#92400e' }}>☕ buymeacoffee.com/harisimranetpa</strong>
            </a>
            <a href="https://www.linkedin.com/in/harisimetpa/" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>linkedin.com/in/harisimetpa</strong>
            </a>
            <a href="tel:+919747650176">
              <span>Phone</span>
              <strong>+91 97476 50176</strong>
            </a>
            <a href="mailto:md@myrestotoday.io">
              <span>Email</span>
              <strong>md@myrestotoday.io</strong>
            </a>
            <a href="https://myrestotoday.com" target="_blank" rel="noreferrer">
              <span>Website</span>
              <strong>myrestotoday.com</strong>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
