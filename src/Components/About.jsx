import React from 'react';

const About = ({ darkMode, isVisible }) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                alt="Coding"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I am a recent BS Computer Science graduate from <span className="font-semibold text-blue-600">Sukkur IBA University</span>, specializing in Artificial Intelligence and Machine Learning. My academic journey has been driven by a deep passion for creating intelligent systems that solve real-world problems.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                With expertise spanning both cutting-edge AI technologies and full-stack web development using the MERN stack, I bring a unique blend of research-oriented thinking and industry-ready practical skills.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I am actively seeking opportunities to contribute to innovative projects, pursue advanced research in AI/ML, and collaborate with teams pushing the boundaries of technology.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
                  <p className="text-3xl font-bold text-blue-600">15+</p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Projects Completed</p>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-purple-50'}`}>
                  <p className="text-3xl font-bold text-purple-600">5+</p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>AI/ML Models</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;