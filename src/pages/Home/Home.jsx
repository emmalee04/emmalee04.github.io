import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Social from '../../components/Social/Social';
import sound from '../../assets/euns-sunset.wav';
import { IoMusicalNote } from "react-icons/io5";
import { motion } from 'framer-motion';
import data from '../../data/data';

const Home = () => {
  const [playing, isPlaying] = useState(false);
  const audioRef = useRef(new Audio(sound));
  audioRef.current.volume = 0;

  useEffect(() => {
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const fadeAudioIn = () => {
    audioRef.current.volume = 0;
    audioRef.current.play();
    let volume = 0;
    const fade = setInterval(() => {
      if (volume < 1.0) {
        volume += 0.05;
        if (volume > 1.0) volume = 1.0;
        audioRef.current.volume = volume;
      } else {
        clearInterval(fade);
      }
    }, 50);
  };

  const fadeAudioOut = () => {
    let volume = audioRef.current.volume;
    const fade = setInterval(() => {
      if (volume > 0.0) {
        volume -= 0.05;
        if (volume < 0.0) volume = 0.0;
        audioRef.current.volume = volume;
      } else {
        clearInterval(fade);
        audioRef.current.pause();
      }
    }, 50);
  };

  const play = () => {
    if (playing) {
      fadeAudioOut();
    } else {
      fadeAudioIn();
    }
    isPlaying(!playing);
  };

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
    <div className='home flex flex-sb flex-column'>
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='flex flex-c flex-sb'
      >
        <div className='home-container'>
          <div className='home-img'></div>
          <div className='home-desc container flex flex-column'>
            <motion.div variants={containerVariants}>
              <p className='text-uppercase fw-6 fs-20'>{data.pages[0].content.title}</p>
            </motion.div>
            <motion.div variants={containerVariants}>
              <p className='fs-9'>{data.pages[0].content.subtitle}</p>
            </motion.div>
            <motion.div variants={containerVariants}>
              <button onClick={play} className='home-btn flex'>
                <p className='fs-9'>{playing ? 'Pause' : 'Play'}</p>
                <IoMusicalNote />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Social />
    </div>
  )
}

export default Home