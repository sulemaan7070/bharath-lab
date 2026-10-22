'use client';

import { useState } from 'react';
import TestGrid from '@/components/tests/TestGrid';
import { searchTests } from '@/lib/tests';
import styles from './TestSearch.module.css';

export default function TestSearch() {
  const [query, setQuery] = useState('');
  const text = query.trim();

  return (
    <section className={`container ${styles.section}`}>
      <input
        type="search"
        className={styles.input}
        placeholder='Search for "Thyroid", "Full Body" or "Allergy"...'
        aria-label="Search tests"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      {text && (
        <div className={styles.results}>
          <h2>Results for “{text}”</h2>
          <TestGrid tests={searchTests(text)} />
        </div>
      )}
    </section>
  );
}
