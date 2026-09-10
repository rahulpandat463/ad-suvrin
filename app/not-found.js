import Link from 'next/link';

export default function NotFound() {
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
      <h1 style={{ fontSize: '3rem', fontWeight: 900, color: '#0F3C7E', marginBottom: '12px' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: '#64748B', maxWidth: '400px', marginBottom: '24px', lineHeight: 1.6 }}>
        The page you are looking for might have been moved or does not exist.
      </p>
      <Link href="/" className="btn-primary" style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '12px 24px',
        borderRadius: '8px',
        background: '#0F3C7E',
        color: '#FFFFFF',
        fontWeight: 700,
        textDecoration: 'none'
      }}>
        Return Home
      </Link>
    </div>
  );
}
