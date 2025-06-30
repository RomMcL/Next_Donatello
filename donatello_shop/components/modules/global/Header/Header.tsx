'use client';
import { openMenu, openSearchModal } from '@/effector-context/modals';

import { useLang } from '@/custom-hooks/useLang';

import { addNoScrollToBody } from '@/lib/utils/common';

import Logo from '@/components/elements/Logo/Logo';
import CartPopup from './CartPopup/CartPopup';
import Menu from '../Menu/Menu';
import Link from 'next/link';

const Header = () => {
  const { lang, translations } = useLang();

  const handleOpenMenu = () => {
    addNoScrollToBody('hidden');
    openMenu();
  };

  const handleOpenSearchModal = () => {
    addNoScrollToBody();
    openSearchModal();
  };

  return (
    <header>
      <div className='master_container header_container'>
        <button className='header_burger' onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <Logo />
        <ul className='header_links'>
          <li>
            <button className='search' onClick={handleOpenSearchModal} />
          </li>
          <li>
            <Link className='favor' href='/favorites' />
          </li>
          <li>
            <Link className='compare' href='/comparison' />
          </li>
          <li>
            <CartPopup />
          </li>
          <li>
            <Link className='profile' href='/profile' />
          </li>
        </ul>

      </div>
    </header >
  );
};

export default Header;