import React from 'react';
import { Brain, Code, Database } from 'lucide-react';

const Skills = ({ darkMode }) => {
  const skills = {
    ai: [
      'Machine Learning Algorithms',
      'Deep Learning (CNNs, RNNs, Transformers)',
      'Natural Language Processing',
      'Model Training & Evaluation',
      'Computer Vision',
      'TensorFlow & PyTorch'
    ],
    mern: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Redux & State Management',
      'RESTful APIs'
    ],
    tools: [
      'Python & JavaScript',
      'Git & GitHub',
      'Docker Basics',
      'Linux',
      'Postman',
      'VS Code'
    ]
  };

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold">AI & Machine Learning</h3>
            </div>
            <ul className="space-y-3">
              {skills.ai.map((skill, idx) => (
                <li key={idx} className={`flex items-start gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold">MERN Stack</h3>
            </div>
            <ul className="space-y-3">
              {skills.mern.map((skill, idx) => (
                <li key={idx} className={`flex items-start gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold">Tools & Technologies</h3>
            </div>
            <ul className="space-y-3">
              {skills.tools.map((skill, idx) => (
                <li key={idx} className={`flex items-start gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;