import React from 'react';
import edpic from '../assets/edpic.png';

const HeroSection = () => {
  return (
    <div id="hero" className="bg-gradient-to-t from-yellow-400 via-amber-500 to-orange-500">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <img
          src={edpic}
          alt="Profile"
          className="rounded-full w-64 h-64 mb-6 mt-4 border-1 border-white shadow-lg"
          style={{ marginTop: '20px' }} // Add some space (20px) above the image
        />
        <h1 className="text-4xl px-2 font-bold text-white mb-4">
          Hello, I'm Aman Kumar Singh
        </h1>
        <p className="text-lg px-2 text-white">
          Welcome to my website. I'm a web developer passionate about creating
          awesome websites with React and Tailwind CSS.
        </p>
        {/* Stylish link to download resume */}
        <a
          href="resume.pdf" // Replace with the actual path to your resume file
          className="mt-8 px-6 py-3 shadow-2xl bg-slate-200 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300"
          download
        >
          Download My Resume!
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
