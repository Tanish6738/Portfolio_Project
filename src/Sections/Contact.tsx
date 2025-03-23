import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaLinkedin, FaGithub, 
  FaTwitter, FaMapMarkerAlt, FaLaptopCode, FaDatabase,
  FaChartBar, FaBrain, FaRobot, FaCode
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "shubhampatidar2812@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:shubhampatidar2812@gmail.com"
    },
    {
      type: "Phone",
      value: "(+91) 9302697528",
      icon: <FaPhone />,
      link: "tel:+919302697528"
    },
    {
      type: "Location",
      value: "Indore, Madhya Pradesh, India",
      icon: <FaMapMarkerAlt />,
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/shubham-patidar-458821288/",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/shuhamPATIDAR",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "#",
      color: "bg-blue-400 hover:bg-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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

  const skillBubbles = [
    { icon: <FaLaptopCode />, label: "Web Development", color: "from-blue-500 to-blue-600" },
    { icon: <FaDatabase />, label: "Data Engineering", color: "from-purple-500 to-purple-600" },
    { icon: <FaChartBar />, label: "Data Analysis", color: "from-green-500 to-green-600" },
    { icon: <FaBrain />, label: "Machine Learning", color: "from-yellow-500 to-yellow-600" },
    { icon: <FaRobot />, label: "AI Applications", color: "from-red-500 to-red-600" },
    { icon: <FaCode />, label: "Programming", color: "from-indigo-500 to-indigo-600" }
  ];

  const floatingBubbleVariants = {
    initial: () => ({
      x: 0,
      y: 0,
      scale: 1,
      opacity: 0.8
    }),
    animate: (index: number) => ({
      x: [0, Math.sin(index) * 20, 0],
      y: [0, Math.cos(index) * 20, 0],
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3 + index,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }),
    hover: {
      scale: 1.2,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500 opacity-5"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-purple-500 opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Interactive Skill Bubbles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 bg-opacity-50 rounded-xl p-6 md:p-8 border border-gray-700 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Expertise</h3>
            
            <div className="relative h-[300px] md:h-[350px] w-full">
              {skillBubbles.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`absolute bg-gradient-to-br ${skill.color} rounded-full shadow-lg p-4 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center cursor-pointer`}
                  style={{
                    left: `${(index % 3) * 33 + 10}%`,
                    top: `${Math.floor(index / 3) * 40 + 15}%`,
                  }}
                  custom={index}
                  variants={floatingBubbleVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <div className="text-white text-2xl mb-1">{skill.icon}</div>
                  <motion.div 
                    className="text-white text-xs font-medium text-center opacity-0 absolute -bottom-6 whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1, y: -5 }}
                  >
                    {skill.label}
                  </motion.div>
                </motion.div>
              ))}
              
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg text-center p-4 z-10"
                animate={{
                  boxShadow: ["0px 0px 20px rgba(59, 130, 246, 0.3)", "0px 0px 40px rgba(59, 130, 246, 0.6)", "0px 0px 20px rgba(59, 130, 246, 0.3)"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Let's Collaborate
              </motion.div>
            </div>
            
            <div className="mt-8 text-center">
              <motion.a
                href="mailto:shubhampatidar2812@gmail.com"
                className="inline-block py-3 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Reach Out Now
              </motion.a>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 md:p-8 border border-gray-700 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-center group"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center mr-4 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.type}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 md:p-8 border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className={`w-14 h-14 ${social.color} rounded-full flex items-center justify-center text-white text-xl shadow-md transition-all`}
                    whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-900 bg-opacity-20 rounded-lg border border-blue-800 border-opacity-30">
                <p className="text-gray-300 text-sm">
                  I'm currently available for freelance work and full-time positions. 
                  If you have a project that needs some creative work, feel free to contact me.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;