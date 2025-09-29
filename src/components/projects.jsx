import React, { useEffect, useRef, useState } from 'react';
import Calculator from '../assets/Calculator.png';
import Password_Generator from '../assets/Password_Generator.png';
import Portfolio from '../assets/Portfolio.png';
import Timer from '../assets/Timer.png';
import GoogleSearch from '../assets/GoogleSearch.png';
import TaskManager from '../assets/TaskManager.png';

const projects = [
  {
    title: 'Google Search Clone',
    description: 'React-based search engine with modern UI, dark mode, and responsive design. Features real-time search suggestions and clean interface.',
    link: 'https://aman7483.github.io/GoogleSearch/',
    image: GoogleSearch,
    tech: ['React', 'CSS3', 'JavaScript', 'API Integration'],
    category: 'Web App'
  },
  {
    title: 'Task Manager Pro',
    description: 'Advanced task management application with drag-and-drop functionality, priority levels, and progress tracking.',
    link: 'https://aman7483.github.io/Task_Manager/',
    image: TaskManager,
    tech: ['React', 'Local Storage', 'CSS3', 'JavaScript'],
    category: 'Productivity'
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern, responsive portfolio showcasing projects and skills. Built with React and Tailwind CSS for optimal performance.',
    link: 'https://aman7483.github.io/Portfolio/',
    image: Portfolio,
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    category: 'Portfolio'
  },
  {
    title: 'Advanced Calculator',
    description: 'Scientific calculator with advanced mathematical functions, memory operations, and history tracking.',
    link: 'https://aman7483.github.io/Calculator/',
    image: Calculator,
    tech: ['JavaScript', 'CSS3', 'HTML5', 'Math.js'],
    category: 'Utility'
  },
  {
    title: 'Password Generator Pro',
    description: 'Secure password generator with customizable options, strength meter, and clipboard integration for enhanced security.',
    link: 'https://aman7483.github.io/Password-Generator/',
    image: Password_Generator,
    tech: ['JavaScript', 'CSS3', 'HTML5', 'Crypto API'],
    category: 'Security'
  },
  {
    title: 'Event Countdown Timer',
    description: 'Dynamic countdown timer for events with multiple timer support, notifications, and customizable themes.',
    link: 'https://aman7483.github.io/Countdown-timer/',
    image: Timer,
    tech: ['JavaScript', 'CSS3', 'HTML5', 'Date API'],
    category: 'Utility'
  },
];

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl glass border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10 ${
        isVisible ? 'slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full">
            {project.category}
          </span>
        </div>

        {/* View Project Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Project
            </span>
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md border border-gray-700 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50 relative">
      <div className="container mx-auto px-6" ref={sectionRef}>
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my latest work and creative solutions. Each project represents a unique challenge solved with modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
          <a
            href="https://github.com/aman7483"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 glass border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;