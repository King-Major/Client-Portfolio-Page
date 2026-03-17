import React, { useState } from 'react';
import { Quote, Users, Target, Coffee, Heart, ArrowRight, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Deborah from '../images/sirope1.jpg';
import Precious from '../images/sirope2.jpg';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Deborah Akinyemi",
      role: "Creative Lead",
      company: "Daluminaire",
      image: Deborah,
      testimonial: "I learnt a lot from the Goal setting training for yesterday. One of my biggest highlights was in the area of getting knowledge and asking people who have gone ahead, the right questions. I figured many times I've taken steps, entered into new spheres without necessarily asking the right questions from those who have gone ahead or had similar experiences. With this training, I think I'll be more intentional about asking the right questions for clarity so I'm starting a new path armed with the insights from questions asked. Thank you so much for the impact, Sir.",
      rating: 5,
      category: "Goal Setting Training"
    },
    {
      name: "Precious Mpamugo",
      role: "Digital Marketer, Co-founder",
      company: "Purplight Digics Agency",
      image: Precious,
      testimonial: "Thank you, sir, for the insightful session you had with us today. Goal setting has never felt this simplified for me, but you broke it down in such a clear and relatable way that even a child could easily understand it. I deeply appreciate the time and effort you invested to provide such valuable guidance. While no amount of gratitude can repay you, I am determined to honor your mentorship by producing tangible results. Thank you for your unwavering support, consistent involvement, and impactful mentorship in helping me bring order and purpose to my life",
      rating: 5,
      category: "Life Coaching"
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">
      
      {/* Global Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-orange-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-amber-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center mb-6">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 mr-2.5" />
            <span className="text-orange-500 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
              Client Testimonials
            </span>
          </div>
          
          <h1 className="font-['Anton'] text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-white mb-6">
            Stories of <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">Transformation</span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed uppercase tracking-wide">
            Hear from those whose lives have been impacted through coaching, training, and mentorship.
          </p>
        </div>
      </section>

      {/* Main Testimonial Display Slider */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-5 gap-0">
              
              {/* Image & Detail Section */}
              <div className="md:col-span-2 relative bg-[#0a0a0a] p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
                
                <div className="relative text-center z-10">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-20 bg-orange-500 animate-pulse" />
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border border-white/20 shadow-xl grayscale-[20%]"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#050505] border border-white/10 rounded-full p-2.5 shadow-lg">
                      <Quote className="w-4 h-4 text-orange-500" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-wide">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-xs md:text-sm text-orange-400 uppercase tracking-widest mb-1">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-xs text-gray-500 mb-5 font-light">
                    {currentTestimonial.company}
                  </p>
                  
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange-500" fill="currentColor" />
                    ))}
                  </div>

                  <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-medium text-gray-300">
                    {currentTestimonial.category}
                  </span>
                </div>
              </div>

              {/* Quote Content Section */}
              <div className="md:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5" />
                
                <blockquote className="text-base md:text-lg text-gray-300 leading-relaxed font-light mb-10 relative z-10">
                  "{currentTestimonial.testimonial}"
                </blockquote>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto relative z-10">
                  <div className="flex gap-3">
                    <button
                      onClick={prevTestimonial}
                      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 text-gray-400 hover:text-white transition-all duration-300 group"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 text-gray-400 hover:text-white transition-all duration-300 group"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeTestimonial === index 
                            ? 'w-8 bg-orange-500' 
                            : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="relative z-10 py-24 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-['Anton'] text-3xl md:text-4xl uppercase tracking-wide text-center mb-12">More Success Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 cursor-pointer border transition-all duration-300 group ${
                  activeTestimonial === index 
                    ? 'border-orange-500/50 bg-white/10' 
                    : 'border-white/10 hover:border-orange-500/30'
                }`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover grayscale-[20%] border border-white/10"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-white tracking-wide">{testimonial.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-orange-400 mt-0.5">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 font-light mt-0.5">{testimonial.company}</p>
                  </div>
                  <div className="flex gap-1 hidden sm:flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-orange-500" fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 font-light text-sm line-clamp-3 mb-5 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                <span className="inline-block px-3 py-1 bg-black/50 border border-white/5 rounded-full text-[10px] uppercase tracking-widest text-gray-400">
                  {testimonial.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
              
      {/* Course Options Section */}
      <section className="relative z-10 py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-['Anton'] text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white mb-4">Transform Your Life Today</h2>
            <p className="text-sm md:text-base text-gray-400 font-light uppercase tracking-wide">Start with free courses or dive deep with our masterclasses</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Courses */}
            <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="inline-block px-3 py-1 bg-white/10 border border-white/10 text-white rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                Complimentary
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white tracking-wide">Introductory Courses</h3>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-4">
                  <span className="text-gray-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Goal Setting Fundamentals</p>
                    <p className="text-sm text-gray-400 font-light mt-1">Learn the art of asking the right questions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gray-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Purpose Discovery Workshop</p>
                    <p className="text-sm text-gray-400 font-light mt-1">Uncover your life's calling in 7 days.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gray-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Mindset Reset Challenge</p>
                    <p className="text-sm text-gray-400 font-light mt-1">Transform your thinking patterns completely.</p>
                  </div>
                </li>
              </ul>
              <button className="w-full py-4 bg-white/5 border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-colors uppercase tracking-wide">
                Access Free Courses
              </button>
            </div>

            {/* Master Courses */}
            <div className="relative bg-gradient-to-br from-[#1a1005] to-[#0a0a0a] rounded-3xl p-8 md:p-10 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                  Premium
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white tracking-wide">Master Course Collection</h3>
                <ul className="space-y-5 mb-10">
                  <li className="flex items-start gap-4">
                    <Star className="w-4 h-4 text-orange-500 mt-1" fill="currentColor" />
                    <div>
                      <p className="font-semibold text-white">The One Percent Life</p>
                      <p className="text-sm text-gray-400 font-light mt-1">Complete life transformation program.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Star className="w-4 h-4 text-orange-500 mt-1" fill="currentColor" />
                    <div>
                      <p className="font-semibold text-white">Relationship Mastery</p>
                      <p className="text-sm text-gray-400 font-light mt-1">Build lasting, meaningful connections.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Star className="w-4 h-4 text-orange-500 mt-1" fill="currentColor" />
                    <div>
                      <p className="font-semibold text-white">Business & Life Strategy</p>
                      <p className="text-sm text-gray-400 font-light mt-1">Advanced coaching and certification.</p>
                    </div>
                  </li>
                </ul>
                <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold text-sm hover:from-orange-600 hover:to-amber-700 transition-shadow shadow-[0_4px_20px_rgba(249,115,22,0.2)] uppercase tracking-wide">
                  Explore Master Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-24 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "500", label: "Lives Transformed", icon: Users },
              { number: "98", label: "Success Rate (%)", icon: Target },
              { number: "50", label: "Workshops Held", icon: Coffee },
              { number: "1000", label: "Coaching Hours", icon: Heart }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-5 group-hover:border-orange-500/30 group-hover:bg-white/10 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wider">
                  {stat.number}<span className="text-orange-500">+</span>
                </h4>
                <p className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-[0.15em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-32 overflow-hidden">
        {/* Ambient background glow for the CTA */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-[80vw] h-[300px] bg-gradient-to-r from-orange-600/10 via-amber-500/10 to-orange-600/10 blur-[100px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Anton'] text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Join our community of successful individuals who have embraced their full potential through personalized coaching.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold text-sm hover:from-orange-600 hover:to-amber-700 transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] flex items-center justify-center group uppercase tracking-wide">
              Begin Your Journey
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;