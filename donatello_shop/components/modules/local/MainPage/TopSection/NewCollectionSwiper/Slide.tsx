import Link from 'next/link';
import Image from 'next/image';
import SlideTooltip from './SlideTooltip';
import { ITopSectionSlide } from '@/types/main-page';
import styles from '@/styles/page-main/top-section.module.css';

const Slide = ({ slide }: { slide: ITopSectionSlide }) => (
  <>
    <Image
      className={styles.slide__img}
      src={slide.image}
      alt={slide.title}
    />
    <Link href={slide.link} className={styles.slide__link} />
    <SlideTooltip
      image={slide.image}
      title={slide.title}
      type={slide.type}
      price={slide.price}
      link={slide.link}
    />
  </>
);

export default Slide;