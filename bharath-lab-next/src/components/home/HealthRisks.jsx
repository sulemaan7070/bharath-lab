import Link from 'next/link';
import OrganIcon from '@/components/ui/OrganIcon';
import SectionHeading from '@/components/ui/SectionHeading';
import { ORGANS } from '@/data/organs';
import styles from './HealthRisks.module.css';

export default function HealthRisks() {
  return (
    <section id="risks" className={`container ${styles.section}`}>
      <div>
        <SectionHeading
          title="Test by Health Risks"
          subtitle="Have you ever wondered about the things that might pose a threat to your health? Pick an organ to see the tests that check it."
        />
      </div>

      <div className={styles.icons}>
        {ORGANS.map((organ) => (
          <Link key={organ.slug} href={`/tests/${organ.slug}`} className={`hover-group ${styles.item}`}>
            <span className={styles.icon}><OrganIcon name={organ.slug} /></span>
            <span>{organ.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
