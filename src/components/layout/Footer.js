import React, { useState } from 'react';
import { Twitter, Linkedin, Instagram, Youtube, ArrowRight, Sparkles } from 'lucide-react';

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
    <footer className="relative bg-[#020202] text-white pt-24 pb-8 border-t border-white/10 overflow-hidden font-sans">
      
      {/* Subtle Ambient Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[300px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center mb-2">
              <Sparkles className="w-3.5 h-3.5 text-orange-500 mr-2.5" />
              <span className="text-orange-500 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
                Global Influence
              </span>
            </div>
            
            <h2 className="font-['Anton'] text-3xl md:text-4xl uppercase tracking-wide text-white">
              Aworeni <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">Oluwaseun Osbi</span>
            </h2>
            
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-md">
              Transforming lives through purpose-driven leadership, strategic coaching, and inspiring keynotes.
            </p>
            
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-8">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a 
                    href={href} 
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group font-light"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-3 text-orange-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="transform -translate-x-6 group-hover:translate-x-0 transition-transform duration-300">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-8">
              Stay Updated
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-gray-400 font-light mb-4">
                Get exclusive insights on leadership and personal growth delivered to your inbox.
              </p>
              
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/5 transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full hover:from-orange-600 hover:to-amber-700 transition-all shadow-[0_4px_15px_rgba(249,115,22,0.2)] flex items-center justify-center text-xs font-bold uppercase tracking-widest"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light tracking-wide">
            © {currentYear} Aworeni Oluwaseun Osbi. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500 font-light tracking-wide">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;