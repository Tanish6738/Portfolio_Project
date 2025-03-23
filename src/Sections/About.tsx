import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaUser, FaLaptopCode, FaChartBar, FaDatabase, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Start animations when component is in view
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  const floatingIconVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const skills = [
    {
      title: "Programming",
      icon: <FaLaptopCode />,
      description: "Proficient in Python and related data science libraries including NumPy, Pandas, and Scikit-learn.",
      details: "My programming journey started with Python and has expanded to include various libraries and frameworks essential for data science. I've developed applications ranging from data analysis scripts to machine learning models."
    },
    {
      title: "Data Analysis",
      icon: <FaChartBar />,
      description: "Experienced in statistical analysis, data visualization, and extracting meaningful insights from complex datasets.",
      details: "I specialize in transforming raw data into actionable insights through statistical analysis and visualization techniques. My experience includes working with large datasets to identify patterns and trends."
    },
    {
      title: "Machine Learning",
      icon: <FaDatabase />,
      description: "Developed predictive models using supervised and unsupervised learning techniques for real-world applications.",
      details: "I've implemented various machine learning algorithms including regression, classification, clustering, and deep learning. My projects have included predictive modeling for healthcare and finance sectors."
    },
    {
      title: "Problem Solving",
      icon: <FaUser />,
      description: "Passionate about turning complex data challenges into innovative solutions with practical applications.",
      details: "I approach problems with analytical thinking and creativity. My strength lies in breaking down complex challenges into manageable components and developing effective solutions."
    }
  ];

  const backgroundShapes = [
    { top: '10%', left: '5%', size: '100px', delay: 0 },
    { top: '60%', left: '8%', size: '150px', delay: 0.5 },
    { top: '30%', right: '5%', size: '120px', delay: 0.2 },
    { top: '80%', right: '10%', size: '80px', delay: 0.7 }
  ];

  return (
    <motion.div 
      id="about" 
      className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      {backgroundShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-500 opacity-5"
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ 
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Mobile View */}
        {isMobile && (
          <div className="space-y-12">
            {/* Visual Element */}
            <motion.div 
              className="w-full"
              variants={itemVariants}
            >
              <div className="relative mx-auto max-w-xs">
                <motion.div 
                  className="w-full h-64 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    variants={floatingIconVariants}
                    animate="animate"
                  >
                    <div className="text-white text-8xl opacity-30">
                      <FaUser />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <FaLaptopCode size={20} />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-purple-600 text-white p-2 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  <FaChartBar size={20} />
                </motion.div>
              </div>
            </motion.div>

            {/* Introduction */}
            <motion.div 
              className="space-y-4 text-center"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold text-blue-400"
                variants={itemVariants}
              >
                I am a passionate Data Science student
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                I have a solid foundation in Python, machine learning, and data analytics. I have hands-on experience in developing predictive models, managing large datasets, and designing user-oriented applications.
              </motion.p>
            </motion.div>

            {/* Skills Tabs */}
            <motion.div variants={containerVariants} className="mt-8">
              <div className="flex overflow-x-auto pb-2 space-x-2 scrollbar-hide">
                {skills.map((skill, index) => (
                  <motion.button
                    key={index}
                    className={`py-2 px-4 rounded-full whitespace-nowrap flex-shrink-0 transition-colors ${
                      activeTab === index 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-800 text-gray-300'
                    }`}
                    onClick={() => setActiveTab(index)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center">
                      <span className="mr-2">{skill.icon}</span>
                      {skill.title}
                    </span>
                  </motion.button>
                ))}
              </div>
              
              <motion.div 
                className="mt-4 bg-gray-800 bg-opacity-50 p-5 rounded-lg border border-gray-700"
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-3">
                  <div className="text-blue-400 text-2xl mr-3">
                    {skills[activeTab].icon}
                  </div>
                  <h4 className="text-xl font-medium">{skills[activeTab].title}</h4>
                </div>
                <p className="text-gray-400 mb-3">{skills[activeTab].description}</p>
                <p className="text-gray-400">{skills[activeTab].details}</p>
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* Desktop View */}
        {!isMobile && (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Image/Visual Side */}
            <motion.div 
              className="w-full lg:w-2/5"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div 
                  className="w-full h-96 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    variants={floatingIconVariants}
                    animate="animate"
                  >
                    <div className="text-white text-9xl opacity-30">
                      <FaUser />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <FaLaptopCode size={24} />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-3 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  <FaChartBar size={24} />
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              className="w-full lg:w-3/5 space-y-6"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl sm:text-3xl font-semibold text-blue-400"
                variants={itemVariants}
              >
                I am a passionate Data Science student
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                I have a solid foundation in Python, machine learning, and data analytics. I have hands-on experience in developing predictive models, managing large datasets, and designing user-oriented applications. My drive to turn complex data into actionable insights fuels my commitment to solving real-world challenges through innovative technology solutions.
              </motion.p>

              {/* Skills Cards */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
                variants={containerVariants}
              >
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-800 bg-opacity-50 p-5 rounded-lg border border-gray-700 group cursor-pointer"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="flex items-center mb-3">
                      <div className="text-blue-400 text-2xl mr-3 group-hover:text-blue-300 transition-colors">
                        {skill.icon}
                      </div>
                      <h4 className="text-xl font-medium group-hover:text-blue-300 transition-colors">{skill.title}</h4>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{skill.description}</p>
                    <motion.div 
                      className="mt-3 flex items-center text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span>Learn more</span>
                      <FaArrowRight className="ml-1" />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default About;