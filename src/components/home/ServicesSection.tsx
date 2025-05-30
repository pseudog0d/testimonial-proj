import { Search, BarChart3, Globe, MessageSquare, Mail, PenTool } from 'lucide-react';
import Section from '../ui/Section';
import ServiceCard from '../ui/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'SEO Optimization',
      description: 'Boost your website\'s visibility in search engines with our data-driven SEO strategies that drive organic traffic.',
      icon: <Search />,
      link: '/services#seo'
    },
    {
      title: 'PPC & AI Ads',
      description: 'Maximize ROAS with AI-powered PPC campaigns on Google, Meta, and other platforms to reach your target audience.',
      icon: <BarChart3 />,
      link: '/services#ppc'
    },
    {
      title: 'Website Development',
      description: 'Create high-converting, responsive websites that provide exceptional user experiences across all devices.',
      icon: <Globe />,
      link: '/services#websites'
    },
    {
      title: 'Social Media',
      description: 'Build your brand presence and engage with your audience through strategic social media marketing.',
      icon: <MessageSquare />,
      link: '/services#social-media'
    },
    {
      title: 'Email Marketing',
      description: 'Nurture leads and drive conversions with personalized, automated email marketing campaigns.',
      icon: <Mail />,
      link: '/services#email'
    },
    {
      title: 'Brand Strategy',
      description: 'Develop a cohesive brand identity that resonates with your target audience and sets you apart from competitors.',
      icon: <PenTool />,
      link: '/services#brand'
    }
  ];

  return (
    <Section className="bg-secondary" id="services">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive suite of digital marketing services tailored to your business needs, helping you achieve measurable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;