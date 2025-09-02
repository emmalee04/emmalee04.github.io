import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import data from '../data/data.js'

const INITIAL_PRELOAD_COUNT = 4; // first screenful

const Works = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const count = Math.min(INITIAL_PRELOAD_COUNT, data.works.length);
    const preload = (src) => new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      if (img.complete) {
        resolve();
      } else {
        img.onload = () => resolve();
        img.onerror = () => resolve(); // don't block on errors
      }
    });

    Promise.all(data.works.slice(0, count).map((w) => preload(w.image))).then(() => {
      setIsReady(true);
    });
  }, []);

  return (
    <div>
      <Navbar />
      {/* navbar accommodation */}
      <main className="pt-24 md:pt-8 md:pl-[30%] p-8">
        {/* image grid container */}
        {!isReady ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: INITIAL_PRELOAD_COUNT }).map((_, i) => (
              <div key={i} className="aspect-square bg-neutral-800/50 animate-pulse rounded-sm" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.works.map((work, index) => (
              <Link
                key={work.id}
                to={work.link}
                className="aspect-square overflow-hidden relative group block transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <div className="relative w-full h-full">
                  <img
                    src={work.image}
                    alt={work.name}
                    loading={index < INITIAL_PRELOAD_COUNT ? 'eager' : 'lazy'}
                    fetchPriority={index < INITIAL_PRELOAD_COUNT ? 'high' : 'auto'}
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:brightness-50"
                  />
                  {/* Top left overlay with work name */}
                  <div className="absolute top-0 left-0 p-6">
                    <h3 className="heading-1 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                      {work.name}
                    </h3>
                  </div>
                  {/* Bottom overlay with title and subtitle */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-light mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                      {work.title}
                    </h3>
                    <p className="text-gray-200 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-100 line-clamp-2">
                      {work.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Works