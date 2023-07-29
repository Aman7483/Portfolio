import React from 'react';

const Skills = () => {
  return (
    <section className="bg-gradient-to-b from-teal-500 via-rose-400 to-lime-400 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-black text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="p-4  rounded-lg shadow-md text-center transition-transform duration-300 transform-gpu hover:-translate-y-2">
            <i className="fab fa-java text-6xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Java</h3>
            <p className="text-lg leading-relaxed">
              Java is a versatile and widely-used programming language. I have experience 
              in Java programming, enabling me to develop robust and scalable applications, 
              including desktop, web, and mobile applications.
            </p>
          </div>
          <div className="p-4  rounded-lg shadow-md text-center transition-transform duration-300 transform-gpu hover:-translate-y-2">
            <i className="fab fa-html5 text-6xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">HTML/CSS</h3>
            <p className="text-lg leading-relaxed">
              HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are fundamental 
              technologies for building and styling web pages. With HTML, I can structure the content
              of web pages, while CSS allows me to design and customize the layout, fonts, colors, and other visual aspects.
            </p>
          </div>
          <div className="p-4  rounded-lg shadow-md text-center transition-transform duration-300 transform-gpu hover:-translate-y-2">
            <i className="fab fa-bootstrap text-6xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Bootstrap</h3>
            <p className="text-lg leading-relaxed">
              Bootstrap is a popular CSS framework that simplifies and speeds up the process of 
              designing responsive and mobile-friendly websites. I can utilize Bootstrap's pre-built 
              components and styles to create visually appealing and responsive web applications.
            </p>
          </div>
          <div className="p-4  rounded-lg shadow-md text-center transition-transform duration-300 transform-gpu hover:-translate-y-2">
            <i className="fas fa-paint-brush text-6xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Tailwind CSS</h3>
            <p className="text-lg leading-relaxed">
              Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. 
              I have hands-on experience with Tailwind CSS, making it easier for me to build custom and responsive user interfaces.
            </p>
          </div>
          <div className="p-4  rounded-lg shadow-md text-center transition-transform duration-300 transform-gpu hover:-translate-y-2">
            <i className="fab fa-js-square text-6xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">JavaScript</h3>
            <p className="text-lg leading-relaxed">
              JavaScript is a powerful scripting language used for interactive and dynamic functionalities on web pages. 
              I have expertise in JavaScript, which enables me to create interactive web interfaces and handle 
              client-side interactions.
            </p>
          </div>
          <div className="p-4  rounded-lg shadow-md text-center transition-transform duration-300 transform-gpu hover:-translate-y-2">
            <i className="fab fa-react text-6xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">React</h3>
            <p className="text-lg leading-relaxed">
              React is a popular JavaScript library for building user interfaces. I have proficiency in React, 
              enabling me to develop dynamic and interactive front-end applications with reusable components.
            </p>
          </div>
          <div className="p-4  rounded-lg shadow-md text-center transition-transform duration-300 transform-gpu hover:-translate-y-2">
            <i className="fab fa-python text-6xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Python</h3>
            <p className="text-lg leading-relaxed">
              Python is a versatile and easy-to-read programming language used for various applications, including web development, 
              data analysis, and automation. I have a strong command of Python, enabling me to work on diverse projects.
            </p>
          </div>
          <div className="p-4  rounded-lg shadow-md text-center transition-transform duration-300 transform-gpu hover:-translate-y-2">
            <i className="fab fa-google text-6xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">GCP (Google Cloud Platform)</h3>
            <p className="text-lg leading-relaxed">
              Google Cloud Platform (GCP) provides a suite of cloud computing services. I have experience with GCP, 
              allowing me to deploy applications, manage databases, and utilize various cloud-based services for scalable 
              and efficient solutions.
            </p>
          </div>
          
          {/* Add more skills as needed */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
