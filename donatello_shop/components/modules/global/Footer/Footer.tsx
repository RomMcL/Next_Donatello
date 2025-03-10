/* 'use client'; */
import { useLang } from '@/custom-hooks/useLang';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/elements/Logo/Logo';

const Footer = () => {
  const { lang, translations } = useLang();
  return (
    <footer>
      <div className='master_container footer_container'>
        <div className='footer__copyright'>
          <Logo />
          <h4>
            &copy; {translations[lang].footer.copyright}
            {new Date().getFullYear() !== 2025 && <span> - {new Date().getFullYear()}</span>}
          </h4>
          <span>({translations[lang].footer.project_type})</span>
        </div>
        <div className='footer__info'>
          <Link href='/personal-data-policy'>{translations[lang].footer.personal_data_policy}</Link>
          <Link href='/privacy-policy'>{translations[lang].footer.privacy_policy}</Link>
          <Link href='/about-project'>{translations[lang].footer.about_project}</Link>
        </div>
        <div className='footer__contacts'>
          <div>
            <h4>{translations[lang].footer.personal_website}</h4>
            <div>
              <Link href="https://rommcl.ru" target="_blank">
                <Image src='/img/rommcl.png' alt="RomMcL" width={64} height={64} />
              </Link>
            </div>
          </div>
          <div>
            <h4>{translations[lang].footer.social_network}</h4>
            <div>
              <Link href="https://vk.com/romanmcl" target="_blank">
                <Image src='/img/vk.png' alt="logoVK" width={32} height={32} />
              </Link>
              <Link href="https://github.com/RomMcL" target="_blank">
                <Image src='/img/github.png' alt="logoGitHub" width={32} height={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;