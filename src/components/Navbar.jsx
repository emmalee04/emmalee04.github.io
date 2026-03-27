import React from 'react';
import data from '../data/data';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header className="sticky z-50 mb-8 top-0 backdrop-blur-md bg-[var(--bg-primary)/40]">
      <div className="w-full max-w-3xl mx-auto px-6 md:px-4 flex justify-end items-center h-16 border-b-[1.5px]" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center gap-4">
          {data.navbar.map((link) => (
            <Link 
              key={link.link} 
              to={link.link} 
              className="text-[var(--gray-color)] hover:text-[var(--dark-color)] transition-colors duration-400"
            >
              {link.name}
            </Link>
          ))}
          </div>
      </div>
    </header>
  );
};

export default Navbar;