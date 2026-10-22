'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import { NAV_LINKS, SITE } from '@/data/site';
import { popBadge, wiggle } from '@/lib/animations';
import styles from './Header.module.css';

export default function Header() {
  const { count, ready, open } = useCart();
  const buttonRef = useRef(null);
  const badgeRef = useRef(null);
  const previousCount = useRef(null);

  // Animate only when an item is added, not when the saved cart loads.
  useEffect(() => {
    if (!ready) return;
    if (previousCount.current !== null && count > previousCount.current) {
      wiggle(buttonRef.current);
      popBadge(badgeRef.current);
    }
    previousCount.current = count;
  }, [count, ready]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="Bharath Laboratory logo" width={44} height={44} priority />
          <span>{SITE.name}</span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          data-cart-button
          className={styles.cart}
          onClick={open}
          aria-label="Open cart"
        >
          <FiShoppingCart size={26} />
          {count > 0 && <span ref={badgeRef} className={styles.badge}>{count}</span>}
        </button>
      </div>
      <p className={styles.tagline}>{SITE.tagline}</p>
    </header>
  );
}
