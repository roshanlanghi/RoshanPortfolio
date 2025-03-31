import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu} 
        className="text-gray-700 dark:text-gray-300"
        aria-label="Toggle menu"
      >
        <i className="fa-solid fa-bars text-xl"></i>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-dark-500 shadow-md overflow-hidden z-50"
          >
            <nav className="flex flex-col items-center space-y-0">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="w-full text-center py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Social Links */}
              <div className="w-full flex justify-center gap-6 py-4 border-t border-gray-200 dark:border-dark-400">
                <a 
                  href="https://github.com/roshanlanghi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github text-xl"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/roshan-langhi-88b502304/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
