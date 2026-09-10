'use client';
import styles from './Industries.module.css';

const INDUSTRIES = [
  { 
    name: 'Metal & Steel Fabrication', 
    desc: 'Weight-based MT/KG, cut-piece inventory & dimensional scrap.',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  { 
    name: 'Equipment & Machinery', 
    desc: 'Multi-level BOM assemblies, serial lots & ETO milestone routing.',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    )
  },
  { 
    name: 'Plastics & Polymers', 
    desc: 'Extrusion cycles, regrind loop recycling & masterbatch tracking.',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    )
  },
  { 
    name: 'Packaging & Corrugated', 
    desc: 'GSM automated calculation, die-cut setup logs & roll wastage.',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    )
  },
  { 
    name: 'Joinery & Woodworking', 
    desc: 'Custom project job-cards, site staging & veneer grain batches.',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      </svg>
    )
  },
  { 
    name: 'Food & Beverage', 
    desc: 'Halal compliance, FEFO lot expiry & recipe yield management.',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  { 
    name: 'Switchgear & Cables', 
    desc: 'Copper weight formulas, testing sign-offs & compliance logs.',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
  },
  { 
    name: 'Chemicals & Coatings', 
    desc: 'MSDS digital sheets, vessel blending loops & bulk sync.',
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <path d="M10 2v7.31L4.75 20.5a2 2 0 001.71 3h11.08a2 2 0 001.71-3L14 9.31V2"/>
      </svg>
    )
  },
];

export default function Industries() {
  return (
    <section className={`section ${styles.section}`} id="industries-section">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Sector Depth</p>
          <h2 className="section-title">
            Industries We Support<br /><span>Across the UAE</span>
          </h2>
          <p className="section-subtitle">
            Custom-configured manufacturing frameworks addressing specific scrap, batching, unit-of-measure, and compliance needs.
          </p>
        </div>
        <div className={styles.grid}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className={styles.card}>
              <span className={styles.icon}>{ind.iconSvg}</span>
              <h3 className={styles.name}>{ind.name}</h3>
              <p className={styles.desc}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
