import Image from 'next/image';
import { INewCollectionSlideTooltip } from '@/types/main-page';
import styles from '@/styles/page-main/top-section.module.css';

const SlideTooltip = ({ image, title, type, price }: INewCollectionSlideTooltip) => (
  <div className={styles.slide_tooltip}>
    <Image
      className={styles.slide_tooltip__img}
      src={image}
      alt={title}
    />
    <div className={styles.slide_tooltip__inner}>
      <div className={styles.slide_tooltip__title_price}>
        <b className={styles.slide_tooltip__title}>{title}</b>
        <span className={styles.slide_tooltip__price}>{price} ₽</span>
      </div>
      <span className={styles.slide_tooltip__type}>{type}</span>
    </div>
  </div>
);

export default SlideTooltip;