import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaDownload } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/shuhamPATIDAR',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/shubham-patidar-458821288/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:shubhampatidar2812@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  const scrollDownVariants = {
    initial: { y: 0 },
    animate: { 
      y: 10,
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse" as const, 
        duration: 1.5, 
        ease: "easeInOut" 
      } 
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, delay: 1.2 }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const socialLinkVariants = {
    hover: { 
      y: -5,
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
      }
    }
  };

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const fullText = "Data Science Enthusiast & Developer";
  
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full filter blur-[80px] opacity-5"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400 rounded-full filter blur-[100px] opacity-5"></div>
      
      {/* Removing the animated background dots section */}
      
      <motion.div 
        id="hero" 
        className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-28">
          <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-2">
            <motion.div 
              className="w-full lg:w-1/2 space-y-5 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
              variants={containerVariants}
            >
              <div className="max-w-xl mx-auto lg:mx-0 ">
                <motion.div 
                  className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4"
                  variants={itemVariants}
                >
                  <span className="text-blue-400 font-medium">Hello, I'm</span>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-2"
                  variants={itemVariants}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Shubham Patidar
                  </span>
                </motion.h1>
                
                <motion.div 
                  className="overflow-hidden h-8 sm:h-10 mb-4"
                  variants={itemVariants}
                >
                  <div className="text-xl sm:text-2xl text-gray-300 font-medium flex">
                    <span>{text}</span>
                    <motion.span
                      variants={cursorVariants}
                      animate="blinking"
                      className="inline-block w-[2px] h-[1em] bg-blue-400 ml-1"
                    />
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 max-w-lg mx-auto lg:mx-0 mb-6"
                  variants={itemVariants}
                >
                  I'm passionate about creating innovative solutions through data science and software development. 
                  Let's turn your ideas into reality with cutting-edge technology and creative problem-solving.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
                  variants={itemVariants}
                >
                  {socialLinks.map((link, index) => (
                    <motion.a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-all px-4 py-2 rounded-lg border border-gray-700 ${link.color}`}
                      variants={socialLinkVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {link.icon} {link.name}
                    </motion.a>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="pt-6 space-y-3 text-gray-300"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="flex items-center gap-3 justify-center lg:justify-start"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center">
                      <FaEnvelope className="text-blue-400" />
                    </div>
                    <span className="tracking-wide">shubhampatidar2812@gmail.com</span>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="pt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
                  variants={itemVariants}
                >
                  <motion.a 
                    href="#projects"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 rounded-lg font-medium shadow-lg inline-flex items-center gap-2"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    View My Work
                  </motion.a>
                  
                  <motion.a 
                    href="/Shubham_Resume.docx"
                    className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-6 py-3 rounded-lg font-medium shadow-lg inline-flex items-center gap-2"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    download
                  >
                    <FaDownload className="text-blue-400" />
                    Download CV
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
              variants={containerVariants}
            >
              <div className="relative">
                <motion.div
                  className="absolute top-1/2 left-1/2 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full bg-blue-500/10"
                  style={{ translateX: "-50%", translateY: "-50%" }}
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 3,
                      ease: "easeInOut"
                    }
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-full bg-purple-500/10"
                  style={{ translateX: "-50%", translateY: "-50%" }}
                  animate={{
                    scale: [1.05, 1, 1.05],
                    transition: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 3.5,
                      ease: "easeInOut"
                    }
                  }}
                />
                
                <motion.div
                  className="relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden border-4 border-gray-800 shadow-xl"
                  variants={imageVariants}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-8xl text-blue-400">SP</div>
                </motion.div>
                
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12 rounded-full bg-blue-500/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-4 left-0 w-8 h-8 rounded-full bg-purple-500/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                />
                <motion.div
                  className="absolute top-1/2 -right-4 w-4 h-16 rounded-full bg-blue-500/20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-blue-400"
        initial="initial"
        animate="animate"
        variants={scrollDownVariants}
      >
        <span className="text-sm mb-2 text-gray-400">Scroll Down</span>
        <FaArrowDown />
      </motion.div>
    </div>
  );
};

export default Hero;