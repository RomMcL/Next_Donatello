'use client';
import { useLang } from '@/custom-hooks/useLang';
import { openCatalogMenu, closeCatalogMenu, openMenu, closeMenu } from '@/effector-context/modals';
import { addOverflowHiddenToBody } from '@/lib/utils/common';
import Link from 'next/link';
import CatalogMenu from '../Menu/CatalogMenu';

const MobileNavbar = () => {
  const { lang, translations } = useLang();

  const handleOpenMenu = () => {
    addOverflowHiddenToBody('0');
    openMenu();
    closeCatalogMenu();
  };

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenToBody('0');
    openCatalogMenu();
    closeMenu();
  };

  return (
    <>
      <CatalogMenu />
      <div className='mobile-navbar'>
        <Link href='/' className='mobile-navbar__btn'>
          {translations[lang].reused.main}
        </Link>
        <button className='mobile-navbar__btn' onClick={handleOpenCatalogMenu}>
          {translations[lang].menu.catalog.catalog}
        </button>
        <Link href='/favorites' className='mobile-navbar__btn'>
          {translations[lang].reused.favorites}
        </Link>
        <Link href='/cart' className='mobile-navbar__btn'>
          {translations[lang].cart.cart}
        </Link>
        <button className='mobile-navbar__btn' onClick={handleOpenMenu}>
          {translations[lang].reused.more}
        </button>
      </div>
    </>
  );
};

export default MobileNavbar;