import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import seven from '../../images/seven.jpg';


const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>

      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        {/* Desktop image positioning */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/90 to-white"></div>
          <img
            src={seven}
            alt="Seun Osbi - Professional portrait"
            className="h-full w-full object-cover object-center"
          />
        </div>
        
        {/* Mobile image positioning */}
        <div className="md:hidden absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 z-10"></div>
          <img
            src={seven}
            alt="Seun Osbi - Professional portrait"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center">
         <div className="w-full md:w-3/5 px-6 md:px-12 lg:px-16">
          {/* Highlight badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-50 shadow-sm rounded-full mb-8 border-2 border-orange-200">
            <Sparkles className="w-4 h-4 text-orange-600 mr-2" />
            <span className="text-[#071108] text-sm font-medium">Leadership & Business Coaching</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#071108] mb-6 leading-tight">
            From a Vision to a
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Golden Legacy
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-4 leading-relaxed font-medium border-l-2 border-orange-300 pl-4">
            I empower leaders to build influential businesses and create lives of true purpose.
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed pl-4">
            Discover your unique calling and unlock a proven strategy to turn it into a reality.
          </p>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mb-12">
            <div className="p-4 rounded-lg bg-orange-50 shadow-sm border-2 border-orange-200">
              <div className="text-2xl md:text-3xl font-bold text-[#071108] mb-1">10K+</div>
              <div className="text-sm md:text-base text-gray-700">Lives Transformed</div>
            </div>
            <div className="p-4 rounded-lg bg-amber-50 shadow-sm border-2 border-amber-200">
              <div className="text-2xl md:text-3xl font-bold text-[#071108] mb-1">150+</div>
              <div className="text-sm md:text-base text-gray-700">Speaking Events</div>
            </div>
            <div className="hidden md:block p-4 rounded-lg bg-orange-50 shadow-sm border-2 border-orange-200">
              <div className="text-2xl md:text-3xl font-bold text-[#071108] mb-1">15+</div>
              <div className="text-sm md:text-base text-gray-700">Years Experience</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold text-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg hover:shadow-xl flex items-center group border-2 border-orange-400">
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-[#071108] rounded-full font-semibold text-lg border-2 border-orange-500 hover:bg-orange-50 transition-colors flex items-center group">
              Discover Your Life's Path
              <MessageCircle className="ml-2 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          {/* Subtle faith-based link */}
          <div className="mt-8">
            <a 
              href="#faith-based" 
              className="inline-flex items-center text-sm text-gray-600 hover:text-orange-600 transition-colors group border-b-2 border-transparent hover:border-orange-400 pb-1"
            >
              <Sparkles className="w-4 h-4 mr-2 text-orange-600 group-hover:text-orange-700" />
              <span>Seeking divine wisdom? Explore our premium, faith-based programs</span>
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    
    
    </section>
  );


};

export default Hero;