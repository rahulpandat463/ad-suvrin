'use client';
import styles from './Workflow.module.css';

const STEPS = [
  {
    step: 1,
    title: 'Sales & Demand Forecast',
    desc: 'AED sales orders convert automatically into manufacturing demand forecasts and delivery commitments.',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    )
  },
  {
    step: 2,
    title: 'BOM & MRP Engine',
    desc: 'Multi-level BOM breakdown verifies component availability, lead times, scrap %, and sub-assemblies.',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    )
  },
  {
    step: 3,
    title: 'Automated Procurement',
    desc: 'Auto-generate RFQs and LPOs based on minimum stock rules and supplier lead times with multi-tier approvals.',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
      </svg>
    )
  },
  {
    step: 4,
    title: 'Goods Receipt & Quarantine',
    desc: 'Barcode-scanned raw material intake with lot/batch tracking, test cert verification, and quarantine.',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    )
  },
  {
    step: 5,
    title: 'Shop Floor Tablets',
    desc: 'Shop floor tablets guide operators with digital work instructions, machine logging, and live scrap input.',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    )
  },
  {
    step: 6,
    title: 'In-Line Quality Gates',
    desc: 'Quality checkpoints trigger automated Non-Conformance Reports (NCR) immediately upon tolerance deviation.',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    )
  },
  {
    step: 7,
    title: 'Packaging & Dispatch',
    desc: 'Serialised finished goods packaging, automated packing lists, delivery notes, and transport dispatch.',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    )
  },
  {
    step: 8,
    title: 'Job Costing & UAE VAT',
    desc: 'Instant WIP-to-COGS entries, actual cost vs standard variance, and FTA-compliant 5% e-invoicing.',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    )
  },
];

export default function Workflow() {
  return (
    <section className={`section ${styles.section}`} id="workflow-section">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Unified Architecture</p>
          <h2 className="section-title">
            One ERP. Your Entire<br /><span>Manufacturing Operation.</span>
          </h2>
          <p className="section-subtitle">
            Suvrin configures Odoo around your production routing—connecting every barcode scan, machine cycle, and management decision into a live pipeline.
          </p>
        </div>

        <div className={styles.pipeline}>
          {STEPS.map((s) => (
            <div key={s.step} className={styles.stepWrap}>
              <div className={styles.step}>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>Step {s.step}</div>
                  <span className={styles.stepIcon}>{s.iconSvg}</span>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <a href="#consultation-form" className="btn-primary">
            Orchestrate Your Manufacturing Flow →
          </a>
        </div>
      </div>
    </section>
  );
}
