import { withClickOutside } from '@/components/hocs/withClickOutside';
import { useLang } from '@/custom-hooks/useLang';
import { IWrappedComponentProps } from '@/types/hocs';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { forwardRef } from 'react';
import { popupVariants } from '@/lib/constants/animations-variants';

const CartPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(

  ({ open, setOpen }, ref) => {
    const { lang, translations } = useLang();

    const handleShowPopup = () => setOpen(true);
    const handleHidePopup = () => setOpen(false);

    return (
      <div className='cart-popup' ref={ref}>
        <button className='cart' onClick={handleShowPopup} />
        <AnimatePresence>
          {open && (
            <motion.div className='cart-popup__wrapper' onMouseLeave={handleHidePopup}
              initial={'initial'} animate={'animate'} exit={'initial'} variants={popupVariants}
            >
              <button className='cart-popup__close' onClick={handleHidePopup} />
              <h3 className='cart-popup__title'>{translations[lang].cart.cart}</h3>
              <ul className='cart-popup__cart-list'>
                <li className='cart-popup__cart-list__empty-cart' />
              </ul>
              <div className='cart-popup__footer'>
                <div className='cart-popup__footer__info'>
                  <span>{translations[lang].cart.order_price}:</span>
                  <span>0 ₽</span>
                </div>
                <Link className='cart-popup__footer__link' href='/order'>
                  {translations[lang].cart.order}
                </Link>
                <Link className='cart-popup__footer__link' href='/cart'>
                  {translations[lang].cart.go_to_cart}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

CartPopup.displayName = 'CartPopup';

export default withClickOutside(CartPopup);