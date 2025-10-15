import React, { useState } from 'react';
import { ArrowRight, Sparkles, Users, Target, TrendingUp, Crown, Zap, Check, ChevronDown } from 'lucide-react';

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50 pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ffa300] to-orange-300 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200 to-[#ffa300] rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white shadow-sm rounded-full mb-6 border border-blue-100">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-[#071108] text-sm font-medium">Tailored Pathways to Your Success</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071108] mb-6 leading-tight">
            Choose Your Path to
            <span className="block bg-gradient-to-r from-[#ffa300] via-orange-500 to-purple-600 bg-clip-text text-transparent">
              Purpose & Impact
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Whether you're just beginning your journey or ready to integrate deeper wisdom into your leadership, there's a path designed for you.
          </p>
        </div>
      </section>

      {/* Tier 1: Universal Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071108] mb-4">
              Foundation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical, results-driven programs for clarity, strategy, and sustainable success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Purpose Discovery Intensives */}
            <div className="group bg-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Target className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#071108] mb-3">
                Purpose Discovery Intensives
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                The foundational step for anyone seeking clarity. Uncover your unique calling and gain a clear roadmap to turn vision into actionable strategy.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">One-on-one clarity sessions</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personalized purpose blueprint</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">90-day action plan</span>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Strategic Clarity Workshops */}
            <div className="group bg-white border-2 border-purple-100 rounded-2xl p-8 hover:border-purple-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <Users className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#071108] mb-3">
                Strategic Clarity Workshops
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Practical, results-driven group sessions that equip leaders with frameworks for decision-making, team alignment, and sustainable growth.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Interactive group workshops</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Strategic planning tools</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Peer learning community</span>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center group">
                Join Workshop
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Financial Pillars */}
            <div className="group bg-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <TrendingUp className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#071108] mb-3">
                Financial Pillars for the 21st Century
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master the essential financial principles that create lasting wealth and business sustainability in today's dynamic marketplace.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Modern wealth strategies</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Business finance fundamentals</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Sustainable growth models</span>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 via-purple-50 to-[#ffa300]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-12 h-12 text-[#ffa300] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#071108] mb-4">
            Ready for a Deeper Transformation?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            For leaders seeking to integrate timeless wisdom and divine principles into every aspect of their leadership and life, explore our premium offerings below.
          </p>
        </div>
      </section>

      {/* Tier 2: Premium Path */}
      <section className="py-20 bg-white" id="faith-based">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-6 border border-purple-200">
              <Crown className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-[#071108] text-sm font-medium">Premium Path</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#071108] mb-4">
              Faith-Based Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized programs for leaders who desire to align their purpose with divine wisdom and build a legacy rooted in eternal principles
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* Kingship Leadership */}
            <div className="border-2 border-purple-200 rounded-2xl overflow-hidden hover:border-purple-400 transition-colors bg-gradient-to-br from-white via-orange-50/30 to-purple-50">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ffa300] via-black to-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#071108] mb-2">
                        "Kingship" Leadership & Business Coaching
                      </h3>
                      <p className="text-purple-700 font-semibold text-sm uppercase tracking-wide">
                        Premium Signature Program
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleService('kingship')}
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <ChevronDown className={`w-6 h-6 transition-transform ${expandedService === 'kingship' ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  The ultimate program for leaders who want to integrate divine principles into their business and leadership. Build a kingdom-minded enterprise that creates generational impact and honors your calling.
                </p>

                <div className={`transition-all duration-300 ${expandedService === 'kingship' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="grid md:grid-cols-2 gap-4 mb-6 pt-4 border-t border-purple-200">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">12-month transformational journey</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Weekly one-on-one coaching</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Faith-integrated business strategy</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Divine purpose alignment</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Kingdom-minded leadership principles</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Legacy building framework</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button className="px-8 py-4 bg-gradient-to-br from-[#ffa300] via-black to-orange text-white rounded-full font-semibold hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group">
                    Apply Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => toggleService('kingship')}
                    className="px-8 py-4 border-2 border-[#ffa300] text-[#ffa300] rounded-full font-semibold hover:bg-orange-50 transition-colors"
                  >
                    {expandedService === 'kingship' ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>

            {/* Hidden Potential Retreats */}
            <div className="border-2 border-blue-200 rounded-2xl overflow-hidden hover:border-blue-400 transition-colors bg-gradient-to-br from-white via-blue-50/50 to-orange-50/30">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ffa300] via-black to-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#071108] mb-2">
                        "Hidden Potential" Activation Retreats
                      </h3>
                      <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                        Immersive Experience
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleService('retreat')}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ChevronDown className={`w-6 h-6 transition-transform ${expandedService === 'retreat' ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  An immersive experience designed for profound personal and spiritual growth. Step away from the noise and discover the hidden gifts and divine assignments that have been waiting to be activated within you.
                </p>

                <div className={`transition-all duration-300 ${expandedService === 'retreat' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="grid md:grid-cols-2 gap-4 mb-6 pt-4 border-t border-blue-200">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">3-5 day intensive retreat</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Deep spiritual breakthrough sessions</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Prophetic activation exercises</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Identity and calling discovery</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Small group ministry time</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Post-retreat integration plan</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button className="px-8 py-4 bg-gradient-to-br from-[#ffa300] via-black to-orange text-white rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group">
                    Reserve Your Spot
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => toggleService('retreat')}
                    className="px-8 py-4 border-2 border-[#ffa300] text-[#ffa300] rounded-full font-semibold hover:bg-orange-50 transition-colors"
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
      <section className="py-20 bg-[#071108] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ffa300] to-orange-400 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500 to-[#ffa300] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Path Is Right for You?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's have a conversation about your goals, challenges, and aspirations. Together, we'll discover the perfect starting point for your journey.
          </p>
          <button className="px-8 py-4 bg-white text-[#071108] rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center group">
            Schedule a Discovery Call
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;