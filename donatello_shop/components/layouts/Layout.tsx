'use client';
import { useUnit } from 'effector-react';
import { $searchModal } from '@/effector-context/modals';

import { AnimatePresence, motion } from 'framer-motion';

import { useMediaQuery } from '@/custom-hooks/useMediaQuery';

import Header from '../modules/global/Header/Header';
import MobileNavbar from '../modules/global/MobileNavbar/MobileNavbar';
import Footer from '../modules/global/Footer/Footer';
import SearchModal from '../modules/global/SearchModal/SearchModal';
import { handleCloseSearchModal } from '@/lib/utils/common';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia800 = useMediaQuery(800);
  const searchModal = useUnit($searchModal);
  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <Footer />
      <AnimatePresence>
        {searchModal && (
          <motion.div
            initial={{ opacity: 0, zIndex: 102 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SearchModal />
          </motion.div>
        )}
      </AnimatePresence>
      <div onClick={handleCloseSearchModal}
        className={`search-overlay ${searchModal ? 'overlay-active' : ''}`}
      />
    </>
  );
};

export default Layout;