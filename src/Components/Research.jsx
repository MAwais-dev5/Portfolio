import React from 'react';

const Research = ({ darkMode }) => {
  const research = [
    'AI for Social Impact & Healthcare',
    'Speech Recognition & NLP Systems',
    'Intelligent Decision Support Systems',
    'Data-Driven Analytics & Insights'
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Research Interests</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {research.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;