'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import ArrowButton from '@/components/ui/ArrowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import { MOST_BOOKED } from '@/data/mostBooked';
import { getTestById } from '@/lib/tests';
import MostBookedCard from './MostBookedCard';
import styles from './MostBooked.module.css';

export default function MostBooked() {
  const swiperRef = useRef(null);

  return (
    <section id="popular" className={`container ${styles.section}`}>
      <div className={styles.head}>
        <SectionHeading title="Most Booked Tests" subtitle="Choose from a range of frequently booked blood tests." />
        <div className={styles.arrows}>
          <ArrowButton direction="prev" onClick={() => swiperRef.current?.slidePrev()} />
          <ArrowButton direction="next" onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </div>

      <Swiper
        className={styles.swiper}
        modules={[FreeMode]}
        freeMode
        slidesPerView="auto"
        spaceBetween={16}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {MOST_BOOKED.map(({ id, includes, reports }) => (
          <SwiperSlide key={id} className={styles.slide}>
            <MostBookedCard test={getTestById(id)} includes={includes} reports={reports} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
