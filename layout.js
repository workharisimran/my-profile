/**
 * Universal Layout Loader for HARIS I M Portfolio
 * Automatically loads and links header.html and footer.html across all pages
 */
(function () {
  const HEADER_TEMPLATE = `
  <header class="site-header">
    <div class="header-main">
      <a class="brand-link" href="index.html" aria-label="HARIS I M Home">
        <div class="brand-avatar-wrap">
          <img src="logo.png" alt="Haris I M" class="brand-avatar-img">
        </div>
        <div class="brand-text-wrap">
          <span class="brand-name">HARIS I M</span>
        </div>
      </a>
      <nav class="site-nav" aria-label="Primary navigation">
        <a href="index.html" data-page="home">Home</a>
        <a href="index.html#about">About</a>
        <a href="experience.html" data-page="experience">Experience &amp; Projects</a>
        <div class="nav-dropdown" data-page="services">
          <a href="experience.html#services" class="nav-dropdown-trigger">
            <span>Services</span>
            <span class="dropdown-arrow">▼</span>
          </a>
          <div class="dropdown-menu">
            <a href="experience.html#services" class="dropdown-item">Services (15 Offerings)</a>
            <a href="index.html#expertise" class="dropdown-item">Expertise &amp; Approach</a>
          </div>
        </div>
        <a href="index.html#contact">Contact</a>
      </nav>
      <div class="header-actions">
        <a class="coffee-btn" href="https://buymeacoffee.com/harisimranetpa" target="_blank" rel="noreferrer" title="Buy Me a Coffee">
          <span class="coffee-icon">☕</span>
          <span>Buy Me a Coffee</span>
        </a>
        <a class="header-link" href="https://www.linkedin.com/in/harisimetpa/" target="_blank" rel="noreferrer" title="LinkedIn Profile">
          <span class="nav-icon">in</span>
          <span>LinkedIn</span>
        </a>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation menu" type="button">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
      </div>
    </div>
    <!-- Mobile dropdown drawer -->
    <div class="mobile-menu" id="mobileMenu">
      <nav class="mobile-nav">
        <a href="index.html" data-page="home">Home</a>
        <a href="index.html#about">About</a>
        <a href="experience.html" data-page="experience">Experience &amp; Projects</a>
        <div class="mobile-dropdown">
          <a href="experience.html#services" data-page="services">Services</a>
          <div class="mobile-submenu">
            <a href="experience.html#services">&bull; All Services (15 Offerings)</a>
            <a href="index.html#expertise">&bull; Expertise &amp; Approach</a>
          </div>
        </div>
        <a href="index.html#contact">Contact</a>
      </nav>
      <div class="mobile-actions">
        <a class="coffee-btn w-full" href="https://buymeacoffee.com/harisimranetpa" target="_blank" rel="noreferrer">
          <span class="coffee-icon">☕</span>
          <span>Buy Me a Coffee</span>
        </a>
        <a class="header-link w-full" href="https://www.linkedin.com/in/harisimetpa/" target="_blank" rel="noreferrer">
          <span class="nav-icon">in</span>
          <span>LinkedIn Profile &rarr;</span>
        </a>
      </div>
    </div>
  </header>`;

  const FOOTER_TEMPLATE = `
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="footer-logo" href="index.html" aria-label="HARIS I M Home">
          <div class="brand-avatar-wrap footer-avatar">
            <img src="logo.png" alt="Haris I M" class="brand-avatar-img">
          </div>
          <div class="brand-text-wrap">
            <span class="brand-name">HARIS I M</span>
          </div>
        </a>
        <p class="footer-bio">
          Founder, CEO &amp; MD at <strong>myResto Today Pvt. Ltd.</strong> | AI-Powered FoodTech SaaS Builder | Restaurant Growth Consultant &amp; SOP Implementer | F&amp;B &amp; EduTech Innovator | Entrepreneur
        </p>
        <div class="footer-social-row">
          <a class="social-pill-btn bmc-pill" href="https://buymeacoffee.com/harisimranetpa" target="_blank" rel="noreferrer" title="Buy Me a Coffee">
            <span>☕</span>
            <span>Buy Me a Coffee</span>
          </a>
          <a class="social-pill-btn linkedin-pill" href="https://www.linkedin.com/in/harisimetpa/" target="_blank" rel="noreferrer" title="LinkedIn Profile">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z"/></svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div>
        <p class="footer-col-title">Navigation</p>
        <ul class="footer-links-list">
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html#about">About Haris</a></li>
          <li><a href="experience.html">Experience</a></li>
          <li><a href="experience.html#services">Services (15)</a></li>
          <li><a href="experience.html#projects">Featured Projects</a></li>
          <li><a href="index.html#expertise">Core Expertise</a></li>
          <li><a href="index.html#approach">Approach Framework</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div>
        <p class="footer-col-title">Platforms</p>
        <ul class="footer-links-list">
          <li><a href="https://myrestotoday.com" target="_blank" rel="noreferrer">myResto Today &rarr;</a></li>
          <li><a href="https://foredu.co.in/" target="_blank" rel="noreferrer">EduTrack &rarr;</a></li>
          <li><a href="experience.html#projects">TeaQue Digital</a></li>
          <li><a href="experience.html#projects">Fixcom India</a></li>
          <li><a href="experience.html#projects">Vibe Coder Suite</a></li>
        </ul>
      </div>

      <div>
        <p class="footer-col-title">Direct Connect</p>
        <ul class="footer-links-list">
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
            <a href="https://buymeacoffee.com/harisimranetpa" target="_blank" rel="noreferrer" style="color: #b45309; font-weight: 700;">
              <span>☕</span>
              <span>buymeacoffee.com/harisimranetpa</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/harisimetpa/" target="_blank" rel="noreferrer" style="color: #0a66c2; font-weight: 700;">
              <span>🔗</span>
              <span>LinkedIn Profile</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 HARIS I M. All rights reserved.</p>
      <p class="footer-credits">
        <span>Founder</span> &bull; <span>Software Architect</span> &bull; <span>Vibe Coder</span>
      </p>
    </div>
  </footer>`;

  // Function to mount header
  function mountHeader() {
    if (document.body.getAttribute('data-custom-header') === 'true') return;
    const headerContainer = document.getElementById('site-header') || document.querySelector('header.site-header');
    if (headerContainer) {
      if (headerContainer.tagName.toLowerCase() === 'header') {
        headerContainer.outerHTML = HEADER_TEMPLATE;
      } else {
        headerContainer.innerHTML = HEADER_TEMPLATE;
      }
    } else {
      // Prepend to body
      const wrapper = document.createElement('div');
      wrapper.id = 'site-header';
      wrapper.innerHTML = HEADER_TEMPLATE;
      document.body.insertAdjacentElement('afterbegin', wrapper);
    }
  }

  // Function to mount footer
  function mountFooter() {
    if (document.body.getAttribute('data-custom-footer') === 'true') return;
    const footerContainer = document.getElementById('site-footer') || document.querySelector('footer.site-footer');
    if (footerContainer) {
      if (footerContainer.tagName.toLowerCase() === 'footer') {
        footerContainer.outerHTML = FOOTER_TEMPLATE;
      } else {
        footerContainer.innerHTML = FOOTER_TEMPLATE;
      }
    } else {
      const wrapper = document.createElement('div');
      wrapper.id = 'site-footer';
      wrapper.innerHTML = FOOTER_TEMPLATE;
      document.body.appendChild(wrapper);
    }
  }

  // Function to highlight active link
  function highlightActiveNav() {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    let current = 'home';

    if (path.includes('experience')) {
      current = hash.includes('services') ? 'services' : 'experience';
    } else if (path.includes('admin')) {
      current = 'admin';
    } else if (hash.includes('services')) {
      current = 'services';
    }

    document.querySelectorAll('.site-nav a, .mobile-nav a').forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('data-page') === current) {
        a.classList.add('active');
      }
    });
  }

  // Setup mobile drawer menu and touch dropdowns
  function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuToggle.classList.toggle('open');
        mobileMenu.classList.toggle('open');
      });

      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menuToggle.classList.remove('open');
          mobileMenu.classList.remove('open');
        });
      });

      document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          menuToggle.classList.remove('open');
          mobileMenu.classList.remove('open');
        }
      });
    }

    // Touch support for nav dropdown
    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
      const trigger = dropdown.querySelector('.nav-dropdown-trigger');
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          if (window.innerWidth <= 980) {
            // let mobile drawer handle it
            return;
          }
        });
      }
    });
  }

  // Initialize Layout
  function initLayout() {
    mountHeader();
    mountFooter();
    highlightActiveNav();
    setupMobileMenu();
    window.dispatchEvent(new CustomEvent('layout_mounted'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
  } else {
    initLayout();
  }
})();
