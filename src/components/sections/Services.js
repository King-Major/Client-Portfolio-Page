import React, { useState } from 'react';
import { ArrowRight, Sparkles, Users, Target, TrendingUp, Crown, Zap, Check, ChevronDown } from 'lucide-react';

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">
      
      {/* Global Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-orange-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-amber-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center mb-6">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 mr-2.5" />
            <span className="text-orange-500 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
              Tailored Pathways to Your Success
            </span>
          </div>

          <h1 className="font-['Anton'] text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-wide uppercase">
            Choose Your Path to
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mt-2">
              Purpose & Impact
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-400 font-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Whether you're just beginning your journey or ready to integrate deeper wisdom into your leadership, there's a path designed for you.
          </p>
        </div>
      </section>

      {/* Tier 1: Foundation Services */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-['Anton'] text-3xl md:text-4xl uppercase tracking-wide text-white mb-4">
              Foundation Services
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto tracking-wide uppercase">
              Practical, results-driven programs for clarity, strategy, and sustainable success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Purpose Discovery Intensives */}
            <div className="group bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 hover:bg-white/5 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-orange-500/50 transition-colors">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">
                Purpose Discovery Intensives
              </h3>
              
              <p className="text-sm text-gray-400 font-light mb-8 leading-relaxed flex-grow">
                The foundational step for anyone seeking clarity. Uncover your unique calling and gain a clear roadmap to turn vision into actionable strategy.
              </p>

              <div className="space-y-4 mb-8">
                {['One-on-one clarity sessions', 'Personalized purpose blueprint', '90-day action plan'].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-4 h-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300 font-light">{item}</span>
                  </div>
                ))}
              </div>

              <button className="w-full px-6 py-3.5 bg-white/5 border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-600 group-hover:border-transparent">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Strategic Clarity Workshops */}
            <div className="group bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 hover:bg-white/5 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-orange-500/50 transition-colors">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">
                Strategic Clarity Workshops
              </h3>
              
              <p className="text-sm text-gray-400 font-light mb-8 leading-relaxed flex-grow">
                Practical, results-driven group sessions that equip leaders with frameworks for decision-making, team alignment, and sustainable growth.
              </p>

              <div className="space-y-4 mb-8">
                {['Interactive group workshops', 'Strategic planning tools', 'Peer learning community'].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-4 h-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300 font-light">{item}</span>
                  </div>
                ))}
              </div>

              <button className="w-full px-6 py-3.5 bg-white/5 border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-600 group-hover:border-transparent">
                Join Workshop
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Financial Pillars */}
            <div className="group bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 hover:bg-white/5 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-orange-500/50 transition-colors">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">
                Financial Pillars for the 21st Century
              </h3>
              
              <p className="text-sm text-gray-400 font-light mb-8 leading-relaxed flex-grow">
                Master the essential financial principles that create lasting wealth and business sustainability in today's dynamic marketplace.
              </p>

              <div className="space-y-4 mb-8">
                {['Modern wealth strategies', 'Business finance fundamentals', 'Sustainable growth models'].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-4 h-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300 font-light">{item}</span>
                  </div>
                ))}
              </div>

              <button className="w-full px-6 py-3.5 bg-white/5 border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-600 group-hover:border-transparent">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Section */}
      <section className="relative z-10 py-24 border-y border-white/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-[80vw] h-[200px] bg-gradient-to-r from-orange-600/10 via-amber-500/5 to-orange-600/10 blur-[80px]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-8 h-8 text-orange-500 mx-auto mb-6 opacity-80" />
          <h2 className="font-['Anton'] text-3xl md:text-4xl uppercase tracking-wide text-white mb-4">
            Ready for a Deeper Transformation?
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            For leaders seeking to integrate timeless wisdom and divine principles into every aspect of their leadership and life, explore our premium offerings below.
          </p>
        </div>
      </section>

      {/* Tier 2: Premium Path */}
      <section className="relative z-10 py-24" id="faith-based">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-6">
              <Crown className="w-3.5 h-3.5 text-orange-500 mr-2.5" />
              <span className="text-orange-500 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
                Premium Path
              </span>
            </div>
            <h2 className="font-['Anton'] text-3xl md:text-4xl uppercase tracking-wide text-white mb-4">
              Faith-Based Excellence
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto">
              Specialized programs for leaders who desire to align their purpose with divine wisdom and build a legacy rooted in eternal principles.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Kingship Leadership */}
            <div className="relative bg-gradient-to-br from-[#1a1005] to-[#0a0a0a] border border-orange-500/30 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="relative p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Crown className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-wide">
                        "Kingship" Leadership
                      </h3>
                      <p className="text-[10px] text-orange-400 uppercase tracking-[0.2em] font-bold">
                        Premium Signature Program
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleService('kingship')}
                    className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/10"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedService === 'kingship' ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <p className="text-gray-400 text-sm font-light mb-6 leading-relaxed">
                  The ultimate program for leaders who want to integrate divine principles into their business and leadership. Build a kingdom-minded enterprise that creates generational impact and honors your calling.
                </p>

                <div className={`transition-all duration-500 ease-in-out ${expandedService === 'kingship' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="grid md:grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/10">
                    {[
                      '12-month transformational journey',
                      'Weekly one-on-one coaching',
                      'Faith-integrated business strategy',
                      'Divine purpose alignment',
                      'Kingdom-minded leadership principles',
                      'Legacy building framework'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300 font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <button className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold text-sm hover:from-orange-600 hover:to-amber-700 transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] flex items-center justify-center group uppercase tracking-wide">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                  <button 
                    onClick={() => toggleService('kingship')}
                    className="px-8 py-3.5 bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center uppercase tracking-wide"
                  >
                    {expandedService === 'kingship' ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>

            {/* Hidden Potential Retreats */}
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/30 transition-all duration-300">
              <div className="relative p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-wide">
                        "Hidden Potential" Retreats
                      </h3>
                      <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                        Immersive Experience
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleService('retreat')}
                    className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/10"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedService === 'retreat' ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <p className="text-gray-400 text-sm font-light mb-6 leading-relaxed">
                  An immersive experience designed for profound personal and spiritual growth. Step away from the noise and discover the hidden gifts and divine assignments that have been waiting to be activated within you.
                </p>

                <div className={`transition-all duration-500 ease-in-out ${expandedService === 'retreat' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="grid md:grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/10">
                    {[
                      '3-5 day intensive retreat',
                      'Deep spiritual breakthrough sessions',
                      'Prophetic activation exercises',
                      'Identity and calling discovery',
                      'Small group ministry time',
                      'Post-retreat integration plan'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300 font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <button className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold text-sm hover:from-orange-600 hover:to-amber-700 transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] flex items-center justify-center group uppercase tracking-wide">
                    Reserve Spot
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                  <button 
                    onClick={() => toggleService('retreat')}
                    className="px-8 py-3.5 bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center uppercase tracking-wide"
                  >
                    {expandedService === 'retreat' ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-32 bg-[#020202] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-[80vw] h-[300px] bg-gradient-to-r from-orange-600/10 via-amber-500/10 to-orange-600/10 blur-[100px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Anton'] text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-white mb-6">
            Not Sure Which Path Is Right?
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Let's have a conversation about your goals, challenges, and aspirations. Together, we'll discover the perfect starting point for your journey.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center group uppercase tracking-wide">
              Schedule a Discovery Call
              <ArrowRight className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;