import { JSX } from 'react';

export interface IMenuListItemProps {
  children: React.ReactNode
  name: string | JSX.Element
  showList: boolean
  handle: VoidFunction
  type?: string
}

export interface IAccordionProps {
  children: React.ReactNode
  title: string | JSX.Element
  titleClass: string
  rotateIconClass?: string
}

