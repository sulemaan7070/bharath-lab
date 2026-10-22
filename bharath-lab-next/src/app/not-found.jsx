import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '80px 16px', textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>We could not find that page. Head back and pick a test.</p>
      <Link href="/" style={{ color: 'var(--blue)', fontWeight: 600 }}>Back to home</Link>
    </div>
  );
}
