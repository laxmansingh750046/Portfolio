// src/components/Contact.js
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaCode, FaLaptopCode } from 'react-icons/fa';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent successfully!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          <p className={`max-w-2xl mx-auto mt-6 text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className={`rounded-xl p-8 shadow-lg ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-xl font-semibold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-blue-800' : 'bg-blue-100'
                  }`}>
                    <FaMapMarkerAlt className={`text-xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Location
                    </h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Adarshvihar Premnagar, Dehradun, Uttarakhand
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-green-800' : 'bg-green-100'
                  }`}>
                    <FaPhone className={`text-xl ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Phone
                    </h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      +91 9368414692
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-purple-800' : 'bg-purple-100'
                  }`}>
                    <FaEnvelope className={`text-xl ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Email
                    </h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      laxmansingh790616@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className={`font-medium mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/laxman-singh-437058268" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition duration-300 ${
                      darkMode 
                        ? 'bg-blue-700 hover:bg-blue-600 text-white' 
                        : 'bg-blue-200 hover:bg-blue-300 text-blue-700'
                    }`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                  
                  <a 
                    href="https://github.com/laxmansingh750046" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    <FaGithub size={20} />
                  </a>
                  
                  <a 
                    href="https://leetcode.com/u/CS_MONKS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition duration-300 ${
                      darkMode 
                        ? 'bg-yellow-700 hover:bg-yellow-600 text-white' 
                        : 'bg-yellow-200 hover:bg-yellow-300 text-yellow-700'
                    }`}
                  >
                    <FaCode size={20} />
                  </a>
                  
                  <a 
                    href="https://codechef.com/users/laxmansingh790" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition duration-300 ${
                      darkMode 
                        ? 'bg-red-700 hover:bg-red-600 text-white' 
                        : 'bg-red-200 hover:bg-red-300 text-red-700'
                    }`}
                  >
                    <FaLaptopCode size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className={`rounded-xl p-8 shadow-lg ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-xl font-semibold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Send Me a Message
              </h3>
              
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      darkMode 
                        ? 'bg-gray-600 text-white border-gray-500' 
                        : 'bg-white text-gray-800 border-gray-300'
                    } border`}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      darkMode 
                        ? 'bg-gray-600 text-white border-gray-500' 
                        : 'bg-white text-gray-800 border-gray-300'
                    } border`}
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      darkMode 
                        ? 'bg-gray-600 text-white border-gray-500' 
                        : 'bg-white text-gray-800 border-gray-300'
                    } border`}
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      darkMode 
                        ? 'bg-gray-600 text-white border-gray-500' 
                        : 'bg-white text-gray-800 border-gray-300'
                    } border`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : darkMode 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;