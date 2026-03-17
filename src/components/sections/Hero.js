import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import seven from '../../images/SeunOpeyemi.webp';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col md:block">
      
      {/* 1. Ambient Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-orange-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-amber-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* 2. Abstract Background Swoosh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-[0.02]">
        <svg aria-hidden="true" viewBox="0 0 1000 1000" className="absolute w-[200%] md:w-[120%] h-auto text-white right-[-30%] md:right-[-10%]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150,800 C300,800 400,600 500,400 C600,200 750,150 850,200 C950,250 850,400 750,500 C600,650 400,700 300,750 C200,800 100,750 150,650 C200,500 500,300 800,200" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M450,450 L850,150" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* 3. Image Container - *UPDATED HEIGHT FOR MOBILE* */}
      {/* Changed h-[50vh] to h-[65vh] for phones, and sm:h-[75vh] for small tablets */}
      <div className="relative w-full h-[65vh] sm:h-[75vh] md:absolute md:right-0 md:top-0 md:h-full md:w-[55%] z-10 pointer-events-none">
        
        {/* Mobile Gradient: Adjusted to match the taller image */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/10 to-transparent z-20"></div>
        
        {/* Desktop Gradient */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/30 to-transparent z-20"></div>
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#050505]/5 via-transparent to-transparent z-20"></div>
        
        <img
  src="/SeunOpeyemi.webp" 
  alt="Seun Osbi - Professional portrait"
  className="h-full w-full object-cover object-top opacity-95 md:opacity-100 mix-blend-luminosity md:mix-blend-normal bg-[#050505]"
  fetchPriority="high"
  loading="eager"
  decoding="sync"
/>
      </div>

      {/* 4. Main Content Container */}
      <div className="relative z-30 flex-1 flex items-center container mx-auto md:min-h-screen">
         {/* Slightly reduced top padding on mobile (py-6 instead of py-8) to pull text closer to the taller image */}
         <div className="w-full px-6 py-6 md:w-[60%] lg:w-[55%] md:px-12 lg:px-16 flex flex-col justify-center">
          
          {/* Refined Highlight Label */}
          <div className="flex items-center mb-5">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 mr-2.5" />
            <span className="text-orange-500 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
              Global Leadership Expert
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-['Anton'] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.1] tracking-wide uppercase">
            From a Vision to a
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mt-1.5">
              Golden Legacy
            </span>
          </h1>

          {/* Subheadings */}
          <div className="mb-8 space-y-3">
            <p className="text-base md:text-lg text-gray-200 max-w-md leading-relaxed font-light">
              I empower leaders to build influential businesses and create lives of true purpose.
            </p>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed font-light">
              Discover your unique calling and unlock a proven strategy to turn it into a reality.
            </p>
          </div>

          {/* Stats section */}
          <div className="flex items-center gap-5 md:gap-8 max-w-xl mb-10">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">10K<span className="text-orange-500">+</span></div>
              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em]">Lives Transformed</div>
            </div>
            
            <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
            
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">150<span className="text-orange-500">+</span></div>
              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em]">Speaking Events</div>
            </div>
            
            <div className="w-px h-10 bg-white/10 hidden md:block"></div>
            
            <div className="hidden sm:block">
              <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">15<span className="text-orange-500">+</span></div>
              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em]">Years Experience</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button className="w-full sm:w-auto px-6 py-3.5 md:px-8 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold text-sm hover:from-orange-600 hover:to-amber-700 transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] flex items-center justify-center group">
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button className="w-full sm:w-auto px-6 py-3.5 md:px-8 bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center group">
              Discover Your Life's Path
              <MessageCircle className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;