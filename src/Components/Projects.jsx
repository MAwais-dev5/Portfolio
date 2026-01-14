import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'AI-Based Bilingual Transcribing System',
      description: 'Advanced speech recognition system using Whisper API for Urdu transcription with multilingual translation capabilities and speaker-wise paragraph generation.',
      tech: ['Whisper API', 'React', 'Python', 'NLP', 'REST APIs'],
      github: 'https://github.com/awaisbhan/bilingual-transcriber',
      demo: null,
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop'
    },
    {
      title: 'MERN Authentication Platform',
      description: 'Full-stack authentication system with JWT tokens, role-based access control, and secure password management.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
      github: 'https://github.com/awaisbhan/mern-auth',
      demo: 'https://mern-auth-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'
    },
    {
      title: 'Deep Learning Image Classifier',
      description: 'CNN-based image classification system trained on custom datasets with data augmentation and transfer learning.',
      tech: ['TensorFlow', 'Python', 'CNNs', 'Flask', 'NumPy'],
      github: 'https://github.com/awaisbhan/image-classifier',
      demo: null,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
    },
    {
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with WebSocket integration, message persistence, and responsive UI design.',
      tech: ['Socket.io', 'React', 'Node.js', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/awaisbhan/chat-app',
      demo: 'https://chat-app-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-600">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>

                  {/* Live Demo Link */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
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
