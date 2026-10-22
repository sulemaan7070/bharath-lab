'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { getTestById } from '@/lib/tests';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [ids, setIds, ready] = useLocalStorage('bl-cart', []);
  const [isOpen, setIsOpen] = useState(false);

  const items = useMemo(() => ids.map(getTestById).filter(Boolean), [ids]);

  const total = useMemo(() => items.reduce((sum, item) => sum + item.price, 0), [items]);
  const has = useCallback((id) => ids.includes(id), [ids]);

  // Adds or removes a test. Returns true when the test was added.
  const toggle = useCallback(
    (id) => {
      const added = !ids.includes(id);
      setIds(added ? [...ids, id] : ids.filter((existing) => existing !== id));
      return added;
    },
    [ids, setIds]
  );

  const remove = useCallback((id) => setIds((current) => current.filter((x) => x !== id)), [setIds]);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ items, total, count: items.length, ready, has, toggle, remove, isOpen, open, close }),
    [items, total, ready, has, toggle, remove, isOpen, open, close]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
