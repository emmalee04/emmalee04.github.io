import React from 'react';
import './Project.css';
import { FaGithub } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";

// Project component including project logo, title and descriptions
const Project = ({project}) => {
  return (
    <div className='project flex'>
      <div className='project-main flex'>
        <div>
          <img src={project.logo} alt="project logo" className='project-main-img'/>
        </div>
        <div className='project-main-title flex flex-column'>
          <p className='text-center fs-12'>{project.title}</p>
          {project.link && (
            <div className='github-link flex flex-sb'>
              <FaGithub />
                <a href={project.link} className='project-main-link fs-10' target='_blank'>Github</a>
            </div>
          )}
        </div>
      </div>
      <div className='project-desc container flex-sb'>
        <div className='project-desc-skills flex-column'>
          <div className='project-skills flex flex-sb'>
            <FaCog className='skill-logo' size={16}/>
            <p className='project-skills fs-9'>{project.skills}</p>
          </div>
          {project.description}
        </div>
      </div>
    </div>
  )
}

export default Project