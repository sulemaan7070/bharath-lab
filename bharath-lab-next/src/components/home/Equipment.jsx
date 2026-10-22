import SectionHeading from '@/components/ui/SectionHeading';
import { EQUIPMENT } from '@/data/equipment';
import EquipmentCard from './EquipmentCard';
import styles from './Equipment.module.css';

export default function Equipment() {
  return (
    <section id="equipment" className={`container ${styles.section}`}>
      <SectionHeading title="Our Lab Equipment" subtitle="Modern analysers behind every report." />
      <div className={styles.grid}>
        {EQUIPMENT.map((item) => <EquipmentCard key={item.name} item={item} />)}
      </div>
    </section>
  );
}
