import { useState } from 'react';

const useImagePreloader = () => {
  const [imgSpiner, setImgSpiner] = useState(true);

  const handleLoadingImageComplete = async (img: React.SyntheticEvent<HTMLImageElement, Event>) => {
    img.currentTarget.classList.remove('opacity-0');
    setImgSpiner(false);
  };

  return { handleLoadingImageComplete, imgSpiner };
};

export default useImagePreloader;
