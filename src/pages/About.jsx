import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import aboutContent from '../content/about.md?raw';
import ReactMarkdown from 'react-markdown';
import about from '../images/about.png';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24 md:pt-8 p-8 flex-1">
        <div className="max-w-[768px] mx-auto">
          {/* Hero Section */}
          <section className="mb-16 unblur-item" style={{ ['--i']: 0 }}>
            <div className='flex items-center gap-2 mb-8'>
              <h1 className="heading-1 underline decoration-1 decoration-wavy underline-offset-6 mb-8">
                emma lee
              </h1>
              <img src={about} alt="about" className="w-10 h-10" />
            </div>
            <div className="markdown-content body-14">
            <ReactMarkdown
              components={{
                a: ({ href, children, ...props }) => {
                  const isInternal = href && href.startsWith('/');
                  const isHeart = children === '♡';
                  const className = isHeart ? "no-underline transition-opacity" : "text-[var(--dark-gray-color)] underline decoration-[var(--gray-color)] hover:decoration-black transition-all";

                  if (isInternal) {
                    return (
                      <Link to={href} className={className}>
                        {children}
                      </Link>
                    );
                  }

                  return (
                    <a 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={className}
                    >
                      {children}
                    </a>
                  );
                }
              }}
            >
              {aboutContent}
            </ReactMarkdown>
            </div>
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default About;

