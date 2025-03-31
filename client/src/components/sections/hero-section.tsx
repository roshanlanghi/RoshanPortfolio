import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            className="md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Roshan Langhi
              <span className="block text-primary-600 dark:text-primary-400 mt-2">Software Developer</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              Specialized in building modern applications with C++, Python, Java, and Data Science. Passionate about creating efficient, scalable, and user-friendly solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                <i className="fa-solid fa-code"></i> View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                <i className="fa-solid fa-envelope"></i> Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-600 bg-opacity-10 dark:bg-primary-900 dark:bg-opacity-30 overflow-hidden flex items-center justify-center p-2">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-400 flex items-center justify-center overflow-hidden border-4 border-white dark:border-dark-300">
                  <i className="fa-solid fa-user text-7xl text-gray-400 dark:text-gray-600"></i>
                </div>
              </div>
              
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-dark-400 p-3 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                <i className="fa-solid fa-laptop-code text-xl text-primary-600 dark:text-primary-400"></i>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-400 p-3 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <i className="fa-solid fa-database text-xl text-secondary-500"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-16 md:mt-32 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-600 dark:text-gray-400 mb-2">Scroll down</span>
            <motion.a
              href="#about"
              className="text-primary-600 dark:text-primary-400"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <i className="fa-solid fa-chevron-down text-2xl"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
