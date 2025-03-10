import { useLang } from '@/custom-hooks/useLang';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { menuItemVariants } from '@/lib/constants/animations-variants';

const ListForDonaters = () => {
  const { lang, translations } = useLang();

  const forDonatersItems = [
    {
      id: 'about',
      name: translations[lang].menu.donaters.about,
      href: '/about',
    },
    {
      id: 'blog',
      name: translations[lang].menu.donaters.blog,
      href: '/about/',
    },
    {
      id: 'shipping',
      name: translations[lang].menu.donaters.shipping,
      href: '/about',
    },
    {
      id: 'returns',
      name: translations[lang].menu.donaters.returns,
      href: '/about'
    },
  ];

  return (
    <AnimatePresence>
      {forDonatersItems.map(({ id, name, href }, index) => (
        <motion.li key={id} className='accordion__item'
          initial={'initial'} animate={'animate'} variants={menuItemVariants(index)}
        >
          <Link href={href} className='accordion__item__title'>
            {name}
          </Link>
        </motion.li>
      ))}
    </AnimatePresence>
  );
};

export default ListForDonaters;