// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Mock Section component
// const Section = ({ children, className = "" }) => (
//   <section className={`py-16 ${className}`}>
//     {children}
//   </section>
// );

// // Mock ProjectCard component
// const ProjectCard = ({ title, description, imageSrc, category, link }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.3 }}
//     className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//   >
//     <div className="aspect-video overflow-hidden">
//       <img 
//         src={imageSrc} 
//         alt={title}
//         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//       />
//     </div>
//     <div className="p-6">
//       <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{category}</div>
//       <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
//       <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
//       <a 
//         href={link}
//         className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
//       >
//         View Project →
//       </a>
//     </div>
//   </motion.div>
// );

// const HomePortfolioPage = () => {
//   const categories = [
//     { 
//       id: 'all', 
//       label: 'All',
//       subcategories: []
//     },
//     { 
//       id: 'architecture', 
//       label: 'Architecture',
//       subcategories: [
//         { id: 'website', label: 'Website' },
//         { id: 'seo', label: 'SEO' },
//         { id: 'meta-ads', label: 'Meta Ads' },
//         { id: 'google-ads', label: 'Google Ads' },
//         { id: 'social-media', label: 'Social Media Marketing' },
//         { id: 'ui-ux', label: 'UI/UX' },
//       ]
//     },
//     { 
//       id: 'healthcare', 
//       label: 'Healthcare',
//       subcategories: [
//         { id: 'website', label: 'Website' },
//         { id: 'seo', label: 'SEO' },
//         { id: 'meta-ads', label: 'Meta Ads' },
//         { id: 'google-ads', label: 'Google Ads' },
//         { id: 'social-media', label: 'Social Media Marketing' },
//         { id: 'ui-ux', label: 'UI/UX' },
//       ]
//     },
//     { 
//       id: 'interior', 
//       label: 'Interior Design',
//       subcategories: [
//         { id: 'website', label: 'Website' },
//         { id: 'seo', label: 'SEO' },
//         { id: 'meta-ads', label: 'Meta Ads' },
//         { id: 'google-ads', label: 'Google Ads' },
//         { id: 'social-media', label: 'Social Media Marketing' },
//         { id: 'ui-ux', label: 'UI/UX' },
//       ]
//     },
//     { 
//       id: 'tech', 
//       label: 'Technology',
//       subcategories: [
//         { id: 'website', label: 'Website' },
//         { id: 'seo', label: 'SEO' },
//         { id: 'meta-ads', label: 'Meta Ads' },
//         { id: 'google-ads', label: 'Google Ads' },
//         { id: 'social-media', label: 'Social Media Marketing' },
//         { id: 'ui-ux', label: 'UI/UX' },
//       ]
//     },
//     { 
//       id: 'ecommerce', 
//       label: 'E-commerce',
//       subcategories: [
//         { id: 'website', label: 'Website' },
//         { id: 'seo', label: 'SEO' },
//         { id: 'meta-ads', label: 'Meta Ads' },
//         { id: 'google-ads', label: 'Google Ads' },
//         { id: 'social-media', label: 'Social Media Marketing' },
//         { id: 'ui-ux', label: 'UI/UX' },
//       ]
//     }
//   ];
  
//   const projects = [
//     // Architecture Projects
//     {
//       id: 1,
//       title: 'Modern Architects Studio',
//       description: 'Complete digital transformation with a responsive website and SEO strategy that increased organic leads by 200%.',
//       imageSrc: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'architecture',
//       subcategory: 'website',
//       link: '/portfolio/modern-architects'
//     },
//     {
//       id: 6,
//       title: 'Urban Architecture Firm',
//       description: 'Website redesign and local SEO campaign that resulted in a 35% increase in high-value project inquiries.',
//       imageSrc: 'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'architecture',
//       subcategory: 'seo',
//       link: '/portfolio/urban-architecture'
//     },
//     {
//       id: 10,
//       title: 'Green Building Consultants',
//       description: 'Sustainable architecture firm\'s digital presence boosted with eco-focused content marketing and green building SEO.',
//       imageSrc: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'architecture',
//       subcategory: 'meta-ads',
//       link: '/portfolio/green-building'
//     },
//     {
//       id: 11,
//       title: 'City Planning Associates',
//       description: 'Urban planning firm\'s website and thought leadership content increased municipal contract inquiries by 180%.',
//       imageSrc: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'architecture',
//       subcategory: 'google-ads',
//       link: '/portfolio/city-planning'
//     },
//     {
//       id: 21,
//       title: 'Heritage Architecture Studio',
//       description: 'Traditional architecture firm\'s social media campaign showcased restoration projects, increasing heritage project leads by 120%.',
//       imageSrc: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'architecture',
//       subcategory: 'social-media',
//       link: '/portfolio/heritage-architecture'
//     },
//     {
//       id: 22,
//       title: 'Modern Space Architects',
//       description: 'UI/UX redesign for architecture portfolio platform improved client engagement by 300% and project inquiries by 150%.',
//       imageSrc: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'architecture',
//       subcategory: 'ui-ux',
//       link: '/portfolio/modern-space'
//     },

//     // Healthcare Projects
//     {
//       id: 2,
//       title: 'Dental Care Clinic',
//       description: 'Comprehensive digital marketing campaign with PPC ads and social media that doubled monthly patient acquisitions.',
//       imageSrc: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'healthcare',
//       subcategory: 'website',
//       link: '/portfolio/dental-care'
//     },
//     {
//       id: 5,
//       title: 'Medical Specialists Group',
//       description: 'SEO and content marketing campaign that increased organic traffic by 150% and new patient inquiries by 75%.',
//       imageSrc: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'healthcare',
//       subcategory: 'seo',
//       link: '/portfolio/medical-specialists'
//     },
//     {
//       id: 12,
//       title: 'Metropolitan Hospital System',
//       description: 'Hospital network\'s digital transformation improved patient engagement and online appointment bookings by 300%.',
//       imageSrc: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'healthcare',
//       subcategory: 'meta-ads',
//       link: '/portfolio/metro-hospital'
//     },
//     {
//       id: 13,
//       title: 'Wellness Retreat Center',
//       description: 'Holistic wellness center\'s social media and content strategy increased retreat bookings by 250%.',
//       imageSrc: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'healthcare',
//       subcategory: 'google-ads',
//       link: '/portfolio/wellness-retreat'
//     },
//     {
//       id: 23,
//       title: 'Family Practice Network',
//       description: 'Multi-location family practice social media strategy increased new patient registrations by 180% across all locations.',
//       imageSrc: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'healthcare',
//       subcategory: 'social-media',
//       link: '/portfolio/family-practice'
//     },
//     {
//       id: 24,
//       title: 'MedCare Patient Portal',
//       description: 'Healthcare platform UI/UX redesign improved patient satisfaction scores by 40% and reduced support tickets by 60%.',
//       imageSrc: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'healthcare',
//       subcategory: 'ui-ux',
//       link: '/portfolio/medcare-portal'
//     },

//     // Interior Design Projects
//     {
//       id: 3,
//       title: 'Luxury Interior Design',
//       description: 'Brand overhaul and website redesign that positioned the client as a premium service provider in their market.',
//       imageSrc: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'interior',
//       subcategory: 'website',
//       link: '/portfolio/luxury-interiors'
//     },
//     {
//       id: 9,
//       title: 'Handcrafted Furniture Shop',
//       description: 'E-commerce website and social media strategy that helped transition from local store to national online retailer.',
//       imageSrc: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'interior',
//       subcategory: 'seo',
//       link: '/portfolio/furniture-shop'
//     },
//     {
//       id: 14,
//       title: 'Heritage Home Designers',
//       description: 'Traditional interior design firm\'s digital marketing showcased craftsmanship, increasing high-end project leads by 160%.',
//       imageSrc: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'interior',
//       subcategory: 'meta-ads',
//       link: '/portfolio/heritage-homes'
//     },
//     {
//       id: 15,
//       title: 'Corporate Office Solutions',
//       description: 'Commercial interior design firm\'s B2B marketing strategy resulted in 200% increase in corporate contracts.',
//       imageSrc: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'interior',
//       subcategory: 'google-ads',
//       link: '/portfolio/office-solutions'
//     },
//     {
//       id: 25,
//       title: 'Modern Living Spaces',
//       description: 'Interior design studio\'s social media strategy featuring before/after transformations increased consultation bookings by 220%.',
//       imageSrc: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'interior',
//       subcategory: 'social-media',
//       link: '/portfolio/modern-living'
//     },
//     {
//       id: 26,
//       title: 'InteriorFlow Design Tool',
//       description: 'Interior design software UI/UX optimization increased user engagement by 85% and subscription conversions by 120%.',
//       imageSrc: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'interior',
//       subcategory: 'ui-ux',
//       link: '/portfolio/interiorflow'
//     },

//     // Technology Projects
//     {
//       id: 4,
//       title: 'Tech Startup Rebrand',
//       description: 'Complete rebranding and digital marketing strategy that helped secure Series A funding within 6 months.',
//       imageSrc: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'tech',
//       subcategory: 'website',
//       link: '/portfolio/tech-startup'
//     },
//     {
//       id: 8,
//       title: 'Smart Home Technology',
//       description: 'Digital marketing campaign that established the client as a thought leader in the smart home technology space.',
//       imageSrc: 'https://images.pexels.com/photos/7054761/pexels-photo-7054761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'tech',
//       subcategory: 'seo',
//       link: '/portfolio/smart-home'
//     },
//     {
//       id: 16,
//       title: 'CloudFlow SaaS Platform',
//       description: 'B2B SaaS platform\'s content marketing and SEO strategy increased qualified leads by 400% and trial conversions by 85%.',
//       imageSrc: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'tech',
//       subcategory: 'meta-ads',
//       link: '/portfolio/cloudflow-saas'
//     },
//     {
//       id: 17,
//       title: 'FitTracker Mobile App',
//       description: 'Fitness app\'s launch campaign and app store optimization resulted in 100K+ downloads in first 3 months.',
//       imageSrc: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'tech',
//       subcategory: 'google-ads',
//       link: '/portfolio/fittracker-app'
//     },
//     {
//       id: 27,
//       title: 'TechCorp Enterprise',
//       description: 'B2B technology company\'s LinkedIn and Twitter strategy generated 350% more qualified leads and 5 enterprise deals.',
//       imageSrc: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'tech',
//       subcategory: 'social-media',
//       link: '/portfolio/techcorp-enterprise'
//     },
//     {
//       id: 28,
//       title: 'DevTools Dashboard',
//       description: 'Developer tools platform UI/UX redesign reduced user onboarding time by 70% and increased feature adoption by 200%.',
//       imageSrc: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'tech',
//       subcategory: 'ui-ux',
//       link: '/portfolio/devtools-dashboard'
//     },

//     // E-commerce Projects
//     {
//       id: 7,
//       title: 'E-commerce Fashion Store',
//       description: 'Full e-commerce solution with SEO and PPC strategy that increased online sales by 220% in the first year.',
//       imageSrc: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'ecommerce',
//       subcategory: 'website',
//       link: '/portfolio/fashion-store'
//     },
//     {
//       id: 18,
//       title: 'TechGear Electronics',
//       description: 'Electronics retailer\'s omnichannel marketing strategy increased online revenue by 350% and improved customer retention.',
//       imageSrc: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'ecommerce',
//       subcategory: 'seo',
//       link: '/portfolio/techgear-electronics'
//     },
//     {
//       id: 19,
//       title: 'Garden Paradise Online',
//       description: 'Home and garden e-commerce site\'s seasonal marketing campaigns boosted sales by 280% during peak seasons.',
//       imageSrc: 'https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'ecommerce',
//       subcategory: 'meta-ads',
//       link: '/portfolio/garden-paradise'
//     },
//     {
//       id: 20,
//       title: 'Local Artisan Marketplace',
//       description: 'Multi-vendor marketplace platform\'s launch strategy onboarded 500+ sellers and achieved $2M+ GMV in year one.',
//       imageSrc: 'https://images.pexels.com/photos/5625108/pexels-photo-5625108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'ecommerce',
//       subcategory: 'google-ads',
//       link: '/portfolio/artisan-marketplace'
//     },
//     {
//       id: 29,
//       title: 'SportStore Online',
//       description: 'Sports equipment retailer\'s Instagram and TikTok campaigns increased brand awareness by 400% and sales by 180%.',
//       imageSrc: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'ecommerce',
//       subcategory: 'social-media',
//       link: '/portfolio/sportstore'
//     },
//     {
//       id: 30,
//       title: 'ShopEasy Mobile App',
//       description: 'E-commerce mobile app UI/UX redesign increased conversion rates by 95% and customer satisfaction by 85%.',
//       imageSrc: 'https://images.pexels.com/photos/4968634/pexels-photo-4968634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       category: 'ecommerce',
//       subcategory: 'ui-ux',
//       link: '/portfolio/shopeasy-app'
//     }
//   ];
  
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [activeSubcategory, setActiveSubcategory] = useState('');
  
//   const currentCategory = categories.find(cat => cat.id === activeCategory);
//   const hasSubcategories = currentCategory && currentCategory.subcategories.length > 0;
  
//   const filteredProjects = (() => {
//     let filtered;
    
//     if (activeCategory === 'all') {
//       filtered = projects;
//     } else {
//       filtered = projects.filter(project => project.category === activeCategory);
      
//       if (activeSubcategory) {
//         filtered = filtered.filter(project => project.subcategory === activeSubcategory);
//       }
//     }
    
//     // Limit to 9 projects for display
//     return filtered.slice(0, 9);
//   })();

//   const handleCategoryChange = (categoryId) => {
//     setActiveCategory(categoryId);
//     setActiveSubcategory(''); 
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//       {/* Hero Section */}
//       <Section className="pt-32 bg-gray-100 dark:bg-gray-900">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Portfolio</h1>
//             <p className="text-gray-600 dark:text-gray-300 text-lg">
//               Explore our recent projects and see how we've helped businesses across various industries 
//               achieve exceptional results through tailored digital marketing strategies.
//             </p>
//           </div>
          
//           {/* Main Category Filter */}
//           <div className="flex flex-wrap justify-center gap-2 mb-8">
//             {categories.map(category => (
//               <button
//                 key={category.id}
//                 onClick={() => handleCategoryChange(category.id)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                   activeCategory === category.id
//                     ? 'bg-blue-600 dark:bg-blue-500 text-white'
//                     : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
//                 }`}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </div>

//           {/* Subcategory Filter */}
//           <AnimatePresence>
//             {hasSubcategories && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 <div className="flex flex-wrap justify-center gap-2 mb-16">
//                   <button
//                     onClick={() => setActiveSubcategory('')}
//                     className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
//                       !activeSubcategory
//                         ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
//                         : 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-600'
//                     }`}
//                   >
//                     All {currentCategory.label}
//                   </button>
//                   {currentCategory.subcategories.map(subcategory => (
//                     <button
//                       key={subcategory.id}
//                       onClick={() => setActiveSubcategory(subcategory.id)}
//                       className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
//                         activeSubcategory === subcategory.id
//                           ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
//                           : 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-600'
//                       }`}
//                     >
//                       {subcategory.label}
//                     </button>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </Section>
      
//       {/* Projects Grid */}
//       <Section className="bg-white dark:bg-gray-900 pt-8">
//         <div className="container mx-auto px-4">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`${activeCategory}-${activeSubcategory}`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {filteredProjects.length > 0 ? (
//                 filteredProjects.map(project => (
//                   <ProjectCard
//                     key={project.id}
//                     title={project.title}
//                     description={project.description}
//                     imageSrc={project.imageSrc}
//                     category={categories.find(c => c.id === project.category)?.label || ''}
//                     link={project.link}
//                   />
//                 ))
//               ) : (
//                 <div className="col-span-3 text-center py-12">
//                   <p className="text-gray-500 dark:text-gray-400 text-lg">
//                     No projects found in this category. Please try another category.
//                   </p>
//                 </div>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </Section>
      
//       {/* CTA Section */}
//       <Section className="bg-blue-600 dark:bg-blue-700 text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
//             <p className="text-blue-100 dark:text-blue-200 text-lg mb-8">
//               Contact us today to discuss how we can help your business achieve similar results 
//               with our tailored digital marketing strategies.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a 
//                 href="/contact" 
//                 className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
//               >
//                 Schedule a Consultation
//               </a>
//             </div>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// };

// export default HomePortfolioPage;


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dental1 from '../assets/Dental_Imgs/dental1.png';
import dental2 from '../assets/Dental_Imgs/dental2.png';
import dental3 from '../assets/Dental_Imgs/dental3.png';
import dental4 from '../assets/Dental_Imgs/All_About_Dental.png'
import dental5 from '../assets/Dental_Imgs/Aspendale_Gardens_Dental_Care.png'
import dental6 from '../assets/Dental_Imgs/Complete_Family_Dental.png'
import architecture1 from '../assets/Architecture&Interior/6.png';
import architecture2 from '../assets/Architecture&Interior/7.png';
import architecture3 from '../assets/Architecture&Interior/8.png';
import architecture4 from '../assets/Architecture&Interior/9.png';
import architecture5 from '../assets/Architecture&Interior/10.png';
import architecture6 from '../assets/Architecture&Interior/11.png';
import architecture7 from '../assets/Architecture&Interior/1.png';
import architecture8 from '../assets/Architecture&Interior/2.png';
import architecture9 from '../assets/Architecture&Interior/3.png';

import others1 from '../assets/others/12-Resolve-website-1.jpg';
import others2 from '../assets/others/13-Vatika-FC-Design.jpg';
import others3 from '../assets/others/16-Two-Brother-Bar-Design.jpg';
import others4 from '../assets/others/Screenshot 2023-06-26 113958.png';
import others5 from '../assets/others/Screenshot 2023-06-26 115915.png';
import others6 from '../assets/others/Screenshot 2023-07-18 105024.png';
import others7 from '../assets/others/Screenshot 2023-07-18 111836.png';
import others8 from '../assets/others/Screenshot 2023-07-18 114036.png';
import others9 from '../assets/others/Screenshot 2023-07-18 115006.png';

// Mock Section component
const Section = ({ children, className = "" }) => (
  <section className={`py-16 ${className}`}>
    {children}
  </section>
);

// Mock ProjectCard component
const ProjectCard = ({ title, description, imageSrc, category, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="aspect-video overflow-hidden">
      <img 
        src={imageSrc} 
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{category}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <a 
        href={link}
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
      >
        View Project →
      </a>
    </div>
  </motion.div>
);

const HomePortfolioPage = () => {
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'architecture&interior', label: 'Architecture&Interior' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'others', label: 'Others' },
    // { id: 'tech', label: 'Technology' },
    // { id: 'ecommerce', label: 'E-commerce' }
  ];
  
  const projects = [
    // Architecture Projects
    {
      id: 1,
      title: 'MySpace Architects',
      description: 'Complete digital transformation with a responsive website and SEO strategy that increased organic leads by 200%.',
      imageSrc: architecture1,
      category: 'architecture&interior',
      link: 'https://www.myspacearchitects.com/'
    },
    {
      id: 6,
      title: 'iDesign Market',
      description: 'Website redesign and local SEO campaign that resulted in a 35% increase in high-value project inquiries.',
      imageSrc: architecture2,
      category: 'architecture&interior',
      link: 'https://www.idesign.market/'
    },
    {
      id: 10,
      title: 'Mavis Execution Pvt. Ltd.',
      description: 'Sustainable architecture firm\'s digital presence boosted with eco-focused content marketing and green building SEO.',
      imageSrc: architecture3,
      category: 'architecture&interior',
      link: 'https://mavis.co.in/'
    },
    {
      id: 11,
      title: 'And Studio',
      description: 'Urban planning firm\'s website and thought leadership content increased municipal contract inquiries by 180%.',
      imageSrc: architecture4,
      category: 'architecture&interior',
      link: 'https://www.andstudio.in/'
    },
    {
      id: 21,
      title: 'HouseYog',
      description: 'Traditional architecture firm\'s social media campaign showcased restoration projects, increasing heritage project leads by 120%.',
      imageSrc: architecture5,
      category: 'architecture&interior',
      link: 'https://www.houseyog.com/'
    },
    {
      id: 22,
      title: 'Make My House',
      description: 'UI/UX redesign for architecture portfolio platform improved client engagement by 300% and project inquiries by 150%.',
      imageSrc: architecture6,
      category: 'architecture&interior',
      link: 'https://www.makemyhouse.com/'
    },
    {
      id: 23,
      title: 'SEO for Houseyog',
      description: 'UI/UX redesign for architecture portfolio platform improved client engagement by 300% and project inquiries by 150%.',
      imageSrc: architecture7,
      category: 'architecture&interior',
      link: ''
    },
    {
      id: 24,
      title: 'SEO for DesignCafe',
      description: 'UI/UX redesign for architecture portfolio platform improved client engagement by 300% and project inquiries by 150%.',
      imageSrc: architecture8,
      category: 'architecture&interior',
      link: ''
    },
    {
      id: 25,
      title: 'SEO fro Deejos',
      description: 'UI/UX redesign for architecture portfolio platform improved client engagement by 300% and project inquiries by 150%.',
      imageSrc: architecture9,
      category: 'architecture&interior',
      link: ''
    },

    // Healthcare Projects
    {
      id: 2,
      title: 'Dentinics',
      description: 'Comprehensive digital marketing campaign with PPC ads and social media that doubled monthly patient acquisitions.',
      imageSrc: dental1,
      category: 'healthcare',
      link: 'https://dentinics.com/'
    },
    {
      id: 5,
      title: 'Stunning Dentistry',
      description: 'SEO and content marketing campaign that increased organic traffic by 150% and new patient inquiries by 75%.',
      imageSrc: dental2,
      category: 'healthcare',
      link: 'https://www.stunningdentistry.com/bracesindia/index.php'
    },
    {
      id: 12,
      title: '3M Dental',
      description: 'Hospital network\'s digital transformation improved patient engagement and online appointment bookings by 300%.',
      imageSrc: dental3,
      category: 'healthcare',
      link: 'https://www.3mindia.in/3M/en_IN/company-in/'
    },
    {
      id: 13,
      title: 'All About Dental',
      description: 'Holistic wellness center\'s social media and content strategy increased retreat bookings by 250%.',
      imageSrc: dental4,
      category: 'healthcare',
      link: 'https://www.allaboutdental.com.au/'
    },
    
    
    {
      id:24,
      title: 'Complete Family Dental',
      description: 'E-commerce website and social media strategy that helped transition from local store to national online retailer.',
      imageSrc: dental6,
      category: 'healthcare',
      link: 'https://completefamilydental.com.au/'
    },

    {
      id:28,
      title: 'Aspendale Gardens Dental Carel',
      description: 'E-commerce website and social media strategy that helped transition from local store to national online retailer.',
      imageSrc: dental6,
      category: 'healthcare',
      link: 'https://www.aspendalegardensdentalcare.com.au/'
    },


    

    // Interior Design Projects
    {
      id: 3,
      title: 'Resolve',
      description: 'Brand overhaul and website redesign that positioned the client as a premium service provider in their market.',
      imageSrc: others1,
      category: 'others',
      link: 'https://resolve.io/'
    },
    {
      id: 9,
      title: 'Vatika FC',
      description: 'E-commerce website and social media strategy that helped transition from local store to national online retailer.',
      imageSrc: others2,
      category: 'others',
      link: '/portfolio/furniture-shop'
    },
    {
      id: 14,
      title: 'Two Brother Bar Design',
      description: 'Traditional interior design firm\'s digital marketing showcased craftsmanship, increasing high-end project leads by 160%.',
      imageSrc: others3,
      category: 'others',
      link: '/portfolio/heritage-homes'
    },
    {
      id: 15,
      title: 'Corporate Office Solutions',
      description: 'Commercial interior design firm\'s B2B marketing strategy resulted in 200% increase in corporate contracts.',
      imageSrc: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'interior',
      link: '/portfolio/office-solutions'
    },
    {
      id: 25,
      title: 'Modern Living Spaces',
      description: 'Interior design studio\'s social media strategy featuring before/after transformations increased consultation bookings by 220%.',
      imageSrc: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'interior',
      link: '/portfolio/modern-living'
    },
    {
      id: 26,
      title: 'InteriorFlow Design Tool',
      description: 'Interior design software UI/UX optimization increased user engagement by 85% and subscription conversions by 120%.',
      imageSrc: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'interior',
      link: '/portfolio/interiorflow'
    },

    // Technology Projects
    {
      id: 4,
      title: 'Tech Startup Rebrand',
      description: 'Complete rebranding and digital marketing strategy that helped secure Series A funding within 6 months.',
      imageSrc: others4,
      category: 'others',
      link: 'https://leapscholar.com/'
    },
    {
      id: 8,
      title: 'Smart Home Technology',
      description: 'Digital marketing campaign that established the client as a thought leader in the smart home technology space.',
      imageSrc: others5,
      category: 'others',
      link: '/portfolio/smart-home'
    },
    {
      id: 16,
      title: 'CloudFlow SaaS Platform',
      description: 'B2B SaaS platform\'s content marketing and SEO strategy increased qualified leads by 400% and trial conversions by 85%.',
      imageSrc: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'tech',
      link: '/portfolio/cloudflow-saas'
    },
    {
      id: 17,
      title: 'FitTracker Mobile App',
      description: 'Fitness app\'s launch campaign and app store optimization resulted in 100K+ downloads in first 3 months.',
      imageSrc: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'tech',
      link: '/portfolio/fittracker-app'
    },
    {
      id: 27,
      title: 'TechCorp Enterprise',
      description: 'B2B technology company\'s LinkedIn and Twitter strategy generated 350% more qualified leads and 5 enterprise deals.',
      imageSrc: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'tech',
      link: '/portfolio/techcorp-enterprise'
    },
    {
      id: 28,
      title: 'DevTools Dashboard',
      description: 'Developer tools platform UI/UX redesign reduced user onboarding time by 70% and increased feature adoption by 200%.',
      imageSrc: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'tech',
      link: '/portfolio/devtools-dashboard'
    },

    // E-commerce Projects
    {
      id: 7,
      title: 'E-commerce Fashion Store',
      description: 'Full e-commerce solution with SEO and PPC strategy that increased online sales by 220% in the first year.',
      imageSrc: others6,
      category: 'others',
      link: '/portfolio/fashion-store'
    },
    {
      id: 18,
      title: 'TechGear Electronics',
      description: 'Electronics retailer\'s omnichannel marketing strategy increased online revenue by 350% and improved customer retention.',
      imageSrc: others7,
      category: 'others',
      link: '/portfolio/techgear-electronics'
    },
    {
      id: 19,
      title: 'Garden Paradise Online',
      description: 'Home and garden e-commerce site\'s seasonal marketing campaigns boosted sales by 280% during peak seasons.',
      imageSrc: others8,
      category: 'others',
      link: '/portfolio/garden-paradise'
    },
    {
      id: 20,
      title: 'Local Artisan Marketplace',
      description: 'Multi-vendor marketplace platform\'s launch strategy onboarded 500+ sellers and achieved $2M+ GMV in year one.',
      imageSrc: 'https://images.pexels.com/photos/5625108/pexels-photo-5625108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'ecommerce',
      link: '/portfolio/artisan-marketplace'
    },
    {
      id: 29,
      title: 'SportStore Online',
      description: 'Sports equipment retailer\'s Instagram and TikTok campaigns increased brand awareness by 400% and sales by 180%.',
      imageSrc: others9,
      category: 'others',
      link: '/portfolio/sportstore'
    },
    {
      id: 30,
      title: 'ShopEasy Mobile App',
      description: 'E-commerce mobile app UI/UX redesign increased conversion rates by 95% and customer satisfaction by 85%.',
      imageSrc: 'https://images.pexels.com/photos/4968634/pexels-photo-4968634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'ecommerce',
      link: '/portfolio/shopeasy-app'
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = (() => {
    let filtered;
    
    if (activeCategory === 'all') {
      filtered = projects;
    } else {
      filtered = projects.filter(project => project.category === activeCategory);
    }
    
    // Limit to 9 projects for display
    return filtered.slice(0, 9);
  })();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <Section className="pt-32 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Portfolio</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Explore our recent projects and see how we've helped businesses across various industries 
              achieve exceptional results through tailored digital marketing strategies.
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
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Projects Grid */}
      <Section className="bg-white dark:bg-gray-900 pt-8">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map(project => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    category={categories.find(c => c.id === project.category)?.label || ''}
                    link={project.link}
                  />
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No projects found in this category. Please try another category.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-gray-50 dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-blue-100 dark:text-blue-200 text-lg mb-8">
              Contact us today to discuss how we can help your business achieve similar results 
              with our tailored digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePortfolioPage;