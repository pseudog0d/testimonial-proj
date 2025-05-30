import { motion } from 'framer-motion';
import { Search, BarChart, Rocket, Target, Settings, CheckCircle } from 'lucide-react';
import Section from '../ui/Section';

const OurProcess = () => {
  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business goals, target audience, and current digital presence.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Strategy Development',
      description: 'Create a customized digital marketing strategy aligned with your objectives and budget.'
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Implementation',
      description: 'Execute the strategy using cutting-edge tools and best practices across chosen channels.'
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Monitoring & Analysis',
      description: 'Track performance metrics and gather data to measure campaign effectiveness.'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Optimization',
      description: 'Continuously optimize campaigns based on data insights and performance metrics.'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Reporting & Review',
      description: 'Regular reporting and strategy reviews to ensure we meet and exceed your goals.'
    }
  ];

  return (
    <Section className="bg-background" id="process">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">Our Process</h2>
          <p className="text-muted-foreground text-lg">
            We follow a systematic approach to ensure your digital marketing success. 
            Each step is carefully executed to maximize results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg relative"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-px bg-border"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurProcess;