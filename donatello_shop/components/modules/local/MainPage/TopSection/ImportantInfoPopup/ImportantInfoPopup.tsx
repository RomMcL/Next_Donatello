import { withClickOutside } from '@/components/hocs/withClickOutside';
import { useLang } from '@/custom-hooks/useLang';
import { IWrappedComponentProps } from '@/types/hocs';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef } from 'react';
import { popupVariants } from '@/lib/constants/animations-variants';
import styles from '@/styles/page-main/top-section.module.css';

const ImportantInfoPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(

  ({ open, setOpen }, ref) => {
    const { lang, translations } = useLang();

    const handleShowPopup = () => setOpen(true);
    const handleHidePopup = () => setOpen(false);

    return (
      <div className={styles.info_popup} ref={ref}>
        <button
          className={styles.important_info_btn}
          style={{ color: `${open ? 'var(--orange)' : 'var(--foreground)'}` }}
          onMouseEnter={handleShowPopup} >
          {translations[lang].main_page.important_info.btn_text}
        </button>
        <AnimatePresence>
          {open && (
            <motion.div className={styles.info_popup__wrapper} onMouseLeave={handleHidePopup}
              initial={'initial'} animate={'animate'} exit={'initial'} variants={popupVariants}
            >
              <h3 className={styles.info_popup__title}>
                {translations[lang].main_page.important_info.title}
              </h3>
              <p className={styles.info_popup__text}>
                {translations[lang].main_page.important_info.text}
              </p>
              <button className={styles.info_popup__close} onClick={handleHidePopup} >
                {translations[lang].main_page.important_info.close}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

ImportantInfoPopup.displayName = 'ImportantInfoPopup';

export default withClickOutside(ImportantInfoPopup);