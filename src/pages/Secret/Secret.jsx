import React from 'react';
import './Secret.css';
import Navbar from '../../components/Navbar/Navbar';
import Social from '../../components/Social/Social';
import { motion } from 'framer-motion';
import data from '../../data/data';

// Secret page for clicking on the heart!
const Secret = () => {
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
    <div className='secret flex flex-sb flex-column'>
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='flex flex-c flex-sb'
      >
        <div className='secret-main flex flex-c'>
          <div className='secret-desc container flex flex-column'>
            <motion.div variants={containerVariants}>
              <p className='secret-text text-uppercase fw-6 fs-20'>{data.pages[5].content.title}</p>
            </motion.div>
            <motion.div variants={containerVariants}>
              <p className='secret-text fs-9'>{data.pages[5].content.subtitle}</p>
              <p className='secret-text fs-9'>{data.pages[5].content.body}</p>
            </motion.div>
          </div>
          <motion.div variants={containerVariants}>
            <button className='coffee-img'>
              <img src={data.pages[5].content.img} alt="a coffee dancing for you" />
            </button>
          </motion.div>
        </div>
      </motion.div>
      <Social />
    </div>
  )
}

export default Secret