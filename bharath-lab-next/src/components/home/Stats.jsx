import { FaFlask } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import Counter from '@/components/ui/Counter';
import { STATS } from '@/data/stats';
import styles from './Stats.module.css';

const ICONS = { file: FiFileText, flask: FaFlask };

export default function Stats() {
  return (
    <section className="container">
      <div className={styles.band} aria-label="Bharath Lab in numbers">
        {STATS.map((stat) => {
          const Icon = ICONS[stat.icon];
          return (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.icon}><Icon size={26} /></span>
              <div className={styles.number}><Counter to={stat.value} /></div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
