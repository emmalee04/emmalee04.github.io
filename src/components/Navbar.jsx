import React, { useState, useEffect } from 'react';
import data from '../data/data';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import CustomLink from './CustomLink';

// A new helper component to handle the per-word animation logic.
const AnimatedText = ({ text, isVisible, className }) => {
  return (
    <p className={className}>
      {text.split(' ').map((word, index) => (
        // Wrapper to handle spacing between words
        <span key={index} className="inline-block mr-[0.25em]">
          {/* The individual word with the animation classes */}
          <span
            className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-[10px] blur-[10px]'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }} // 50ms = 0.05s stagger delay
          >
            {word}
          </span>
        </span>
      ))}
    </p>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:flex bg-black z-50 p-[30px] flex-col justify-between h-screen
                      fixed top-0 left-0 w-[30%] min-w-[288px] max-w-sm">
        <div className="navbar-top">
          {/* <p className="heading-1">Emma Lee</p>
          <p className="heading-title">creator + adventurer</p> */}
          <AnimatedText text="Emma Lee" isVisible={isMounted} className="heading-1" />
          {/* <AnimatedText text="creator + adventurer" isVisible={isMounted} className="heading-title" /> */}
        </div>
        <div className={`transition-all duration-700 ease-out flex flex-col flex-1 justify-between mt-10
                        ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div>
            <div className="navbar-middle">
              {/* <p><span className="body-14">I have a thing for creating impactful experiences and venturing into the unknown.</span></p> */}
            </div>
            <div className="navbar-bottom mt-10">
              <div className="navbar-bottom-links flex flex-col gap-2">
                {data.navbar.map((link) => (
                  <CustomLink key={link.link} to={link.link} className='body-14'>{link.name}</CustomLink>
                ))}
              </div>
            </div>
          </div>
          <div className='navbar-trademark flex items-center gap-0.5'>
            <p className='body-12'>© {new Date().getFullYear()} - by emmalee</p>
            <a 
              href="https://www.instagram.com/ebaisui/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white"
            >
              <Heart size={8} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-black flex justify-between items-center p-4 h-20">
        <div>
          <p className="heading-1">Emma Lee</p>
          {/* <p className="heading-title">creator + adventurer</p> */}
        </div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center items-center w-7 h-7"
        >
          <div className="w-7 h-0.5 bg-white transition-all duration-300 ease-out mb-1.5" 
            style={{
              transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'rotate(0deg) translateY(0px)'
            }} />
          <div className="w-7 h-0.5 bg-white transition-all duration-300 ease-out" 
            style={{
              transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'rotate(0deg) translateY(0px)'
            }} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed left-0 w-full bg-black z-40
                   p-4 flex flex-col justify-between
                   transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]
                   top-20 h-[calc(100vh-5rem)]
                   ${menuOpen ? 'duration-500' : 'duration-500 delay-300'}
                   ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div 
          className={`transition-all 
                    ${menuOpen ? 'duration-500 delay-200 opacity-100 translate-y-0' : 'duration-300 opacity-0 translate-y-4'}`}
        >
          <div className="flex flex-col items-end text-right gap-10 mt-10">
            <div className="navbar-bottom">
              <div className="navbar-bottom-links flex flex-col gap-2">
                {data.navbar.map((link) => (
                  <CustomLink key={link.link} to={link.link} className='menu-mobile w-full text-right' onClick={handleLinkClick}>{link.name}</CustomLink>
                ))}
              </div>
            </div>
            {/* <div className="navbar-middle">
              <p><span className="body-14">I have a thing for creating impactful experiences and venturing into the unknown.</span></p>
            </div> */}
          </div>
        </div>
        
        <div 
          className={`navbar-trademark text-right transition-all
                     ${menuOpen ? 'duration-500 delay-300 opacity-100 translate-y-0' : 'duration-300 opacity-0 translate-y-4'}`}
        >
          <div className="flex items-center justify-end gap-0.5" >
            <p className='body-12'>© {new Date().getFullYear()} - by emmalee</p>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white"
            >
              <Heart size={8} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;