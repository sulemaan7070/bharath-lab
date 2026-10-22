import TestCard from './TestCard';
import styles from './TestGrid.module.css';

export default function TestGrid({ tests }) {
  if (!tests.length) return <p className={styles.empty}>No tests match your search.</p>;

  return (
    <div className={styles.grid}>
      {tests.map((test) => <TestCard key={test.id} test={test} />)}
    </div>
  );
}
