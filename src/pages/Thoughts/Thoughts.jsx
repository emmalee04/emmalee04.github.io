import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import thoughtsData from '../../data/thoughtsdata.js'; 
import thoughts from '../../images/thoughts.png';

const Thoughts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24 md:pt-8 p-8 flex-1">
        <div className="max-w-[768px] mx-auto">
          {/* Header */}
          <div className="mb-16 unblur-item" style={{ '--i': 0 }}>
            <div className='flex items-center gap-2 mb-8'>
              <h1 className="heading-1 underline decoration-1 decoration-wavy underline-offset-6 mb-8">
                thoughts
              </h1>
              <img src={thoughts} alt="thoughts" className="w-10 h-10" />
            </div>
          </div>

          {/* Thoughts List */}
          <div className="flex flex-col border-t border-[var(--gray-light-color)]">
            {thoughtsData.map((thought, index) => (
              <div
                key={thought.id}
                className="unblur-item border-b border-[var(--gray-light-color)] py-6 transition-all duration-300 hover:bg-[rgba(0,0,0,0.02)] group"
                style={{ '--i': index + 1 }}
              >
                {/* We use the slug for the link now */}
                <Link to={`/thoughts/${thought.slug}`} className="block no-underline text-inherit">
                  <div className="flex justify-between items-center relative">
                    <div className="flex-1 flex items-center gap-8 md:gap-12">
                      {/* Index Number */}
                      <span className="text-sm text-[var(--gray-color)] font-normal min-w-[2rem] shrink-0">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>

                      {/* Title */}
                      <h3 className="body-16 text-[var(--dark-color)] !m-0 min-w-[150px] flex-1 transition-colors duration-300">
                        {thought.title}
                      </h3>

                      {/* Date - formatted nicely */}
                      <span className="text-xs text-[var(--gray-color)] font-normal text-right shrink-0 ml-auto">
                        {new Date(thought.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short' 
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Thoughts;