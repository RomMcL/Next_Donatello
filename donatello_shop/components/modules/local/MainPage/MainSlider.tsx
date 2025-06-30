import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useImagePreloader from '@/custom-hooks/useImagePreloader';

import styles from '@/styles/page-main/section.module.css';
import Link from 'next/link';

const MainSlider = ({
  images, }: {
    images: {
      src: StaticImageData
      id: number
      title: string
      link: string
    }[]
  }) => {
  const { handleLoadingImageComplete, imgSpiner } = useImagePreloader();
  const imgSpinnerClass = imgSpiner ? styles.img_loading : '';

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 500,
    arrows: false,
  };

  return (
    <Slider {...settings} className={styles.category__slider}>
      {images.map((item) => (
        <Link
          key={item.id}
          className={`${styles.category__slide} ${imgSpinnerClass}`}
          href={item.link}
        >
          <Image
            src={item.src}
            alt={item.title}
            onLoad={handleLoadingImageComplete}
            priority
          />
          <span>{item.title.replace(/\s/g, '\u00A0')}</span>
        </Link>
      ))}

    </Slider>
  );
};

export default MainSlider;