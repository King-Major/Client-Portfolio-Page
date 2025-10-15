import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Speaking', href: '/speaking' },
    { label: 'Coaching', href: '/coaching' },
    { label: 'Blog', href: '/blog' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-white border-t-4 ">
      {/* Decorative Orange Line */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500"></div> */}
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-2 border-l-4 border-orange-500 pl-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Aworeni<span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"> Oluwaseun Osbi</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Transforming lives through purpose-driven leadership and inspiring keynotes.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-orange-200 text-gray-600 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-orange-500">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a 
                    href={href} 
                    className="text-gray-600 hover:text-orange-600 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-orange-500">Stay Updated</h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                />
                <button 
                  onClick={handleSubmit}
                  className="absolute right-2 top-2 px-5 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-md hover:from-orange-600 hover:to-amber-600 transition-all font-medium shadow-sm hover:shadow-md"
                >
                  Join
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Get insights on leadership and personal growth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t-2 border-orange-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm font-medium">
              © {currentYear} Aworeni Oluwaseun Osbi. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm">
              <a href="/privacy" className="text-gray-600 hover:text-orange-600 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all">Privacy Policy</a>
              <a href="/terms" className="text-gray-600 hover:text-orange-600 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;