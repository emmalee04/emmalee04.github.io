import about from '../images/about.jpg'
import work1 from '../images/work1.png'
import work2 from '../images/work2.png'
import work3 from '../images/work3.png'
import work4 from '../images/work4.png'
import work5 from '../images/work5.png'
import work6 from '../images/work6.png'

const data = {
    navbar: [
      {
        name: 'Works',
        link: '/'
      },
      {
        name: 'Projects',
        link: '/projects'
      },
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'Contact',
        link: '/contact'
      }
    ],
    works: [
      {
        id: 1,
        name: 'Project Trident',
        title: 'Amazon USA',
        subtitle: 'SDE Intern',
        description: 'I worked in the Supply Chain Ops Tech Team to develop a full-stack app using React \& JS and Oracle/Dynamo DB backend to support Amazon\'s 1200+ international warehouses \& fulfillment centers. Implemented changes such as database standardization, dark/light mode, code standardization, and pagination options, saving field IT over 5k hours and \$ 500k+ yearly. Optimized SQL queries to reduce latency using Oracle DB and integrated to the frontend using AWS Lambda.',
        location: 'Austin, TX',
        year: '2025',
        image: work1,
        link: '/work/1',
        technologies: ['React', 'Node.js', 'SQL', 'OracleDB', 'DynamoDB', 'AWS Lambda'],
      },
      {
        id: 2,
        name: 'Target Speech Hearing',
        title: 'UW Mobile Intelligence Lab',
        subtitle: 'Research Assistant',
        description: 'I worked with Prof. Shyam Gollakota to create an iOS app using PyTorch and Swift to identify target speech from noisy environments for improved communication \& accessibility for users with low hearing abilities. Collaborated closely with the systems team to reduce audio loopback latency by 800\% from 8ms to 1ms, improving user experience. Collected audio data samples and wrote a script to create random mix samples.',
        location: 'Seattle, WA',
        year: '2024',
        image: work2,
        link: '/work/2',
        technologies: ['PyTorch', 'Swift'],
      },
      {
        id: 3,
        name: 'CSE311: Foundations of Computing I',
        title: 'UW Paul G. Allen',
        subtitle: 'Teaching Assistant',
        description: 'I taught logics and proofs, applications of logic, and theoretical CS to 200 students. I also led weekly sections and office hours, developed homework/exam material and led corresponding grading.',
        location: 'Seattle, WA',
        year: '2025',
        image: work3,
        link: '/work/3',
        technologies: ['LateX', 'Overleaf'],
      },
      {
        id: 4,
        name: 'FIN205: Personal Finance',
        title: 'UW Foster',
        subtitle: 'Teaching Assistant',
        description: 'I led weekly open office hours on essential personal finance topics and provided technical support on the course platform. Attended weekly staff meetings; supported course development and graded course material for 400 students. I additionally created three python webscrapers that automated parts of the grading process, saving over 100 hours in a single quarter',
        location: 'Seattle, WA',
        year: '2024',
        image: work4,
        link: '/work/4',
        technologies: ['Python', 'Selenium', 'BeautifulSoup'],
      },
      {
        id: 5,
        name: 'CSE190B: DA Seminar',
        title: 'UW Paul G. Allen',
        subtitle: 'Teaching Assistant',
        description: 'I developed and executed weekly seminar plans for 350+ CS direct admit students, and attended weekly staff meetings. Mentored and provided guidance to 28 first-year students.',
        location: 'Seattle, WA',
        year: '2024',
        image: work5,
        link: '/work/5',
        // technologies: ['Figma', 'Storybook'],
      },
      {
        id: 6,
        name: 'COVID-19 Arduino Sensors',
        title: 'UW SEAL',
        subtitle: 'Research Assistant',
        description: 'I created a sensor for COVID-19 detection and safe distancing in a research team; created outreach programs for the underrepresented. Wrote the NSPIRES proposal paper for NASA',
        location: 'Seattle, WA',
        year: '2023',
        image: work6,
        link: '/work/6',
        technologies: ['Arduino'],
      },
    ],
    about: {
      name: 'Emma Lee • 이서현',
      image: about,
    },
    projects: [
      {
        id: 1,
        name: 'Distributed Systems',
        description: 'For this project, I developed a small version of a distributed system in Java based on Google\'s Chubby and PMMC architecture. I further implemented key functionalities such as Paxos/PMMC protocols to ensure system integrity despite network partitions or server failures and sharded key-value storage plus transactions to enhance system performance.',
        category: 'Academic Study',
        year: '2025',
        image: '/project1.jpg',
        link: '/project/1',
        technologies: ['Java']
      },
      {
        id: 2,
        name: 'xk Operating System',
        description: 'I developed a primitive working implementation of an operating system in C based on Unix/Linux architecture booted on real hardware. I implemented key functionalities such as system calls, multiprocessing/concurrency, a comprehensive virtual memory (VM) system, along with transactional logging to ensure data integrity.',
        category: 'Academic Study',
        year: '2024',
        image: '/project2.jpg',
        link: '/project/2',
        technologies: ['C', 'Unix/Linux']
      },
      {
        id: 3,
        name: 'Dubjam',
        description: 'Our team built a real-time collaboration audio platform where users can add tracks, manipulate sequences, play on the synthesizer, and hear results instantly.Utilized React + TS + Node.js for fullstack, Auth0 for user authentication, Ably for real-time collaboration, Tone.js for audio processing, Prisma and MongoDB Atlas for serverless, NoSQL storage, and deployed app with Terraform+AWS. Won MLH\'s Terraform Track in Dubhacks 2024.',
        category: 'Hackathon',
        year: '2024',
        image: '/project3.jpg',
        link: '/project/3',
        technologies: ['React', 'TypeScript', 'Javascript', 'Auth0', 'Ably', 'Tone.js', 'Prisma', 'MongoDB Atlas', 'Terraform', 'AWS']
      },
      {
        id: 4,
        name: 'Web Search Engine',
        description: 'I built a full-featured web server implementation in C/C++, supporting HTTP, TCP/IP, Unix/Linux, POSIX, and DNS protocols.',
        category: 'Academic Study',
        year: '23-24',
        image: '/project4.jpg',
        link: '/project/4',
        technologies: ['C/C++', 'TCP/IP', 'Unix/Linux', 'POSIX', 'DNS']
      },
      {
        id: 5,
        name: 'Everlearn',
        description: 'I built a platform using with React + Firebase where users can exchange learning and teaching. It includes user registration with social media sign-on, an integrated chat function, and a point/achievement system for engagement. Submitted to Dubhacks 2023.',
        category: 'Full Stack Development',
        year: '2023',
        image: '/project5.jpg',
        link: '/project/5',
        technologies: ['React', 'Firebase', 'Google Auth', 'JS']
      },
      {
        id: 6,
        name: 'Bookhub',
        description: 'I built a personal app for book logging. Users can search for books, record dates, ratings, and reviews, and add booklogs to a book list. Utilized Open Library\'s public API and built with React frontend and Node.js + Express.js backend.',
        category: 'Full Stack Development',
        year: '2023',
        image: '/project6.jpg',
        link: '/project/6',
        technologies: ['React', 'Node.js', 'Express.js', 'Open Library API']
      }
    ],
    about: {
      name: 'Emma Lee • 이서현',
      image: about,
      description: [
        "I'm a undergrad student at the University of Washington studying Computer Science and minoring in Math and Business. I love elegant algorithms, theory proofs, and the nitpicky side of system design - generally anything about computing.",
        "Outside of work you can find me blasting off-piste on my snowboard, hitting the trails, whacking some birdies, playing stardew, or going on food ventures with my friends."
      ]
    },
    contact: [
      {
        id: 'location',
        name: 'Seattle, WA, USA',
        link: 'https://www.google.com/maps/place/Seattle,+WA/@47.608597,-122.5046047,11z/data=!3m1!4b1!4m6!3m5!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6061389!4d-122.3328481!16zL20vMGQ5anI?entry=ttu&g_ep=EgoyMDI1MDYyMy4wIKXMDSoASAFQAw%3D%3D',
      },
      {
        id: 'linkedin',
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/emmalee04',
      },
      {
        id: 'email',
        name: 'emmalee1871@gmail.com',
        link: 'mailto:emmalee1871@gmail.com',
      },
      {
        id: 'github',
        name: 'Github',
        link: 'https://github.com/emmalee04',
      },
      {
        id: 'website',
        name: 'emma-lee.org',
        link: 'https://emma-lee.org',
      },
      {
        id: 'resume',
        name: 'Resumé',
        link: 'https://github.com/emmalee04/Resume/blob/main/Seohyun_Lee_Resume.pdf',
      }
    ]
}

export default data;