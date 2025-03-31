import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-dark-700 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-bold text-white flex items-center gap-1">
              <span>&lt;</span>RL<span>/&gt;</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Software developer specialized in C++, Python, Java, and Data Science solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/roshanlanghi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/roshan-langhi-88b502304/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
              <a 
                href="mailto:roshan.langhi@example.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope text-xl"></i>
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Roshan Langhi. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
