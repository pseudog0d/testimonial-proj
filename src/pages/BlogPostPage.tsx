import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import { Link } from 'react-router-dom';

const blogPosts = {
  'boost-seo-rankings-2025': {
    title: 'How to Boost Your SEO Rankings in 2025',
    date: 'Jun 15, 2025',
    readTime: '8 min read',
    author: {
      name: 'John Smith',
      role: 'SEO Specialist',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    category: 'SEO',
    content: `
      <h2>The Evolution of SEO in 2025</h2>
      <p>As we move further into 2025, search engine optimization continues to evolve at a rapid pace. With the integration of AI and machine learning in search algorithms, traditional SEO practices are being transformed. This article explores the latest strategies that are proving effective in improving search rankings.</p>

      <h3>1. AI-Driven Content Optimization</h3>
      <p>Artificial Intelligence is now playing a crucial role in how search engines understand and rank content. To optimize for AI-driven search algorithms:</p>
      <ul>
        <li>Focus on comprehensive topic coverage rather than keyword density</li>
        <li>Use natural language that addresses user intent</li>
        <li>Incorporate semantic keywords and related concepts</li>
        <li>Ensure content structure follows logical patterns</li>
      </ul>

      <h3>2. User Experience Signals</h3>
      <p>Search engines are placing greater emphasis on user experience metrics when determining rankings. Key factors include:</p>
      <ul>
        <li>Core Web Vitals performance</li>
        <li>Mobile responsiveness</li>
        <li>Interactive elements engagement</li>
        <li>Page load speed optimization</li>
      </ul>

      <h3>3. Voice Search Optimization</h3>
      <p>With the continued growth of voice-activated devices, optimizing for voice search has become essential:</p>
      <ul>
        <li>Focus on conversational keywords and phrases</li>
        <li>Create content that answers specific questions</li>
        <li>Optimize for featured snippets</li>
        <li>Use structured data markup</li>
      </ul>

      <h2>Implementing These Strategies</h2>
      <p>To effectively implement these strategies, businesses should:</p>
      <ol>
        <li>Conduct a comprehensive SEO audit</li>
        <li>Develop a content strategy aligned with AI requirements</li>
        <li>Optimize technical aspects of their website</li>
        <li>Monitor and adjust based on performance metrics</li>
      </ol>

      <h2>Measuring Success</h2>
      <p>Track these key metrics to measure the success of your SEO efforts:</p>
      <ul>
        <li>Organic traffic growth</li>
        <li>Conversion rates from organic search</li>
        <li>Featured snippet appearances</li>
        <li>Core Web Vitals scores</li>
      </ul>
    `,
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  'future-ai-digital-advertising': {
    title: 'The Future of AI in Digital Advertising',
    date: 'Jun 8, 2025',
    readTime: '10 min read',
    author: {
      name: 'Sarah Johnson',
      role: 'Digital Advertising Manager',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    category: 'Digital Advertising',
    content: `
      <h2>AI Revolution in Digital Advertising</h2>
      <p>Artificial Intelligence is revolutionizing the digital advertising landscape, offering unprecedented opportunities for targeting, optimization, and personalization. This article explores how AI is shaping the future of digital advertising and how businesses can leverage these advancements.</p>

      <h3>1. AI-Powered Campaign Optimization</h3>
      <p>Modern AI systems are transforming how we optimize advertising campaigns:</p>
      <ul>
        <li>Real-time bid adjustments based on performance data</li>
        <li>Automated audience segmentation</li>
        <li>Dynamic creative optimization</li>
        <li>Predictive analytics for campaign performance</li>
      </ul>

      <h3>2. Personalization at Scale</h3>
      <p>AI enables unprecedented levels of personalization in advertising:</p>
      <ul>
        <li>Individual user behavior analysis</li>
        <li>Dynamic content generation</li>
        <li>Personalized ad scheduling</li>
        <li>Cross-channel experience optimization</li>
      </ul>

      <h3>3. Advanced Attribution Modeling</h3>
      <p>AI is improving how we understand and attribute campaign success:</p>
      <ul>
        <li>Multi-touch attribution modeling</li>
        <li>Cross-device tracking improvements</li>
        <li>Customer journey analysis</li>
        <li>ROI prediction and optimization</li>
      </ul>

      <h2>Implementing AI in Your Advertising Strategy</h2>
      <p>To effectively leverage AI in your advertising efforts:</p>
      <ol>
        <li>Assess your current technology stack</li>
        <li>Identify key areas for AI implementation</li>
        <li>Develop a data strategy</li>
        <li>Test and optimize AI-driven campaigns</li>
      </ol>

      <h2>Future Trends</h2>
      <p>Key trends to watch in AI-powered advertising:</p>
      <ul>
        <li>Voice-activated advertising</li>
        <li>Augmented reality integration</li>
        <li>Emotional intelligence in ad targeting</li>
        <li>Privacy-first advertising solutions</li>
      </ul>
    `,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
  // Add more blog posts here
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <Section className="pt-32">
        <div className="container text-center">
          <h1>Blog Post Not Found</h1>
          <p className="mt-4">The requested blog post could not be found.</p>
          <Link to="/blog" className="btn-accent btn-md mt-8">
            View All Posts
          </Link>
        </div>
      </Section>
    );
  }

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
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author.name}
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                {post.category}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Image */}
      <Section className="bg-background pt-0">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Content */}
      <Section className="bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-secondary rounded-lg">
              <div className="flex items-center">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{post.author.name}</h3>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-accent text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Improve Your Digital Marketing?</h2>
            <p className="text-white/90 mb-8">
              Let's discuss how we can help your business achieve exceptional results with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-lg bg-white text-accent hover:bg-white/90"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/calculator"
                className="btn-lg border border-white/20 text-white hover:bg-white/10"
              >
                Try Our Calculator
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default BlogPostPage;