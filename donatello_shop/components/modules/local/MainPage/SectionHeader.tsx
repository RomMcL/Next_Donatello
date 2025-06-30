'use client';

import Link from 'next/link';

import { useLang } from '@/custom-hooks/useLang';

import styles from '@/styles/page-main/section-header.module.css';

const SectionHeader = ({ sectionName, sectionLink }: { sectionName: string, sectionLink: string }) => {
  const { lang, translations } = useLang();

  return (
    <div className={styles.section_header}>
      <h2 className={styles.section_title}>
        {sectionName}
      </h2>

      <Link href={sectionLink} className={styles.section_link}>
        {translations[lang].main_page.section.all}
      </Link>

    </div>
  );
};

export default SectionHeader;