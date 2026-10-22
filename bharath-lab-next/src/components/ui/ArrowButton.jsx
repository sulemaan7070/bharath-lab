import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './ArrowButton.module.css';

// Round previous/next button used by every carousel.
export default function ArrowButton({ direction, onClick, className = '' }) {
  const isPrev = direction === 'prev';
  return (
    <button
      type="button"
      className={`${styles.arrow} ${className}`}
      onClick={onClick}
      aria-label={isPrev ? 'Previous' : 'Next'}
    >
      {isPrev ? <FiChevronLeft size={22} /> : <FiChevronRight size={22} />}
    </button>
  );
}
