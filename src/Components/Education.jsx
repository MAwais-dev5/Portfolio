import React from 'react';

const Education = ({ darkMode }) => {
  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className={`max-w-3xl mx-auto p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="flex items-start gap-4">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop" 
              alt="University"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-blue-600">Bachelor of Science in Computer Science</h3>
              <p className="text-xl mb-2 font-semibold">Sukkur IBA University</p>
              <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Specialization: Artificial Intelligence & Machine Learning
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                2020 - 2024 | CGPA: 3.8/4.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;