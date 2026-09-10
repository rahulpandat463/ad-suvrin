'use client';
import styles from './PainPoints.module.css';

const PAINS = [
  {
    number: '01',
    title: 'Excel Spreadsheet Dependency',
    desc: 'Production schedules, inventory valuation, and job costing spreadsheets diverge across teams. Planners and accountants operate on conflicting numbers.',
    impact: '14% margin loss',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Zero Shop Floor Visibility',
    desc: 'Leadership cannot determine machine utilization, live downtime, or bottleneck work centers until the month ends.',
    impact: 'Delayed decisions',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Inventory Drift & Stockouts',
    desc: 'Raw materials, WIP buffers, and finished stock numbers do not align. High-value stock remains tied up while critical components stock out.',
    impact: 'Capital tied up',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    )
  },
  {
    number: '04',
    title: 'Procurement Lag & Manual POs',
    desc: 'Purchasing teams place orders reactively via WhatsApp instead of relying on dynamic MRP reordering rules driven by real production demand.',
    impact: 'Reactive buying',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
      </svg>
    )
  },
  {
    number: '05',
    title: 'Inaccurate Job Costing',
    desc: 'True manufacturing costs—combining direct materials, machine electricity, and labor hours—are calculated weeks too late.',
    impact: '3-week cost delay',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    )
  },
  {
    number: '06',
    title: 'Isolated Accounting (Tally Silos)',
    desc: 'Legacy systems operate disconnected from shop floor reality, forcing duplicate entries and delayed UAE FTA VAT filings.',
    impact: 'VAT filing risk',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    )
  },
];

export default function PainPoints() {
  return (
    <section className={`section ${styles.section}`} id="pain-points">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Operational Bottlenecks</p>
          <h2 className="section-title">
            Is Your Factory <span>Hamstrung</span> by<br />Disconnected Systems?
          </h2>
          <p className="section-subtitle">
            Industrial businesses in the UAE lose up to <strong>14% operating margin</strong> through spreadsheet divergence, delayed costing, and inventory drift.
          </p>
        </div>

        <div className={styles.grid}>
          {PAINS.map((p) => (
            <div key={p.number} className={`glass-card ${styles.card}`}>
              <div className={styles.cardTop}>
                <span className={styles.number}>{p.number}</span>
                <span className={styles.icon}>{p.iconSvg}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.impact}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#DC2626">
                  <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                </svg>
                {p.impact}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <a href="#workflow-section" className="btn-primary">
            Orchestrate the Whole Manufacturing Lifecycle →
          </a>
          <p className={styles.ctaNote}>From raw material intake in JAFZA to automated UAE VAT invoice settlement</p>
        </div>
      </div>
    </section>
  );
}
