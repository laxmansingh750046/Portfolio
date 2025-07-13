// src/components/Experience.js
import React from 'react';
import { FaTrophy, FaMedal, FaStar, FaCode, FaUsers } from 'react-icons/fa';

const Experience = ({ darkMode }) => {
  return (
    <section 
      id="experience" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Experience & Achievements
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Leadership Experience
            </h3>
            
            <div className="relative pl-8 border-l-2 border-blue-500">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-500"></div>
              
              <div className="mb-10 relative">
                <div className="flex items-center mb-2">
                  <div className={`p-2 rounded-lg mr-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
                    <FaUsers className="text-blue-500" />
                  </div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    President
                  </h4>
                </div>
                <p className={`mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Fraternity, Graphic Era Hill University
                </p>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  Spring 2023 – Present
                </p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Leading cross-functional teams for mega web development projects and organizing technical events.
                  Proficient in assembling and leading teams for complex projects.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Coding Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
                    <FaTrophy className="text-blue-500" />
                  </div>
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    TCS CodeVita
                  </h4>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Global Rank: <span className="font-bold">840</span> in Season 11 (Data Structures & Algorithms)
                </p>
              </div>
              
              <div className={`p-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
                    <FaMedal className="text-purple-500" />
                  </div>
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    LeetCode
                  </h4>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Knight badge for contest rating above <span className="font-bold">1870</span>
                </p>
              </div>
              
              <div className={`p-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-yellow-900' : 'bg-yellow-100'}`}>
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    CodeChef
                  </h4>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Rank: <span className="font-bold">114</span> in Starters 155
                </p>
              </div>
              
              <div className={`p-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-green-900' : 'bg-green-100'}`}>
                    <FaCode className="text-green-500" />
                  </div>
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    DSA Contest
                  </h4>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  First place in university DSA contest during first year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;