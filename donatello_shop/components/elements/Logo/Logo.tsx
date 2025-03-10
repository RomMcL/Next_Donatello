import { useLang } from '@/custom-hooks/useLang';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  const { lang, translations } = useLang();
  return (
    <>
      <Link className='logo' href='/'>
        <Image src='/img/logo.svg' alt='Donatello Logo' width={64} height={64} />
        <h1>{translations[lang].siteName}</h1>
      </Link>
    </>
  );
};

export default Logo;
