import React from 'react';

const About = () => {   
  return (
    <section id="about" className="bg-gradient-to-b from-lime-400 via-green-300 to-blue-200 py-16"> {/* Reduce the vertical padding */}
      <div className="container mx-auto pb-10 flex-grow"> {/* Reduce the vertical padding */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">About Me</h2> {/* Reduce the font size on smaller screens */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4"> {/* Reduce the font size on smaller screens */}
              Hello there, curious minds! Allow me to introduce myself— I am a tech enthusiast, 
              a relentless problem lover and solver, and a proud B.Tech graduate. 
              With an insatiable thirst for knowledge, I embrace challenges as opportunities for growth.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4"> {/* Reduce the font size on smaller screens */}
              In the world of technology, I find my true calling. From unraveling complex algorithms to crafting elegant code, 
              I dance with delight in the realm of computers. My passion for tech is a fire that never burns out, 
              constantly driving me to explore new frontiers and stay at the cutting edge.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4"> {/* Reduce the font size on smaller screens */}
              But life is not just about bits and bytes; it's about the experiences that make us who we are. 
              When not immersed in lines of code, you'll find me on thrilling adventures—whether it's traveling 
              to mesmerizing destinations or hitting the road on my beloved bike or immersing myself in the purr of a revving engine.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4"> {/* Reduce the font size on smaller screens */}
              Yet, my greatest joy lies in the company of close and genuine souls. I cherish the laughter and camaraderie that 
              comes from sharing moments with people who bring out the best in me.
              Ah, and did I mention my love for the divine? My belief in a higher power adds a touch of spirituality to my life, 
              keeping me grounded and grateful for the wonders that surround me.
              Highly resistant to giving up, I approach challenges with a warrior's spirit, for each obstacle is an 
              opportunity to forge a new path. I thrive on breaking barriers and never back down from adversity.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4"> {/* Reduce the font size on smaller screens */}
              In a world where technology evolves rapidly, and problems arise aplenty, I stand tall, ready to tackle 
              whatever comes my way. Together, let's dive into the enigmatic world of technology and make a lasting impact!
              Join me on this incredible journey as we unravel the mysteries of code, explore uncharted territories, 
              and bask in the magic of life! Together, we shall script a tale of innovation, resilience, and awe-inspiring discoveries.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4"> {/* Reduce the font size on smaller screens */}
              Welcome to my universe— where passion meets purpose, and every step is an adventure worth taking!
            </p>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">That's me, an explorer of life's grand mysteries.</h3> {/* Reduce the font size on smaller screens */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
