import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isFooterVisible = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsVisible(isFooterVisible);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer
        className={`fixed bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-blue-400 text-white py-8 text-center ${
          isVisible ? 'footer-visible' : ''
        }`}
      >
        <div className="container mx-auto flex justify-center space-x-5">
          <a
            href="https://www.instagram.com/_aman_kr_singhh_/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl hover:text-blue-500 ${isVisible ? '' : 'pointer-events-none'}`}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https:/www.linkedin.com/in/aman-kumar-singh-746344165"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl hover:text-blue-500 ${isVisible ? '' : 'pointer-events-none'}`}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=9955380806"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl hover:text-green-500 ${isVisible ? '' : 'pointer-events-none'}`}
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          {/* Add Facebook icon and link */}
          <a
            href="https://www.facebook.com/aman.k.singh.54"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl hover:text-blue-600 ${isVisible ? '' : 'pointer-events-none'}`}
          >
            <i className="fab fa-facebook"></i>
          </a>
          {/* Add phone number link */}
          <a
            href="tel:+919110065510"
            className={`text-4xl hover:text-purple-500 ${isVisible ? '' : 'pointer-events-none'}`}
          >
            <i className="fas fa-phone"></i>
          </a>
          {/* Add email link */}
          <a
            href="mailto:aman7483@gmail.com"
            className={`text-4xl hover:text-red-600 ${isVisible ? '' : 'pointer-events-none'}`}
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="mt-2 text-black font-bold">
          © {new Date().getFullYear()} @AMAN PORTFOLIO. All rights reserved.
        </div>
      </footer>

      <style>
        {`
        /* Add the transition for a smooth animation effect */
        .footer-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        /* Initially set the footer to be hidden */
        footer {
          opacity: 0;
          transform: translateY(20px);
        }
        `}
      </style>
    </>
  );
};

export default Footer;
