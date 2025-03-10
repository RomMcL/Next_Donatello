import { useEffect, useState } from 'react';

import { useUnit } from 'effector-react';
import { $menuIsOpen } from '@/effector-context/modals';

import { useLang } from '@/custom-hooks/useLang';
import { useMediaQuery } from '@/custom-hooks/useMediaQuery';

import MenuListItem from './MenuListItem';
import ListCatalog from './ListCatalog';
import ListForDonaters from './ListForDonaters';
import ListContacts from './ListContacts';

const MenuItems = () => {
  const menuIsOpen = useUnit($menuIsOpen);
  const { lang, translations } = useLang();
  const isMedia800 = useMediaQuery(800);
  const isMedia450 = useMediaQuery(450);

  const [showCatalogList, setShowCatalogList] = useState(false);
  const [showDonatersList, setShowDonatersList] = useState(false);
  const [showContactsList, setShowContactsList] = useState(false);

  const handleShowCatalogList = () => {
    setShowCatalogList(true);
    setShowDonatersList(false);
    setShowContactsList(false);
  };
  const handleShowDonatersList = () => {
    setShowCatalogList(false);
    setShowDonatersList(true);
    setShowContactsList(false);
  };
  const handleShowContactsList = () => {
    setShowCatalogList(false);
    setShowDonatersList(false);
    setShowContactsList(true);
  };

  useEffect(() => () => {
    setShowCatalogList(false);
    setShowDonatersList(false);
    setShowContactsList(false);
  }, [menuIsOpen]);

  return (
    <ul className={`menu-list ${menuIsOpen ? 'open' : ''}`}>
      {!isMedia800 && (
        <MenuListItem
          name={translations[lang].menu.catalog.catalog}
          showList={showCatalogList}
          handle={handleShowCatalogList}
        >
          <ListCatalog type={'accordion'} />
        </MenuListItem>
      )}

      <MenuListItem
        name={translations[lang].menu.donaters.donaters}
        showList={showDonatersList}
        handle={handleShowDonatersList}
        type={isMedia450 ? 'accordion' : ''}
      >
        <ListForDonaters />
      </MenuListItem>

      <MenuListItem
        name={translations[lang].menu.contacts.contacts}
        showList={showContactsList}
        handle={handleShowContactsList}
        type={isMedia450 ? 'accordion' : ''}
      >
        <ListContacts />
      </MenuListItem>
    </ul >
  );
};

export default MenuItems;