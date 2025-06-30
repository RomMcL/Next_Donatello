import { closeSearchModal } from '@/effector-context/modals';

/* Добавляет для body класс no-scroll, запрещающий скролл при открытой модалке */
let scrollY = 0 as number; // текущее положение скролла

export const addNoScrollToBody = (overflow = 'scroll') => {
  const body = document.querySelector('body') as HTMLBodyElement;
  scrollY = window.scrollY || document.documentElement.scrollTop;
  body.style.setProperty('--scroll-position', `${scrollY}px`);
  body.style.setProperty('--overflow-y', overflow);
  body.classList.add('no-scroll');
};

/* Убирает запрет скролла */
export const removeNoScrollFromBody = () => {
  const body = document.querySelector('body') as HTMLBodyElement;
  scrollY = parseInt(body.style.getPropertyValue('--scroll-position'));
  body.classList.remove('no-scroll');
  body.style.removeProperty('--overflow-y');
  window.scrollTo(0, scrollY);
};

/* Получение ширины экрана */
export const getWindowWidth = () => {
  const { innerWidth: windowWidth } = typeof window !== 'undefined' ? window : { innerWidth: 0 };
  return { windowWidth };
};

/* Закрытие окна поиска */
export const handleCloseSearchModal = () => {
  removeNoScrollFromBody();
  closeSearchModal();
};