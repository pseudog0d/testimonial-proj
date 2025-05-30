import { motion } from 'framer-motion';
import Section from '../ui/Section';

const TechStack = () => {
  const technologies = {
    'Development': [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrISpgedNtHAGlKBWl0ftrBe4B1JiGwDTP2g&s' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
    ],
    'Marketing Tools': [
      { name: 'Google Ads', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1200px-Google_Ads_logo.svg.png' },
      { name: 'Meta Ads', icon: 'https://www.facebook.com/images/fb_icon_325x325.png' },
      { name: 'SEMrush', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqo9b1w3dSmU9jhXdH_Nm8S9S9xe4npb3BA&s' },
      { name: 'Mailchimp', icon: 'https://cdn.prod.website-files.com/60658b47b03f0c77e8c14884/613f2d65b7c57fda58f7caf0_mailchimp.jpg' }
    ],
    'Analytics': [
      { name: 'Google Analytics', icon: 'https://www.vectorlogo.zone/logos/google_analytics/google_analytics-official.svg' },
      { name: 'Hotjar', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQ0oQ5FSllc4RZ1kuNPX8dl7eA-aPBL8MjA&s' },
      { name: 'Mixpanel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5EiIYoJ16Z8HqqBGdE4Q0mK5eiOgTRNqgQ&s' },
      { name: 'Looker', icon: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/jqycac4nitgaoauawrxg' }
    ],
    'Design': [
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
      { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
      { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' }
    ]
  };

  return (
    <Section className="bg-secondary" id="tech-stack">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">Our Tech Stack</h2>
          <p className="text-muted-foreground text-lg">
            We use cutting-edge technologies and tools to deliver exceptional results 
            across development, marketing, and analytics.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, tools], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-background p-6 rounded-lg flex flex-col items-center text-center shadow hover:shadow-lg transition"
                  >
                    {/* Image container with fixed size */}
                    <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center mb-4">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <p className="font-medium">{tool.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
