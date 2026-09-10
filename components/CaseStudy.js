'use client';
import styles from './CaseStudy.module.css';

export default function CaseStudy() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.label}>
            <span className="badge">
              <span className="badge-dot badge-dot-green" />
              Case Study • UAE Factory Outcome
            </span>
          </div>

          <div className={styles.card}>
            <div className={styles.left}>
              <h2 className={styles.title}>Precision Manufacturing ERP Implementation</h2>
              <p className={styles.desc}>
                A UAE precision manufacturing group replaced spreadsheets and legacy software with end-to-end Odoo Enterprise, directly connecting shop floor work orders to FTA 5% VAT accounting.
              </p>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>95%</span>
                  <span className={styles.statLabel}>Excel Elimination — Live shop floor MOs</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.stat}>
                  <span className={styles.statNum}>&lt; 24h</span>
                  <span className={styles.statLabel}>Cost Reconciliation — Down from 21 days</span>
                </div>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.testimonial}>
                <div className={styles.quoteIcon}>&quot;</div>
                <p className={styles.quoteText}>
                  Suvrin delivered on schedule and thoroughly trained our plant personnel. Communication and prompt replies made rollout effortless.
                </p>
                <div className={styles.reviewer}>
                  <div className={styles.avatar}>SA</div>
                  <div>
                    <strong>Shikhi Agarwal</strong>
                    <span>Velocity Opticals • UAE</span>
                  </div>
                </div>
                <div className={styles.verifiedBadge}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#10B981">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Odoo MRP & VAT — Verified Outcome
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
