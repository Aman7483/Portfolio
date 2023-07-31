import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer'; // Make sure to provide the correct path to Footer.jsx
import HeroSection from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import ScrollToTopButton from './components/ScrollToTopButton';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Projects/>
      <Skills/>
      <About/>
      <main>
        {/* Your main content goes here */}
      </main>
      
      <Footer />
      <div id="bottom" style={{ height: '1px', padding: '0', margin: '0' }}></div>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
