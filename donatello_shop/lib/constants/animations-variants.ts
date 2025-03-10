
/* Для меню-каталога в мобильном режиме */
export const asideVariants = {
  initial: {
    width: 0,
    opacity: 0
  },
  animate: {
    width: '100%',
    opacity: 1
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: { delay: 0.3, duration: 0.3 },
  }
};

export const sideVariants = {
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const itemSideVariants = {
  initial: { opacity: 0, },
  animate: { opacity: 1, },
};

export const menuItemVariants = (param: number) => (
  {
    initial: { opacity: 0, x: '-3em' },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 * param } },
  }
);

/* Для попапов */
export const popupVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

