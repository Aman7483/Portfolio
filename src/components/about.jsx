import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const experiences = [
    {
      year: '2023',
      title: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Developing modern web applications using React, Node.js, and cloud technologies.',
      icon: 'fas fa-code'
    },
    {
      year: '2022',
      title: 'B.Tech Graduate',
      company: 'Computer Science',
      description: 'Graduated with honors, specializing in software engineering and web technologies.',
      icon: 'fas fa-graduation-cap'
    },
    {
      year: '2021',
      title: 'Web Development',
      company: 'Self-taught',
      description: 'Started my journey in web development, mastering HTML, CSS, JavaScript, and React.',
      icon: 'fas fa-laptop-code'
    }
  ];

  const interests = [
    { name: 'Technology', icon: 'fas fa-microchip', color: 'from-blue-400 to-cyan-400' },
    { name: 'Travel', icon: 'fas fa-plane', color: 'from-green-400 to-emerald-400' },
    { name: 'Biking', icon: 'fas fa-motorcycle', color: 'from-orange-400 to-red-400' },
    { name: 'Problem Solving', icon: 'fas fa-puzzle-piece', color: 'from-purple-400 to-pink-400' },
    { name: 'Innovation', icon: 'fas fa-lightbulb', color: 'from-yellow-400 to-orange-400' },
    { name: 'Learning', icon: 'fas fa-book-open', color: 'from-indigo-400 to-purple-400' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50 relative">
      <div className="container mx-auto px-6" ref={sectionRef}>
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className={`space-y-6 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-user text-white text-sm"></i>
                </div>
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hello there! I'm a passionate <span className="text-cyan-400 font-semibold">tech enthusiast</span> and 
                  <span className="text-cyan-400 font-semibold"> problem solver</span> with an insatiable thirst for knowledge. 
                  As a proud B.Tech graduate, I embrace challenges as opportunities for growth and innovation.
                </p>
                <p>
                  In the world of technology, I find my true calling. From unraveling complex algorithms to crafting 
                  elegant code, I dance with delight in the realm of computers. My passion for tech is a fire that 
                  never burns out, constantly driving me to explore new frontiers.
                </p>
                <p>
                  When not immersed in lines of code, you'll find me on thrilling adventures—whether it's traveling 
                  to mesmerizing destinations, hitting the road on my beloved bike, or immersing myself in the purr 
                  of a revving engine.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-heart text-white text-sm"></i>
                </div>
                Interests & Passions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={interest.name}
                    className={`flex items-center p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 ${
                      isVisible ? 'slide-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${interest.color} flex items-center justify-center mr-3`}>
                      <i className={`${interest.icon} text-white text-sm`}></i>
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-timeline text-white text-sm"></i>
                </div>
                My Timeline
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start ${
                      isVisible ? 'slide-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                  >
                    {/* Timeline line */}
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                    )}
                    
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4 relative z-10">
                      <i className={`${exp.icon} text-white`}></i>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-2">
                        <span className="text-cyan-400 font-bold text-sm bg-cyan-400/10 px-2 py-1 rounded-full mr-3">
                          {exp.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
                      <p className="text-cyan-400 text-sm mb-2">{exp.company}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className={`glass rounded-2xl p-8 mt-6 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-quote-left text-white text-sm"></i>
                </div>
                Philosophy
              </h3>
              <blockquote className="text-gray-300 italic leading-relaxed border-l-4 border-cyan-400 pl-4">
                "Highly resistant to giving up, I approach challenges with a warrior's spirit. 
                Each obstacle is an opportunity to forge a new path and create lasting impact through innovation."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something Amazing</h3>
            <p className="text-gray-400 mb-6">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with fellow innovators.
            </p>
            <a
              href="mailto:aman7483@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;