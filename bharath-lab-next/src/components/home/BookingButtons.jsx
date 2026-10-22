'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { SITE, WHATSAPP_MESSAGES } from '@/data/site';
import { openWhatsApp } from '@/lib/whatsapp';
import styles from './BookingButtons.module.css';

// "Book Via WhatsApp" and "Book Via Call" pills shown right below the hero.
export default function BookingButtons() {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.grid}>
        <button
          type="button"
          className={`${styles.pill} ${styles.whatsapp}`}
          onClick={() => openWhatsApp(WHATSAPP_MESSAGES.booking)}
        >
          <span>Book Via WhatsApp</span>
          <span className={styles.icon}><FaWhatsapp size={30} color="#25d366" /></span>
        </button>

        <a className={`${styles.pill} ${styles.call}`} href={`tel:+${SITE.phoneNumber}`}>
          <span>Book Via Call</span>
          <span className={`${styles.icon} ${styles.callIcon}`}><FiPhoneCall size={24} /></span>
        </a>
      </div>
    </section>
  );
}
