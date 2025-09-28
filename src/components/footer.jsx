import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const clientHeight = window.innerHeight;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      
      // Show footer when user scrolls past 80%
      setIsVisible(scrollPercentage > 80);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_aman_kr_singhh_/',
      icon: 'fab fa-instagram',
      color: 'hover:text-pink-400',
      bgColor: 'hover:bg-pink-400/10'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aman-kumar-singh-746344165/',
      icon: 'fab fa-linkedin',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-400/10'
    },
    {
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=9955380806',
      icon: 'fab fa-whatsapp',
      color: 'hover:text-green-400',
      bgColor: 'hover:bg-green-400/10'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/aman.k.singh.54',
      icon: 'fab fa-facebook',
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10'
    },
    {
      name: 'Phone',
      url: 'tel:+919110065510',
      icon: 'fas fa-phone',
      color: 'hover:text-purple-400',
      bgColor: 'hover:bg-purple-400/10'
    },
    {
      name: 'Email',
      url: 'mailto:aman7483@gmail.com',
      icon: 'fas fa-envelope',
      color: 'hover:text-red-400',
      bgColor: 'hover:bg-red-400/10'
    }
  ];

  return (
    <>
      {/* Animated Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.03) 0%, transparent 50%)`
        }}
      />

      <footer className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        {/* Main Footer Content */}
        <div className="glass-dark backdrop-blur-xl border-t border-gray-800">
          <div className="container mx-auto px-6 py-8">
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-12 h-12 rounded-xl glass border border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 ${link.color} ${link.bgColor} slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-lg`}></i>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {link.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Contact Info */}
            <div className="text-center mb-6 slide-up" style={{animationDelay: '0.6s'}}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-400">
                <a href="mailto:aman7483@gmail.com" className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                  <i className="fas fa-envelope mr-2"></i>
                  aman7483@gmail.com
                </a>
                <span className="hidden sm:block text-gray-600">|</span>
                <a href="tel:+919110065510" className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                  <i className="fas fa-phone mr-2"></i>
                  +91 9110065510
                </a>
              </div>
            </div>

            {/* Copyright and Links */}
            <div className="border-t border-gray-800 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left slide-up" style={{animationDelay: '0.8s'}}>
                  <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} <span className="gradient-text font-semibold">Aman Kumar Singh</span>. All rights reserved.
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Crafted with ❤️ using React & Tailwind CSS
                  </p>
                </div>
                
                <div className="flex items-center gap-6 slide-up" style={{animationDelay: '1s'}}>
                  <a href="#hero" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                    Back to Top
                  </a>
                  <a 
                    href="resume.pdf" 
                    download 
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-download mr-1"></i>
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cyan-400/20 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-blue-500/20 to-transparent"></div>
        </div>
      </footer>

      {/* Footer Trigger Area (invisible) */}
      <div className="fixed bottom-0 left-0 right-0 h-20 pointer-events-none z-30"></div>
    </>
  );
};

export default Footer;