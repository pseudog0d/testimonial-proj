import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { LanguageProvider } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

const Layout = () => {
  const { theme } = useTheme();
  
  return (
    <LanguageProvider>
      <div className={`min-h-screen flex flex-col ${theme}`}>
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;