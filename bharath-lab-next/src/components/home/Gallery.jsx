'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import ArrowButton from '@/components/ui/ArrowButton';
import CarouselDots from '@/components/ui/CarouselDots';
import SectionHeading from '@/components/ui/SectionHeading';
import { GALLERY } from '@/data/gallery';
import styles from './Gallery.module.css';

export default function Gallery() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section id="gallery" className={`container ${styles.section}`}>
      <SectionHeading title="Gallery" subtitle="Moments from the opening of Bharath Lab." align="center" />

      <div className={styles.viewer}>
        <ArrowButton direction="prev" className={`${styles.arrow} ${styles.prev}`} onClick={() => swiperRef.current?.slidePrev()} />

        <div className={styles.frame}>
          <Swiper
            modules={[Autoplay, Keyboard]}
            loop
            speed={600}
            grabCursor
            keyboard
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
          >
            {GALLERY.map((photo, index) => (
              <SwiperSlide key={photo.src}>
                <figure className={styles.slide}>
                  {/* blurred copy fills the frame so portrait and landscape photos both look full */}
                  <div className={styles.blur} style={{ backgroundImage: `url(${photo.src})` }} />
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(min-width: 900px) 900px, 100vw"
                    priority={index === 0}
                    style={{ objectFit: 'contain' }}
                  />
                  <figcaption>
                    <span className={styles.badge}>Opening day</span>
                    {photo.caption}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <span className={styles.counter}>{active + 1} / {GALLERY.length}</span>
        </div>

        <ArrowButton direction="next" className={`${styles.arrow} ${styles.next}`} onClick={() => swiperRef.current?.slideNext()} />
      </div>

      <CarouselDots
        className={styles.dots}
        count={GALLERY.length}
        active={active}
        onSelect={(index) => swiperRef.current?.slideToLoop(index)}
      />
    </section>
  );
}
