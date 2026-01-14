import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
// import { sendContactMessage } from '../api/contact';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await sendContactMessage(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:muhammadawais.bscsf22@iba-suk.edu.pk" className="text-blue-600 hover:underline">
                  muhammadawais.bscsf22@iba-suk.edu.pk
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+923158093546" className="text-blue-600 hover:underline">
                  +92 3158093546
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Location</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Sukkur, Sindh, Pakistan
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/MAwais-dev5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/m-awais-bhan-b91b911a2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:muhammadawais.bscsf22@iba-suk.edu.pk" 
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none`}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Success Message */}
              {status === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in">
                  <p className="font-semibold">✓ Message sent successfully!</p>
                  <p className="text-sm">I'll get back to you soon.</p>
                </div>
              )}
              
              {/* Error Message */}
              {status === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-fade-in">
                  <p className="font-semibold">✗ Failed to send message</p>
                  <p className="text-sm">Please try again or email me directly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;