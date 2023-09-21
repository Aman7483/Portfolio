import React, { useEffect, useRef } from 'react';
import Calculator from '../assets/Calculator.png';
import Password_Generator from '../assets/Password_Generator.png';
import Portfolio from '../assets/Portfolio.png';
import Timer from '../assets/Timer.png';
import GoogleSearch from '../assets/GoogleSearch.png';
import TaskManager from '../assets/TaskManager.png';

const projects = [
  // Your project data here...
  {
    title: 'Countdown Timer',
    description: 'A Countdown Timer to use for events',
    link: 'https://aman7483.github.io/Countdown-timer/',
    image: Timer, // Replace with the image path
  },
  {
    title: 'Password Generator',
    description: 'Make complex passwords with ease',
    link: 'https://aman7483.github.io/Password-Generator/',
    image: Password_Generator, // Replace with the image path
  },
  {
    title: 'My Personal Portfolio',
    description: 'My portfolio featuring my all details, created using React & TailwindCSS',
    link: 'https://aman7483.github.io/Portfolio/',
    image: Portfolio, // Replace with the image path
  },
  {
    title: 'Calculator',
    description: 'A Simple Calculator',
    link: 'https://aman7483.github.io/Calculator/',
    image: Calculator, // Replace with the image path
  },
  {
    title: 'Google Search Clone',
    description: 'React-based search engine with modern UI and dark mode',
    link: 'https://aman7483.github.io/GoogleSearch/',
    image: GoogleSearch, // Replace with the image path
  },
  {
    title: 'Task Manager',
    description: 'Task Managing app',
    link: 'https://aman7483.github.io/Task_Manager/',
    image: TaskManager, // Replace with the image path
  },
];

const ProjectsSection = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.2,
    };

    const fadeInOnScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, options);
    const currentRef = bannerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="projects" className="bg-gradient-to-b from-yellow-400 via-emerald-400 to-teal-500 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 banner-container"
              ref={bannerRef}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover absolute top-0 left-0 transition-opacity opacity-90 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white text-center p-4 opacity-0 hover:opacity-100 banner-content">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <p className="text-sm mt-2 underline">View</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>
        {`
          /* Add padding to the cards */
          .banner-container {
            padding: 12px;
            min-height: 320px; /* Increase the minimum height for mobile view */
          }

          /* Flexbox and media query for responsive layout */
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 16px;
          }

          .grid > * {
            flex-basis: calc(50% - 8px); /* 50% with some gap */
            margin: 4px; /* Gap between the cards */
          }

          @media (min-width: 640px) {
            .grid {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 2 columns on larger mobile devices */
            }
          }

          @media (min-width: 768px) {
            .grid > * {
              flex-basis: calc(50% - 8px); /* 50% with some gap */
              margin: 8px; /* Larger gap between the cards on medium screens */
            }
          }

          @media (min-width: 1024px) {
            .grid {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 4 columns on larger screens */
            }

            .grid > * {
              flex-basis: calc(25% - 12px); /* 25% with larger gap */
              margin: 12px; /* Larger gap between the cards on larger screens */
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsSection;
