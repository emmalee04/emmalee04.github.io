import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import data from '../../data/data';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  // Scroll to top when component mounts or projectId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);
  
  console.log('ProjectDetail rendered with projectId:', projectId);
  
  // Find the project by the projectId parameter
  const projectNumber = parseInt(projectId);
  const project = data.projects.find(p => p.id === projectNumber);

  console.log('Found project:', project);

  if (!project) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="pt-24 md:pt-8 md:pl-[30%] p-8">
          <div className="project-detail-container">
            <h1 className="heading-1">Project not found</h1>
            <Link to="/projects" className="body-14">← Back to Projects</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 md:pt-8 md:pl-[30%] p-8">
        <div className="project-detail-container">
          {/* Back button */}
          <Link to="/projects" className="back-link body-14">
            ← Back to Projects
          </Link>

          {/* Project header */}
          <div className="project-header">
            <h1 className="heading-1">{project.name}</h1>
            <div className="project-meta">
              <span className="heading-title">{project.category}</span>
              <span className="heading-title">•</span>
              <span className="heading-title">{project.year}</span>
            </div>
          </div>

          {/* Project image */}
          {/* <div className="project-image">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full aspect-video object-cover"
            />
          </div> */}

          {/* Project details */}
          <div className="project-content">
            <div className="project-section">
              <h2 className="heading-2">Description</h2>
              <p className="body-18">{project.description}</p>
            </div>

            <div className="project-section">
              <h2 className="heading-2">Technologies</h2>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
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

export default ProjectDetail;
