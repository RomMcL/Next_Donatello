import { useUnit } from 'effector-react';
import { $menuIsOpen, closeMenu } from '@/effector-context/modals';
import { setLang } from '@/effector-context/lang';

import { useLang } from '@/custom-hooks/useLang';
import { useMediaQuery } from '@/custom-hooks/useMediaQuery';

import Image from 'next/image';
import Logo from '@/components/elements/Logo/Logo';
import MenuItems from './MenuItems';

import { AllowedLangs } from '@/lib/constants/lang';
import { removeOverflowHiddenFromBody } from '@/lib/utils/common';

const Menu = () => {
  const { lang, translations } = useLang();
  const menuIsOpen = useUnit($menuIsOpen);
  const isMedia800 = useMediaQuery(800);

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs);
    localStorage.setItem('lang', JSON.stringify(lang));
  };
  const handleSwitchLangToRu = () => handleSwitchLang('ru');
  const handleSwitchLangToEn = () => handleSwitchLang('en');

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody();
    closeMenu();
  };

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <div className='master_container menu_container'>
        <div className={`logo-menu ${menuIsOpen ? 'open' : ''}`}>
          {!isMedia800
            ? <h1>{translations[lang].header.menu_btn}</h1>
            : <h1>{translations[lang].reused.more}</h1>
          }
          <Logo />
        </div>
        <Image
          className={`img-menu ${menuIsOpen ? 'open' : ''}`}
          src='/img/pig-menu.svg' width={300} height={600}
          alt='Menu Background'
        />
        <button
          className={`close-btn ${menuIsOpen ? 'open' : ''}`}
          onClick={handleCloseMenu}
        />
        <div className={`lang-btns ${menuIsOpen ? 'open' : ''}`}>
          <button
            className={`lang-btn ${lang === 'ru' ? 'lang-active' : ''}`}
            onClick={handleSwitchLangToRu}
          >
            RU
          </button>
          <button
            className={`lang-btn ${lang === 'en' ? 'lang-active' : ''}`}
            onClick={handleSwitchLangToEn}
          >
            EN
          </button>
        </div>
        <MenuItems />
      </div>
    </nav>
  );
};

export default Menu;