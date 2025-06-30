
import { useUnit } from 'effector-react';
import { $catalogMenuIsOpen, closeCatalogMenu } from '@/effector-context/modals';
import { useLang } from '@/custom-hooks/useLang';
import { useMediaQuery } from '@/custom-hooks/useMediaQuery';
import { useMenuAnimation } from '@/custom-hooks/useMenuAnimation';
import { asideVariants, itemSideVariants, sideVariants } from '@/lib/constants/animations-variants';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { removeNoScrollFromBody } from '@/lib/utils/common';
import ListCatalog from './ListCatalog';
import Header from '../Header/Header';

const CatalogMenu = () => {
  const catalogMenuIsOpen = useUnit($catalogMenuIsOpen);
  const { lang, translations } = useLang();
  const isMedia450 = useMediaQuery(450);
  const popupZIndex = useMenuAnimation(4, catalogMenuIsOpen);

  const handleCloseMenu = () => {
    removeNoScrollFromBody();
    closeCatalogMenu();
    // Убираем двойной скролл
    const menu = document.querySelector('.catalog-menu') as HTMLBodyElement;
    menu.style.setProperty('overflow-y', 'hidden');
    setTimeout(() => {
      menu.style.removeProperty('overflow-y');
    }, 500);
  };

  return (
    <div className='catalog-menu' style={{ zIndex: popupZIndex }}>
      <AnimatePresence>
        {catalogMenuIsOpen &&
          <motion.aside className='catalog-menu__aside'
            initial='initial' animate='animate' exit='exit' variants={asideVariants}
          >
            <Image
              className='catalog-menu__bg'
              src='/img/pig-menu.svg' width={300} height={600}
              alt='Menu Background'
            />
            <Header />
            <motion.div
              className='catalog-menu__inner'
              initial='initial' animate='animate' exit='initial'
              variants={sideVariants}
            >
              <motion.button className='catalog-menu__close' onClick={handleCloseMenu}
                initial='initial' animate='animate' exit='initial' variants={itemSideVariants} />
              <motion.h2 className='catalog-menu__title'
                initial='initial' animate='animate' exit='initial' variants={itemSideVariants}
              >
                {translations[lang].menu.catalog.catalog}
              </motion.h2>
              <motion.ul className='catalog-menu__list'
                initial='initial' animate='animate' exit='initial' variants={itemSideVariants}
              >
                <ListCatalog type={isMedia450 ? 'accordion' : ''} />
              </motion.ul>
            </motion.div>
          </motion.aside>
        }
      </AnimatePresence>
    </div>
  );
};

export default CatalogMenu;