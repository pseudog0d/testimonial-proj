// import { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Section from '../ui/Section';
// import TestimonialCard from '../ui/TestimonialCard';

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: 'Sarah Johnson',
//       role: 'Marketing Director',
//       company: 'TechStartup Inc.',
//       testimonial: 'MarkTechRover completely transformed our online presence. Their SEO strategy increased our organic traffic by 150% in just 3 months, and their website redesign improved our conversion rate significantly.',
//       rating: 5,
//       imageSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
//     },
//     {
//       name: 'Michael Chen',
//       role: 'CEO',
//       company: 'Design Studio Co.',
//       testimonial: 'As an architecture firm, we needed a digital partner who understood our aesthetic vision. MarkTechRover delivered a stunning website that showcases our portfolio beautifully and has helped us attract high-value clients.',
//       rating: 5,
//       imageSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
//     },
//     {
//       name: 'Rebecca Williams',
//       role: 'Owner',
//       company: 'Wellness Center',
//       testimonial: 'Their social media management has been game-changing for my wellness business. They created engaging content that resonates with my audience, growing my Instagram following by 10K in 6 months.',
//       rating: 4,
//       imageSrc: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300'
//     },
//     {
//       name: 'David Thompson',
//       role: 'Digital Manager',
//       company: 'Retail Chain Ltd.',
//       testimonial: 'The PPC campaigns run by MarkTechRover have consistently delivered an impressive ROI. Their data-driven approach to optimization has reduced our cost per acquisition while increasing sales volume.',
//       rating: 5,
//       imageSrc: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300'
//     },
//     {
//       name: 'Elena Rodriguez',
//       role: 'Founder',
//       company: 'Boutique Agency',
//       testimonial: 'Their team understood our vision perfectly and created a brand identity that truly captures our essence. The website they built is not only beautiful but also performs exceptionally well on all devices.',
//       rating: 5,
//       imageSrc: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300'
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideRef = useRef<HTMLDivElement>(null);

//   const slideVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   const handlePrev = () => {
//     setCurrentIndex(prevIndex => 
//       prevIndex === 0 ? Math.ceil(testimonials.length / 3) - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex(prevIndex => 
//       prevIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Calculate visible testimonials
//   const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
//   const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);
//   const visibleTestimonials = testimonials.slice(
//     currentIndex * itemsPerSlide, 
//     Math.min((currentIndex + 1) * itemsPerSlide, testimonials.length)
//   );

//   return (
//     <Section className="bg-background" id="testimonials">
//       <div className="container">
//         <div className="flex justify-between items-end mb-12">
//           <div className="max-w-2xl">
//             <h2 className="mb-4">What Our Clients Say</h2>
//             <p className="text-muted-foreground text-lg">
//               Our clients have experienced exceptional results with our digital marketing strategies. Here's what some of them have to say.
//             </p>
//           </div>
          
//           <div className="hidden md:flex space-x-2">
//             <button
//               onClick={handlePrev}
//               className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
        
//         <div className="relative overflow-hidden">
//           <motion.div
//             ref={slideRef}
//             key={currentIndex}
//             initial="hidden"
//             animate="visible"
//             variants={slideVariants}
//             transition={{ duration: 0.5 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {visibleTestimonials.map((testimonial, index) => (
//               <TestimonialCard
//                 key={index}
//                 name={testimonial.name}
//                 role={testimonial.role}
//                 company={testimonial.company}
//                 testimonial={testimonial.testimonial}
//                 rating={testimonial.rating}
//                 imageSrc={testimonial.imageSrc}
//               />
//             ))}
//           </motion.div>
//         </div>
        
//         {/* Mobile navigation */}
//         <div className="flex justify-center mt-8 md:hidden">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-2 w-2 mx-1 rounded-full ${
//                 currentIndex === index ? 'bg-accent' : 'bg-border'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default TestimonialsSection;


import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../ui/Section';
import TestimonialCard from '../ui/TestimonialCard';
import amit_Narang_Img from '../../assets/AmitNarang.png';
import Nishant_khemani_Img from '../../assets/nishantkhemani.jpeg';
import Ashish_Img from '../../assets/left ashsih.jpeg';
import Manish_Img from '../../assets/manishvishen.jpeg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ashish Dingra',
      role: 'founder ',
      company: 'idesign.market.',
      testimonial: 'MarkTechRover completely transformed our online presence. Their SEO strategy increased our organic traffic by 150% in just 3 months, and their website redesign improved our conversion rate significantly.',
      rating: 5,
      imageSrc: Ashish_Img
    },
    {
      name: 'Nishant khemani',
      role: 'founder',
      company: 'saturn consulting group',
      testimonial: 'As an architecture firm, we needed a digital partner who understood our aesthetic vision. MarkTechRover delivered a stunning website that showcases our portfolio beautifully and has helped us attract high-value clients.',
      rating: 5,
      imageSrc: Nishant_khemani_Img
    },
    {
      name: 'Dr. amit Narang ',
      role: '- founder',
      company: 'dentinics',
      testimonial: 'Their social media management has been game-changing for my wellness business. They created engaging content that resonates with my audience, growing my Instagram following by 10K in 6 months.',
      rating: 4,
      imageSrc: amit_Narang_Img
    },
    {
      name: 'Manish vishen ',
      role: 'founder',
      company: 'the whiteys dental',
      testimonial: 'The PPC campaigns run by MarkTechRover have consistently delivered an impressive ROI. Their data-driven approach to optimization has reduced our cost per acquisition while increasing sales volume.',
      rating: 5,
      imageSrc: Manish_Img
    },
    // {
    //   name: 'Elena Rodriguez',
    //   role: 'Founder',
    //   company: 'Boutique Agency',
    //   testimonial: 'Their team understood our vision perfectly and created a brand identity that truly captures our essence. The website they built is not only beautiful but also performs exceptionally well on all devices.',
    //   rating: 5,
    //   imageSrc: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300'
    // }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? Math.ceil(testimonials.length / 3) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate visible testimonials
  const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);
  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerSlide, 
    Math.min((currentIndex + 1) * itemsPerSlide, testimonials.length)
  );

  return (
    <Section className="bg-background" id="testimonials">
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Our clients have experienced exceptional results with our digital marketing strategies. Here's what some of them have to say.
            </p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <motion.div
            ref={slideRef}
            key={currentIndex}
            initial="hidden"
            animate="visible"
            variants={slideVariants}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Mobile navigation */}
        <div className="flex justify-center mt-8 md:hidden">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                currentIndex === index ? 'bg-accent' : 'bg-border'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;