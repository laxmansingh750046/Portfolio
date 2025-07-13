// src/components/About.js
import React from 'react';
import { FaGraduationCap, FaSchool, FaTrophy, FaCode, FaLinkedin } from 'react-icons/fa';

const About = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className={`rounded-xl p-8 shadow-lg ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-2xl font-semibold mb-6 flex items-center ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                <FaGraduationCap className="mr-3" />
                Education
              </h3>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h4 className={`text-lg font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Bachelor of Science in Computer Science
                  </h4>
                  <span className={`text-sm font-medium px-2 py-1 rounded ${
                    darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                  }`}>
                    8.16 SGPA
                  </span>
                </div>
                <p className={`mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Graphic Era Hill University
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  2018 - 2020 | Dehradun, Uttarakhand
                </p>
              </div>
              
              <div>
                <h4 className={`text-lg font-medium mb-2 flex items-center ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <FaSchool className="mr-3" />
                  Army Public School
                </h4>
                <div className="flex space-x-6 mb-2">
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Intermediate: <span className="font-medium">89%</span>
                  </p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Matriculation: <span className="font-medium">78.4%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className={`text-2xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Who I Am
            </h3>
            
            <p className={`mb-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate MERN stack developer with expertise in building modern web applications. 
              My journey in computer science began with a strong foundation in algorithms and data 
              structures, which I've applied to solve complex problems in web development.
            </p>
            
            <p className={`mb-10 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              With a keen eye for detail and a commitment to writing clean, maintainable code, I 
              specialize in creating seamless user experiences backed by robust server-side logic. 
              My projects demonstrate my ability to work across the full stack.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/laxmansingh750046" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                <FaCode className="mr-2" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://leetcode.com/u/CS_MONKS" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                  darkMode 
                    ? 'bg-yellow-700 hover:bg-yellow-600 text-white' 
                    : 'bg-yellow-200 hover:bg-yellow-300 text-yellow-700'
                }`}
              >
                <FaTrophy className="mr-2" />
                <span>LeetCode</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/laxman-singh-437058268" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                  darkMode 
                    ? 'bg-blue-700 hover:bg-blue-600 text-white' 
                    : 'bg-blue-200 hover:bg-blue-300 text-blue-700'
                }`}
              >
                <FaLinkedin className="mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;