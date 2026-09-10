'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px',
      fontFamily: 'system-ui, sans-serif',
      color: '#0F172A'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#DC2626', marginBottom: '12px' }}>
        Something went wrong
      </h1>
      <p style={{ color: '#64748B', maxWidth: '440px', marginBottom: '24px', lineHeight: 1.6 }}>
        {error?.message || 'An unexpected error occurred while loading this page.'}
      </p>
      <button
        onClick={() => reset()}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '12px 24px',
          borderRadius: '8px',
          background: '#0F3C7E',
          color: '#FFFFFF',
          fontWeight: 700,
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Try Again
      </button>
    </div>
  );
}
