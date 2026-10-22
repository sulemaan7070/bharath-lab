'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { prefersReducedMotion } from '@/lib/animations';
import styles from './Counter.module.css';

// Counts from 1 up to `to` the first time it scrolls into view.
export default function Counter({ to, suffix = '+' }) {
  const numberRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;
    const format = (n) => n.toLocaleString('en-IN');

    if (prefersReducedMotion()) {
      element.textContent = format(to);
      return;
    }

    const progress = { value: 1 };
    element.textContent = '1';

    const tween = gsap.to(progress, {
      value: to,
      duration: 2.2,
      ease: 'power3.out',
      paused: true,
      onUpdate: () => {
        element.textContent = format(Math.round(progress.value));
      },
    });
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      once: true,
      onEnter: () => tween.play(),
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, [to]);

  return (
    <span className={styles.counter}>
      <span ref={numberRef} suppressHydrationWarning>1</span>
      <span className={styles.suffix}>{suffix}</span>
    </span>
  );
}
