'use client';

import { CartProvider } from './CartContext';
import { ToastProvider } from './ToastContext';

// Wraps the app with every context in one place (used in app/layout.jsx).
export default function Providers({ children }) {
  return (
    <ToastProvider>
      <CartProvider>{children}</CartProvider>
    </ToastProvider>
  );
}
