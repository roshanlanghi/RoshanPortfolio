import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileMenu } from "@/components/ui/mobile-menu";

const NAVIGATION_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const activeSection = useActiveSection();

  return (
    <header className="fixed w-full bg-white bg-opacity-90 dark:bg-dark-500 dark:bg-opacity-90 backdrop-blur-sm shadow-sm z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-bold text-primary-600 dark:text-primary-400 flex items-center gap-2"
        >
          <span>&lt;</span>Roshan Langhi<span>/&gt;</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              }`}
            >
              {link.label}
            </a>
          ))}
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/roshanlanghi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-lg"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/roshan-langhi-88b502304/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in text-lg"></i>
            </a>
            <ThemeToggle />
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <MobileMenu links={NAVIGATION_LINKS} />
        </div>
      </div>
    </header>
  );
}
