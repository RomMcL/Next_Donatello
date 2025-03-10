'use client';
import { useUnit } from 'effector-react';
import { $lang } from '@/effector-context/lang';
import translationsJson from '@/public/translations/translations.json';

// Используя состояние $lang возвращает слово из translationsJson в том или ином переводе
export const useLang = () => {
  const lang = useUnit($lang);
  const translations = translationsJson;

  return { lang, translations };
};