import React from 'react';
import Navbar from '../components/Navbar.jsx';
import projectsContent from '../content/projects.md?raw';
import MarkdownRenderer from '../components/MarkdownRenderer';
import projects from '../images/projects.png';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24 md:pt-8 p-8 flex-1">
        <div className="max-w-[768px] mx-auto">
          {/* Hero Section */}
          <section className="mb-16 unblur-item" style={{ '--i': 0 }}>
            <div className='flex items-center gap-2 mb-8'>
              <h1 className="heading-1 underline decoration-1 decoration-wavy underline-offset-6 mb-8">
                projects
              </h1>
              <img src={projects} alt="projects" className="w-10 h-10" />
            </div>
            <div className="markdown-content body-14">
              <MarkdownRenderer content={projectsContent} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Projects;