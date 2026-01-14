import React from 'react';
import MAwais from '../MAwais.jpg';
import CV from './Owais_Cv.pdf';
import { Github, Linkedin, Mail, Download, Brain, ChevronDown } from 'lucide-react';

const Home = ({ darkMode, isVisible }) => {
  const ScrollIndicator = () => (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={MAwais} 
                  alt="Muhammad Awais Bhan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Muhammad Awais Bhan
          </h1>
          <h2 className="text-2xl sm:text-3xl mb-6 font-light">
            AI & Machine Learning Specialist | MERN Stack Developer
          </h2>
          <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Transforming complex problems into intelligent solutions through AI, ML, and modern web technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Contact Me
            </a>
            <a href={CV} download className="px-8 py-3 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/MAwais-dev5" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/m-awais-bhan-b91b911a2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:muhammadawais.bscsf22@iba-suk.edu.pk" className="hover:text-blue-600 transition-colors transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Home;