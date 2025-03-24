import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaPython, 
  FaHospital, FaDatabase, FaRobot, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  // Extended project list with more projects
  const allProjects = [
    {
      title: "Lung Cancer Prediction Using Machine Learning",
      description: "Developed an early detection tool for lung cancer by leveraging logistic regression and other ML algorithms.",
      icon: <FaHospital />,
      technologies: [
        { name: "Python", icon: <FaPython /> },
        { name: "Machine Learning", icon: <FaLaptopCode /> },
        { name: "Data Analysis", icon: <FaDatabase /> }
      ],
      links: [
        { type: "github", url: "#", icon: <FaGithub /> },
        { type: "live", url: "#", icon: <FaExternalLinkAlt /> }
      ],
      bgColor: "from-blue-900/20 to-purple-900/20"
    },
    {
      title: "Institute Management System",
      description: "Created a comprehensive management system to streamline student data, course management, and administrative workflows.",
      icon: <FaRobot />,
      technologies: [
        { name: "Java", icon: <FaRobot /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      links: [
        { type: "github", url: "#", icon: <FaGithub /> },
        { type: "live", url: "#", icon: <FaExternalLinkAlt /> }
      ],
      bgColor: "from-purple-900/20 to-blue-900/20"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React, TypeScript and Tailwind CSS featuring animated UI components.",
      icon: <SiReact />,
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <FaLaptopCode /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ],
      links: [
        { type: "github", url: "#", icon: <FaGithub /> },
        { type: "live", url: "#", icon: <FaExternalLinkAlt /> }
      ],
      bgColor: "from-blue-900/20 to-cyan-900/20"
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment processing.",
      icon: <SiNodedotjs />,
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "React", icon: <SiReact /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      links: [
        { type: "github", url: "#", icon: <FaGithub /> },
        { type: "live", url: "#", icon: <FaExternalLinkAlt /> }
      ],
      bgColor: "from-green-900/20 to-blue-900/20"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      icon: <SiReact />,
      technologies: [
        { name: "Socket.io", icon: <FaLaptopCode /> },
        { name: "React", icon: <SiReact /> },
        { name: "Express", icon: <SiNodedotjs /> }
      ],
      links: [
        { type: "github", url: "#", icon: <FaGithub /> },
        { type: "live", url: "#", icon: <FaExternalLinkAlt /> }
      ],
      bgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application that displays current conditions and forecasts for any location worldwide.",
      icon: <FaLaptopCode />,
      technologies: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Weather API", icon: <FaDatabase /> },
        { name: "CSS", icon: <SiCss3 /> }
      ],
      links: [
        { type: "github", url: "#", icon: <FaGithub /> },
        { type: "live", url: "#", icon: <FaExternalLinkAlt /> }
      ],
      bgColor: "from-cyan-900/20 to-blue-900/20"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8 text-white">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4"
          >
            <span className="text-blue-400 font-medium">My Portfolio</span>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">All Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            A comprehensive collection of my projects showcasing my skills and experience in web development, 
            data science, and software engineering.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8"
          >
            <Link to="/">
              <motion.button
                className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowLeft size={14} />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${project.bgColor} rounded-xl overflow-hidden border border-blue-800/30 shadow-lg`}
              variants={projectVariants}
              whileHover="hover"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl text-blue-400">{project.icon}</div>
                  <div className="flex space-x-2">
                    {project.links.map((link, linkIdx) => (
                      <motion.a
                        key={linkIdx}
                        href={link.url}
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex items-center bg-gray-800 bg-opacity-50 px-2 py-1 rounded-full text-xs"
                    >
                      <span className="text-blue-400 mr-1">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-blue-800/30 p-4 bg-gray-900/20">
                <motion.a
                  href="#"
                  className="flex items-center justify-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>View Details</span>
                  <motion.span 
                    className="inline-block ml-1"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                  >
                    <FaArrowRight size={12} />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsList;
