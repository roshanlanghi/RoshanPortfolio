import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="section-wrapper bg-gray-100 dark:bg-dark-400 transition-colors">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Me</h2>
          <div className="section-heading-line"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="bg-white dark:bg-dark-500 p-4 rounded-lg shadow-lg">
                <div className="aspect-[4/5] bg-gray-200 dark:bg-dark-300 rounded overflow-hidden flex items-center justify-center">
                  <img 
                    src="/assets/profile.png" 
                    alt="Roshan Langhi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="font-medium">5+ Years Experience</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Software Developer & Data Science Enthusiast</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate software developer with expertise in multiple programming languages and a strong focus on building efficient, maintainable, and user-friendly applications. My journey in software development started 5 years ago, and I've been constantly learning and improving my skills since then.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I specialize in C++, Python, Java, and Data Science. I enjoy tackling complex problems and transforming ideas into functional software solutions. I'm particularly interested in optimization, algorithm design, and data analysis.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              When I'm not coding, I contribute to open-source projects, write technical articles, and participate in hackathons. I believe in continuous learning and staying updated with the latest technologies and industry trends.
            </p>
            
            <div className="flex items-center mb-6 text-gray-700 dark:text-gray-300">
              <i className="fa-solid fa-location-dot mr-2 text-primary-600 dark:text-primary-400"></i>
              <span>Kopargaon, Maharashtra, India</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "20+", label: "Projects" },
                { value: "10+", label: "Open Source" },
                { value: "4", label: "Languages" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-white dark:bg-dark-500 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="text-primary-600 dark:text-primary-400 font-bold text-xl">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Let's work together</span>
              <i className="fa-solid fa-arrow-right"></i>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
