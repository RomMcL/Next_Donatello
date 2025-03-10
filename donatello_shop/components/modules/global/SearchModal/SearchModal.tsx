import { useLang } from '@/custom-hooks/useLang';
import { handleCloseSearchModal } from '@/lib/utils/common';
import React from 'react';

const SearchModal = () => {
  const { lang, translations } = useLang();

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    e.target.classList.add('filled_in');
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    if (e.target.value) return;
    e.target.classList.remove('filled_in');
  };

  return (
    <div className='search-modal'>
      <button className='search-modal__close' onClick={handleCloseSearchModal} />
      <h3 className='search-modal__title'>
        {translations[lang].header.search.title}
      </h3>
      <div className='search-modal__top'>
        <label className='search-modal__label'>
          <input type='text' className='search-modal__input'
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <span className='search-modal__placeholder'>
            {translations[lang].header.search.placeholder}
          </span>
        </label>
      </div>
    </div>
  );
};

export default SearchModal;