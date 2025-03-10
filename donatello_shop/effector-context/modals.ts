import { createDomain } from 'effector';

const modals = createDomain();

/* Основное меню сайта */
export const openMenu = modals.createEvent();
export const closeMenu = modals.createEvent();

export const $menuIsOpen = modals
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false);

/* Меню каталога (из MobileNavbar) */
export const openCatalogMenu = modals.createEvent();
export const closeCatalogMenu = modals.createEvent();

export const $catalogMenuIsOpen = modals
  .createStore(false)
  .on(openCatalogMenu, () => true)
  .on(closeCatalogMenu, () => false);

/* Окно поиска "товаров" */
export const openSearchModal = modals.createEvent();
export const closeSearchModal = modals.createEvent();

export const $searchModal = modals
  .createStore(false)
  .on(openSearchModal, () => true)
  .on(closeSearchModal, () => false);