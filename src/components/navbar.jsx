import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        
      <nav className="bg-gradient-to-t from-orange-500 to-red-700 shadow-md p-4 ">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h1 className="signature-heading">Aman</h1>
            
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="btn btn-home">Home</a>
            <a href="#portfolio" className="btn btn-portfolio">Projects</a>
            <a href="#portfolio" className="btn btn-portfolio">Skills</a>
            <a href="#about" className="btn btn-about">About</a>
            <a href="#contact" className="btn btn-contact">Contact</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;