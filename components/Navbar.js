'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
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

        {/* Right: CTAs */}
        <div className={styles.navRight}>
          <div className={styles.navCtas}>
            <a href="#consultation-form" className={`${styles.ctaBtn} btn-primary`}>
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

