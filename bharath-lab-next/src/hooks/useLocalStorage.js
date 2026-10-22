'use client';

import { useEffect, useState } from 'react';

// Same API as useState, but the value is saved in localStorage.
// It is read after mount, so server and client HTML match (no hydration errors).
// The third value, `loaded`, turns true once the saved value has been read.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) setValue(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, [key]);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value, loaded]);

  return [value, setValue, loaded];
}
