import styles from './CarouselDots.module.css';

export default function CarouselDots({ count, active, onSelect, className = '' }) {
  return (
    <div className={`${styles.dots} ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === active}
          className={index === active ? styles.active : ''}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
