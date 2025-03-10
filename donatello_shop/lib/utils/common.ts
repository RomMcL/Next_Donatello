import { closeSearchModal } from '@/effector-context/modals';

/* Добавляет для body класс overflow-hidden, запрещающий скролл при открытой модалке */
let scrollY = 0 as number; // текущее положение скролла

export const addOverflowHiddenToBody = (paddingRight = '') => {
  const body = document.querySelector('body') as HTMLBodyElement;

  scrollY = window.scrollY || document.documentElement.scrollTop;
  body.style.setProperty('--scroll-position', `${scrollY}px`);
  body.classList.add('overflow-hidden');

  if (paddingRight) body.style.paddingRight = paddingRight;
};

/* Убирает запрет скролла */
export const removeOverflowHiddenFromBody = () => {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.classList.remove('overflow-hidden');

  body.style.removeProperty('--scroll-position');
  window.scrollTo(0, scrollY);
};

/* Получение ширины экрана */
export const getWindowWidth = () => {
  const { innerWidth: windowWidth } = typeof window !== 'undefined' ? window : { innerWidth: 0 };
  return { windowWidth };
};

/* Закрытие окна поиска */
export const handleCloseSearchModal = () => {
  removeOverflowHiddenFromBody();
  closeSearchModal();
};