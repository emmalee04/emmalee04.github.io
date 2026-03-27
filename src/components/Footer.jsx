import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full max-w-[768px] mx-auto mt-8 mb-8 px-8 border-t-[1.5px]" style={{ borderColor: 'var(--border-color)' }}>
      <div className="flex items-center justify-between pt-8 leading-relaxed tracking-tight">
        {/* <p className="body-14">© {new Date().getFullYear()} - by emmalee</p> */}
        <div className="flex items-center justify-end gap-0.5" >
            <p className='body-14'>© {new Date().getFullYear()} - by emmalee</p>
            <a 
            href="https://www.instagram.com/ebaisui/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--text-primary)]"
            >
            <Heart size={8} />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;