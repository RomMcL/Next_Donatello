'use client';
import { useEffect, useRef } from 'react';

import { useLang } from '@/custom-hooks/useLang';

import { SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import Slide from './Slide';

import img_1 from '@/public/img/main_page_new_collect_1.png';
import img_2 from '@/public/img/main_page_new_collect_2.png';
import img_3 from '@/public/img/main_page_new_collect_3.png';

import styles from '@/styles/page-main/top-section.module.css';

import dynamic from 'next/dynamic';

// Динамическая загрузка Swiper без SSR
const SwiperNoSSR = dynamic(
  () => import('swiper/react').then((mod) => mod.Swiper),
  {
    loading: () => <div className={styles.loading}>Загрузка...</div>, // Loading-заглушка
    ssr: false
  }
);

// Отключение Swiper Loop Warning в консольке (предупреждение о малом количестве слайдов)
const useSwiperLoopWarningFix = () => {
  const originalWarn = useRef<typeof console.warn | null>(null);

  useEffect(() => {
    // Сохраняем оригинальный console.warn
    originalWarn.current = console.warn;
    // Переопределяем console.warn
    console.warn = (...args) => {
      if (args[0]?.includes?.('Swiper Loop Warning')) {
        return;
      }
      originalWarn.current?.apply(console, args);
    };
    // Восстанавливаем console.warn при размонтировании
    return () => {
      if (originalWarn.current) {
        console.warn = originalWarn.current;
      }
    };
  }, []);
};

const NewCollectionSwiper = () => {
  const { lang, translations } = useLang();

  const slides = [
    {
      id: 1,
      image: img_1,
      title: translations[lang].main_page.tooltip.product_1.title,
      type: translations[lang].main_page.tooltip.product_1.type,
      price: 35,
      link: '/catalog'
    },
    {
      id: 2,
      image: img_2,
      title: translations[lang].main_page.tooltip.product_2.title,
      type: translations[lang].main_page.tooltip.product_2.type,
      price: 32,
      link: '/catalog'
    },
    {
      id: 3,
      image: img_3,
      title: translations[lang].main_page.tooltip.product_3.title,
      type: translations[lang].main_page.tooltip.product_3.type,
      price: 33,
      link: '/catalog'
    },
  ];

  useSwiperLoopWarningFix();

  return (
    <div className={styles.carousel_block}>

      <h2 className={styles.new_collection_name}>
        {translations[lang].main_page.new_collection_name}
      </h2>

      <SwiperNoSSR
        modules={[EffectCoverflow, Autoplay]}
        effect={'coverflow'}
        spaceBetween={50}
        grabCursor={true}
        centeredSlides={true}

        slidesPerView={'auto'}
        loop={true}
        onInit={() => { }}

        initialSlide={1}
        allowSlideNext={false}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          reverseDirection: true,
          pauseOnMouseEnter: true,
        }}
        className={styles.slider}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slider__slide}>
            <Slide slide={slide} />
          </SwiperSlide>
        ))}

      </SwiperNoSSR>
    </div>
  );
};

export default NewCollectionSwiper;
