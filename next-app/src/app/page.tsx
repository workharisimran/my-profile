import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <main id="top" className="pitch-dark-main">
      {/* Floating Neon Geometry (Directly from reference design) */}
      <div className="hero-geometric-ring" aria-hidden="true" />
      <div className="hero-geometric-ring-orange" aria-hidden="true" />
      <div className="hero-geometric-dot" aria-hidden="true" />

      {/* Floating Let's Chat Badge (Bottom Right - from reference design) */}
      <a href="#contact" className="floating-live-badge" aria-label="Let's Chat / Available for Projects">
        <span className="live-pulse-dot" />
        <span>Available &bull; Let&apos;s Chat 💬</span>
      </a>

      {/* 3-Column Luxury Hero Section (1-to-1 Match with Reference Design) */}
      <section className="tazrin-hero section">
        {/* Left Hero Column */}
        <div className="hero-col-left">
          <p className="hero-greeting">Hi,</p>
          <h1 className="hero-main-title">
            I&apos;m <span className="hero-highlight-name">Haris</span>
          </h1>
          <p className="hero-sub-title">FoodTech SaaS Architect &amp; Founder</p>

          <div className="hero-cta-wrap">
            <a href="#contact" className="hero-hire-btn">
              <span>Let&apos;s Talk</span>
              <span className="btn-arrow-icon">&rarr;</span>
            </a>
          </div>

          {/* Social Icons Strip (Bottom Left of Reference Image) */}
          <div className="hero-social-strip">
            <a
              href="https://www.linkedin.com/in/harisimetpa/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="social-icon-btn"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z" />
              </svg>
            </a>
            <a
              href="https://myrestotoday.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
              title="myResto Today"
              className="social-icon-btn"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
            <a
              href="mailto:md@myrestotoday.io"
              aria-label="Email"
              title="md@myrestotoday.io"
              className="social-icon-btn"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://myrestotoday.com"
              target="_blank"
              rel="noreferrer"
              className="hero-badge-pill"
            >
              <span className="dot-sphere" />
              <span>www.myrestotoday.com</span>
            </a>
          </div>
        </div>

        {/* Center Hero Column: Seamless Dark Portrait */}
        <div className="hero-col-center">
          <div className="portrait-dark-canvas">
            <Image
              src="/PROFILE.png"
              alt="Haris I M"
              width={520}
              height={640}
              priority
              className="portrait-dark-img"
            />
            <div className="portrait-fade-overlay" aria-hidden="true" />
          </div>
        </div>

        {/* Right Hero Column */}
        <div className="hero-col-right">
          <p className="hero-expert-tag">Expert on</p>
          <h2 className="hero-right-title">
            Based in India &amp; UAE,<br />
            I&apos;m SaaS builder and SOP consultant.
          </h2>
          <p className="hero-right-desc">
            Looking for an architect &amp; consultant to build your FoodTech brand, implement AI
            workflows, and scale operations? Let&apos;s shake hands with me.
          </p>
          <div className="hero-right-actions">
            <a href="#about" className="hero-cv-download-link">
              <span>Explore Track Record</span>
              <span className="download-icon">&darr;</span>
            </a>
            <Link href="/experience" className="hero-cv-download-link secondary">
              <span>View 15 Core Services &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="section stats-strip-section">
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
      </section>

      {/* About Section */}
      <section id="about" className="section section-split">
        <div className="section-heading">
          <p className="section-tag">About</p>
          <h2>Building structure behind better hospitality &amp; tech experiences.</h2>
        </div>
        <div className="section-copy">
          <p>
            Haris works at the intersection of hospitality operations, practical technology, and
            process clarity. Through myResto Today Pvt. Ltd, his professional focus is centered on
            helping businesses create smoother, more consistent systems that teams can actually use
            day to day.
          </p>
          <p>
            This platform highlights the journey, expertise, and ventures shaped into a modern
            digital portfolio reflecting his multi-disciplinary role as an entrepreneur, consultant,
            software architect, and operations-focused leader.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="section">
        <div className="section-heading center">
          <p className="section-tag">Expertise</p>
          <h2>Founder-led thinking with an operations-first mindset.</h2>
        </div>
        <div className="card-grid">
          <article className="info-card">
            <span className="card-index">01</span>
            <h3>Hospitality Tech</h3>
            <p>
              Translating operational needs into practical digital systems and AI workflows for
              hospitality and service businesses.
            </p>
          </article>
          <article className="info-card">
            <span className="card-index">02</span>
            <h3>SOP Strategy</h3>
            <p>
              Structuring repeatable operating procedures that reduce confusion and improve
              consistency across teams and branches.
            </p>
          </article>
          <article className="info-card">
            <span className="card-index">03</span>
            <h3>Process Optimization</h3>
            <p>
              Identifying friction in workflows and refining the way people, tools, and service
              standards work together seamlessly.
            </p>
          </article>
          <article className="info-card">
            <span className="card-index">04</span>
            <h3>Entrepreneurial Leadership</h3>
            <p>
              Bringing a founder&apos;s perspective to business improvement, sustainable growth, and
              long-term operational excellence.
            </p>
          </article>
        </div>
      </section>

      {/* Approach Framework */}
      <section id="approach" className="section">
        <div className="section-heading">
          <p className="section-tag">Approach</p>
          <h2>A simple framework for scaling service quality.</h2>
        </div>
        <div className="pillar-grid">
          <article className="pillar">
            <span>01</span>
            <h3>Standardize</h3>
            <p>Create clear foundations so teams know what good looks like.</p>
          </article>
          <article className="pillar">
            <span>02</span>
            <h3>Streamline</h3>
            <p>Reduce clutter and make workflows easier to follow in real time.</p>
          </article>
          <article className="pillar">
            <span>03</span>
            <h3>Optimize</h3>
            <p>Improve the way systems, people, and decisions support performance.</p>
          </article>
          <article className="pillar">
            <span>04</span>
            <h3>Deliver Excellence</h3>
            <p>Turn operational discipline into stronger customer experiences.</p>
          </article>
        </div>
      </section>

      {/* Contact Section & Form */}
      <section id="contact" className="section contact-section">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="section-tag">Get in Touch</p>
            <h2>Open to conversations around hospitality growth &amp; smarter operations.</h2>
            <p>
              Reach out for consulting, collaboration, or founder-to-founder conversations around
              hospitality systems, software architecture, and process improvement.
            </p>

            <div className="contact-list" aria-label="Direct contact links">
              <a href="mailto:md@myrestotoday.io">
                <span>Email Directly</span>
                <strong>md@myrestotoday.io</strong>
              </a>
              <a href="tel:+919747650176">
                <span>Phone / WhatsApp</span>
                <strong>+91 97476 50176</strong>
              </a>
              <a href="https://www.linkedin.com/in/harisimetpa/" target="_blank" rel="noreferrer">
                <span>LinkedIn Profile</span>
                <strong>linkedin.com/in/harisimetpa</strong>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
