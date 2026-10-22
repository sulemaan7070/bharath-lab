import styles from './Toast.module.css';

// Rendered once by ToastProvider. Use `useToast().show('text')` to display it.
export default function Toast({ message, visible }) {
  return (
    <div role="status" className={`${styles.toast} ${visible ? styles.on : ''}`}>
      {message}
    </div>
  );
}
