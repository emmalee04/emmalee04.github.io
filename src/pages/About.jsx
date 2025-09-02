import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import data from '../data/data';

const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 md:pt-8 md:pl-[30%] p-8">
        <div className={`about-detail-container transition-all duration-700 ease-out ${
          isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
        }`}>
          {/* About image */}
          <div className="about-image">
            <img 
              src={data.about.image} 
              alt={data.about.name}
              className="w-full aspect-video object-cover"
            />
          </div>

          <p className="body-18 mt-16">About</p>
          
          {/* About header */}
          <div className="about-header mt-8 ">
            <h1 className="heading-1">{data.about.name}</h1>
          </div>

          {/* Work details */}
          <div className="about-content mt-8">
            <div className="flex flex-col gap-4">
              {data.about.description.map((paragraph, index) => (
                <p key={index} className="body-16">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;