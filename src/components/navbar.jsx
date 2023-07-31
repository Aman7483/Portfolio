import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../App.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-t from-orange-500 to-red-700 shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="signature-heading">Aman</h1>
        </div>
        <div className={`hidden md:flex space-x-6 ${isMenuOpen ? 'hidden' : ''}`}>
          <Link
            to="hero"
            className="btn btn-home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: 'pointer' }} // Add cursor property here
          >
            Home
          </Link>
          <Link
            to="projects"
            className="btn btn-portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: 'pointer' }} // Add cursor property here
          >
            Projects
          </Link>
          <Link
            to="skills"
            className="btn btn-portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: 'pointer' }} // Add cursor property here
          >
            Skills
          </Link>
          <Link
            to="about"
            className="btn btn-about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: 'pointer' }} // Add cursor property here
          >
            About
          </Link>
          <Link
            to="bottom"
            className="btn btn-contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: 'pointer' }} // Add cursor property here
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-white"
            onClick={toggleMenu}
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 14h14a1 1 0 110 2H3a1 1 0 110-2zm0-5h14a1 1 0 110 2H3a1 1 0 110-2zm0-5h14a1 1 0 110 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'h-auto' : 'h-0'
        } overflow-hidden flex flex-col`}
      >
        <Link
          to="hero"
          className="block btn btn-home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: 'pointer' }} // Add cursor property here
        >
          Home
        </Link>
        <Link
          to="projects"
          className="block btn btn-portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: 'pointer' }} // Add cursor property here
        >
          Projects
        </Link>
        <Link
          to="skills"
          className="block btn btn-portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: 'pointer' }} // Add cursor property here
        >
          Skills
        </Link>
        <Link
          to="about"
          className="block btn btn-about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: 'pointer' }} // Add cursor property here
        >
          About
        </Link>
        <Link
          to="bottom"
          className="block btn btn-contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: 'pointer' }} // Add cursor property here
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
