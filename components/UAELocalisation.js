'use client';
import styles from './UAELocalisation.module.css';

const FEATURES = [
  {
    icon: '🧾',
    title: 'FTA UAE VAT-Ready',
    desc: 'Automated 5% tax reports and electronic tax invoice generation with QR code.',
    tag: 'FTA Compliant',
  },
  {
    icon: '💱',
    title: 'AED-Centric Accounting',
    desc: 'Multi-currency transaction conversion (USD, EUR, SAR) with live FX rates.',
    tag: 'Multi-Currency',
  },
  {
    icon: '🏢',
    title: 'Multi-Company & Free Zone',
    desc: 'Unified consolidation for mainland and JAFZA/DAFZA/KIZAD entities.',
    tag: 'Free Zone Ready',
  },
  {
    icon: '🏭',
    title: 'Multi-Warehouse Routing',
    desc: 'Inter-warehouse transfers between Dubai, Abu Dhabi, and Sharjah depots.',
    tag: 'Multi-Emirate',
  },
  {
    icon: '🌐',
    title: 'Bilingual System',
    desc: 'Native Arabic and English documentation, reports, and UI toggles.',
    tag: 'AR / EN',
  },
  {
    icon: '🏦',
    title: 'Local Banking Integration',
    desc: 'Emirates NBD, ADCB, and FAB electronic statement matching.',
    tag: 'UAE Banks',
  },
];

export default function UAELocalisation() {
  return (
    <section className={`section ${styles.section}`} id="uae-localization-section">
      <div className="container">
        <div className={styles.layout}>
          {/* Left text */}
          <div className={styles.left}>
            <p className="section-label">Built for UAE Regulations</p>
            <h2 className="section-title">
              Odoo ERP Implementation<br /><span>for UAE Industry</span>
            </h2>
            <p className="section-subtitle">
              Suvrin combines international Odoo enterprise architecture with localised UAE business practices, Federal Tax Authority compliance, and free zone structures.
            </p>
            <div className={styles.locationRow}>
              <div className={styles.locItem}>
                <span className={styles.locIcon}>📍</span>
                <div>
                  <strong>Dubai Marina Office</strong>
                  <p>Living Marina Gate, D94 M Floor, Dubai Marina, UAE</p>
                </div>
              </div>
              <div className={styles.locItem}>
                <span className={styles.locIcon}>📞</span>
                <div>
                  <strong>+971 551 120 975</strong>
                  <p>Direct Dubai Desk</p>
                </div>
              </div>
            </div>
            <a href="#consultation-form" className="btn-primary">
              Get UAE Compliance Audit →
            </a>
          </div>

          {/* Right feature grid */}
          <div className={styles.right}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureTop}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <span className={styles.featureTag}>{f.tag}</span>
                </div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
