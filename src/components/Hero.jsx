// src/components/Hero.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Hero = ({ darkMode }) => {
  return (
    <section 
      id="home" 
      className={`pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <p className={`text-lg md:text-xl mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Laxman </span>
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Singh</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold mb-6 h-16 md:h-20">
              <Typewriter
                options={{
                  strings: [
                    'MERN Stack Developer',
                    'Full Stack Engineer',
                    'React Specialist',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: `${darkMode ? 'text-blue-400' : 'text-blue-600'}`,
                  cursorClassName: `${darkMode ? 'text-blue-400' : 'text-blue-600'}`
                }}
              />
            </div>
            
            <p className={`text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I build scalable web applications using modern technologies like React, Node.js, 
              Express, and MongoDB. Passionate about creating intuitive user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                View Projects
              </a>
              
              <a 
                href="#contact" 
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                  darkMode 
                    ? 'border-2 border-blue-500 text-blue-400 hover:bg-blue-900' 
                    : 'border-2 border-blue-500 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Contact Me
              </a>
            </div>
            
            <div className="mt-10 flex justify-center md:justify-start space-x-4">
              <a 
                href="https://github.com/laxmansingh750046" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                <FaGithub size={24} />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/laxman-singh-bisht-437058268" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition duration-300 ${
                  darkMode 
                    ? 'bg-blue-800 hover:bg-blue-700 text-white' 
                    : 'bg-blue-200 hover:bg-blue-300 text-blue-700'
                }`}
              >
                <FaLinkedin size={24} />
              </a>
              
              <a 
                href="https://leetcode.com/u/CS_MONKS" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition duration-300 ${
                  darkMode 
                    ? 'bg-yellow-800 hover:bg-yellow-700 text-white' 
                    : 'bg-yellow-200 hover:bg-yellow-300 text-yellow-700'
                }`}
              >
                <span className="font-bold">LC</span>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <div className={`w-full h-full flex items-center justify-center ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <div className="text-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto" />
                    <p className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <img
                          src="/laxman.png"
                          alt="Profile Image"
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`absolute -top-6 -right-6 py-2 px-4 rounded-lg shadow-lg font-medium ${
                darkMode ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white'
              }`}>
                <span>MERN Developer</span>
              </div>
              
              <div className={`absolute -bottom-6 -left-6 py-2 px-4 rounded-lg shadow-lg font-medium ${
                darkMode ? 'bg-blue-500 text-white' : 'bg-blue-400 text-white'
              }`}>
                <span>Full Stack</span>
              </div>
              
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a 
                  href="#about" 
                  className={`p-2 rounded-full ${
                    darkMode ? 'bg-gray-700 text-blue-400' : 'bg-white text-blue-600'
                  } shadow-lg`}
                >
                  <FaArrowDown size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;