'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const TRUST_BADGES = [
  { label: 'Odoo MRP Core' },
  { label: 'Multi-Warehouse' },
  { label: 'FTA VAT 5%' },
  { label: 'Shop Floor App' },
  { label: 'Job Costing' },
  { label: 'Bilingual UI' },
];

export default function Hero() {
  const [liveOEE, setLiveOEE] = useState(95.6);
  const [liveOrders] = useState(24);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const interval = setInterval(() => {
      if (!mounted.current) return;
      setLiveOEE(prev => {
        const next = prev + (Math.random() - 0.5) * 0.4;
        return Math.round(Math.min(Math.max(next, 94.2), 97.5) * 10) / 10;
      });
    }, 3000);
    return () => {
      mounted.current = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={`${styles.hero} grid-bg`}>
      {/* Dynamic light glow elements */}
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      <div className={`container ${styles.inner}`}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.badgeRow}>
            <span className={styles.topBadge}>
              <span className={styles.badgeDot} />
              Dubai Marina Office
            </span>
            <span className={styles.topBadgeSecondary}>Odoo v17/v18 Core</span>
            <span className={styles.topBadgeSecondary}>On-Site Factory Audits</span>
          </div>

          <h1 className={styles.headline}>
            Manufacturing ERP Software for{' '}
            <span className={styles.highlightPill}>Dubai & UAE</span>{' '}
            Businesses
          </h1>

          <div className={styles.subHeadlinePill}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <span>Connect Production, Multi-Warehouse Inventory, Procurement & UAE VAT Accounting</span>
          </div>

          <p className={styles.body}>
            Suvrin helps UAE manufacturers implement and customise Odoo ERP around real-world factory routing, finite capacity, scrap control, and bilingual compliance across Dubai, Sharjah, and Abu Dhabi plants.
          </p>

          <div className={styles.ctas}>
            <a href="#consultation-form" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
              </svg>
              Book a Free ERP Consultation
            </a>
            <a
              href="https://wa.me/9811021616?text=Hi%20Suvrin%20team,%20I%27m%20interested%20in%20Odoo%20Manufacturing%20ERP%20in%20Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.12 1.527 5.847L0 24l6.331-1.507A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.671-.524-5.186-1.436L2.5 21.5l.966-4.199A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp Now
            </a>
          </div>

          <div className={styles.directLineCard}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>Direct Dubai Desk: <strong>+971 551 120 975</strong></span>
          </div>

          <div className={styles.badges}>
            {TRUST_BADGES.map((b) => (
              <span key={b.label} className={styles.trustBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Live Dashboard Mockup */}
        <div className={styles.dashboardWrap}>
          {/* Top Floating Badge */}
          <div className={styles.floatBadgeTop}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#059669">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            FTA 5% VAT Compliant
          </div>

          <div className={styles.dashboard}>
            {/* Header */}
            <div className={styles.dashHeader}>
              <div className={styles.dashTitle}>
                <span className={styles.dashDot} />
                Odoo Live Factory Sync
              </div>
              <span className={styles.dashLive}>
                <span className={styles.liveDot} />
                JAFZA Plant #1
              </span>
            </div>

            {/* KPI Row */}
            <div className={styles.kpiRow}>
              <div className={styles.kpi}>
                <span className={styles.kpiVal}>{liveOrders}</span>
                <span className={styles.kpiLabel}>Active Orders</span>
              </div>
              <div className={`${styles.kpi} ${styles.kpiHighlight}`}>
                <span className={styles.kpiVal}>{liveOEE}%</span>
                <span className={styles.kpiLabel}>OEE Rate</span>
              </div>
              <div className={styles.kpi}>
                <span className={`${styles.kpiVal} ${styles.kpiGreen}`}>0.8%</span>
                <span className={styles.kpiLabel}>Scrap %</span>
              </div>
            </div>

            {/* Divider label */}
            <div className={styles.sectionLabel}>SHOP FLOOR ROUTING — REAL-TIME MONITORING</div>

            {/* Work Centers */}
            <div className={styles.workCenters}>
              {[
                { name: 'WC-01 CNC Milling', mo: 'MO-089 (Aluminum)', pct: 92, color: '#059669' },
                { name: 'WC-02 Laser Cutting', mo: 'MO-094 (Sheet Steel)', pct: 64, color: '#0F3C7E' },
                { name: 'WC-03 Powder Coating', mo: 'Batch #881 (Custom)', pct: 45, color: '#0284C7' },
              ].map((wc) => (
                <div key={wc.name} className={styles.wcRow}>
                  <div className={styles.wcInfo}>
                    <span className={styles.wcName}>{wc.name}</span>
                    <span className={styles.wcMo}>{wc.mo}</span>
                  </div>
                  <div className={styles.wcBarWrap}>
                    <div
                      className={styles.wcBar}
                      style={{ width: `${wc.pct}%`, background: wc.color }}
                    />
                  </div>
                  <span className={styles.wcPct} style={{ color: wc.color }}>{wc.pct}%</span>
                </div>
              ))}
            </div>

            {/* Footer label */}
            <div className={styles.dashFooter}>
              <span className={styles.vatDot} />
              Automated UAE VAT 5% E-Invoicing Ready
              <a href="#consultation-form" className={styles.demoLink}>Demo →</a>
            </div>
          </div>

          {/* Bottom Floating Badge */}
          <div className={styles.floatBadgeBottom}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F3C7E" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            JAFZA & DIC Certified
          </div>
        </div>
      </div>
    </section>
  );
}
