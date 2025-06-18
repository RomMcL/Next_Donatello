import { StaticImageData } from 'next/image';
import { LinkProps } from 'next/link';

export interface ITopSectionSlide {
  id?: number
  image: StaticImageData
  title: string
  type: string
  price: number
  link: LinkProps['href']
}

export type INewCollectionSlideTooltip = ITopSectionSlide