'use client';

import { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { WHATSAPP_MESSAGES } from '@/data/site';
import { popBadge } from '@/lib/animations';
import { openWhatsApp } from '@/lib/whatsapp';
import styles from './WhatsAppFab.module.css';

// Floating button on every page.
// - Cart has items: shows the item count and opens the cart.
// - Cart is empty: opens a WhatsApp chat with a default message.
export default function WhatsAppFab() {
  const { count, ready, open } = useCart();
  const badgeRef = useRef(null);
  const previousCount = useRef(null);

  // Pop the badge when an item is added (not when the saved cart loads).
  useEffect(() => {
    if (!ready) return;
    if (previousCount.current !== null && count > previousCount.current) popBadge(badgeRef.current);
    previousCount.current = count;
  }, [count, ready]);

  const hasItems = count > 0;

  return (
    <button
      type="button"
      className={styles.fab}
      onClick={() => (hasItems ? open() : openWhatsApp(WHATSAPP_MESSAGES.general))}
      aria-label={hasItems ? `Open cart, ${count} item${count > 1 ? 's' : ''}` : 'Chat on WhatsApp'}
    >
      <FaWhatsapp size={32} />
      {hasItems && <span ref={badgeRef} className={styles.badge}>{count}</span>}
    </button>
  );
}
