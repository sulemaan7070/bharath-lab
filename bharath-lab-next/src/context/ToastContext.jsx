'use client';

import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import Toast from '@/components/ui/Toast';

const ToastContext = createContext({ show: () => {} });

export function ToastProvider({ children }) {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const timer = useRef();

  const show = useCallback((text) => {
    setMessage(text);
    setVisible(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 1800);
  }, []);

  const value = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast message={message} visible={visible} />
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
