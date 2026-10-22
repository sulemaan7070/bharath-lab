'use client';

import { useState } from 'react';
import TestGrid from './TestGrid';
import styles from './OrganTests.module.css';

// Search box + grid for one organ page. Receives the tests as props from the server page.
export default function OrganTests({ tests }) {
  const [query, setQuery] = useState('');
  const visible = tests.filter((test) => test.name.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <section>
      <div className={styles.top}>
        <span>Showing <b>{visible.length}</b> tests</span>
        <input
          type="search"
          placeholder="Search"
          aria-label="Search these tests"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <TestGrid tests={visible} />
    </section>
  );
}
