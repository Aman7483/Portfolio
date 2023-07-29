import React, { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Countdown Timer',
    description: 'A Countdown Timer to use for events',
    link: 'https://aman7483.github.io/Countdown-timer/',
    image: 'Timer.png', // Replace with the image path
  },
  {
    title: 'Password Generator',
    description: 'Make complex passwords with ease',
    link: 'https://aman7483.github.io/Password-Generator/',
    image: 'Password_Generator.png', // Replace with the image path
  },
  {
    title: 'Personal Portfolio',
    description: 'React based webpage featuring my portfolio',
    link: 'https://aman7483.github.io/Calculator/',
    image: 'Calculator.png', // Replace with the image path
  },
  // Add more projects here...
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
    const currentRef = bannerRef.current; // Store the current ref value in a variable

    if (currentRef) {
      observer.observe(currentRef); // Use the variable in the observer
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the variable in the cleanup function
      }
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-yellow-400 via-emerald-400 to-teal-500  py-10">
      <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-56 md:h-72 relative overflow-hidden rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 banner-container"
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
    </section>
  );
};

export default ProjectsSection;
