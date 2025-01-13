import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import seven from '../../images/seven.jpg';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>

      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        {/* Desktop image positioning */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/90 to-white"></div>
          <img
            src={seven}
            alt="Professional portrait"
            className="h-full w-full object-cover object-center"
          />
        </div>
        
        {/* Mobile image positioning */}
        <div className="md:hidden absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 z-10"></div>
          <img
            src={seven}
            alt="Professional portrait"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="w-full md:w-3/5 px-6 md:px-12 lg:px-16">
          {/* Highlight badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-50 shadow-sm rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-gray-600 text-sm font-medium">Transforming Lives Through Purpose</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Unlock Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Full Potential
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-8 leading-relaxed">
            Empowering individuals and organizations to achieve breakthrough results through transformational coaching and dynamic speaking
          </p>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mb-12">
            <div className="p-4 rounded-lg bg-gray-50 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-sm md:text-base text-gray-600">Lives Impacted</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-sm md:text-base text-gray-600">Speaking Events</div>
            </div>
            <div className="hidden md:block p-4 rounded-lg bg-gray-50 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm md:text-base text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center group">
              Book a Session
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-gray-100 text-gray-800 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors flex items-center">
              Watch My Talk
              <MessageCircle className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;