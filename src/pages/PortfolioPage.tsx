import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import ProjectCard from '../components/ui/ProjectCard';

const PortfolioPage = () => {
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'websites', label: 'Websites' },
    { id: 'seo', label: 'SEO' },
    { id: 'ads', label: 'PPC & Ads' },
    { id: 'social', label: 'Social Media' }
  ];
  
  const projects = {
    websites: [
      {
        title: 'E-commerce Fashion Store',
        description: 'Modern e-commerce website with advanced filtering, wishlist, and seamless checkout experience.',
        imageSrc: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Website Design'
      },
      {
        title: 'Real Estate Platform',
        description: 'Property listing website with virtual tours and advanced search functionality.',
        imageSrc: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Website Design'
      },
      {
        title: 'Restaurant Booking System',
        description: 'Online reservation system with real-time availability and menu management.',
        imageSrc: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Website Design'
      }
    ],
    seo: [
      {
        title: 'Law Firm SEO Campaign',
        description: 'Comprehensive SEO strategy that increased organic traffic by 200% in 6 months.',
        imageSrc: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'SEO'
      },
      {
        title: 'Healthcare Provider Optimization',
        description: 'Local SEO campaign that doubled patient inquiries from organic search.',
        imageSrc: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'SEO'
      },
      {
        title: 'E-learning Platform SEO',
        description: 'Technical SEO improvements that increased course enrollments by 150%.',
        imageSrc: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'SEO'
      }
    ],
    ads: [
      {
        title: 'Retail Chain PPC Campaign',
        description: 'Google Ads campaign that achieved 300% ROAS for multiple store locations.',
        imageSrc: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'PPC & Ads'
      },
      {
        title: 'SaaS Product Launch',
        description: 'Multi-channel advertising campaign that exceeded lead generation goals by 180%.',
        imageSrc: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'PPC & Ads'
      },
      {
        title: 'Event Ticket Sales',
        description: 'Facebook Ads campaign that sold out multiple venues within 48 hours.',
        imageSrc: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'PPC & Ads'
      }
    ],
    social: [
      {
        title: 'Beauty Brand Social Strategy',
        description: 'Instagram campaign that grew following by 200K and increased sales by 150%.',
        imageSrc: 'https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Social Media'
      },
      {
        title: 'Restaurant Chain Social Media',
        description: 'Content strategy that increased engagement by 400% across platforms.',
        imageSrc: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Social Media'
      },
      {
        title: 'Fitness Influencer Campaign',
        description: 'Influencer marketing program that generated 50K app downloads.',
        imageSrc: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Social Media'
      }
    ]
  };
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return Object.values(projects).flat();
    }
    return projects[activeCategory as keyof typeof projects] || [];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <Section className="pt-32 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-4">Our Portfolio</h1>
            <p className="text-muted-foreground text-lg">
              Explore our work across different digital marketing disciplines and see how 
              we've helped businesses achieve exceptional results.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-background hover:bg-secondary-foreground/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Projects Grid */}
      <Section className="bg-background pt-8">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getFilteredProjects().map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  category={project.category}
                  link={`#`}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>
      
      {/* Case Studies Section */}
      <Section className="bg-accent text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-white mb-4">Featured Case Studies</h2>
            <p className="text-white/90 text-lg">
              Dive deep into some of our most successful projects and learn how we achieved 
              exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Modern Architects Studio',
                description: 'Complete digital transformation with 200% increase in organic leads.',
                link: '/portfolio/modern-architects',
                image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                title: 'Dental Care Clinic',
                description: 'Comprehensive marketing campaign that doubled patient acquisitions.',
                link: '/portfolio/dental-care',
                image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                title: 'Luxury Interior Design',
                description: 'Brand overhaul that established premium market positioning.',
                link: '/portfolio/luxury-interiors',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ].map((study, index) => (
              <Link
                key={index}
                to={study.link}
                className="block group relative rounded-lg overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/70" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-white/80 text-sm">{study.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can help your business achieve similar results with our 
              proven digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-accent btn-lg inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-accent text-white  rounded-full shadow-md transition-all duration-300  hover:shadow-lg">
                Schedule a Consultation
              </Link>
              {/* <Link to="/calculator" className="btn-secondary btn-lg">
                Try Our Calculator
              </Link> */}
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default PortfolioPage;