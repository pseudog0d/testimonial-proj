import { motion } from 'framer-motion';
import { Search, BarChart3, Globe, MessageSquare, Mail, PenTool, BarChart, LineChart, PieChart } from 'lucide-react';
import Section from '../components/ui/Section';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 'seo',
      title: 'SEO Optimization',
      description: 'Enhance your online visibility and drive organic traffic to your website with our comprehensive SEO services.',
      icon: <Search className="h-8 w-8" />,
      features: [
        'Keyword Research & Strategy',
        'On-Page SEO Optimization',
        'Technical SEO Audits',
        'Content Strategy & Creation',
        'Link Building',
        'Local SEO',
      ],
      benefits: 'Improved search engine rankings, increased organic traffic, higher quality leads, and better ROI compared to paid advertising.',
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'ppc',
      title: 'PPC & AI-Powered Ads',
      description: 'Maximize your ROI with data-driven, AI-optimized advertising campaigns across multiple platforms.',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Google Ads Management',
        'Meta Ads (Facebook & Instagram)',
        'LinkedIn Advertising',
        'AI-Powered Campaign Optimization',
        'A/B Testing',
        'Detailed Performance Analytics',
      ],
      benefits: 'Immediate visibility, precise targeting, cost-effective lead generation, and measurable results with continuous optimization.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'websites',
      title: 'Website Development',
      description: 'Create stunning, high-performing websites that convert visitors into customers and provide exceptional user experiences.',
      icon: <Globe className="h-8 w-8" />,
      features: [
        'Custom Website Design',
        'Responsive Development',
        'E-commerce Solutions',
        'CMS Implementation',
        'Speed Optimization',
        'Conversion Rate Optimization',
      ],
      benefits: 'Professional online presence, improved user experience, higher conversion rates, and a platform optimized for growth.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      description: 'Build your brand presence, engage with your audience, and drive traffic through strategic social media marketing.',
      icon: <MessageSquare className="h-8 w-8" />,
      features: [
        'Social Media Strategy',
        'Content Creation & Curation',
        'Community Management',
        'Platform-Specific Campaigns',
        'Influencer Collaborations',
        'Performance Analytics',
      ],
      benefits: 'Increased brand awareness, improved customer engagement, stronger brand loyalty, and additional traffic sources.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'email',
      title: 'Email Marketing',
      description: 'Nurture leads and maintain customer relationships with personalized, automated email marketing campaigns.',
      icon: <Mail className="h-8 w-8" />,
      features: [
        'Email Strategy Development',
        'Campaign Design & Copywriting',
        'Automation Sequences',
        'List Segmentation',
        'A/B Testing',
        'Performance Analytics',
      ],
      benefits: 'High ROI, direct communication with customers, increased conversions, and valuable customer insights.',
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'brand',
      title: 'Brand Strategy',
      description: 'Develop a cohesive brand identity that resonates with your target audience and differentiates you in the market.',
      icon: <PenTool className="h-8 w-8" />,
      features: [
        'Brand Positioning',
        'Visual Identity Development',
        'Messaging & Voice',
        'Style Guides',
        'Brand Storytelling',
        'Competitive Analysis',
      ],
      benefits: 'Consistent brand experience, stronger market positioning, increased customer trust, and improved customer loyalty.',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const additionalFeatures = [
    {
      title: 'Data Analytics',
      icon: <BarChart className="h-6 w-6" />,
      description: 'Comprehensive reporting and insights to track performance and inform strategy adjustments.'
    },
    {
      title: 'Growth Strategy',
      icon: <LineChart className="h-6 w-6" />,
      description: 'Custom growth plans that align with your business goals and target specific KPIs.'
    },
    {
      title: 'Market Research',
      icon: <PieChart className="h-6 w-6" />,
      description: 'In-depth analysis of your industry, competitors, and target audience to inform your digital strategy.'
    }
  ];

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
            <h1 className="mb-4">Our Services</h1>
            <p className="text-muted-foreground text-lg">
              We offer comprehensive digital marketing solutions tailored to your business needs,
              helping you achieve measurable growth and ROI.
            </p>
          </div>
        </div>
      </Section>

      {/* Services List */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          className={index % 2 === 0 ? 'bg-background' : 'bg-secondary'}
          delay={0.1 * index}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center text-accent">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  {service.description}
                </p>

                <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-success/20 flex items-center justify-center text-success flex-shrink-0 mt-0.5 mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                <p className="text-muted-foreground mb-6">
                  {service.benefits}
                </p>

                <Link
                  to="/contact"
                  className="btn-accent btn-md"
                >
                  Get Started
                </Link>
              </div>

              <div className={index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Additional Features */}
      <Section className="bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Additional Services</h2>
            <p className="text-muted-foreground text-lg">
              We provide comprehensive support to ensure your digital marketing efforts achieve maximum impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg">
                <div className="h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-accent text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today to discuss how our services can help you achieve your business goals.
              We'll create a customized strategy tailored to your specific needs.
            </p>
            {/* <Link to="/contact" className="btn-lg bg-white text-accent spacpca hover:bg-white/90">
              Schedule a Consultation
            </Link> */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-accent bg-white rounded-full shadow-md transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
            >
              Schedule a Consultation

            </Link>

          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default ServicesPage;