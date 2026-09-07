import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="footer-logo" href="/" aria-label="HARIS I M Home">
            <div className="brand-avatar-wrap footer-avatar">
              <Image
                src="/logo.png"
                alt="Haris I M"
                width={38}
                height={38}
                className="brand-avatar-img"
              />
            </div>
            <div className="brand-text-wrap">
              <span className="brand-name">HARIS I M</span>
            </div>
          </Link>
          <p className="footer-bio">
            Founder, CEO &amp; MD at <strong>myResto Today Pvt. Ltd.</strong> | AI-Powered FoodTech SaaS Builder | Restaurant Growth Consultant &amp; SOP Implementer | F&amp;B &amp; EduTech Innovator | Entrepreneur
          </p>
          <div className="footer-social-row">
            <a
              className="social-pill-btn bmc-pill"
              href="https://buymeacoffee.com/harisimranetpa"
              target="_blank"
              rel="noreferrer"
              title="Buy Me a Coffee"
            >
              <span>☕</span>
              <span>Buy Me a Coffee</span>
            </a>
            <a
              className="social-pill-btn linkedin-pill"
              href="https://www.linkedin.com/in/harisimetpa/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div>
          <p className="footer-col-title">Navigation</p>
          <ul className="footer-links-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#about">About Haris</Link></li>
            <li><Link href="/experience">Experience</Link></li>
            <li><Link href="/experience#services">Services (15)</Link></li>
            <li><Link href="/experience#projects">Featured Projects</Link></li>
            <li><Link href="/#expertise">Core Expertise</Link></li>
            <li><Link href="/#approach">Approach Framework</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Platforms</p>
          <ul className="footer-links-list">
            <li>
              <a href="https://myrestotoday.com" target="_blank" rel="noreferrer">
                myResto Today &rarr;
              </a>
            </li>
            <li>
              <a href="https://foredu.co.in/" target="_blank" rel="noreferrer">
                EduTrack &rarr;
              </a>
            </li>
            <li><Link href="/experience#projects">TeaQue Digital</Link></li>
            <li><Link href="/experience#projects">Fixcom India</Link></li>
            <li><Link href="/experience#projects">Vibe Coder Suite</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Direct Connect</p>
          <ul className="footer-links-list">
            <li>
              <a href="mailto:md@myrestotoday.io">
                <span>✉️</span>
                <span>md@myrestotoday.io</span>
              </a>
            </li>
            <li>
              <a href="tel:+919747650176">
                <span>📞</span>
                <span>+91 97476 50176</span>
              </a>
            </li>
            <li>
              <a
                href="https://buymeacoffee.com/harisimranetpa"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#b45309', fontWeight: 700 }}
              >
                <span>☕</span>
                <span>buymeacoffee.com/harisimranetpa</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/harisimetpa/"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#0a66c2', fontWeight: 700 }}
              >
                <span>🔗</span>
                <span>LinkedIn Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 HARIS I M. All rights reserved.</p>
        <p className="footer-credits">
          <span>Founder</span> &bull; <span>Software Architect</span> &bull; <span>Vibe Coder</span>
        </p>
      </div>
    </footer>
  );
}
