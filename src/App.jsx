import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Graphics from './pages/Graphics/Graphics.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Secret from './pages/Secret/Secret.jsx';
import data from './data/data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {data.pages[0].path} element = {<Home />} />
        <Route path = {data.pages[1].path} element = {<Projects />} />
        <Route path = {data.pages[2].path} element = {<Graphics />} />
        <Route path = {data.pages[3].path} element = {<About />} />
        <Route path = {data.pages[4].path} element = {<Resume />} />
        <Route path = {data.pages[5].path} element = {<Secret />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
