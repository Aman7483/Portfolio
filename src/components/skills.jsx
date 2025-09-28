import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = {
    Frontend: [
      { name: 'React', level: 90, icon: 'fab fa-react', color: 'from-blue-400 to-cyan-400' },
      { name: 'JavaScript', level: 85, icon: 'fab fa-js-square', color: 'from-yellow-400 to-orange-400' },
      { name: 'HTML/CSS', level: 95, icon: 'fab fa-html5', color: 'from-orange-400 to-red-400' },
      { name: 'Tailwind CSS', level: 88, icon: 'fas fa-paint-brush', color: 'from-teal-400 to-blue-400' },
      { name: 'Bootstrap', level: 80, icon: 'fab fa-bootstrap', color: 'from-purple-400 to-pink-400' },
    ],
    Backend: [
      { name: 'Node.js', level: 75, icon: 'fab fa-node-js', color: 'from-green-400 to-emerald-400' },
      { name: 'Python', level: 82, icon: 'fab fa-python', color: 'from-blue-400 to-yellow-400' },
      { name: 'Java', level: 78, icon: 'fab fa-java', color: 'from-red-400 to-orange-400' },
      { name: 'Express.js', level: 70, icon: 'fas fa-server', color: 'from-gray-400 to-gray-600' },
    ],
    Tools: [
      { name: 'Git', level: 85, icon: 'fab fa-git-alt', color: 'from-orange-400 to-red-400' },
      { name: 'VS Code', level: 90, icon: 'fas fa-code', color: 'from-blue-400 to-cyan-400' },
      { name: 'GCP', level: 70, icon: 'fab fa-google', color: 'from-blue-400 to-green-400' },
      { name: 'Docker', level: 65, icon: 'fab fa-docker', color: 'from-blue-400 to-cyan-400' },
    ],
    Soft: [
      { name: 'Problem Solving', level: 92, icon: 'fas fa-puzzle-piece', color: 'from-purple-400 to-pink-400' },
      { name: 'Team Work', level: 88, icon: 'fas fa-users', color: 'from-green-400 to-blue-400' },
      { name: 'Communication', level: 85, icon: 'fas fa-comments', color: 'from-yellow-400 to-orange-400' },
      { name: 'Leadership', level: 80, icon: 'fas fa-crown', color: 'from-yellow-400 to-red-400' },
    ]
  };

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

  const SkillCard = ({ skill, index }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level);
        }, index * 100);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, index]);

    return (
      <div className={`glass rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10 ${
        isVisible ? 'slide-up' : 'opacity-0'
      }`} style={{ animationDelay: `${index * 0.1}s` }}>
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4`}>
            <i className={`${skill.icon} text-white text-xl`}></i>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            <div className="flex items-center mt-1">
              <div className="flex-1 bg-gray-700 rounded-full h-2 mr-3">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${animatedLevel}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-400 font-medium">{animatedLevel}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50 relative">
      <div className="container mx-auto px-6" ref={sectionRef}>
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/25'
                  : 'glass text-gray-400 hover:text-white hover:border-cyan-400/50'
              }`}
            >
              {category} Skills
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillsData[selectedCategory].map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className={`text-center ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm passionate about staying up-to-date with the latest technologies and best practices. 
              Currently exploring advanced React patterns, cloud architecture, and AI/ML integration in web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js', 'TypeScript', 'GraphQL', 'AWS', 'MongoDB', 'Redis'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                  style={{animationDelay: `${0.8 + index * 0.1}s`}}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;