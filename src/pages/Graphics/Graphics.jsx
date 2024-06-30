import React from 'react';
import './Graphics.css';
import Navbar from '../../components/Navbar/Navbar';
import Social from '../../components/Social/Social';
import { motion } from 'framer-motion';
import data from '../../data/data';

const Graphics = () => {
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
    <div className='graphics flex flex-sb flex-column'>
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='flex flex-c flex-sb'
      >
        <div className='graphics-container flex flex-column'>
          <div className='graphics-title container flex flex-column'>
            <motion.div variants={containerVariants}>
              <p className='text-uppercase fw-6 fs-20'>{data.pages[2].content.title}</p>
            </motion.div>
            <motion.div variants={containerVariants}>
              <p className='text-center fs-9'>{data.pages[2].content.subtitle}</p>
            </motion.div>
            <motion.div variants={containerVariants}>
              <p className='text-center fs-9'>Check out our Instagram 
              <a href="https://www.instagram.com/uwcom2/" target="_blank" rel='noreferrer' className='link'> here </a>!</p>
            </motion.div>
          </div>
          <div className='graphics-content grid'>
            {
              data.graphics.map((graphic, index) => {
                return (
                  <img key={index} src={graphic} alt="graphic" className='graphic-img' />
                )
              })
            }
          </div>
        </div>
      </motion.div>
      <Social />
    </div>
  )
}

export default Graphics