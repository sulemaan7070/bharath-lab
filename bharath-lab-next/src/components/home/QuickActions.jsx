'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { FaFlask } from 'react-icons/fa';
import { FiDownload, FiFileText, FiMapPin } from 'react-icons/fi';
import { useToast } from '@/context/ToastContext';
import styles from './QuickActions.module.css';

// A card that is either a link (href) or a button (onClick).
function ActionCard({ title, text, Icon, href, onClick }) {
  const content = (
    <>
      <span className={styles.iconBox}><Icon size={26} /></span>
      <span><b>{title}</b><small>{text}</small></span>
    </>
  );

  return href ? (
    <Link href={href} className={styles.card}>{content}</Link>
  ) : (
    <button type="button" className={styles.card} onClick={onClick}>{content}</button>
  );
}

export default function QuickActions() {
  const toast = useToast();
  const fileInput = useRef(null);

  return (
    <section id="quick-actions" className={`container ${styles.section}`}>
      <div className={styles.grid}>
        <ActionCard title="Book a test" text="Search from 4500+ tests" Icon={FaFlask} href="/#risks" />
        <ActionCard
          title="Upload prescription"
          text="Book tests from your prescription"
          Icon={FiFileText}
          onClick={() => fileInput.current?.click()}
        />
        <ActionCard
          title="Download reports"
          text="Access your test results"
          Icon={FiDownload}
          onClick={() => toast.show('Log in to download your reports (demo)')}
        />
        <ActionCard
          title="Find nearby centre"
          text="750+ towns"
          Icon={FiMapPin}
          onClick={() => toast.show('Finding centres near you (demo)')}
        />
      </div>

      <input
        ref={fileInput}
        type="file"
        accept="image/*,.pdf"
        hidden
        onChange={(event) => event.target.files[0] && toast.show('Prescription received (demo)')}
      />
    </section>
  );
}
