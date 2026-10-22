'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaQuoteLeft } from 'react-icons/fa';
import ArrowButton from '@/components/ui/ArrowButton';
import CarouselDots from '@/components/ui/CarouselDots';
import SectionHeading from '@/components/ui/SectionHeading';
import { REVIEWS } from '@/data/reviews';
import styles from './Reviews.module.css';

// 1 review on phones, 2 on tablets, 3 on desktop.
const BREAKPOINTS = {
  0: { slidesPerView: 1 },
  700: { slidesPerView: 2 },
  1000: { slidesPerView: 3 },
};

export default function Reviews() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className={`container ${styles.section}`}>
      <SectionHeading title="What our clients say" align="center" />

      <div className={styles.viewer}>
        <ArrowButton direction="prev" className={styles.arrow} onClick={() => swiperRef.current?.slidePrev()} />

        <Swiper
          className={styles.swiper}
          modules={[Autoplay]}
          loop
          spaceBetween={16}
          breakpoints={BREAKPOINTS}
          autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
        >
          {REVIEWS.map((review) => (
            <SwiperSlide key={review.name} className={styles.slide}>
              <blockquote className={styles.card}>
                <FaQuoteLeft className={styles.quote} size={22} />
                <p>{review.text}</p>
                <footer>
                  <span className={styles.avatar}>{review.name.trim()[0].toUpperCase()}</span>
                  <b>{review.name}</b>
                </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>

        <ArrowButton direction="next" className={styles.arrow} onClick={() => swiperRef.current?.slideNext()} />
      </div>

      <CarouselDots
        className={styles.dots}
        count={REVIEWS.length}
        active={active}
        onSelect={(index) => swiperRef.current?.slideToLoop(index)}
      />
    </section>
  );
}
