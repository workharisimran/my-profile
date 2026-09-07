import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <main id="top">
      {/* Floating Geometric Elements in Hero (From Design Reference) */}
      <div className="hero-geometric-ring" aria-hidden="true" />
      <div className="hero-geometric-ring-orange" aria-hidden="true" />
      <div className="hero-geometric-dot" aria-hidden="true" />

      {/* Floating Let's Chat Badge (From Design Reference) */}
      <a href="#contact" className="floating-live-badge" aria-label="Let's Chat / Available for Projects">
        <span className="live-pulse-dot" />
        <span>Available &bull; Let&apos;s Chat 💬</span>
      </a>

      {/* Hero Section */}
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">Founder, CEO &amp; MD at myResto Today Pvt. Ltd</p>
          <h1>
            HARIS <span className="text-neon">I M</span>
          </h1>
          <p className="hero-text">
            AI-Powered FoodTech SaaS Builder | Restaurant Growth Consultant &amp; SOP Implementer | F&amp;B &amp; EduTech Innovator | Entrepreneur
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/experience">
              View Experience &amp; Projects &rarr;
            </Link>
            <Link className="button button-secondary" href="/experience#services">
              Services (15)
            </Link>
            <a className="button button-secondary" href="#contact">
              Send Message
            </a>
            <a
              className="button button-secondary"
              href="https://myrestotoday.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit myResto Today &nearr;
            </a>
          </div>
          <ul className="quick-facts" aria-label="Key profile details">
            <li>
              <span>Role</span>
              <strong>Founder, MD &amp; CEO</strong>
            </li>
            <li>
              <span>Focus</span>
              <strong>Hospitality Tech &amp; SOP Consulting</strong>
            </li>
            <li>
              <span>Base Contact</span>
              <strong>+91 97476 50176</strong>
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="portrait-wrap">
            <Image
              src="/PROFILE.png"
              alt="Portrait of Haris I M speaking into a microphone"
              width={600}
              height={700}
              priority
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
          <aside className="focus-card" aria-label="Operational focus areas">
            <p className="focus-label">Operational Focus</p>
            <ul>
              <li>Standardize</li>
              <li>Streamline</li>
              <li>Optimize</li>
              <li>Deliver Excellence</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-split">
        <div className="section-heading">
          <p className="section-tag">About</p>
          <h2>Building structure behind better hospitality experiences.</h2>
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

      {/* Approach Section */}
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
