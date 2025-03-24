import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      
      // Change navbar background on scroll
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id], div[id]');
      let currentActiveSection = 'hero';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          currentActiveSection = section.id;
        }
      });
      
      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    
    if (element) {
      // Log for debugging
      console.log(`Scrolling to section: ${sectionId}, element:`, element);
      
      // Use a small timeout to ensure the DOM is ready
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
        setIsOpen(false);
      }, 100);
    } else {
      console.error(`Element with ID "${sectionId}" not found`);
    }
  };

  // Navbar sections
  const navLinks = [
    { name: 'Home', section: 'hero' },
    { name: 'About', section: 'about' },
    { name: 'Education', section: 'education' },
    { name: 'Technologies', section: 'technologies' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="text-white font-bold text-xl"
            whileHover={{ scale: 1.05 }}
          >
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="flex items-center"
            >
              <span className="text-blue-400">S</span>hubham
              <span className="ml-1 text-gray-400 font-normal">Patidar</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                className="relative px-1"
              >
                <a
                  href={`#${link.section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.section);
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative ${
                    activeSection === link.section
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.section && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-blue-400 w-full rounded-full"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none bg-gray-800/80 p-2 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden bg-gray-800/95 backdrop-blur-sm mt-4 rounded-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={`#${link.section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.section);
                    }}
                    className={`py-3 px-4 rounded-md transition-colors duration-300 ${
                      activeSection === link.section
                        ? 'text-blue-400 bg-blue-900/20'
                        : 'text-white hover:bg-gray-700/50'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;