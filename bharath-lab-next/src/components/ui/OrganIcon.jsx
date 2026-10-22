'use client';

import { useId } from 'react';
import styles from './OrganIcon.module.css';

/* Each illustration is drawn on a 64 x 64 grid. */

const Heart = () => (
  <>
    <path d="M21 21c-2-5-2-10 0-15" fill="none" stroke="#3e6fd1" strokeWidth="5.5" strokeLinecap="round" />
    <path d="M32 57C20 48 9 39 10 27c1-8 7-12 13-10 4 1 7 4 9 7 2-4 6-7 11-7 7 0 11 7 9 15-2 9-10 17-20 25z" fill="#e5484d" />
    <path d="M31 24c-3-10 3-17 12-15 4 1 6 5 5 9" fill="none" stroke="#c32a31" strokeWidth="6.5" strokeLinecap="round" />
    <path d="M37 8V4M43 9l1-5" stroke="#c32a31" strokeWidth="3" strokeLinecap="round" />
    <path d="M33 28c-1 8 1 15 5 21M24 30c1 6 4 11 8 15" fill="none" stroke="#a31f25" strokeOpacity=".7" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M15 27c0-5 4-8 8-7" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="2.6" strokeLinecap="round" />
  </>
);

const Liver = () => (
  <>
    <path d="M5 27c0-9 9-14 22-13l25 4c6 1 8 6 5 12-5 11-15 20-28 20-9 0-15-4-19-10C7 36 5 31 5 27z" fill="#a8482c" />
    <path d="M31 15c0 10 4 19 12 26" fill="none" stroke="#7d301c" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 49c3-4 7-6 11-6" fill="none" stroke="#7d301c" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M11 25c3-5 9-8 15-8" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="3" strokeLinecap="round" />
    <path d="M40 47c0-4-2-6-5-8" fill="none" stroke="#4f9d5d" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M38 47c-3 4-1 9 3 8 4-1 4-6 1-9z" fill="#4f9d5d" />
  </>
);

// One kidney. The second one is the same shape mirrored.
const SingleKidney = () => (
  <>
    <path d="M24 8C14 8 9 18 10 28c1 10 6 18 14 18 4 0 5-4 3-8-2-4-3-6-2-10 1-4 4-6 4-11 0-6-1-9-5-9z" fill="#cf5a4f" />
    <path d="M14 17c1-4 4-7 9-7" fill="none" stroke="#fff" strokeOpacity=".4" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M12 32c1 6 4 10 8 12" fill="none" stroke="#a63d36" strokeOpacity=".5" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M27 30c-4 0-7-3-7-7" fill="none" stroke="#f2c14e" strokeWidth="3" strokeLinecap="round" />
    <path d="M26 34c1 8 3 14 6 20" fill="none" stroke="#e8b04a" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M18 7c3-3 8-3 11-1-3 2-8 2-11 1z" fill="#f2c14e" />
  </>
);
const Kidney = () => (
  <>
    <SingleKidney />
    <g transform="matrix(-1 0 0 1 64 0)"><SingleKidney /></g>
  </>
);

// One thyroid lobe, mirrored for the other side, on top of the windpipe.
const ThyroidLobe = () => (
  <>
    <path d="M30 23C24 15 13 17 12 28c-1 9 4 18 11 18 5 0 8-4 7-10z" fill="#ea6f86" />
    <path d="M16 26c1-4 4-6 8-6" fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M15 36c1 4 4 7 8 8" fill="none" stroke="#c94f68" strokeOpacity=".5" strokeWidth="2.2" strokeLinecap="round" />
  </>
);
const Thyroid = () => (
  <>
    <rect x="27" y="3" width="10" height="58" rx="5" fill="#cdd7e6" />
    <path d="M27 9h10M27 14h10M27 19h10M27 45h10M27 50h10M27 55h10" stroke="#9fb0c9" strokeWidth="1.6" />
    <ThyroidLobe />
    <g transform="matrix(-1 0 0 1 64 0)"><ThyroidLobe /></g>
    <path d="M29 29h6v6h-6z" fill="#ea6f86" />
  </>
);

// The bone is drawn twice: first slightly bigger in a dark colour (outline), then on top in cream.
const BoneShapes = () => (
  <>
    <circle cx="13" cy="25" r="7" /><circle cx="13" cy="39" r="7" />
    <circle cx="51" cy="25" r="7" /><circle cx="51" cy="39" r="7" />
    <rect x="13" y="27" width="38" height="10" />
  </>
);
const Bone = () => (
  <g transform="rotate(-40 32 32)">
    <g fill="#b8935f" stroke="#b8935f" strokeWidth="4" strokeLinejoin="round"><BoneShapes /></g>
    <g fill="#f6ecd9"><BoneShapes /></g>
    <rect x="13" y="33" width="38" height="4" fill="#e6d6b8" />
    <path d="M9 22c1-2 3-3 5-3M47 22c1-2 3-3 5-3" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </g>
);

const Flask = () => (
  <>
    <path d="M18.9 38H45.1L52 50Q54 57 47 57H17Q10 57 12 50Z" fill="#3fb27f" />
    <circle cx="28" cy="46" r="2" fill="#fff" fillOpacity=".7" />
    <circle cx="36" cy="50" r="1.5" fill="#fff" fillOpacity=".7" />
    <path d="M28 6V22L12 50Q10 57 17 57H47Q54 57 52 50L36 22V6" fill="none" stroke="#1457b8" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M25 6H39" stroke="#1457b8" strokeWidth="3" strokeLinecap="round" />
  </>
);

const ART = { heart: Heart, liver: Liver, kidney: Kidney, thyroid: Thyroid, bone: Bone, flask: Flask };

/**
 * Circular icon with a coloured organ illustration.
 * `name`: heart | liver | kidney | thyroid | bone | flask
 * Add className="hover-group" to a parent to animate this icon when that parent is hovered.
 */
export default function OrganIcon({ name, className = '' }) {
  const gradientId = `organ-${useId().replace(/:/g, '')}`;
  const Art = ART[name] ?? Flask;

  return (
    <svg className={`${styles.icon} ${className}`} viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#1457b8" />
          <stop offset="1" stopColor="#7cc4ff" />
        </linearGradient>
      </defs>
      <circle className={styles.pulse} cx="60" cy="60" r="58" />
      <g className={styles.ring}>
        <circle cx="60" cy="60" r="58" fill={`url(#${gradientId})`} />
        <circle cx="60" cy="60" r="38" fill="#fff" />
      </g>
      <svg className={styles.art} x="30" y="30" width="60" height="60" viewBox="0 0 64 64">
        <Art />
      </svg>
    </svg>
  );
}
