'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FOOTER_LINKS, SITE, WHATSAPP_MESSAGES } from '@/data/site';
import { openWhatsApp } from '@/lib/whatsapp';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.brand}>
            <Image src="/images/logo.png" alt="" width={44} height={44} />
            <div>
              <b>{SITE.name}</b>
              <span>Book your appointment today</span>
            </div>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </nav>

          <div className={styles.social}>
            <a
              className={styles.icon}
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${SITE.instagramHandle}`}
            >
              <FaInstagram size={22} />
            </a>
            <button
              type="button"
              className={`${styles.icon} ${styles.whatsapp}`}
              onClick={() => openWhatsApp(WHATSAPP_MESSAGES.appointment)}
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={22} />
            </button>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {SITE.name} · {SITE.location}</span>
          <button type="button" className={styles.top} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
