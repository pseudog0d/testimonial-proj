// import { motion } from 'framer-motion';
// import Section from '../components/ui/Section';
// import CostCalculator from '../components/calculator/CostCalculator';

// const CalculatorPage = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Section className="pt-32 bg-secondary">
//         <div className="container">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h1 className="mb-4">Project Cost Calculator</h1>
//             <p className="text-muted-foreground text-lg">
//               Get an instant estimate for your digital marketing project. Select the services 
//               you need and customize options to see pricing in real-time.
//             </p>
//           </div>
          
//           <div className="max-w-3xl mx-auto">
//             <CostCalculator />
//           </div>
          
//           <div className="max-w-2xl mx-auto mt-12 text-center">
//             <p className="text-muted-foreground">
//               This calculator provides an estimate based on typical project requirements. 
//               For a customized quote tailored to your specific needs, please 
//               <a href="/contact" className="text-accent hover:underline ml-1">contact us</a>.
//             </p>
//           </div>
//         </div>
//       </Section>
//     </motion.div>
//   );
// };

// export default CalculatorPage;

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import { Link } from 'react-router-dom';

const CalculatorPage = () => {
  const packages = [
    {
      name: 'Website Essential',
      price: 29999,
      description: 'Perfect for businesses looking to establish a strong online presence',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Custom Website Design (5 Pages)',
        'Mobile Responsive Layout',
        'Contact Form Integration',
        'Basic SEO Setup',
        'Social Media Integration',
        'Google Analytics Setup',
        '2 Rounds of Revisions',
        '3 Months Support'
      ],
      popular: false
    },
    {
      name: 'SEO Accelerator',
      price: 89999,
      description: 'Boost your search rankings and organic traffic',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Keyword Research & Strategy',
        'On-Page SEO Optimization',
        'Technical SEO Audit',
        'Content Strategy',
        'Monthly Performance Reports',
        'Competitor Analysis',
        'Local SEO Optimization',
        '6 Months Support'
      ],
      popular: false
    },
    {
      name: 'PPC Performance',
      price: 9999,
      description: 'Drive targeted traffic and leads through paid advertising',
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Google Ads Campaign Setup',
        'Meta Ads Management',
        'Custom Landing Pages',
        'A/B Testing',
        'Conversion Tracking',
        'Bid Management',
        'Monthly Performance Reports',
        'ROI Analysis'
      ],
      popular: false
    },
    {
      name: 'Social Media Growth',
      price: 14999,
      description: 'Build your brand presence across social platforms',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Social Media Strategy',
        'Content Calendar',
        'Daily Post Management',
        'Community Management',
        'Analytics & Reporting',
        'Hashtag Research',
        'Engagement Campaigns',
        'Monthly Strategy Review'
      ],
      popular: false
    },
    {
      name: 'Digital Foundation',
      price: 99999,
      description: 'Website development with comprehensive SEO strategy',
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Custom Website (8 Pages)',
        'Advanced SEO Setup',
        'Content Strategy',
        'Keyword Optimization',
        'Technical SEO Implementation',
        'Performance Optimization',
        'Monthly SEO Reports',
        '6 Months Support'
      ],
      popular: true
    },
    {
      name: 'Social Ads Bundle',
      price: 59999,
      description: 'Integrated paid advertising and social media management',
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'PPC Campaign Management',
        'Social Media Management',
        'Content Creation',
        'Ad Creative Design',
        'Performance Analytics',
        'Audience Targeting',
        'Monthly Strategy Review',
        'ROI Optimization'
      ],
      popular: false
    },
    {
      name: 'Brand Builder',
      price: 59999,
      description: 'Website development with social media management',
      image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Custom Website (10 Pages)',
        'Social Media Strategy',
        'Content Creation',
        'Brand Guidelines',
        'Social Media Management',
        'Analytics Integration',
        'Monthly Performance Reports',
        '12 Months Support'
      ],
      popular: false
    },
    {
      name: 'Complete Growth Suite',
      price: 149999,
      description: 'All-inclusive digital marketing solution for maximum growth',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Custom Website (15 Pages)',
        'Comprehensive SEO Strategy',
        'PPC Campaign Management',
        'Social Media Management',
        'Content Marketing',
        'Email Marketing Setup',
        'Monthly Strategy Reviews',
        'Priority Support 24/7'
      ],
      popular: false,
      bestSeller: true
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Section className="pt-32 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-4">Pricing & Packages</h1>
            <p className="text-muted-foreground text-lg">
              Choose the perfect package to accelerate your digital growth. All packages include
              our commitment to excellence and measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-background rounded-lg overflow-hidden border ${
                  pkg.popular ? 'border-accent' : 'border-border'
                } ${pkg.bestSeller ? 'border-2 border-accent' : ''}`}
              >
                {pkg.bestSeller && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Best Seller
                    </span>
                  </div>
                )}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popular Choice
                    </span>
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{formatPrice(pkg.price)}</span>
                      <span className="text-muted-foreground">/project</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5 mr-2">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full btn-md flex items-center justify-center ${
                      pkg.bestSeller ? 'btn-accent' : 'btn-secondary'
                    }`}
                  >
                    Buy Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8">
              We understand that every business is unique. Contact us to discuss a customized
              package that perfectly fits your needs and budget.
            </p>
            <Link to="/contact" className="btn-accent btn-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default CalculatorPage;