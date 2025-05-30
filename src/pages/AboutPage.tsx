// import { motion } from 'framer-motion';
// import { 
//   Users, 
//   Target, 
//   Award, 
//   TrendingUp, 
//   CheckCircle, 
//   Clock, 
//   HelpCircle
// } from 'lucide-react';
// import Section from '../components/ui/Section';
// import { Link } from 'react-router-dom';
// import ritikImg from '../assets/ritik.png';

// const AboutPage = () => {
//   const team = [
    
//      {
   
//   },
    
    
//   ];
  
//   const values = [
//     {
//       icon: <Target className="h-6 w-6" />,
//       title: 'Results-Driven',
//       description: 'We focus on delivering measurable results that impact your bottom line.'
//     },
//     {
//       icon: <Award className="h-6 w-6" />,
//       title: 'Excellence',
//       description: 'We strive for excellence in everything we do, from strategy to execution.'
//     },
//     {
//       icon: <TrendingUp className="h-6 w-6" />,
//       title: 'Innovation',
//       description: 'We constantly explore new technologies and strategies to stay ahead of the curve.'
//     },
//     {
//       icon: <Users className="h-6 w-6" />,
//       title: 'Partnership',
//       description: 'We see ourselves as an extension of your team, working together toward common goals.'
//     }
//   ];
  
//   const faqs = [
//     {
//       question: 'What industries do you specialize in?',
//       answer: 'We have experience across various industries including architecture, healthcare, technology, interior design, e-commerce, and more. Our strategies are tailored to each industry\'s unique challenges and opportunities.'
//     },
//     {
//       question: 'How long does it take to see results?',
//       answer: 'The timeline varies depending on the service and your starting point. For PPC, you might see results within days. For SEO, significant improvements typically take 3-6 months. Website projects usually take 4-8 weeks from concept to launch.'
//     },
//     {
//       question: 'How do you measure success?',
//       answer: 'We establish clear KPIs at the beginning of each project, which might include traffic growth, lead generation, conversion rates, or revenue increase. We provide regular reports that track these metrics and show the ROI of our services.'
//     },
//     {
//       question: 'What makes MarkTechRover different from other agencies?',
//       answer: 'Our data-driven approach, industry expertise, and focus on measurable results set us apart. We don\'t just implement tactics; we develop comprehensive strategies aligned with your business goals. Plus, our team stays at the forefront of digital marketing innovations.'
//     },
//     {
//       question: 'Do you offer ongoing support after project completion?',
//       answer: 'Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally. Our team is always available to address questions, make updates, and provide ongoing optimization.'
//     }
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       {/* Hero Section */}
//       <Section className="pt-32 bg-secondary">
//         <div className="container">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="mb-6">About MarkTechRover</h1>
//               <p className="text-muted-foreground text-lg mb-6">
//                 We are a team of digital marketing experts passionate about helping businesses 
//                 grow through innovative, data-driven strategies that deliver measurable results.
//               </p>
//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 {[
//                   { label: 'Founded', value: '2019' },
//                   { label: 'Team Members', value: '12+' },
//                   { label: 'Clients Served', value: '750+' },
//                   { label: 'Success Rate', value: '98%' }
//                 ].map((stat, index) => (
//                   <div key={index} className="bg-background p-4 rounded-lg">
//                     <p className="text-sm text-muted-foreground">{stat.label}</p>
//                     <p className="text-2xl font-bold">{stat.value}</p>
//                   </div>
//                 ))}
//               </div>
//               <Link to="/contact" className="btn-accent btn-md">
//                 Get in Touch
//               </Link>
//             </div>
            
//             <div className="relative">
//               <img
//                 src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 alt="MarkTechRover Team"
//                 className="rounded-lg w-full"
//               />
//               <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-lg">
//                 <p className="text-sm font-semibold">Your Digital Growth Partner</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Section>
      
//       {/* Our Story */}
//       <Section className="bg-background">
//         <div className="container">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="mb-4">Our Story</h2>
//             <p className="text-muted-foreground text-lg">
//               MarkTechRover was founded with a simple mission: to help businesses navigate the 
//               complex digital landscape and achieve sustainable growth through innovative marketing strategies.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="order-2 md:order-1">
//               <h3 className="text-2xl font-semibold mb-4">From Humble Beginnings</h3>
//               <p className="text-muted-foreground mb-4">
//                 What started as a small consulting firm in 2019 has grown into a full-service digital 
//                 marketing agency with a team of 12+ specialists across SEO, PPC, web development, 
//                 and content marketing.
//               </p>
//               <p className="text-muted-foreground mb-4">
//                 Our founder, Ritik Podda, recognized a gap in the market for a truly data-driven 
//                 approach to digital marketing that focused on measurable results rather than vanity metrics.
//               </p>
//               <p className="text-muted-foreground">
//                 Today, we're proud to have helped over 750+ businesses across various industries achieve 
//                 their growth objectives through tailored digital strategies.
//               </p>
//             </div>
            
//             <div className="order-1 md:order-2">
//               <img
//                 src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 alt="MarkTechRover Office"
//                 className="rounded-lg w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </Section>
      
//       {/* Our Values */}
//       <Section className="bg-secondary">
//         <div className="container">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="mb-4">Our Core Values</h2>
//             <p className="text-muted-foreground text-lg">
//               These principles guide everything we do and define how we work with our clients.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="bg-background p-6 rounded-lg">
//                 <div className="h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center text-accent mb-4">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
//                 <p className="text-muted-foreground">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Section>
      
//       {/* Meet the Team */}
//       {/* <Section className="bg-background" id="team">
//         <div className="container">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="mb-4">Meet Our Team</h2>
//             <p className="text-muted-foreground text-lg">
//               Our talented team of digital marketing experts is passionate about helping businesses grow.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <div key={index} className="bg-secondary p-6 rounded-lg">
//                 <div className="mb-4 relative">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-64 object-cover rounded-lg"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
//                   <div className="absolute bottom-0 left-0 right-0 p-4">
//                     <h3 className="text-xl font-semibold text-white">{member.name}</h3>
//                     <p className="text-white/80 text-sm">{member.role}</p>
//                   </div>
//                 </div>
//                 <p className="text-muted-foreground text-sm">{member.bio}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Section> */}

//       {/* Meet the Team */}
// <Section className="bg-background" id="team">
//   <div className="container">
//     <div className="max-w-6xl mx-auto">
//       <div className="text-center mb-16">
//        <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight">
//             <span className="block text-gray-800 mb-2 text-lg md:text-xl font-medium tracking-wide uppercase">
//               🚀 Meet the Visionary Behind
//             </span>
//             <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
//               MarkTechRover
//             </span>
//             <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
//               Ritik Kumar Poddar
//             </span>
//           </h2>
        
//       </div>
      
//       {team.map((member, index) => (
//         <div key={index} className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mb-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//             {/* Text Content - Left Side */}
//             <div className="p-8 lg:p-12 flex flex-col justify-center">
//               <div className="mb-6">
//                 <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-4">
//                   🚀 {member.role}
//                 </div>
//                 <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
//                   {member.name}
//                 </h3>
//                 <p className="text-xl text-blue-600 font-semibold mb-6">
//                   MarkTechRover
//                 </p>
//               </div>
              
//               <div className="space-y-4">
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   As the <strong>Founder & CEO of MarkTechRover</strong>, Ritik has spearheaded innovative digital solutions, 
//                   revolutionizing <strong>growth strategies</strong> for businesses across diverse industries.
//                 </p>
                
//                 <div className="space-y-3">
//                   <div className="flex items-start space-x-3">
//                     <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                     </div>
//                     <p className="text-gray-700 leading-relaxed">
//                       <strong>Collaborated with 750+ clients</strong>, transforming their online presence through SEO, Ads, and automation-driven marketing
//                     </p>
//                   </div>
                  
//                   <div className="flex items-start space-x-3">
//                     <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                     </div>
//                     <p className="text-gray-700 leading-relaxed">
//                       <strong>Pioneered high-performance websites</strong>, integrating advanced development techniques for superior user experience & engagement
//                     </p>
//                   </div>
                  
//                   <div className="flex items-start space-x-3">
//                     <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                     </div>
//                     <p className="text-gray-700 leading-relaxed">
//                       <strong>Achieved marketing accolades from Economic Times</strong>, recognizing expertise in digital strategy & branding
//                     </p>
//                   </div>
                  
//                   <div className="flex items-start space-x-3">
//                     <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                     </div>
//                     <p className="text-gray-700 leading-relaxed">
//                       <strong>Alumnus of JIMSVK</strong>, where he honed strategic mindset & technical acumen, leading groundbreaking marketing innovations
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="pt-6">
//                   <p className="text-gray-800 font-semibold text-lg">
//                     With a futuristic approach, <span className="text-blue-600">MarkTechRover under Ritik's leadership</span> continues 
//                     to push boundaries, delivering <span className="text-green-600">measurable success</span> for architects, 
//                     interior designers, and small businesses. 🚀
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Image - Right Side */}
//             <div className="relative lg:h-auto h-96 overflow-hidden">
//               <img
//                 src={ritikImg}
//                 alt={member.name}
//                 className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
//                 loading="lazy"
//                 onError={(e) => {
//                   e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face&auto=format&q=80';
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
              
//               {/* Floating Stats */}
//               <div className="absolute bottom-6 left-6 right-6">
//                 <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
//                   <div className="grid grid-cols-2 gap-4 text-center">
//                     <div>
//                       <div className="text-2xl font-bold text-blue-600">750+</div>
//                       <div className="text-sm text-gray-600">Clients Served</div>
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-purple-600">98%</div>
//                       <div className="text-sm text-gray-600">Success Rate</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
      
//       {/* Call to Action */}
//       {/* <div className="text-center mt-12">
//         <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
//           <h4 className="text-2xl font-bold text-gray-900 mb-4">
//             Ready to Transform Your Business?
//           </h4>
//           <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
//             Join the 750+ successful businesses that have already revolutionized their digital presence with MarkTechRover
//           </p>
//           <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
//             Get Started Today
//           </Link>
//         </div>
//       </div> */}
//     </div>
//   </div>
// </Section>
      
//       {/* Why Choose Us */}
//       <Section className="bg-accent text-white">
//         <div className="container">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="text-white mb-4">Why Choose MarkTechRover</h2>
//             <p className="text-white/80 text-lg">
//               We're committed to delivering exceptional results that help your business grow.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <CheckCircle className="h-6 w-6" />,
//                 title: 'Proven Results',
//                 description: 'We have a track record of delivering measurable results for our clients across various industries.'
//               },
//               {
//                 icon: <Target className="h-6 w-6" />,
//                 title: 'Tailored Strategies',
//                 description: 'We develop custom strategies based on your specific business goals, target audience, and industry.'
//               },
//               {
//                 icon: <Clock className="h-6 w-6" />,
//                 title: 'Timely Delivery',
//                 description: 'We understand the importance of deadlines and deliver projects on time, every time.'
//               }
//             ].map((point, index) => (
//               <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
//                 <div className="h-12 w-12 rounded-md bg-white/20 flex items-center justify-center text-white mb-4">
//                   {point.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
//                 <p className="text-white/80">{point.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Section>
      
//       {/* FAQs */}
//       <Section className="bg-background" id="faq">
//         <div className="container">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="mb-4">Frequently Asked Questions</h2>
//             <p className="text-muted-foreground text-lg">
//               Find answers to common questions about our services and how we work.
//             </p>
//           </div>
          
//           <div className="max-w-3xl mx-auto space-y-6">
//             {faqs.map((faq, index) => (
//               <div key={index} className="bg-secondary p-6 rounded-lg">
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5 mr-3">
//                     <HelpCircle className="h-4 w-4" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
//                     <p className="text-muted-foreground">{faq.answer}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Section>
      
//       {/* CTA Section */}
//       <Section className="bg-secondary">
//         <div className="container">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="mb-6">Ready to Work With Us?</h2>
//             <p className="text-muted-foreground text-lg mb-8">
//               Let\'s discuss how we can help your business achieve its digital marketing goals.
//               Schedule a consultation with our team today.
//             </p>
//             <Link to="/contact" className="btn-accent btn-lg">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </Section>
//     </motion.div>
//   );
// };

// export default AboutPage;



import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  HelpCircle
} from 'lucide-react';
import Section from '../components/ui/Section';
import { Link } from 'react-router-dom';
import ritikImg from '../assets/ritik.png';
import { Lightbulb } from 'lucide-react';
import { Rocket } from 'lucide-react';

const AboutPage = () => {
  // Dynamic team array - easily add more team members here
  const team = [
    
    {
      id: 1,
      name: 'Ritik Kumar Poddar',
      role: 'Founder & CEO',
      company: 'MarkTechRover',
      image: ritikImg,
      fallbackImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face&auto=format&q=80',
      bio: 'As the Founder & CEO of MarkTechRover, Ritik has spearheaded innovative digital solutions, revolutionizing growth strategies for businesses across diverse industries.',
      achievements: [
        {
          text: 'Collaborated with 750+ clients',
          description: 'transforming their online presence through SEO, Ads, and automation-driven marketing'
        },
        {
          text: 'Pioneered high-performance websites',
          description: 'integrating advanced development techniques for superior user experience & engagement'
        },
        {
          text: 'Achieved marketing accolades from Economic Times',
          description: 'recognizing expertise in digital strategy & branding'
        },
        {
          text: 'Alumnus of JIMSVK',
          description: 'where he honed strategic mindset & technical acumen, leading groundbreaking marketing innovations'
        }
      ],
      stats: [
        { value: '750+', label: 'Clients Served' },
        { value: '98%', label: 'Success Rate' }
      ],
      highlight: 'With a futuristic approach, MarkTechRover under Ritik\'s leadership continues to push boundaries, delivering measurable success for architects, interior designers, and small businesses. 🚀'
    },
    // {
    //   id: 2,
    //   name: 'Sarah Johnson',
    //   role: 'Head of SEO',
    //   company: 'MarkTechRover',
    //   image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop&crop=face&auto=format&q=80',
    //   fallbackImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop&crop=face&auto=format&q=80',
    //   bio: 'Sarah leads our SEO department with over 8 years of experience in organic search optimization and content strategy.',
    //   achievements: [
    //     {
    //       text: 'Increased organic traffic by 400%',
    //       description: 'for clients across various industries through strategic SEO implementations'
    //     },
    //     {
    //       text: 'Certified Google Analytics Expert',
    //       description: 'with advanced certifications in technical SEO and content optimization'
    //     },
    //     {
    //       text: 'Published SEO research',
    //       description: 'featured in leading marketing publications and industry conferences'
    //     }
    //   ],
    //   stats: [
    //     { value: '200+', label: 'SEO Projects' },
    //     { value: '95%', label: 'Ranking Success' }
    //   ],
    //   highlight: 'Sarah\'s data-driven approach to SEO has helped countless businesses achieve top rankings and sustainable organic growth.'
    // },
    // {
    //   id: 3,
    //   name: 'Michael Chen',
    //   role: 'Creative Director',
    //   company: 'MarkTechRover',
    //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face&auto=format&q=80',
    //   fallbackImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face&auto=format&q=80',
    //   bio: 'Michael oversees all creative aspects of our campaigns, from visual design to brand storytelling.',
    //   achievements: [
    //     {
    //       text: 'Award-winning design campaigns',
    //       description: 'recognized by Design Awards and featured in creative showcases'
    //     },
    //     {
    //       text: 'Brand transformations for 100+ companies',
    //       description: 'creating memorable identities that drive customer engagement'
    //     },
    //     {
    //       text: 'Creative strategy expertise',
    //       description: 'developing comprehensive brand guidelines and visual systems'
    //     }
    //   ],
    //   stats: [
    //     { value: '100+', label: 'Brand Projects' },
    //     { value: '12', label: 'Design Awards' }
    //   ],
    //   highlight: 'Michael\'s creative vision has transformed brands across industries, creating compelling visual narratives that resonate with audiences.'
    // }
    
  ];


  
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that impact your bottom line.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from strategy to execution.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Innovation',
      description: 'We constantly explore new technologies and strategies to stay ahead of the curve.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Partnership',
      description: 'We see ourselves as an extension of your team, working together toward common goals.'
    }
  ];
  
  const faqs = [
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience across various industries including architecture, healthcare, technology, interior design, e-commerce, and more. Our strategies are tailored to each industry\'s unique challenges and opportunities.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'The timeline varies depending on the service and your starting point. For PPC, you might see results within days. For SEO, significant improvements typically take 3-6 months. Website projects usually take 4-8 weeks from concept to launch.'
    },
    {
      question: 'How do you measure success?',
      answer: 'We establish clear KPIs at the beginning of each project, which might include traffic growth, lead generation, conversion rates, or revenue increase. We provide regular reports that track these metrics and show the ROI of our services.'
    },
    {
      question: 'What makes MarkTechRover different from other agencies?',
      answer: 'Our data-driven approach, industry expertise, and focus on measurable results set us apart. We don\'t just implement tactics; we develop comprehensive strategies aligned with your business goals. Plus, our team stays at the forefront of digital marketing innovations.'
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally. Our team is always available to address questions, make updates, and provide ongoing optimization.'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">About MarkTechRover</h1>
              <p className="text-muted-foreground text-lg mb-6">
                We are a team of digital marketing experts passionate about helping businesses 
                grow through innovative, data-driven strategies that deliver measurable results.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Founded', value: '2019' },
                  { label: 'Team Members', value: '12+' },
                  { label: 'Clients Served', value: '750+' },
                  { label: 'Success Rate', value: '98%' }
                ].map((stat, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-accent btn-md">
                Get in Touch
              </Link>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="MarkTechRover Team"
                className="rounded-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-lg">
                <p className="text-sm font-semibold">Your Digital Growth Partner</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Our Story */}
      <Section className="bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4">Our Story</h2>
            <p className="text-muted-foreground text-lg">
              MarkTechRover was founded with a simple mission: to help businesses navigate the 
              complex digital landscape and achieve sustainable growth through innovative marketing strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">From Humble Beginnings</h3>
              <p className="text-muted-foreground mb-4">
                What started as a small consulting firm in 2019 has grown into a full-service digital 
                marketing agency with a team of 12+ specialists across SEO, PPC, web development, 
                and content marketing.
              </p>
              <p className="text-muted-foreground mb-4">
                Our founder, Ritik Podda, recognized a gap in the market for a truly data-driven 
                approach to digital marketing that focused on measurable results rather than vanity metrics.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to have helped over 750+ businesses across various industries achieve 
                their growth objectives through tailored digital strategies.
              </p>
            </div>
            
            <div className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="MarkTechRover Office"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Our Values */}
      <Section className="bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              These principles guide everything we do and define how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-6 rounded-lg">
                <div className="h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Dynamic Team Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content Area (70%) */}
          <div className="w-full lg:w-[70%] order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
              Meet the Visionary
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-purple-500 mb-6">Ritik Kumar Poddar, Founder & CEO</h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              As the Founder & CEO of MarkTechRover, Ritik Kumar Poddar has spearheaded innovative digital solutions, 
              revolutionizing growth strategies for businesses across diverse industries. With an unwavering commitment 
              to excellence, Ritik has transformed the digital landscape for hundreds of clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800 p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1 border border-gray-700">
                <div className="flex items-center mb-3">
                  <Users className="text-purple-400 mr-3 h-5 w-5" />
                  <h4 className="font-semibold text-purple-300">Client Success</h4>
                </div>
                <p className="text-gray-300">Collaborated with 750+ clients, transforming their online presence through SEO, Ads, and automation-driven marketing.</p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1 border border-gray-700">
                <div className="flex items-center mb-3">
                  <Lightbulb className="text-purple-400 mr-3 h-5 w-5" />
                  <h4 className="font-semibold text-purple-300">Innovation</h4>
                </div>
                <p className="text-gray-300">Pioneered high-performance websites, integrating advanced development techniques for superior user experience & engagement.</p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1 border border-gray-700">
                <div className="flex items-center mb-3">
                  <Award className="text-purple-400 mr-3 h-5 w-5" />
                  <h4 className="font-semibold text-purple-300">Recognition</h4>
                </div>
                <p className="text-gray-300">Achieved marketing accolades from Economic Times, recognizing his expertise in digital strategy & branding.</p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1 border border-gray-700">
                <div className="flex items-center mb-3">
                  <Rocket className="text-purple-400 mr-3 h-5 w-5" />
                  <h4 className="font-semibold text-purple-300">Education</h4>
                </div>
                <p className="text-gray-300">Alumnus of JIMSVK, where he honed his strategic mindset & technical acumen, leading groundbreaking marketing innovations.</p>
              </div>
            </div>
            
            <div className="bg-gray-800 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-gray-300 italic">
                "With a futuristic approach, MarkTechRover under Ritik's leadership continues to push boundaries, 
                delivering measurable success for architects, interior designers, and small businesses."
              </p>
            </div>
          </div>
          
          {/* Image Area (30%) */}
          <div className="w-full lg:w-[30%] order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 rounded-full opacity-10 blur-2xl transform scale-110"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-purple-500 to-purple-800 p-1">
                <img 
                  src={ritikImg} 
                  alt="Ritik Kumar Poddar" 
                  className="w-64 md:w-80 aspect-[3/4] object-cover object-center rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-800 p-3 rounded-full shadow-lg">
                <Rocket className="h-8 w-8 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      {/* Why Choose Us */}
      <Section className="bg-accent text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-white mb-4">Why Choose MarkTechRover</h2>
            <p className="text-white/80 text-lg">
              We're committed to delivering exceptional results that help your business grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: 'Proven Results',
                description: 'We have a track record of delivering measurable results for our clients across various industries.'
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: 'Tailored Strategies',
                description: 'We develop custom strategies based on your specific business goals, target audience, and industry.'
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: 'Timely Delivery',
                description: 'We understand the importance of deadlines and deliver projects on time, every time.'
              }
            ].map((point, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="h-12 w-12 rounded-md bg-white/20 flex items-center justify-center text-white mb-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-white/80">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* FAQs */}
      <Section className="bg-background" id="faq">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our services and how we work.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5 mr-3">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Work With Us?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can help your business achieve its digital marketing goals.
              Schedule a consultation with our team today.
            </p>
            <Link to="/contact" className="btn-accent btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default AboutPage;