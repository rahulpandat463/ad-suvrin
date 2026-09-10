'use client';
import styles from './Advisory.module.css';

const PILLARS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Business-First Consulting',
    desc: 'We audit your shop floor routing, scrap percentages, and multi-currency supply chain before configuring a single line of Odoo.',
    color: '#F59E0B',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    title: 'Odoo Enterprise Mastery',
    desc: 'Certified specialists delivering custom Python modules, automated workflow triggers, and legacy data cleansing.',
    color: '#6366F1',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>
    ),
    title: 'Manufacturing Depth',
    desc: 'Engineered for multi-level BOMs, finite work center scheduling, sub-assembly staging, and batch traceability.',
    color: '#10B981',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'UAE & GCC Delivery',
    desc: 'Direct Dubai Marina desk. Rapid on-site factory visits across Dubai Industrial City, JAFZA, KIZAD, and Al Quoz.',
    color: '#EC4899',
  },
];

export default function Advisory() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Authoritative Gulf Advisory</p>
          <h2 className="section-title">
            ERP Implementation That Goes<br /><span>Beyond Installing Software</span>
          </h2>
        </div>
        <div className={styles.grid}>
          {PILLARS.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.iconWrap} style={{ '--accent': p.color }}>
                {p.icon}
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
