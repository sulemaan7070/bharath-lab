'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import ArrowButton from '@/components/ui/ArrowButton';
import CarouselDots from '@/components/ui/CarouselDots';
import OrganIcon from '@/components/ui/OrganIcon';
import { HERO_SLIDES } from '@/data/hero';
import { prefersReducedMotion } from '@/lib/animations';
import { gsap } from '@/lib/gsap';
import styles from './Hero.module.css';

// Slides in the heading and text of the active slide (also runs once on page load).
function animateSlideText(swiper) {
  const slide = swiper.slides[swiper.activeIndex];
  if (!slide || prefersReducedMotion()) return;
  gsap.fromTo(
    slide.querySelectorAll('[data-animate]'),
    { y: 24, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' }
  );
}

export default function Hero() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.hero}>
        <Swiper
          modules={[Autoplay, Keyboard]}
          rewind
          keyboard
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            animateSlideText(swiper);
          }}
          onSlideChange={(swiper) => {
            setActive(swiper.activeIndex);
            animateSlideText(swiper);
          }}
        >
          {HERO_SLIDES.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className={styles.slide}>
                <div>
                  <h1 data-animate>{slide.title}</h1>
                  <p data-animate>{slide.text}</p>
                </div>
                <div className={styles.icon}><OrganIcon name={slide.icon} /></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.arrows}>
          <ArrowButton direction="prev" onClick={() => swiperRef.current?.slidePrev()} />
          <ArrowButton direction="next" onClick={() => swiperRef.current?.slideNext()} />
        </div>
        <CarouselDots
          className={styles.dots}
          count={HERO_SLIDES.length}
          active={active}
          onSelect={(index) => swiperRef.current?.slideTo(index)}
        />
      </div>
    </section>
  );
}
