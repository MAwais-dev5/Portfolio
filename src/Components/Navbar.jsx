import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-sm`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          MA Bhan
        </div>
        <div className="flex items-center gap-4">
          <a href="#home" className="hidden sm:inline hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="hidden sm:inline hover:text-blue-600 transition-colors">About</a>
          <a href="#skills" className="hidden sm:inline hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="hidden sm:inline hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hidden sm:inline hover:text-blue-600 transition-colors">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;