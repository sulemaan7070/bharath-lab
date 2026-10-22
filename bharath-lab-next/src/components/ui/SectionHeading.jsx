import styles from './SectionHeading.module.css';

export default function SectionHeading({ title, subtitle, align = 'left' }) {
  return (
    <div className={styles.wrap} style={{ textAlign: align }}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
