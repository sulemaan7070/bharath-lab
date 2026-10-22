import Link from 'next/link';
import OrganIcon from '@/components/ui/OrganIcon';
import styles from './OrganPanel.module.css';

// Title, description and icon at the top of an organ page.
export default function OrganPanel({ organ }) {
  return (
    <>
      <Link href="/" className={styles.back}>← Back to all tests</Link>
      <section className={styles.panel}>
        <div>
          <h1>{organ.name}</h1>
          <p>{organ.description}</p>
        </div>
        <div className={styles.icon}><OrganIcon name={organ.slug} /></div>
      </section>
    </>
  );
}
