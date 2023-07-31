import React, { useState } from 'react';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = [
    {
      name: 'Java',
      iconClass: 'fab fa-java text-4xl text-blue-600',
      description:
        'Java is a versatile and widely-used programming language. I have experience in Java programming, enabling me to develop robust and scalable applications, including desktop, web, and mobile applications.',
    },
    {
      name: 'HTML/CSS',
      iconClass: 'fab fa-html5 text-4xl text-blue-600',
      description:
        'HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are fundamental technologies for building and styling web pages. With HTML, I can structure the content of web pages, while CSS allows me to design and customize the layout, fonts, colors, and other visual aspects.',
    },
    {
      name: 'Bootstrap',
      iconClass: 'fab fa-bootstrap text-4xl text-blue-600',
      description:
        'Bootstrap is a popular CSS framework that simplifies and speeds up the process of designing responsive and mobile-friendly websites. I can utilize Bootstrap\'s pre-built components and styles to create visually appealing and responsive web applications.',
    },
    {
      name: 'Tailwind CSS',
      iconClass: 'fas fa-paint-brush text-4xl text-blue-600',
      description:
        'Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. I have hands-on experience with Tailwind CSS, making it easier for me to build custom and responsive user interfaces.',
    },
    {
      name: 'JavaScript',
      iconClass: 'fab fa-js-square text-4xl text-blue-600',
      description:
        'JavaScript is a powerful scripting language used for interactive and dynamic functionalities on web pages. I have expertise in JavaScript, which enables me to create interactive web interfaces and handle client-side interactions.',
    },
    {
      name: 'React',
      iconClass: 'fab fa-react text-4xl text-blue-600',
      description:
        'React is a popular JavaScript library for building user interfaces. I have proficiency in React, enabling me to develop dynamic and interactive front-end applications with reusable components.',
    },
    {
      name: 'Python',
      iconClass: 'fab fa-python text-4xl text-blue-600',
      description:
        'Python is a versatile and easy-to-read programming language used for various applications, including web development, data analysis, and automation. I have a strong command of Python, enabling me to work on diverse projects.',
    },
    {
      name: 'GCP (Google Cloud Platform)',
      iconClass: 'fab fa-google text-4xl text-blue-600',
      description:
        'Google Cloud Platform (GCP) provides a suite of cloud computing services. I have experience with GCP, allowing me to deploy applications, manage databases, and utilize various cloud-based services for scalable and efficient solutions.',
    },
    // Add more skills data
  ];

  const handleSkillClick = (index) => {
    setSelectedSkill(index);
  };

  const handleModalClose = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills" className="bg-gradient-to-b from-teal-500 via-rose-400 to-lime-400 py-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillsData.map((skill, index) => (
            <SkillButton key={index} skill={skill} onClick={() => handleSkillClick(index)} />
          ))}
        </div>
        {selectedSkill !== null && (
          <SkillModal skill={skillsData[selectedSkill]} onClose={handleModalClose} />
        )}
      </div>
    </section>
  );
};

const SkillButton = ({ skill, onClick }) => {
  const { name, iconClass } = skill;

  return (
    <button
      className="p-3 rounded-lg shadow-md text-center transition-transform duration-300 transform-gpu hover:-translate-y-2"
      onClick={onClick}
    >
      <i className={iconClass + ' mb-3'}></i>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
    </button>
  );
};

const SkillModal = ({ skill, onClose }) => {
  const { name, iconClass, description } = skill;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <div className="text-center">
          <i className={iconClass + ' text-4xl text-blue-600 mb-3'}></i>
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
        <div className="mt-4 text-center">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
