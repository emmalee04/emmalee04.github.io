import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import data from '../../data/data'
import './Projects.css'

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      {/* navbar accommodation */}
      <main className="pt-24 md:pt-8 md:pl-[30%] p-8">
        <div className={`max-w-6xl transition-all duration-700 ease-out ${
          isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
        }`}>
          {/* Projects Header */}
          <div className="mb-16">
            {/* <h1 className="heading-1 mb-4">Projects</h1> */}
            <p className="body-18 mt-16 pb-8">Projects</p>
            {/* <h2 className="text-5xl font-semibold text-white mb-4">Development & Design</h2>
            <p className="body-18">A collection of my technical projects and creative work</p> */}
          </div>

          {/* Projects List */}
          <div className="projects-container">
            {data.projects.map((project, index) => (
              <div
                key={project.id}
                className="project-row"
              >
                <Link to={project.link} className="project-link">
                  <div className="project-content">
                    <div className="project-info">
                      <span className="project-index">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className="project-title">{project.name}</h3>
                      {/* <p className="project-description">{project.description}</p> */}
                      <span className="project-category">{project.category}</span>
                      <span className="project-year">{project.year}</span>
                    </div>
                    
                    {/* <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <span className="project-year">{project.year}</span>
                    </div> */}
                    

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Projects