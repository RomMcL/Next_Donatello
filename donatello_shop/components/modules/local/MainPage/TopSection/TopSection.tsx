'use client';
import { useLang } from '@/custom-hooks/useLang';

import NewCollectionSwiper from './NewCollectionSwiper/NewCollectionSwiper';

import styles from '@/styles/page-main/top-section.module.css';
import ImportantInfoPopup from './ImportantInfoPopup/ImportantInfoPopup';

const TopSection = () => {
  const { lang, translations } = useLang();

  return (
    <section className={styles.top_section}>
      <h1 className={styles.hiden_title}>
        {translations[lang].main_page.hiden_title}
      </h1>
      <div className={styles.text_block}>
        <ImportantInfoPopup />
        <div className={styles.site_name}>
          <h2 className={styles.title}>
            {translations[lang].siteName}
          </h2>
          <span className={styles.subtitle}>
            ({translations[lang].footer.project_type})
          </span>
        </div>
        <div className={styles.slogan}>
          <span>{translations[lang].main_page.slogan.string_1}</span>
          <span>{translations[lang].main_page.slogan.string_2}</span>
        </div>
        <h3 className={styles.subslogan}>
          [ {translations[lang].main_page.subslogan} ]
        </h3>
      </div>

      <NewCollectionSwiper />

    </section>
  );
};

export default TopSection;
