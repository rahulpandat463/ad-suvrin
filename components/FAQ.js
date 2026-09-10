'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

const FAQS = [
  {
    q: 'What is Manufacturing ERP vs basic accounting software?',
    a: 'Basic accounting records historical numbers after production finishes. Manufacturing ERP actively coordinates the physical plant: multi-level BOMs, machine routing, scrap % calculation, WIP buffers, and barcode scanning, generating automated VAT ledger entries on execution.',
  },
  {
    q: 'Why choose Odoo over Tier-1 ERPs (SAP/Oracle)?',
    a: 'Odoo delivers 80% of SAP/Oracle functionality at 20% of the total cost of ownership. For UAE mid-market manufacturers, Odoo\'s modular architecture means you only pay for what you need, with significantly shorter implementation timelines (3–6 months vs 12–24 months) and full customisability via open-source Python modules.',
  },
  {
    q: 'Can Odoo handle multi-level nested BOMs?',
    a: 'Yes. Odoo MRP natively supports unlimited nesting of Bills of Materials including phantom BOMs for subassemblies, scrap factor per component line, version control, and alternative component rules. Suvrin configures these around your actual production routing.',
  },
  {
    q: 'Is the system compliant with UAE FTA 5% VAT?',
    a: 'Absolutely. Our UAE localisation module automates VAT calculation, generates FTA-compliant e-invoices with QR codes, prepares VAT return reports (VAT 201), and supports multi-currency transactions with live AED exchange rates across JAFZA, mainland, and free zone entities.',
  },
  {
    q: 'Do you offer physical on-site audits in Dubai?',
    a: 'Yes. Our Dubai Marina desk team conducts on-site factory audits across Dubai Industrial City, JAFZA, KIZAD, Sharjah Industrial Area, and Abu Dhabi. The audit covers shop floor routing, work center layout, scrap measurement, and inventory flow before we begin any system configuration.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <p className="section-label">Clear Answers</p>
            <h2 className="section-title">
              Frequently Asked<br /><span>Questions</span>
            </h2>
            <p className="section-subtitle">
              Common queries from UAE factory owners, managing directors, and CFOs evaluating Odoo implementation.
            </p>
            <a href="#consultation-form" className="btn-primary" style={{ marginTop: 8 }}>
              Ask Our Dubai Team →
            </a>
          </div>

          <div className={styles.faqs}>
            {FAQS.map((f, i) => (
              <div key={i} className={`${styles.faq} ${open === i ? styles.faqOpen : ''}`}>
                <button
                  className={styles.faqQ}
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span>{i + 1}. {f.q}</span>
                  <svg
                    className={styles.arrow}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {open === i && (
                  <div className={styles.faqA}>
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
