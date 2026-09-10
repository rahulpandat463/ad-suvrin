'use client';
import { useState } from 'react';
import styles from './ConsultationForm.module.css';

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: '',
    plantSize: '',
    currentSystem: '',
    challenges: [],
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleChallenge = (val) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.includes(val)
        ? prev.challenges.filter(c => c !== val)
        : [...prev.challenges, val],
    }));
  };

  const handleStep1 = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const CHALLENGES = [
    'Excel Dependency', 'Shop Floor Visibility', 'Inventory Drift',
    'Procurement Lag', 'Job Costing Delay', 'UAE VAT Compliance',
  ];

  return (
    <section className={`section ${styles.section}`} id="consultation-form">
      <div className="container">
        <div className={styles.layout}>
          {/* Left */}
          <div className={styles.left}>
            <p className="section-label">Free Technical Assessment</p>
            <h2 className={styles.title}>
              Discuss Your Factory<br /><span>ERP Requirements</span>
            </h2>
            <p className={styles.desc}>
              Our senior Dubai-based ERP architects will walk you through a tailored demo showing how Odoo can fit your precise production, inventory, and UAE VAT accounting workflows.
            </p>

            <div className={styles.bullets}>
              {[
                { icon: '📋', text: 'Custom BOM & Routing Roadmap — Tailored to your machines, shifts, and scrap factors.' },
                { icon: '🧾', text: 'UAE FTA VAT 5% Compliance Audit — Automated e-invoicing and free zone ledger setup.' },
                { icon: '📍', text: 'Direct Dubai Marina Team — Physical on-site factory visits across Dubai, Sharjah & Abu Dhabi.' },
              ].map((b) => (
                <div key={b.icon} className={styles.bullet}>
                  <span className={styles.bulletIcon}>{b.icon}</span>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>

            <div className={styles.waRow}>
              <p className={styles.waLabel}>Prefer instant WhatsApp?</p>
              <a
                href="https://wa.me/9811021616?text=Hello%20Suvrin,%20I%27d%20like%20a%20manufacturing%20ERP%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.12 1.527 5.847L0 24l6.331-1.507A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.671-.524-5.186-1.436L2.5 21.5l.966-4.199A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Connect on WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className={styles.right}>
            {submitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✅</div>
                <h3>Audit Request Received!</h3>
                <p>Our Dubai team will reach out within 24 hours via WhatsApp/phone to schedule your factory ERP audit.</p>
                <div className={styles.successContact}>
                  <span>📞 +971 551 120 975</span>
                  <span>📧 sudeep@suvrin.com</span>
                </div>
              </div>
            ) : (
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <h3 className={styles.formTitle}>Request Factory ERP Audit</h3>
                  <p className={styles.formSub}>Confidential assessment & BOM roadmap</p>
                  <span className={styles.formMeta}>Dubai Desk</span>
                </div>

                {/* Step indicator */}
                <div className={styles.steps}>
                  <div className={`${styles.stepDot} ${step >= 1 ? styles.stepActive : ''}`}>
                    <span>1</span>
                    <label>Company & Contact</label>
                  </div>
                  <div className={styles.stepLine} />
                  <div className={`${styles.stepDot} ${step >= 2 ? styles.stepActive : ''}`}>
                    <span>2</span>
                    <label>Factory Scope</label>
                  </div>
                </div>

                {step === 1 && (
                  <form onSubmit={handleStep1} className={styles.form}>
                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label htmlFor="fullName">Full Name *</label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          placeholder="John Smith"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="companyName">Company Name *</label>
                        <input
                          id="companyName"
                          name="companyName"
                          type="text"
                          required
                          placeholder="UAE Manufacturing Co."
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email">Business Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.ae"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone">WhatsApp / Mobile Number *</label>
                      <div className={styles.phoneRow}>
                        <span className={styles.phonePrefix}>+971</span>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="55 112 0975"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <p className={styles.formNote}>Our Dubai team will reach out via WhatsApp / phone to schedule the audit.</p>
                    <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                      Continue to Factory Scope (2/2)
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                    <p className={styles.privacy}>
                      🔒 Strict UAE Data Confidentiality & NDA Guaranteed • Direct Dubai Desk
                    </p>
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                      <label htmlFor="industry">Industry / Sector *</label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                      >
                        <option value="">Select your industry</option>
                        <option>Metal & Steel Fabrication</option>
                        <option>Equipment & Machinery</option>
                        <option>Plastics & Polymers</option>
                        <option>Packaging & Corrugated</option>
                        <option>Joinery & Woodworking</option>
                        <option>Food & Beverage</option>
                        <option>Switchgear & Cables</option>
                        <option>Chemicals & Coatings</option>
                        <option>Other Manufacturing</option>
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="plantSize">Plant Size (Employees)</label>
                      <select id="plantSize" name="plantSize" value={formData.plantSize} onChange={handleChange}>
                        <option value="">Select plant size</option>
                        <option>1–20 employees</option>
                        <option>21–50 employees</option>
                        <option>51–200 employees</option>
                        <option>200+ employees</option>
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label>Key Challenges (select all that apply)</label>
                      <div className={styles.challenges}>
                        {CHALLENGES.map((c) => (
                          <button
                            key={c}
                            type="button"
                            className={`${styles.challengeBtn} ${formData.challenges.includes(c) ? styles.challengeActive : ''}`}
                            onClick={() => toggleChallenge(c)}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="message">Additional Notes</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Describe your current ERP setup, pain points, or specific Odoo requirements..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.btnRow}>
                      <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                        ← Back
                      </button>
                      <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                        Submit Audit Request
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                    <p className={styles.privacy}>
                      🔒 Strict UAE Data Confidentiality & NDA Guaranteed • Direct Dubai Desk
                    </p>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
