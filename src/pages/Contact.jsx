import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import data from '../data/data'
import CustomLink from '../components/CustomLink'
import logo from '../images/logo.png'

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      {/* navbar accommodation */}
      <main className="pt-24 md:pt-8 md:pl-[30%] p-8">
        <div className={`max-w-4xl transition-all duration-700 ease-out ${
          isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
        }`}>
          {/* Contact Header */}
          <div className="mb-16">
            <p className="body-18 mt-16 pb-8">Contact</p>
            <div className="flex items-center gap-4" >
              <h2 className="text-5xl font-semibold text-white mb-8">Let's connect</h2>
              <img src={logo} alt="logo" className="w-16 h-16 mb-8" />
            </div>
            <p className="body-18">
              Reach out! Let's have a{' '}
              <span className="text-coffee">coffee</span>
              /<span className="text-matcha">matcha</span> meet :)
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-[max-content_max-content] gap-2 gap-x-16">
            {data.contact.map((item) => (
              <div key={item.id} className="flex flex-col items-start">
                <CustomLink
                  key={item.id}
                  to={item.link}
                  className="body-14"
                >
                  {item.name}
                </CustomLink>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact