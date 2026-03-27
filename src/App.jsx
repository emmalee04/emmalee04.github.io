import React from 'react';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Thoughts from './pages/Thoughts/Thoughts.jsx';
import ThoughtDetail from './pages/Thoughts/ThoughtDetail.jsx';
import data from './data/data.js';
import PastelBackground from './components/PastelBackground.jsx';

function App() {
  return (
    <div className="app-shell">
      <PastelBackground />
      <div className="main-content app-content">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<About />} />
            <Route path = "/projects" element = {<Projects />} />
            <Route path = "/thoughts" element = {<Thoughts />} />
            <Route path="/thoughts/:slug" element={<ThoughtDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App