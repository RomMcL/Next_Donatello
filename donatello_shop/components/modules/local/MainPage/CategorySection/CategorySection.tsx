'use client';
import Link from 'next/link';
import Image from 'next/image';

import { useLang } from '@/custom-hooks/useLang';
import { useMediaQuery } from '@/custom-hooks/useMediaQuery';
import useImagePreloader from '@/custom-hooks/useImagePreloader';

import SectionHeader from '../SectionHeader';

import imgLive from '@/public/img/main_page_category_life.png';
import imgDevelopment from '@/public/img/main_page_category_development.png';
import imgCat from '@/public/img/main_page_category_cat.png';
import imgWishes from '@/public/img/main_page_category_wishes.png';

import styles from '@/styles/page-main/section.module.css';
import MainSlider from '../MainSlider';

const CategorySection = () => {
  const { lang, translations } = useLang();
  const isMedia490 = useMediaQuery(490);
  const { handleLoadingImageComplete, imgSpiner } = useImagePreloader();

  const imgSpinnerClass = imgSpiner ? styles.img_loading : '';

  const images = [
    { src: imgLive, id: 1, title: translations[lang].menu.catalog.life.life, link: '/catalog/life' },
    {
      src: imgDevelopment, id: 2, title: translations[lang].menu.catalog.development.development,
      link: '/catalog/development'
    },
    { src: imgCat, id: 3, title: translations[lang].menu.catalog.cat.cat, link: '/catalog/cat' },
    { src: imgWishes, id: 4, title: translations[lang].menu.catalog.wishes.wishes, link: '/catalog/wishes' }
  ];

  return (
    <section className={styles.main_page__section}>

      <SectionHeader
        sectionName={translations[lang].main_page.section.category}
        sectionLink='/catalog'
      />

      <div className={styles.container_category}>
        {!isMedia490 ? (
          <>
            <Link
              href='/catalog/life'
              className={`${styles.category_img} ${styles.category_life} ${imgSpinnerClass}`}
            >
              <Image
                src={imgLive}
                alt='Life'
                className='transition-opacity opacity-0 duration'
                onLoad={handleLoadingImageComplete}
                priority
              />
              <span>{translations[lang].menu.catalog.life.life}</span>
            </Link>

            <Link
              href='/catalog/development'
              className={`${styles.category_img} ${styles.category_development} ${imgSpinnerClass}`}
            >
              <Image
                src={imgDevelopment}
                alt='Development'
                className='transition-opacity opacity-0 duration'
                onLoad={handleLoadingImageComplete}
              />
              <span>{translations[lang].menu.catalog.development.development}</span>
            </Link>

            <Link
              href='/catalog/cat'
              className={`${styles.category_img} ${styles.category_cat} ${imgSpinnerClass}`}
            >
              <Image
                src={imgCat}
                alt='Cat'
                className='transition-opacity opacity-0 duration'
                onLoad={handleLoadingImageComplete}
              />
              <span>{translations[lang].menu.catalog.cat.cat}</span>
            </Link>

            <Link
              href='/catalog/wishes'
              className={`${styles.category_img} ${styles.category_wishes} ${imgSpinnerClass}`}
            >
              <Image
                src={imgWishes}
                alt='Wishes'
                className='transition-opacity opacity-0 duration'
                onLoad={handleLoadingImageComplete}
              />
              <span>{translations[lang].menu.catalog.wishes.wishes}</span>
            </Link>
          </>
        ) : <MainSlider images={images} />}

      </div>

    </section>
  );
};

export default CategorySection;
