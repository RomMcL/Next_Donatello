import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useLang } from '@/custom-hooks/useLang';

import MenuListItem from './MenuListItem';
import Link from 'next/link';
import { menuItemVariants } from '@/lib/constants/animations-variants';

const ListCatalog = ({ type }: { type: string }) => {
  const { lang, translations } = useLang();

  const [showLifeList, setShowLifeList] = useState(false);
  const [showDevelopmentList, setShowDevelopmentList] = useState(false);
  const [showCatList, setShowCatList] = useState(false);
  const [showOtherList, setShowOtherList] = useState(false);

  const handleShowLifeList = () => {
    setShowLifeList(true);
    setShowDevelopmentList(false);
    setShowCatList(false);
    setShowOtherList(false);
  };
  const handleShowDevelopmentList = () => {
    setShowLifeList(false);
    setShowDevelopmentList(true);
    setShowCatList(false);
    setShowOtherList(false);
  };
  const handleShowCatList = () => {
    setShowLifeList(false);
    setShowDevelopmentList(false);
    setShowCatList(true);
    setShowOtherList(false);
  };
  const handleShowOtherList = () => {
    setShowLifeList(false);
    setShowDevelopmentList(false);
    setShowCatList(false);
    setShowOtherList(true);
  };

  const catalogItems = [
    {
      name: translations[lang].menu.catalog.life.life,
      nameID: 'life',
      items: [
        {
          id: 'food',
          text: translations[lang].menu.catalog.life.food,
          href: '/catalog/',
        },
        {
          id: 'drink',
          text: translations[lang].menu.catalog.life.drink,
          href: '/catalog/',
        },
        {
          id: 'health',
          text: translations[lang].menu.catalog.life.health,
          href: '/catalog/',
        },
        {
          id: 'relax',
          text: translations[lang].menu.catalog.life.relax,
          href: '/catalog/',
        },
      ],
      handler: handleShowLifeList,
      isActive: showLifeList,
    },
    {
      name: translations[lang].menu.catalog.development.development,
      nameID: 'development',
      items: [
        {
          id: 'study',
          text: translations[lang].menu.catalog.development.study,
          href: '/catalog/',
        },
        {
          id: 'hardware',
          text: translations[lang].menu.catalog.development.hardware,
          href: '/catalog/',
        },
        {
          id: 'dreams',
          text: translations[lang].menu.catalog.development.dreams,
          href: '/catalog/',
        },
      ],
      handler: handleShowDevelopmentList,
      isActive: showDevelopmentList,
    },
    {
      name: translations[lang].menu.catalog.cat.cat,
      nameID: 'cat',
      items: [
        {
          id: 'food',
          text: translations[lang].menu.catalog.cat['cat-food'],
          href: '/catalog/',
        },
        {
          id: 'toys',
          text: translations[lang].menu.catalog.cat['cat-toys'],
          href: '/catalog/',
        },
      ],
      handler: handleShowCatList,
      isActive: showCatList,
    },
    {
      name: translations[lang].menu.catalog.other.other,
      nameID: 'other',
      items: [
        {
          id: 'anecdote',
          text: translations[lang].menu.catalog.other.anecdote,
          href: '/catalog/',
        },
      ],
      handler: handleShowOtherList,
      isActive: showOtherList,
    },
  ];

  return (
    <>
      {catalogItems.map(({ nameID, name, items, handler, isActive }) => (
        <MenuListItem
          key={nameID}
          name={name}
          showList={isActive}
          handle={handler}
          type={type}
        >
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.li key={item.id} className='accordion__item__list__item'
                initial={'initial'} animate={'animate'} variants={menuItemVariants(index)}
              >
                <Link href={item.href} >
                  {item.text}
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </MenuListItem >
      ))}
    </>
  );
};

export default ListCatalog;
