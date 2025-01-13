import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
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

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
             Aworeni<span className="text-blue-600"> Oluwaseun Osbi</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Transforming lives through purpose-driven leadership and inspiring keynotes.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a 
                    href={href}
                    className="text-gray-600 hover:text-blue-600 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          {/* <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact</h3>
            <div className="space-y-4">
              <a 
                href="mailto:contact@example.com" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                contact@example.com
              </a>
              <a 
                href="tel:+15551234567" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                +1 (555) 123-4567
              </a>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-3" />
                New York, NY
              </div>
            </div>
          </div> */}

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Stay Updated</h3>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Join
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Get insights on leadership and personal growth.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Aworeni Oluwaseun Osbi. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a>
              <a href="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;