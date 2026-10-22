'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import TestCard from '@/components/tests/TestCard';
import ArrowButton from '@/components/ui/ArrowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import { PACKAGES } from '@/data/packages';
import styles from './Packages.module.css';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'm', label: 'Male' },
  { id: 'f', label: 'Female' },
];

// "Both" packages (gender 'b') are shown under every filter.
const matchesFilter = (pack, filter) => filter === 'all' || pack.gender === filter || pack.gender === 'b';

export default function Packages() {
  const swiperRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const visible = PACKAGES.filter((pack) => matchesFilter(pack, filter));

  return (
    <section id="packages" className={`container ${styles.section}`}>
      <div className={styles.head}>
        <SectionHeading title="Full Body Packages" subtitle="Choose from our wide range of health checkups" />

        <div className={styles.controls}>
          <div className={styles.chips}>
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.chip} ${filter === item.id ? styles.on : ''}`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <ArrowButton direction="prev" className={styles.arrow} onClick={() => swiperRef.current?.slidePrev()} />
          <ArrowButton direction="next" className={styles.arrow} onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </div>

      {/* key remounts the carousel so it starts at the first card after filtering */}
      <Swiper
        key={filter}
        className={styles.swiper}
        modules={[FreeMode]}
        freeMode
        slidesPerView="auto"
        spaceBetween={16}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {visible.map((pack) => (
          <SwiperSlide key={pack.id} className={styles.slide}>
            <TestCard test={pack} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
