import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Section from '../components/ui/Section';
import BlogCard from '../components/ui/BlogCard';

const BlogPage = () => {
  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'seo', label: 'SEO' },
    { id: 'ppc', label: 'PPC & Ads' },
    { id: 'web', label: 'Web Design' },
    { id: 'social', label: 'Social Media' },
    { id: 'marketing', label: 'Digital Marketing' }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: 'How to Boost Your SEO Rankings in 2025',
      excerpt: 'Learn the latest SEO strategies to improve your search engine rankings and drive more organic traffic to your website.',
      date: 'Jun 15, 2025',
      category: 'seo',
      author: {
        name: 'John Smith',
        imageSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      imageSrc: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'boost-seo-rankings-2025'
    },
    {
      id: 2,
      title: 'The Future of AI in Digital Advertising',
      excerpt: 'Discover how artificial intelligence is revolutionizing digital advertising and how you can leverage it for better results.',
      date: 'Jun 8, 2025',
      category: 'ppc',
      author: {
        name: 'Sarah Johnson',
        imageSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      imageSrc: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'future-ai-digital-advertising'
    },
    {
      id: 3,
      title: 'Web Design Trends That Will Dominate 2025',
      excerpt: 'Stay ahead of the curve with these cutting-edge web design trends that will shape the digital landscape in 2025.',
      date: 'Jun 1, 2025',
      category: 'web',
      author: {
        name: 'Michael Chen',
        imageSrc: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      imageSrc: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'web-design-trends-2025'
    },
    {
      id: 4,
      title: 'Building a Social Media Strategy That Converts',
      excerpt: 'Learn how to create a social media strategy that not only engages your audience but also drives conversions and sales.',
      date: 'May 25, 2025',
      category: 'social',
      author: {
        name: 'Emma Davis',
        imageSrc: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      imageSrc: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'social-media-strategy-converts'
    },
    {
      id: 5,
      title: 'How to Measure ROI in Digital Marketing',
      excerpt: 'Understand the key metrics and frameworks for measuring the return on investment of your digital marketing campaigns.',
      date: 'May 18, 2025',
      category: 'marketing',
      author: {
        name: 'David Thompson',
        imageSrc: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      imageSrc: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'measure-roi-digital-marketing'
    },
    {
      id: 6,
      title: 'Local SEO: How to Dominate Your Local Market',
      excerpt: 'Essential strategies for optimizing your business for local search and attracting more customers in your area.',
      date: 'May 12, 2025',
      category: 'seo',
      author: {
        name: 'John Smith',
        imageSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      imageSrc: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'local-seo-dominate-market'
    },
    {
      id: 7,
      title: 'Email Marketing: Still the King of ROI',
      excerpt: 'Discover why email marketing continues to deliver the highest return on investment and how to optimize your campaigns.',
      date: 'May 5, 2025',
      category: 'marketing',
      author: {
        name: 'Sarah Johnson',
        imageSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      imageSrc: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'email-marketing-roi-king'
    },
    {
      id: 8,
      title: 'Mastering Google Ads in 2025',
      excerpt: 'Learn the latest strategies and best practices for creating high-performing Google Ads campaigns in 2025.',
      date: 'Apr 28, 2025',
      category: 'ppc',
      author: {
        name: 'Michael Chen',
        imageSrc: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      imageSrc: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'mastering-google-ads-2025'
    },
    {
      id: 9,
      title: 'User Experience: The Key to Website Conversion',
      excerpt: 'Understand how user experience design impacts conversion rates and how to optimize your website for better results.',
      date: 'Apr 21, 2025',
      category: 'web',
      author: {
        name: 'Emma Davis',
        imageSrc: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      imageSrc: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'user-experience-website-conversion'
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

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
            <h1 className="mb-4">Our Blog</h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest trends, insights, and strategies in digital marketing.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
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
      
      {/* Blog Posts Grid */}
      <Section className="bg-background pt-8">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  category={categories.find(c => c.id === post.category)?.label || ''}
                  author={post.author}
                  imageSrc={post.imageSrc}
                  slug={post.slug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No blog posts found matching your criteria. Please try another search or category.
              </p>
            </div>
          )}
        </div>
      </Section>
      
      {/* Newsletter Section */}
      <Section className="bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Stay updated with our latest articles, insights, and digital marketing trends.
              We'll send you valuable content straight to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="btn-accent btn-md whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default BlogPage;