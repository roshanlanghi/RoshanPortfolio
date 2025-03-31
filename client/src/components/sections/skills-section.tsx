import { useState } from "react";
import { motion } from "framer-motion";
import { SkillBar } from "@/components/ui/skill-bar";

// Skill data
const programmingSkills = [
  { name: "C++", percentage: 90 },
  { name: "Python", percentage: 85 },
  { name: "Java", percentage: 80 },
  { name: "JavaScript", percentage: 75 },
];

const dataScienceSkills = [
  { name: "Machine Learning", percentage: 85 },
  { name: "Data Analysis", percentage: 90 },
  { name: "Statistical Modeling", percentage: 80 },
  { name: "Big Data Technologies", percentage: 75 },
];

const technologies = [
  { icon: "fa-brands fa-react", name: "React" },
  { icon: "fa-brands fa-node-js", name: "Node.js" },
  { icon: "fa-solid fa-database", name: "MongoDB" },
  { icon: "fa-brands fa-aws", name: "AWS" },
  { icon: "fa-brands fa-docker", name: "Docker" },
  { icon: "fa-solid fa-code-branch", name: "Git" },
  { icon: "fa-solid fa-table", name: "SQL" },
  { icon: "fa-solid fa-brain", name: "TensorFlow" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-wrapper">
      <div className="container-padding">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">My Skills</h2>
          <div className="section-heading-line"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with various technologies throughout my career. Here are the main areas I specialize in.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Programming Languages */}
          <motion.div 
            className="bg-white dark:bg-dark-400 p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <i className="fa-solid fa-code text-primary-600 dark:text-primary-400"></i>
              Programming Languages
            </h3>
            
            {programmingSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage} 
                color="primary"
              />
            ))}
          </motion.div>
          
          {/* Data Science */}
          <motion.div 
            className="bg-white dark:bg-dark-400 p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <i className="fa-solid fa-database text-secondary-500"></i>
              Data Science
            </h3>
            
            {dataScienceSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage}
                color="secondary" 
              />
            ))}
          </motion.div>
        </div>
        
        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-8 text-center text-gray-900 dark:text-white">Technologies I work with</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-badge"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <i className={tech.icon}></i>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
