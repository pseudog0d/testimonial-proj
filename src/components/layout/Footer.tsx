import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';
import MTR_logo from '../../assets/logo_MTR.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'SEO Optimization', path: '/services#seo' },
    { name: 'PPC Advertising', path: '/services#ppc' },
    { name: 'Website Development', path: '/services#websites' },
    { name: 'Social Media', path: '/services#social-media' },
    { name: 'Email Marketing', path: '/services#email' },
  ];
  
  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Cost Calculator', path: '/calculator' },
    { name: 'FAQ', path: '/about#faq' },
  ];
  
  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/about#careers' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];
  
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <Twitter className="h-5 w-5" />, label: 'Twitter', href: 'https://twitter.com' },
    { icon: <Facebook className="h-5 w-5" />, label: 'Facebook', href: 'https://facebook.com' },
    { icon: <Instagram className="h-5 w-5" />, label: 'Instagram', href: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={MTR_logo } alt="" className='w-52 h-12' />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              MarkTechRover is your digital growth partner, helping businesses achieve exceptional 
              online presence and tangible results through innovative strategies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <span> info@marktechrover.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <span>91 8826790981</span>
              </div>
              <div className="flex items-start text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-accent" />
                <span>Visit us- C-83, Shivalik Colony Malviya Nagar, New Delhi 110017</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.path} 
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="w-full btn-sm btn-accent"
              >
                Subscribe
              </button>
            </form>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-background transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} MarkTechRover. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {company.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;