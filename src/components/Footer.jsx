// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaCode, FaLaptopCode } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <a 
            href="#home" 
            className="text-2xl font-bold block mb-4"
          >
            <span className="text-blue-400">Laxman</span>
            <span className="text-white">Singh</span>
          </a>
          
          <p className={`max-w-2xl mx-auto mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>
            MERN Stack Developer specializing in building modern web applications with React, Node.js, Express, and MongoDB.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://linkedin.com/in/laxman-singh-437058268" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            
            <a 
              href="https://github.com/laxmansingh750046" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            
            <a 
              href="https://leetcode.com/u/CS_MONKS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaCode size={24} />
            </a>
            
            <a 
              href="https://codechef.com/users/laxmansingh790" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLaptopCode size={24} />
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {currentYear} Laxman Singh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;