import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Project data
const projects = [
  {
    id: 1,
    title: "Advanced Recommendation System",
    description: "A machine learning-based recommendation system that uses collaborative filtering and content-based algorithms to provide personalized recommendations.",
    image: "/assets/projects/recommendation-system.svg",
    tags: ["Python", "Machine Learning"],
    tagColors: ["bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300", "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"],
    category: "Python",
  },
  {
    id: 2,
    title: "Real-time Data Processing Engine",
    description: "A high-performance C++ engine for processing large volumes of data in real-time with minimal latency. Used in financial and IoT applications.",
    image: "/assets/projects/data-processing-engine.svg",
    tags: ["C++", "High Performance"],
    tagColors: ["bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300", "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"],
    category: "C++",
  },
  {
    id: 3,
    title: "Distributed Task Management System",
    description: "A Java-based distributed system for task scheduling and execution across multiple nodes with fault tolerance and load balancing.",
    image: "/assets/projects/task-management-system.svg",
    tags: ["Java", "Distributed Systems"],
    tagColors: ["bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300", "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"],
    category: "Java",
  },
  {
    id: 4,
    title: "Predictive Analytics Dashboard",
    description: "An interactive dashboard for visualizing data trends and making predictions using advanced statistical models and machine learning techniques.",
    image: "/assets/projects/analytics-dashboard.svg",
    tags: ["Data Science", "Python", "Web"],
    tagColors: ["bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300", "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300", "bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300"],
    category: "Data Science",
  },
  {
    id: 5,
    title: "Compiler for Custom Language",
    description: "Designed and implemented a compiler for a custom programming language, featuring lexical analysis, parsing, semantic analysis, and code generation.",
    image: "/assets/projects/custom-language-compiler.svg",
    tags: ["C++", "Language Design"],
    tagColors: ["bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300", "bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300"],
    category: "C++",
  },
  {
    id: 6,
    title: "Neural Network Framework",
    description: "A flexible neural network framework with support for different architectures, optimization algorithms, and training methods for deep learning research.",
    image: "/assets/projects/neural-network-framework.svg",
    tags: ["Python", "Data Science"],
    tagColors: ["bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300", "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"],
    category: "Data Science",
  }
];

// Categories for filtering
const categories = ["All", "C++", "Python", "Java", "Data Science"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-wrapper bg-gray-100 dark:bg-dark-400 transition-colors">
      <div className="container-padding">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">My Projects</h2>
          <div className="section-heading-line"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects and open-source contributions.
          </p>
        </motion.div>
        
        {/* Project filter tabs */}
        <motion.div 
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary-600 text-white"
                    : "bg-white dark:bg-dark-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div className="h-48 bg-gray-200 dark:bg-dark-300 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <i className="fa-solid fa-code text-5xl text-gray-400 dark:text-gray-600"></i>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`px-2 py-1 ${project.tagColors[i]} text-xs rounded`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <a 
                      href={`https://github.com/roshanlanghi`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                    >
                      View Project
                    </a>
                    <div className="flex gap-3">
                      <a 
                        href={`https://github.com/roshanlanghi`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="https://github.com/roshanlanghi" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline">
            <span>View more on GitHub</span>
            <i className="fa-brands fa-github"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
