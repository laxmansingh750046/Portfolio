// src/components/Skills.js
import React from 'react';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, 
  FaPython, FaJava, FaGitAlt, FaLinux, FaCloud, FaCode, FaTools
} from 'react-icons/fa';
import { SiRedux, SiExpress, SiMongodb, SiTailwindcss, SiCplusplus, SiVercel } from 'react-icons/si';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact />,
      color: "text-blue-500",
      skills: [
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "JavaScript", icon: <FaJs />, level: 85 },
        { name: "HTML5", icon: <FaHtml5 />, level: 90 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
        { name: "Redux", icon: <SiRedux />, level: 75 }
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      color: "text-green-500",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express", icon: <SiExpress />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb />, level: 75 },
        { name: "SQL", icon: <FaDatabase />, level: 70 },
        { name: "JWT", icon: <FaDatabase />, level: 80 },
        { name: "Appwrite", icon: <FaCloud />, level: 70 }
      ]
    },
    {
      title: "Languages",
      icon: <FaCode />,
      color: "text-purple-500",
      skills: [
        { name: "Python", icon: <FaPython />, level: 80 },
        { name: "C++", icon: <SiCplusplus />, level: 85 },
        { name: "Java", icon: <FaJava />, level: 75 },
        { name: "C", icon: <SiCplusplus />, level: 70 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      color: "text-yellow-500",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt />, level: 85 },
        { name: "Google Cloud", icon: <FaCloud />, level: 70 },
        { name: "Linux", icon: <FaLinux />, level: 75 },
        { name: "VS Code", icon: <FaCode />, level: 90 },
        { name: "Vercel", icon: <SiVercel />, level: 80 },
        { name: "Render", icon: <FaCloud />, level: 75 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <span className={`text-2xl ${category.color}`}>{category.icon}</span>
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <span className={`mr-2 ${category.color}`}>{skill.icon}</span>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div 
                        className={`h-full rounded-full ${category.color.replace('text', 'bg')}`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;