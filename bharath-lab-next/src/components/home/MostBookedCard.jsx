'use client';

import Link from 'next/link';
import { FaVials } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { flyToCart } from '@/lib/animations';
import styles from './MostBookedCard.module.css';

// One card in the "Most Booked Tests" carousel.
export default function MostBookedCard({ test, includes, reports }) {
  const { has, toggle } = useCart();
  const toast = useToast();
  const inCart = has(test.id);

  function handleAdd(event) {
    const added = toggle(test.id);
    toast.show(added ? 'Added to cart' : 'Removed from cart');
    if (added) flyToCart(event.currentTarget);
  }

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{test.name}</h3>

      <div className={styles.info}>
        <div className={styles.fact}>
          <span className={styles.iconBox}><FaVials size={20} /></span>
          <span>
            <b>{includes} {includes > 1 ? 'Tests' : 'Test'}</b>
            <small>Includes</small>
          </span>
        </div>
        <div className={styles.fact}>
          <span className={styles.iconBox}><FiFileText size={22} /></span>
          <span>
            <small>Reports within</small>
            <b>{reports}</b>
          </span>
        </div>
      </div>

      <div className={styles.actions}>
        <Link href={`/tests/${test.category}`} className={styles.details}>View Details</Link>
        <button type="button" className={`${styles.add} ${inCart ? styles.added : ''}`} onClick={handleAdd}>
          {inCart ? 'Added ✓' : 'Add to cart'}
        </button>
      </div>
    </article>
  );
}
