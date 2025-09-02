import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import Works from './pages/Works.jsx';
import Projects from './pages/Projects/Projects.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import WorkDetail from './pages/WorkDetail/WorkDetail.jsx';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail.jsx';
import data from './data/data.js';
import LoadingScreen from './components/LoadingScreen.jsx';
import CustomCursor from './components/CustomCursor.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This timer will set isLoading to false after 2500ms (2.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // This is a cleanup function that runs if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty array ensures this effect runs only once when the app mounts

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <CustomCursor />

      <div className={`main-content transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <BrowserRouter>
          <Routes>
            {/* <Route path = {data.navbar[0].link} element = {<Home />} /> */}
            <Route path = {data.navbar[0].link} element = {<Works />} />
            <Route path = {data.navbar[1].link} element = {<Projects />} />
            <Route path = {data.navbar[2].link} element = {<About />} />
            <Route path = {data.navbar[3].link} element = {<Contact />} />
            <Route path="/work/:workId" element={<WorkDetail />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App