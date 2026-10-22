'use client';

import { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import useLocalStorage from '@/hooks/useLocalStorage';
import { formatPrice } from '@/lib/format';
import { buildOrderMessage, openWhatsApp } from '@/lib/whatsapp';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { items, total, isOpen, close, remove } = useCart();
  const toast = useToast();
  const [name, setName] = useLocalStorage('bl-name', '');
  const nameInput = useRef(null);

  // Close with the Escape key.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => event.key === 'Escape' && close();
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close]);

  function checkout() {
    if (!items.length) return toast.show('Add a test first');
    if (!name.trim()) {
      toast.show('Please enter your name');
      nameInput.current?.focus();
      return;
    }
    openWhatsApp(buildOrderMessage(name.trim(), items));
  }

  return (
    <>
      <div className={`${styles.scrim} ${isOpen ? styles.open : ''}`} onClick={close} />

      <aside className={`${styles.drawer} ${isOpen ? styles.open : ''}`} aria-label="Cart">
        <div className={styles.head}>
          <h2>Your cart</h2>
          <button type="button" className={styles.close} onClick={close} aria-label="Close cart">
            <FiX size={26} />
          </button>
        </div>

        <div className={styles.items}>
          {items.length === 0 ? (
            <p className={styles.empty}>Your cart is empty.<br />Add a test to get started.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className={styles.row}>
                <b>{item.name}</b>
                <span>{formatPrice(item.price)}</span>
                <button type="button" className={styles.remove} onClick={() => remove(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>

        <div className={styles.foot}>
          <div className={styles.total}><span>Total</span><span>{formatPrice(total)}</span></div>
          <label htmlFor="cart-name">Your name</label>
          <input
            id="cart-name"
            ref={nameInput}
            type="text"
            autoComplete="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="button" className={styles.checkout} onClick={checkout}>
            <FaWhatsapp size={22} /> Send on WhatsApp
          </button>
        </div>
      </aside>
    </>
  );
}
