import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="luxury-footer">
      {/* Top Glowing Divider Line */}
      <div className="footer-glow-line" aria-hidden="true" />

      {/* Footer Top Callout Banner */}
      <div className="footer-cta-banner">
        <div className="footer-cta-copy">
          <span className="footer-badge-tag">LET&apos;S COLLABORATE</span>
          <h2>Have a project or venture in mind? Let&apos;s talk.</h2>
          <p>
            Open for software architecture consulting, FoodTech SaaS partnerships, and hospitality SOP strategy.
          </p>
        </div>
        <div className="footer-cta-action">
          <a href="/#contact" className="footer-talk-btn">
            <span>Let&apos;s Talk &rarr;</span>
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link className="footer-logo" href="/" aria-label="HARIS I M Home">
            <div className="brand-avatar-wrap footer-avatar">
              <Image
                src="/logo.png"
                alt="Haris I M"
                width={42}
                height={42}
                className="brand-avatar-img"
              />
            </div>
            <div className="brand-text-wrap">
              <span className="brand-name">HARIS I M</span>
              <span className="brand-sub">Founder, MD &amp; CEO</span>
            </div>
          </Link>
          <p className="footer-bio">
            AI-Powered FoodTech SaaS Builder | Restaurant Growth Consultant &amp; SOP Implementer | F&amp;B &amp; EduTech Innovator | Entrepreneur
          </p>

          <div className="footer-status-chip">
            <span className="live-status-dot" />
            <span>Available for Advisory &amp; Consultations</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <p className="footer-col-title">Explore</p>
          <ul className="footer-links-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#about">About Haris</Link></li>
            <li><Link href="/experience">Experience &amp; Track Record</Link></li>
            <li><Link href="/experience#services">Services (15 Offerings)</Link></li>
            <li><Link href="/experience#projects">Software Projects</Link></li>
            <li><Link href="/#expertise">Core Expertise</Link></li>
            <li><Link href="/#approach">Operational Framework</Link></li>
            <li><Link href="/#contact">Let&apos;s Talk</Link></li>
          </ul>
        </div>

        {/* Platforms & Ventures */}
        <div className="footer-col">
          <p className="footer-col-title">Platforms &amp; Ventures</p>
          <ul className="footer-links-list">
            <li>
              <a href="https://myrestotoday.com" target="_blank" rel="noreferrer" className="highlight-link">
                <span>myResto Today</span>
                <span className="arrow-out">&nearr;</span>
              </a>
            </li>
            <li>
              <a href="https://foredu.co.in/" target="_blank" rel="noreferrer" className="highlight-link">
                <span>EduTrack Cloud</span>
                <span className="arrow-out">&nearr;</span>
              </a>
            </li>
            <li><Link href="/experience#projects">TeaQue Digital Systems</Link></li>
            <li><Link href="/experience#projects">Fixcom India</Link></li>
            <li><Link href="/experience#projects">Vibe Coder AI Suite</Link></li>
          </ul>
        </div>

        {/* Direct Connect */}
        <div className="footer-col">
          <p className="footer-col-title">Direct Connect</p>
          <ul className="footer-links-list">
            <li>
              <a href="mailto:md@myrestotoday.io" className="connect-link">
                <span className="connect-icon">✉️</span>
                <span>md@myrestotoday.io</span>
              </a>
            </li>
            <li>
              <a href="tel:+919747650176" className="connect-link">
                <span className="connect-icon">📞</span>
                <span>+91 97476 50176</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/harisimetpa/"
                target="_blank"
                rel="noreferrer"
                className="connect-link linkedin-link"
              >
                <span className="connect-icon">💼</span>
                <span>LinkedIn Profile &nearr;</span>
              </a>
            </li>
            <li>
              <a
                href="https://buymeacoffee.com/harisimranetpa"
                target="_blank"
                rel="noreferrer"
                className="connect-link coffee-link"
              >
                <span className="connect-icon">☕</span>
                <span>Buy Me a Coffee &nearr;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">&copy; {new Date().getFullYear()} HARIS I M. All rights reserved.</p>
        <div className="footer-pills-row">
          <span className="footer-pill">Founder &amp; CEO</span>
          <span className="footer-pill">Software Architect</span>
          <span className="footer-pill">SOP Implementer</span>
        </div>
      </div>
    </footer>
  );
}
