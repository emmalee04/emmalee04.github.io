import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import data from '../../data/data';
import './WorkDetail.css';

const WorkDetail = () => {
  const { workId } = useParams();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to top when component mounts or workId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [workId]);
  
  // Find the work by the workId parameter (e.g., "1" -> work with id 1)
  const workNumber = parseInt(workId);
  const work = data.works.find(w => w.id === workNumber);

  if (!work) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="pt-24 md:pt-8 md:pl-[30%] p-8">
          <div className="work-detail-container">
            <h1 className="heading-1">Work not found</h1>
            <Link to="/" className="body-14">← Back to Home</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 md:pt-8 md:pl-[30%] p-8">
        <div className={`work-detail-container transition-all duration-700 ease-out ${
          isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
        }`}>
          {/* Back button */}
          <Link to="/" className="back-link body-14">
            ← Back to Works
          </Link>

          {/* Work header */}
          <div className="work-header">
            <h1 className="heading-1">{work.name}</h1>
            <div className="work-meta">
              <span className="heading-title">{work.category}</span>
              <span className="heading-title">•</span>
              <span className="heading-title">{work.year}</span>
            </div>
          </div>

          {/* Work image */}
          <div className="work-image">
            <img 
              src={work.image} 
              alt={work.name}
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Work details */}
          <div className="work-content">
            <div className="work-section">
              <h2 className="heading-2">Description</h2>
              <p className="body-18">{work.description}</p>
            </div>

            {/* <div className="work-section">
              <h2 className="heading-2">Client</h2>
              <p className="body-14">{work.client}</p>
            </div> */}

            <div className="work-section">
              <h2 className="heading-2">Technologies</h2>
              <div className="tech-tags">
                {work.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag body-12">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkDetail;