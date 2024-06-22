import React from 'react';
import './Projects.css';
import Navbar from '../../components/Navbar/Navbar';
import Social from '../../components/Social/Social';
import Project from '../../components/Project/Project';
import { motion } from 'framer-motion';
import data from '../../data/data';

// Projects page listing all the projects I've done so far
const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className='projects flex flex-sb flex-column'>
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='flex flex-c flex-sb'
      >
        <div className='projects-container flex flex-column flex-c'>
          <div className='projects-title container flex flex-c flex-column'>
            <motion.div variants={containerVariants}>
              <p className='text-uppercase fw-6 fs-20'>{data.pages[1].content.title}</p>
            </motion.div>
            <motion.div variants={containerVariants}>
              <p className='text-center fs-9'>{data.pages[1].content.subtitle}</p>
            </motion.div>
          </div>
          <motion.div variants={containerVariants}>
            <div className='project-content flex flex-column flex-sb'>
              {
                data.projects.map((project) => {
                  return (
                    <Project key={project.id} project={project} className='project-card'></Project>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Social />
    </div>
  )
}

export default Projects