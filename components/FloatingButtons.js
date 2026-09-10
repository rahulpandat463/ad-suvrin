'use client';
import styles from './FloatingButtons.module.css';

// Official WhatsApp logo SVG
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.64 1.84 6.64L2.667 29.333l6.907-1.813A13.28 13.28 0 0016.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 24.267a11.04 11.04 0 01-5.627-1.547l-.4-.24-4.107 1.08 1.107-4-.267-.413A11.013 11.013 0 014.96 16c0-6.08 4.96-11.04 11.04-11.04S27.04 9.92 27.04 16s-4.96 11.04-11.04 11.04v-.106zm6.08-8.267c-.333-.16-1.973-.973-2.28-1.08-.307-.107-.533-.16-.76.16-.227.32-.88 1.08-1.08 1.307-.2.227-.4.253-.733.08-.333-.16-1.413-.52-2.693-1.653-.987-.88-1.653-1.973-1.853-2.307-.187-.32-.013-.493.16-.653.16-.147.333-.387.507-.58.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.76-1.813-1.04-2.48-.267-.64-.547-.547-.76-.56h-.64c-.227 0-.587.08-.893.4-.307.32-1.173 1.147-1.173 2.787s1.2 3.227 1.36 3.453c.16.213 2.373 3.587 5.747 5.027.8.347 1.427.547 1.92.707.8.253 1.533.213 2.107.133.64-.08 1.973-.8 2.253-1.573.28-.773.28-1.44.2-1.573-.08-.133-.293-.213-.64-.373z"/>
    </svg>
  );
}

// Calendar / consultation icon
function ConsultationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="14" x2="10" y2="14" />
      <line x1="12" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="10" y2="18" />
    </svg>
  );
}

export default function FloatingButtons() {
  return (
    <div className={styles.fabContainer}>
      <a
        href="#consultation-form"
        className={styles.fabConsultation}
        title="Book Free ERP Consultation"
      >
        <ConsultationIcon />
        <span>Book Consultation</span>
      </a>

      <a
        href="https://wa.me/9811021616?text=Hi%20Suvrin%20team,%20I%27m%20interested%20in%20Odoo%20Manufacturing%20ERP%20in%20Dubai"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.fabWhatsApp}
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
        <span>WhatsApp Us</span>
      </a>
    </div>
  );
}
