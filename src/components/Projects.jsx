import React from "react";
import {
  FaYoutube,
  FaBlog,
  FaExternalLinkAlt,
  FaGithub,
  FaFileSignature
} from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "TrendTube",
      description:
        "Full-stack video-sharing platform allowing users to upload, watch, like, and comment on videos in real-time.",
      technologies: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      link: "https://trend-tube-drab.vercel.app/",
      github: "https://github.com/laxmansingh750046/js-youtube",
      icon: <FaYoutube />,
      color: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      title: "PostHub",
      description:
        "Full-stack blogging platform allowing users to register, log in, and create, view, and manage posts in real time.",
      technologies: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Appwrite",
        "Vite",
        "Vercel",
      ],
      link: "https://post-hub-smoky.vercel.app/",
      github: "https://github.com/laxmansingh750046/posthub",
      icon: <FaBlog />,
      color: "bg-gradient-to-r from-purple-500 to-pink-600",
    },
    {
      title: "AI Resume Builder",
      description:
        "AI-powered resume creation platform where users can build, edit, and download professional resumes, with authentication via Clerk and AI assistance for content generation.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Vite",
        "Clerk",
        "Node.js",
        "Express",
        "MongoDB",
        "Google GenAI",
      ],
      link: "https://ai-resume-builder-pi-lovat.vercel.app/",
      github: "https://github.com/laxmansingh750046/AI-Resume-Builder",
      icon: <FaFileSignature />,
      color: "bg-gradient-to-r from-green-500 to-teal-600",
    },
    // {
    //   title: "Weather App",
    //   description: "Weather application that fetches real-time weather data from API and displays it to users based on location.",
    //   technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
    //   link: "#",
    //   github: "#",
    //   icon: <FaCloudSun />,
    //   color: "bg-gradient-to-r from-cyan-500 to-blue-600"
    // }
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>
          <div
            className={`w-20 h-1 mx-auto ${
              darkMode ? "bg-blue-400" : "bg-blue-600"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <div
                className={`h-48 flex items-center justify-center ${project.color}`}
              >
                <div className="text-white text-6xl">{project.icon}</div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-2xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      darkMode
                        ? "bg-green-900 text-green-200"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    Live
                  </span>
                </div>

                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode
                          ? "bg-gray-600 text-gray-200"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center font-medium ${
                      darkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-800"
                    } transition duration-300`}
                  >
                    View Project <FaExternalLinkAlt className="ml-2" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center ${
                      darkMode
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-600 hover:text-gray-800"
                    } transition duration-300`}
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
