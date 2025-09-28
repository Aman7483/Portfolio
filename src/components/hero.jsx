import React, { useState, useEffect } from 'react';
import edpic from '../assets/edpic.png';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  return (
    <div className="particles-bg">
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/30 rotate-45 float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-blue-500/30 rounded-full float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rotate-12 float" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-500/30 rotate-45 float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-8 relative inline-block">
              <div className="w-48 h-48 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-gray-900 p-2">
                    <img
                      src={edpic}
                      alt="Aman Kumar Singh"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl"></div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-6 slide-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="block text-white">Hello, I'm</span>
                <span className="block gradient-text neon-text">Aman Kumar Singh</span>
              </h1>
              
              {/* Animated Role Text */}
              <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12 flex items-center justify-center">
                <span className="mr-2">I'm a</span>
                <span className="text-cyan-400 font-semibold min-w-[300px] text-left">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed slide-up" style={{animationDelay: '0.2s'}}>
              Passionate about creating innovative web solutions with cutting-edge technologies. 
              I transform ideas into elegant, scalable applications that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 slide-up" style={{animationDelay: '0.4s'}}>
              <a
                href="resume.pdf"
                download
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              
              <button className="group px-8 py-4 glass border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let's Talk
                </span>
              </button>
            </div>

            {/* Tech Stack Preview */}
            <div className="slide-up" style={{animationDelay: '0.6s'}}>
              <p className="text-gray-500 text-sm mb-4">Powered by</p>
              <div className="flex flex-wrap justify-center gap-6 opacity-60">
                {['React', 'JavaScript', 'Python', 'Java', 'Tailwind CSS', 'Node.js'].map((tech, index) => (
                  <div key={tech} className="flex items-center space-x-2 glass px-3 py-2 rounded-full hover:opacity-100 transition-opacity duration-300" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                    <span className="text-xs text-gray-400">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;