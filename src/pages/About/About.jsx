import React from 'react';
import './About.css';
import Navbar from '../../components/Navbar/Navbar';
import Social from '../../components/Social/Social';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import data from '../../data/data';

// About page with profile pictures and personal descriptions
const About = () => {
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

  // Image carousel from Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);
  
  return (
    <div className='about flex flex-sb flex-column'>
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='flex flex-c flex-sb'
      >
        <div className='about-container flex flex-column'>
          <div className='about-title container flex flex-column'>
            <motion.div variants={containerVariants}>
              <p className='text-uppercase fw-6 fs-20'>{data.pages[2].content.title}</p>
            </motion.div>
            <motion.div variants={containerVariants}>
              <p className='text-center fs-9'>{data.pages[2].content.subtitle}</p>
            </motion.div>
          </div>
          <motion.div variants={containerVariants}> 
            <div className='image-list flex flex-c flex-sb'>
              <img src={data.pages[2].content.img[0]} alt="profile image" className='about-img'/>
              <img src={data.pages[2].content.img[1]} alt="profile image" className='about-img'/>
              <img src={data.pages[2].content.img[2]} alt="profile image" className='about-img'/>
            </div>
            <section className='carousel'>
              <div className="image-carousel" ref={emblaRef}>
                <div className="carousel-container">
                  <img src={data.pages[2].content.img[0]} alt="profile image" className='carousel-slide about-img'/>
                  <img src={data.pages[2].content.img[1]} alt="profile image" className='carousel-slide about-img'/>
                  <img src={data.pages[2].content.img[2]} alt="profile image" className='carousel-slide about-img'/>
                </div>
              </div>

              <div className="embla__controls">
                <div className="embla__buttons">
                  <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                  <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                  {scrollSnaps.map((_, index) => (
                    <DotButton
                      key={index}
                      onClick={() => onDotButtonClick(index)}
                      className={'embla__dot'.concat(
                        index === selectedIndex ? ' embla__dot--selected' : ''
                      )}
                    />
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
          <motion.div variants={containerVariants}> 
            <div className='about-desc container flex-column'>
              {data.about}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Social />
    </div>
  )
}

export default About