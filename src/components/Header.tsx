'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isExperience = pathname === '/experience';

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="header-main">
        {/* Brand Link */}
        <Link href="/" className="brand-link" aria-label="HARIS I M Home" onClick={closeMobile}>
          <div className="brand-avatar-wrap">
            <Image
              src="/logo.png"
              alt="Haris I M"
              width={40}
              height={40}
              className="brand-avatar-img"
              priority
            />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-name">HARIS I M</span>
            <span className="brand-sub">Founder, MD &amp; CEO</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/" className={isHome ? 'active' : ''}>
            Home
          </Link>
          <Link href={isHome ? '#about' : '/#about'}>
            About
          </Link>
          <Link href="/experience" className={isExperience ? 'active' : ''}>
            Experience &amp; Projects
          </Link>

          {/* Services Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link href="/experience#services" className="nav-dropdown-trigger">
              <span>Services</span>
              <span className="dropdown-arrow">▼</span>
            </Link>
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <Link href="/experience#services" className="dropdown-item">
                Services (15 Offerings)
              </Link>
              <Link href={isHome ? '#expertise' : '/#expertise'} className="dropdown-item">
                Expertise &amp; Approach
              </Link>
            </div>
          </div>

          <Link href={isHome ? '#contact' : '/#contact'}>
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <a
            className="coffee-btn"
            href="https://buymeacoffee.com/harisimranetpa"
            target="_blank"
            rel="noreferrer"
            title="Buy Me a Coffee"
          >
            <span className="coffee-icon">☕</span>
            <span>Buy Me a Coffee</span>
          </a>
          <a
            className="header-link"
            href="https://www.linkedin.com/in/harisimetpa/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
          >
            <span className="nav-icon">in</span>
            <span>LinkedIn</span>
          </a>
          <button
            className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
            id="menuToggle"
            aria-label="Toggle navigation menu"
            type="button"
            onClick={toggleMobile}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobileMenu">
        <nav className="mobile-nav">
          <Link href="/" className={isHome ? 'active' : ''} onClick={closeMobile}>
            Home
          </Link>
          <Link href={isHome ? '#about' : '/#about'} onClick={closeMobile}>
            About
          </Link>
          <Link href="/experience" className={isExperience ? 'active' : ''} onClick={closeMobile}>
            Experience &amp; Projects
          </Link>
          <div className="mobile-dropdown">
            <Link href="/experience#services" onClick={closeMobile}>
              Services
            </Link>
            <div className="mobile-submenu">
              <Link href="/experience#services" onClick={closeMobile}>
                &bull; All Services (15 Offerings)
              </Link>
              <Link href={isHome ? '#expertise' : '/#expertise'} onClick={closeMobile}>
                &bull; Expertise &amp; Approach
              </Link>
            </div>
          </div>
          <Link href={isHome ? '#contact' : '/#contact'} onClick={closeMobile}>
            Contact
          </Link>
        </nav>
        <div className="mobile-actions">
          <a
            className="coffee-btn w-full"
            href="https://buymeacoffee.com/harisimranetpa"
            target="_blank"
            rel="noreferrer"
          >
            <span className="coffee-icon">☕</span>
            <span>Buy Me a Coffee</span>
          </a>
          <a
            className="header-link w-full"
            href="https://www.linkedin.com/in/harisimetpa/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="nav-icon">in</span>
            <span>LinkedIn Profile &rarr;</span>
          </a>
        </div>
      </div>
    </header>
  );
}
