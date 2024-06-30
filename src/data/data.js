import React from 'react';

// assets
import pfp1 from '../assets/about-profile-1.jpg';
import pfp2 from '../assets/about-profile-2.jpg';
import pfp3 from '../assets/about-profile-3.jpg';
import coffee from '../assets/coffee.png';
import resume from '../assets/resume.pdf';
import bookhub_logo from '../assets/bookhub-logo.png';
import everlearn_logo from '../assets/everlearn-logo.png';
import xk_logo from '../assets/xk-logo.png';
import webserver_logo from '../assets/webserver-logo.png';

// graphics
import g1 from '../assets/graphics/graphic-1.png';
import g2 from '../assets/graphics/graphic-2.png';
import g3 from '../assets/graphics/graphic-3.png';
import g4 from '../assets/graphics/graphic-4.png';
import g5 from '../assets/graphics/graphic-5.png';
import g6 from '../assets/graphics/graphic-6.png';
import g7 from '../assets/graphics/graphic-7.png';
import g8 from '../assets/graphics/graphic-8.png';
import g9 from '../assets/graphics/graphic-9.png';
import g10 from '../assets/graphics/graphic-10.png';
import g11 from '../assets/graphics/graphic-11.png';
import g12 from '../assets/graphics/graphic-12.png';
import g13 from '../assets/graphics/graphic-13.png';
import g14 from '../assets/graphics/graphic-14.png';
import g15 from '../assets/graphics/graphic-15.png';
import g16 from '../assets/graphics/graphic-16.png';
import g17 from '../assets/graphics/graphic-17.png';
import g18 from '../assets/graphics/graphic-18.png';
import g19 from '../assets/graphics/graphic-19.png';
import g20 from '../assets/graphics/graphic-20.png';
import g21 from '../assets/graphics/graphic-21.png';
import g22 from '../assets/graphics/graphic-22.png';
import g23 from '../assets/graphics/graphic-23.png';
import g24 from '../assets/graphics/graphic-24.png';

// list of all data
const data = {
  "resume": resume,

  "title": 'emmalee.com',

  "pages": [
    {
      nav: 'Home',
      path: '/',
      content: {
        title: "Hi, I'm Emma 👋",
        subtitle: "Welcome! Take a moment to browse through my portfolio and relax with a cup of coffee in hand.",
      }
    },
    {
      nav: 'Projects',
      path: '/projects',
      content: {
        title: "Projects",
        subtitle: "A sneak peek at my fun creations",
      }
    }, 
    {
      nav: 'Graphics',
      path: '/graphics',
      content: {
        title: "Graphics",
        subtitle: "Some of my designs for COM^2, University of Washington's biggest CS RSO",
      }
    }, 
    {
      nav: 'About',
      path: '/about',
      content: {
        title: "About me",
        subtitle: "Nice to meet you! My name's Emma Lee and I am a student at the University of Washington majoring in Computer Science and minoring in Business and Math.",
        img: [ pfp1, pfp2, pfp3 ],
      }
    },
    {
      nav: 'Resume',
      path: '/resume',
    },
    {
      nav: 'Secret',
      path: '/woahh',
      content: {
        title: "You clicked the heart ❤️",
        subtitle: "I found another coffee lover!",
        body: "(try shaking it)",
        img: coffee,
      }
    }
  ],

  "projects": [
    {
      id: 0,
      title: 'Everlearn',
      logo: everlearn_logo,
      link: 'https://github.com/leemms04/Everlearn',
      skills: 'React, Firebase, HTML/CSS',
      description: (
        <div>
          <p>
            Everlearn is a personal project made for Dubhacks 2023. 
            The app has built-in sign-in functionalities with social media sign-in, 
            built-in chat functions, and a profile and settings page utilizing
            Google Firebase.
          </p>
        </div>
      )
    },
    {
      id: 1,
      title: 'Bookhub',
      logo: bookhub_logo,
      link: 'https://github.com/leemms04/Bookhub',
      skills: 'React, NodeJS, Express, API, HTML/CSS',
      description: (
        <div>
          <p>
            BookHub is a personal project based on a client-server architecture. 
            The app uses the Open Library API to fetch book data and implement 
            search features. Users can search up books, record dates, ratings, 
            and reviews, and add booklogs to a book list. There is an integrated
            point reward system to encourage users to log in and explore more books.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: 'xk Operating System',
      logo: xk_logo,
      link: null,
      skills: 'C/C++, OS, Unix/Linux',
      description: (
        <div>
          <p>
            Commonly known as xv6, the xK operating system is a fully-functional mini OS implementation
            based on Unix/Linux booted on real hardware. It has various syscalls, multiprocessing/concurrency,
            a full-featured VM system, and transactional logging for crash safety. 
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: 'Webserver Search Engine',
      logo: webserver_logo,
      link: null,
      skills: 'C/C++, HTTP, TCP/IP, DNS protocols, POSIX, Unix/Linux',
      description: (
        <div>
          <p>
            A complete web server implementation using C and C++ that has a webpage interface
            with search bar and results page, accepts client search requests, finds documents
            and webpages in the local server built with an integrated file system, and responds
            on the internet. 
          </p>
        </div>
      )
    }
  ],

  "graphics": [
    g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
    g21, g22, g23, g24
  ],

  "about": (
    <div>
      <p className='about-text fw-6 fs-16'>Why CS?</p>
      <p className='about-text fs-9'>As a constantly evolving field of study, there
        are endless things to explore and do! From my fingertips, I can create positive 
        impact that can reach the other ends of the world. Isn't that mindbending?
      </p>
      <p className='about-text fw-6 fs-16'>What has Emma been cooking on?</p>
      <p className='about-text fs-9'>These past two years, I've worked on two research
        projects! In 2022, I've worked as part of UW SEAL's Arduinos sensor team where I've
        worked on improving the COVID-19 proximity sensor and wrote the NSPIRES proposal
        document. In 2023 till now, I've worked on the UW Mobile Intelligence Lab where I 
        built an iOS app using neural networks to identify target speech from noisy environments.
      </p>
      <p className='about-text fs-9'>I work as the Graphics Executive Officer on UW COM^2, 
        the biggest CS RSO on campus! You can check out my graphics 
        <a href="https://www.instagram.com/uwcom2/" target="_blank" rel='noreferrer' className='link'> here </a>!
      </p>
      <p className='about-text fs-9'>I will also be a teaching assistant for UW this upcoming fall
        for FIN 205: Personal Finance.
      </p>
      <p className='about-text fw-6 fs-16'>What else does Emma do?</p>
      <p className='about-text fs-9'>Other than cooking up some code, I enjoy trips, 
        snowboarding, hiking, gaming, and food ventures with friends. I am a certified coffee addict (starbucks
        loves me and I love starbucks). On top of that, my love for music knows
        no bounds (check out my 
        <a href="https://www.youtube.com/channel/UC-3YAfQrwpG98horxPC-fEQ" target="_blank" rel='noreferrer' className='link'> youtube channel here</a>).
        I love experimenting with new things, going on full send, thinking deep thoughts, and making
        life as fun as it can possibly get 
        <a href="https://www.instagram.com/ebaisui/" target="_blank" rel='noreferrer'> ❤️ </a> Please feel free to reach out to me and have a chat together below!
      </p>
    </div>
  ),
}

export default data;