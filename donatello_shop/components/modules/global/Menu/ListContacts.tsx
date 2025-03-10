import { useLang } from '@/custom-hooks/useLang';
import { menuItemVariants } from '@/lib/constants/animations-variants';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const ListContacts = () => {
  const { lang, translations } = useLang();

  const contactsItems = [
    {
      id: 'email',
      name: 'Email',
      href: 'mailto:RomMcLWeb@yandex.ru',
    },
    {
      id: 'tg',
      name: translations[lang].menu.contacts.tg,
      href: 'https://t.me/RomMcL',
    },
    {
      id: 'vk',
      name: translations[lang].menu.contacts.vk,
      href: 'https://vk.com/romanmcl',
    },
    {
      id: 'github',
      name: 'GitHub',
      href: 'https://github.com/RomMcL'
    },
  ];

  return (
    <AnimatePresence>
      {contactsItems.map(({ id, name, href }, index) => (
        <motion.li key={id} className='accordion__item'
          initial={'initial'} animate={'animate'} variants={menuItemVariants(index)}
        >
          <Link href={href} target='_blank' className='accordion__item__title'>
            {name}
          </Link>
        </motion.li>
      ))}
    </AnimatePresence>
  );
};

export default ListContacts;