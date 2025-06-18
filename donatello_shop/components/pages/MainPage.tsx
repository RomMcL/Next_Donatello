import TopSection from '../modules/local/MainPage/TopSection/TopSection';
import styles from '@/styles/page-main/index.module.css';

const MainPage = () => {
  console.log('Главная страница');

  return (
    <main className={`master_container ${styles.main_page_container}`} >
      <TopSection />
    </main >
  );
};

export default MainPage;