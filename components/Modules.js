'use client';
import styles from './Modules.module.css';

const MODULES = [
  {
    name: 'Manufacturing MRP',
    desc: 'Work center load planning, routing & operator apps.',
    color: '#0F3C7E',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2">
        <path d="M2 20h20M5 20V8l7-5 7 5v12"/>
      </svg>
    )
  },
  {
    name: 'Multi-Level BOM',
    desc: 'Version control, sub-assemblies, scrap % and RM rules.',
    color: '#0284C7',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    )
  },
  {
    name: 'Production MPS',
    desc: 'Master production schedules & shift bottleneck flags.',
    color: '#059669',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    )
  },
  {
    name: 'Multi-Warehouse',
    desc: 'JAFZA, KIZAD & Al Quoz transfers with live barcode lots.',
    color: '#0F3C7E',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    )
  },
  {
    name: 'Auto Procurement',
    desc: 'Min-stock automated RFQ triggers and tiered LPO approvals.',
    color: '#0284C7',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
      </svg>
    )
  },
  {
    name: 'Quality Control',
    desc: 'In-line QC gates, raw material tests & ISO audit logs.',
    color: '#059669',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    )
  },
  {
    name: 'Maintenance CMMS',
    desc: 'Preventive machine maintenance, MTBF/MTTR tracking & spares.',
    color: '#0F3C7E',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  {
    name: 'Precise Job Costing',
    desc: 'True cost breakdown per batch: RM, power & labor absorption.',
    color: '#0284C7',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    )
  },
  {
    name: 'Sales & MO Sync',
    desc: 'Auto-convert quotations directly into shop floor orders.',
    color: '#059669',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    )
  },
  {
    name: 'UAE VAT Finance',
    desc: 'FTA-compliant VAT returns, multi-currency ledger (AED/USD).',
    color: '#0F3C7E',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    )
  },
];

export default function Modules() {
  return (
    <section className={`section ${styles.section}`} id="modules-section">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Functional Architecture</p>
          <h2 className="section-title">
            Odoo Manufacturing Modules<br /><span>Tailored to Your Factory</span>
          </h2>
          <p className="section-subtitle">
            10 core enterprise modules pre-configured for discrete, process, and hybrid industrial Gulf manufacturing plants.
          </p>
        </div>
        <div className={styles.grid}>
          {MODULES.map((m) => (
            <div key={m.name} className={styles.card} style={{ '--accent': m.color }}>
              <div className={styles.cardIcon}>{m.iconSvg}</div>
              <h3 className={styles.cardName}>{m.name}</h3>
              <p className={styles.cardDesc}>{m.desc}</p>
              <div className={styles.cardBar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
