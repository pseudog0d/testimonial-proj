import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'Modern Architects Studio',
      description: 'Complete digital transformation with a responsive website and SEO strategy that increased organic leads by 200%.',
      imageSrc: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Architecture',
      link: '/portfolio/modern-architects'
    },
    {
      title: 'Dental Care Clinic',
      description: 'Comprehensive digital marketing campaign with PPC ads and social media that doubled monthly patient acquisitions.',
      imageSrc: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Healthcare',
      link: '/portfolio/dental-care'
    },
    {
      title: 'Luxury Interior Design',
      description: 'Brand overhaul and website redesign that positioned the client as a premium service provider in their market.',
      imageSrc: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Interior Design',
      link: '/portfolio/luxury-interiors'
    }
  ];

  return (
    <Section className="bg-background" id="featured-projects">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              Explore some of our recent work that has driven exceptional results for our clients across various industries.
            </p>
          </div>
          <Link to="/portfolio">
            <Button variant="ghost" size="sm" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              category={project.category}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjects;