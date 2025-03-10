import Accordion from '@/components/elements/Accordion/Accordion';
import { menuItemVariants } from '@/lib/constants/animations-variants';
import { IMenuListItemProps } from '@/types/modules';
import { motion } from 'framer-motion';

const MenuListItem = ({
  children, name, showList, handle, type = '',
}: IMenuListItemProps) => (

  <motion.li
    className={type === 'accordion' ? 'accordion__item' : 'menu-list__item'}
    initial={'initial'} animate={'animate'} variants={menuItemVariants(1)}
  /* initial={{ opacity: 0, x: '-3em' }}
  animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }} */
  >

    {type === 'accordion' ? (
      <Accordion
        title={name}
        titleClass={type === 'accordion' ? 'accordion__item__title' : 'item__btn'}
      >
        <ul
          className='accordion__item__list'
        >
          {children}
        </ul>
      </Accordion>
    ) : (
      <>
        <button
          onMouseEnter={handle}
          className='item__btn'
          style={{ color: showList ? 'var(--orange)' : 'var(--foreground)' }}
        >
          {name}
        </button>
        <span className='item__line' style={{ transform: showList ? 'scaleX(1)' : 'scaleX(0)' }} />
        <>
          {showList && (
            <ul className='accordion'>
              {children}
            </ul>
          )}
        </>
      </>
    )
    }
  </motion.li>
);

export default MenuListItem;