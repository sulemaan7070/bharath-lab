'use client';

import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { flyToCart } from '@/lib/animations';
import { formatPrice } from '@/lib/format';
import styles from './TestCard.module.css';

export default function TestCard({ test }) {
  const { has, toggle } = useCart();
  const toast = useToast();
  const inCart = has(test.id);
  const isPackage = test.testsCount > 1;

  function handleClick(event) {
    const added = toggle(test.id);
    toast.show(added ? 'Added to cart' : 'Removed from cart');
    if (added) flyToCart(event.currentTarget);
  }

  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{test.name}</h3>
      <p className={styles.meta}>
        {isPackage
          ? `${test.testsCount} tests included · Reports in 24 hours`
          : '1 test included · Reports within 12 hours'}
      </p>
      <p className={styles.price}>
        {formatPrice(test.price)}
        {test.mrp && <s>{formatPrice(test.mrp)}</s>}
      </p>
      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.button} ${inCart ? styles.added : ''}`}
          onClick={handleClick}
        >
          {inCart ? 'Added ✓' : 'Add to cart'}
        </button>
      </div>
    </article>
  );
}
