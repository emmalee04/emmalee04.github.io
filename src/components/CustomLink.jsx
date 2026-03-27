import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, onClick, className, children }) => {
  // Check if the link is external (starts with http, mailto, etc.)
  const isExternal = to.startsWith('http') || to.startsWith('mailto:');
  const combinedClassName = `navbar-link ${className || ''}`.trim();

  // If it's an external link, render a standard <a> tag
  if (isExternal) {
    return (
      <a 
        href={to} 
        onClick={onClick} 
        className={combinedClassName}
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security best practice for external links
      >
        {children}
      </a>
    );
  }

  // Otherwise, render a React Router <Link> for internal navigation
  return (
    <Link 
      to={to} 
      onClick={onClick} 
      className={combinedClassName}
    >
      {children}
    </Link>
  );
};

export default CustomLink;

