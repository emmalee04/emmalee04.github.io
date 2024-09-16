import React from 'react';
import './Social.css';
import { Link } from 'react-router-dom';
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import data from '../../data/data';

// Small navbar including social media links (email, linkedin, github, gitlab)
const Social = () => {
  return (
    <div className='social flex flex-sb'>
      <div className='social-item flex'>
        <FaRegCopyright />
        <p className='fs-9'>2024 by Emma Lee</p>
      </div>
      <div className='social-item-links'>
        <a href="mailto:emmalee1871@gmail.com" className='social-link'>
          <IoMail className='social-logo' />
        </a>
        <a href="https://www.linkedin.com/in/emmalee04/" className='social-link'>
          <FaLinkedin className='social-logo' />
        </a>
        <a href="https://github.com/emmalee04" className='social-link'>
          <FaGithub className='social-logo' />
        </a>
        <a href="https://gitlab.cs.washington.edu/slee04" className='social-link'>
          <FaGitlab className='social-logo' />
        </a>
      </div>
      <div className='social-item flex'>
        <p className='fs-9'>made with coffee love</p>
        <button>
          <Link to={data.pages[5].path}><CiHeart /></Link>
        </button>
      </div>
    </div>
  )
}

export default Social