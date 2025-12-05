import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              scrolled 
                ? 'bg-gradient-to-br from-secomm-blue to-secomm-blue-light' 
                : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className="text-white font-bold text-xl">☕</span>
            </div>
            <span className={`text-xl font-bold transition-colors ${
              scrolled ? 'text-secomm-blue' : 'text-white'
            }`}>
              Secomm Cup
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('concept')}
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-gray-700 hover:text-secomm-blue'
                  : 'text-white hover:text-white/80'
              }`}
            >
              Features
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('how-it-works')}
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-gray-700 hover:text-secomm-blue'
                  : 'text-white hover:text-white/80'
              }`}
            >
              How It Works
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('why-amazing')}
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-gray-700 hover:text-secomm-blue'
                  : 'text-white hover:text-white/80'
              }`}
            >
              Why Amazing
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('final-cta')}
              className={`px-6 py-2 rounded-full transition-colors font-medium ${
                scrolled
                  ? 'bg-secomm-blue text-white hover:bg-secomm-blue-dark'
                  : 'bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30'
              }`}
            >
              Try It Now
            </motion.button>
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={scrolled ? 'text-secomm-blue' : 'text-white'}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

