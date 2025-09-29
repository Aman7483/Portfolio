import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['hero', 'projects', 'skills', 'about'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'bottom' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                {/* Hexagonal Logo */}
                <div className="w-12 h-12 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00d4ff" />
                        <stop offset="100%" stopColor="#0099cc" />
                      </linearGradient>
                    </defs>
                    {/* Hexagon shape */}
                    <polygon 
                      points="50,5 85,25 85,65 50,85 15,65 15,25" 
                      fill="url(#logoGradient)" 
                      stroke="rgba(0, 212, 255, 0.3)" 
                      strokeWidth="1"
                    />
                    {/* Inner design */}
                    <text 
                      x="50" 
                      y="58" 
                      textAnchor="middle" 
                      className="fill-white font-bold text-2xl"
                      style={{fontSize: '32px', fontFamily: 'Inter, sans-serif'}}
                    >
                      A
                    </text>
                    {/* Accent lines */}
                    <line x1="30" y1="35" x2="70" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                    <line x1="30" y1="65" x2="70" y2="65" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                  </svg>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-md -z-10"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold gradient-text">Aman Singh</span>
                <span className="text-xs text-gray-400 -mt-1">Full Stack Developer</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer group ${
                    activeSection === item.to
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left transition-transform duration-300 ${
                    activeSection === item.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg glass neon-hover"
              onClick={toggleMenu}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                    activeSection === item.to
                      ? 'text-cyan-400 glass'
                      : 'text-gray-300 hover:text-white hover:glass'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-40">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
          style={{
            width: `${(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        ></div>
      </div>
    </>
  );
};

export default Navbar;