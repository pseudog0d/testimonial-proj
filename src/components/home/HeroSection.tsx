

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection = () => {
  // Animation variants for floating elements
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background with Modern Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-violet-950" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        {/* Large Morphing Blobs */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-cyan-400/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 0.8, 1],
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-violet-400/25 to-fuchsia-400/20 rounded-full blur-3xl"
          animate={{
            scale: [0.8, 1.3, 1, 0.9, 0.8],
            x: [0, -80, 60, 0],
            y: [0, 80, -40, 0],
            transition: {
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/15 to-indigo-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 0.7, 1.4, 1],
            rotate: [0, 180, 360],
            transition: {
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />

        {/* Floating Tech Elements */}
        <motion.div
          className="absolute top-20 left-1/4 w-12 h-12 border-2 border-emerald-400/60 rounded-lg backdrop-blur-sm bg-emerald-400/10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-violet-400/40 to-fuchsia-400/35 transform rotate-45 backdrop-blur-sm rounded-sm"
          animate={{
            y: [0, 40, 0],
            rotate: [45, 405],
            scale: [1, 1.2, 1],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/6 w-6 h-6 border-2 border-cyan-400/70 rounded-full backdrop-blur-sm bg-cyan-400/15"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 0.5, 1],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />

        {/* Circuit-like Lines */}
        <motion.div
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }
          }}
        />

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/6 right-1/3 w-4 h-4 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/60"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute bottom-1/6 left-1/3 w-3 h-3 bg-violet-400 rounded-full shadow-lg shadow-violet-400/60"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.9, 0.4],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
        />

        {/* Additional Accent Orbs */}
        <motion.div
          className="absolute top-2/3 left-1/5 w-2 h-2 bg-cyan-300 rounded-full shadow-md shadow-cyan-300/50"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.5, 1, 0.5],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/6 w-1.5 h-1.5 bg-fuchsia-300 rounded-full shadow-sm shadow-fuchsia-300/50"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.3, 0.8, 0.3],
            transition: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }
          }}
        />

        {/* Hexagonal Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
          animate={{
            x: [0, 30],
            y: [0, 30],
            transition: {
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />

        {/* Digital Rain Effect with Multiple Colors */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-px ${
              i % 3 === 0 
                ? 'bg-gradient-to-b from-emerald-400/70 via-emerald-400/30 to-transparent'
                : i % 3 === 1
                ? 'bg-gradient-to-b from-cyan-400/70 via-cyan-400/30 to-transparent'
                : 'bg-gradient-to-b from-violet-400/70 via-violet-400/30 to-transparent'
            }`}
            style={{
              left: `${10 + i * 12}%`,
              height: '100px',
              top: '-100px'
            }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 0],
              transition: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container relative z-20 py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 backdrop-blur-sm text-emerald-100 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-emerald-400/30">
              Digital Growth Partner
            </span>
            <h1 className="text-white mb-6">
              Transforming Businesses with Cutting-Edge Digital Solutions
            </h1>
            <p className="text-slate-200 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
              We help businesses grow online through strategic SEO, conversion-focused web design, and AI-powered marketing campaigns that deliver measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="accent" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg shadow-emerald-500/25">
                  Schedule a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto border border-slate-300/30 text-white hover:bg-white/10 hover:border-emerald-400/50 backdrop-blur-sm">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {[
              { value: '250+', label: 'Clients Served', color: 'from-emerald-400/20 to-cyan-400/20 border-emerald-400/30' },
              { value: '95%', label: 'Client Retention', color: 'from-violet-400/20 to-fuchsia-400/20 border-violet-400/30' },
              { value: '15X', label: 'Average ROI', color: 'from-cyan-400/20 to-blue-400/20 border-cyan-400/30' },
              { value: '24/7', label: 'Support', color: 'from-fuchsia-400/20 to-pink-400/20 border-fuchsia-400/30' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 hover:scale-105`}
                whileHover={{ 
                  scale: 1.08,
                  transition: { duration: 0.2 }
                }}
              >
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-slate-300 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;