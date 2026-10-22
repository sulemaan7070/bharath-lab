import Image from 'next/image';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import styles from './EquipmentCard.module.css';

// Mobile: text on the left, photo on the right. Desktop: photo on top.
export default function EquipmentCard({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 42vw, 400px"
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className={styles.body}>
        <span className={styles.category}>{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className={styles.footer}>
          <span className={styles.tag}>In-house</span>
          <Link href="/#risks" className={styles.link}>
            Book a test <i><FiChevronRight /></i>
          </Link>
        </div>
      </div>
    </article>
  );
}
