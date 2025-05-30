import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import CtaSection from '../components/home/CtaSection';
import HomePortfolioPage from './HomePortfolioPage';
import OurProcess from '../components/home/OurProcess';
import TechStack from '../components/home/TechStack';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <ServicesSection />
      <HomePortfolioPage />
      <OurProcess />
      <TechStack />
      <FeaturedProjects />
      <TestimonialsSection />
      <CtaSection />
    </motion.div>
  );
};

export default HomePage;