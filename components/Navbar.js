'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Problems', href: '#pain-points' },
  { label: 'Workflow', href: '#workflow-section' },
  { label: 'Modules', href: '#modules-section' },
  { label: 'Industries', href: '#industries-section' },
  { label: 'UAE Compliance', href: '#uae-localization-section' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/suvrin-logo.png"
            alt="Suvrin Logo"
            width={140}
            height={40}
            priority
            className={styles.logoImg}
            style={{ height: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop nav links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Right: CTA + hamburger */}
        <div className={styles.navRight}>
          {/* Desktop CTAs */}
          <div className={styles.navCtas}>
            <a
              href="https://wa.me/9811021616?text=Hi%20Suvrin%20team,%20I%27m%20interested%20in%20Odoo%20Manufacturing%20ERP%20in%20Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.12 1.527 5.847L0 24l6.331-1.507A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.671-.524-5.186-1.436L2.5 21.5l.966-4.199A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <a href="#consultation-form" className={`${styles.ctaBtn} btn-primary`}>
              Book Consultation
            </a>
          </div>

          {/* Hamburger toggle (mobile only) */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={closeMenu}>
              {l.label}
            </a>
          ))}
          <div className={styles.mobileCtas}>
            <a
              href="https://wa.me/9811021616?text=Hi%20Suvrin%20team,%20I%27m%20interested%20in%20Odoo%20Manufacturing%20ERP%20in%20Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.mobileWaBtn}`}
              onClick={closeMenu}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.12 1.527 5.847L0 24l6.331-1.507A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.671-.524-5.186-1.436L2.5 21.5l.966-4.199A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp
            </a>
            <a href="#consultation-form" className="btn-primary" onClick={closeMenu} style={{ textAlign: 'center', justifyContent: 'center' }}>
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
