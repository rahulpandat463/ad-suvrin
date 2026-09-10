'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Dashboard.module.css';

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target * 10) / 10);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return { ref, display: count };
}

const PLANT_STATS = [
  { label: 'Plant OEE', value: 94.8, suffix: '%', delta: '+4.2%', color: '#10B981' },
  { label: 'Output', value: 142.8, suffix: 'k Units', delta: '108% Plan', color: '#F59E0B' },
  { label: 'Scrap Rate', value: 0.8, suffix: '%', delta: '-62%', color: '#EF4444' },
];

const WORK_CENTERS = [
  { name: 'WC-01 CNC (JAFZA)', status: 'Active', pct: 94, color: '#10B981' },
  { name: 'WC-02 Laser (DIC)', status: 'MO-189 (64%)', pct: 64, color: '#F59E0B' },
  { name: 'WC-03 Powder (AD)', status: 'Batch #881', pct: 45, color: '#6366F1' },
];

const COST_BREAKDOWN = [
  { label: 'Raw Materials (BOM)', pct: 68.4, amount: 'AED 1.42M', color: '#F59E0B' },
  { label: 'Power & Tooling', pct: 18.2, amount: 'AED 378k', color: '#6366F1' },
  { label: 'Direct Labor Cost', pct: 13.4, amount: 'AED 278k', color: '#10B981' },
];

export default function Dashboard() {
  const oee = useCountUp(94.8, 2000);
  const output = useCountUp(142.8, 2200);
  const scrap = useCountUp(0.8, 1800);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Executive Clarity</p>
          <h2 className="section-title">
            Real-Time View of the Plant<br /><span>for Management</span>
          </h2>
          <p className="section-subtitle">
            Live factory KPIs, scrap rates, and cost absorption designed for Managing Directors, Factory Heads, and CFOs across Emirates operations.
          </p>
        </div>

        <div className={styles.dashGrid}>
          {/* KPI Cards */}
          <div className={styles.kpiSection}>
            <div className={styles.kpiHeader}>
              All UAE Plants (JAFZA • DIC • Abu Dhabi)
            </div>
            <div className={styles.kpiCards}>
              {[
                { ...PLANT_STATS[0], countRef: oee.ref, display: oee.display },
                { ...PLANT_STATS[1], countRef: output.ref, display: output.display },
                { ...PLANT_STATS[2], countRef: scrap.ref, display: scrap.display },
              ].map((s) => (
                <div key={s.label} className={styles.kpiCard}>
                  <div ref={s.countRef} className={styles.kpiNum} style={{ color: s.color }}>
                    {s.display}{s.suffix}
                  </div>
                  <div className={styles.kpiLabel}>{s.label}</div>
                  <div className={styles.kpiDelta} style={{ color: s.color }}>{s.delta}</div>
                </div>
              ))}
            </div>

            {/* Chart mock */}
            <div className={styles.chartCard}>
              <div className={styles.chartHeader}>
                <span>Planned vs Actual Output</span>
                <span className={styles.chartBadge}>Q1 2026 +18.2% Growth</span>
              </div>
              <div className={styles.chartBars}>
                {[
                  { month: 'Oct', plan: 70, actual: 75 },
                  { month: 'Nov', plan: 75, actual: 82 },
                  { month: 'Dec', plan: 78, actual: 90 },
                  { month: 'Jan', plan: 80, actual: 95 },
                  { month: 'Feb', plan: 85, actual: 100 },
                ].map((b) => (
                  <div key={b.month} className={styles.barGroup}>
                    <div className={styles.barStack}>
                      <div className={styles.barPlan} style={{ height: `${b.plan}%` }} title={`Plan ${b.plan}k`} />
                      <div className={styles.barActual} style={{ height: `${b.actual}%` }} title={`Actual ${b.actual}k`} />
                    </div>
                    <span className={styles.barLabel}>{b.month}</span>
                  </div>
                ))}
              </div>
              <div className={styles.chartLegend}>
                <span><span className={styles.legendDot} style={{ background: '#374151' }} />Plan (105k)</span>
                <span><span className={styles.legendDot} style={{ background: '#F59E0B' }} />Actual</span>
                <span className={styles.chartPeak}>Peak 142.8k Units</span>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className={styles.rightPanel}>
            {/* Cost Absorption */}
            <div className={styles.costCard}>
              <div className={styles.costHeader}>
                <span>Cost Absorption Variance</span>
                <span className={styles.absorbBadge}>94.8% Absorption</span>
              </div>
              <p className={styles.costSub}>Real-time unit costing across UAE batches</p>
              {COST_BREAKDOWN.map((c) => (
                <div key={c.label} className={styles.costRow}>
                  <div className={styles.costInfo}>
                    <span className={styles.costLabel}>{c.label}</span>
                    <span className={styles.costAmt}>{c.amount}</span>
                  </div>
                  <div className={styles.costBarWrap}>
                    <div
                      className={styles.costBar}
                      style={{ '--w': `${c.pct}%`, background: c.color }}
                    />
                  </div>
                  <span className={styles.costPct}>{c.pct}%</span>
                </div>
              ))}
              <div className={styles.marginBadge}>Unit margin +8.4%</div>
            </div>

            {/* Live MES */}
            <div className={styles.mesCard}>
              <div className={styles.mesHeader}>
                <span className={styles.mesDot} />
                Live MES Telemetry: 90-Day Audit
              </div>
              {WORK_CENTERS.map((wc) => (
                <div key={wc.name} className={styles.wcRow}>
                  <div className={styles.wcInfo}>
                    <span className={styles.wcName}>{wc.name}</span>
                    <span className={styles.wcStatus}>{wc.status}</span>
                  </div>
                  <div className={styles.wcBarWrap}>
                    <div className={styles.wcBar} style={{ width: `${wc.pct}%`, background: wc.color }} />
                  </div>
                  <span className={styles.wcPct} style={{ color: wc.color }}>{wc.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
