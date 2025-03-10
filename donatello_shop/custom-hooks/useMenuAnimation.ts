import { useEffect, useState } from 'react';

export const useMenuAnimation = (zIndex: number, popupIsOpen: boolean) => {
  const [popupZIndex, setPopupZIndex] = useState<string | number>(0);

  useEffect(() => {
    if (popupIsOpen) {
      setPopupZIndex(zIndex);
      return;
    }

    const timerId = setTimeout(() => setPopupZIndex('-1'), 400);

    return () => clearTimeout(timerId);
  }, [popupIsOpen, zIndex]);

  return popupZIndex;
};