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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
