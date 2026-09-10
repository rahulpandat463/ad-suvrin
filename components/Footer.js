'use client';
import Image from 'next/image';
import styles from './Footer.module.css';
import FloatingButtons from './FloatingButtons';

export default function Footer() {
  return (
    <>
      {/* Footer CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaLeft}>
              <p className={styles.ctaLabel}>Modernise Your Plant Floor</p>
              <h2 className={styles.ctaTitle}>
                Ready to Connect Your<br />Manufacturing Operations?
              </h2>
              <p className={styles.ctaDesc}>
                Move beyond manual spreadsheets and disconnected silos. Build a fully connected, VAT-compliant manufacturing powerhouse with Odoo ERP and Suvrin Technologies.
              </p>
              <div className={styles.ctaBtns}>
                <a href="#consultation-form" className="btn-primary">
                  Book Free ERP Consultation
                </a>
                <a href="tel:+971551120975" className="btn-secondary">
                  Call Dubai Desk: +971 551 120 975
                </a>
              </div>
            </div>
            <div className={styles.ctaRight}>
              <div className={styles.ctaCard}>
                <div className={styles.ctaCardItem}>
                  <span className={styles.ctaIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Dubai Marina Desk</strong>
                    <span>Living Marina Gate, D94 M Floor, Dubai, UAE</span>
                  </div>
                </div>
                <div className={styles.ctaCardItem}>
                  <span className={styles.ctaIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Direct GCC Line</strong>
                    <span>+971 551 120 975</span>
                  </div>
                </div>
                <div className={styles.ctaCardItem}>
                  <span className={styles.ctaIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Email Advisory</strong>
                    <a href="mailto:sudeep@suvrin.com" style={{ color: '#F59E0B' }}>sudeep@suvrin.com</a>
                  </div>
                </div>
                <div className={styles.certBadge}>UAE Certified Odoo Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.footerLogo}>
                <Image
                  src="/suvrin-logo.png"
                  alt="Suvrin Logo"
                  width={140}
                  height={40}
                  style={{ height: 'auto', objectFit: 'contain' }}
                />
              </div>
              <p className={styles.brandDesc}>
                Enterprise digital transformation & Odoo ERP implementation partner for industrial manufacturers across Dubai, Abu Dhabi, and the GCC.
              </p>
              <p className={styles.brandSub}>Maxcode Solutions LLC, Dubai</p>
            </div>

            {/* ERP Solutions */}
            <div className={styles.footerCol}>
              <h4>ERP Solutions</h4>
              <ul>
                <li><a href="#workflow-section">Odoo MRP Flow</a></li>
                <li><a href="#modules-section">Multi-Warehouse</a></li>
                <li><a href="#uae-localization-section">UAE VAT 5%</a></li>
                <li><a href="#modules-section">Shop Floor App</a></li>
                <li><a href="#modules-section">Job Costing</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div className={styles.footerCol}>
              <h4>Industries</h4>
              <ul>
                <li><a href="#industries-section">Metal & Steel</a></li>
                <li><a href="#industries-section">Plastics & Polymer</a></li>
                <li><a href="#industries-section">Packaging</a></li>
                <li><a href="#industries-section">Machinery & ETO</a></li>
                <li><a href="#industries-section">Food & Halal</a></li>
              </ul>
            </div>

            {/* Advisory Desk */}
            <div className={styles.footerCol}>
              <h4>Dubai Advisory Desk</h4>
              <p>Living Marina Gate, D94 M Floor, Dubai Marina, UAE</p>
              <a href="tel:+971551120975">+971 551 120 975</a>
              <span>GCC Support Desk</span>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2026 Suvrin Technologies • Maxcode Solutions LLC, Dubai.</p>
            <div className={styles.footerLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <span>ISO 9001 Compliant</span>
            </div>
          </div>
        </div>

        <FloatingButtons />
      </footer>
    </>
  );
}
