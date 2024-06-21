import React from 'react';
import './Resume.css';
import Navbar from '../../components/Navbar/Navbar';
import Social from '../../components/Social/Social';
import data from '../../data/data';

const Resume = () => {
  return (
    <div className='resume flex flex-sb flex-column'>
      <Navbar />
      <iframe src={data.resume} width='90%' height='100%'/>
      <Social />
    </div>
  )
}

export default Resume