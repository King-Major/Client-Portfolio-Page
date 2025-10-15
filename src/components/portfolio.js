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
      image: [Deborah],
      testimonial: "I learnt a lot from the Goal setting training for yesterday. One of my biggest highlights was in the area of getting knowledge and asking people who have gone ahead, the right questions. I figured many times I've taken steps, entered into new spheres without necessarily asking the right questions from those who have gone ahead or had similar experiences. With this training, I think I'll be more intentional about asking the right questions for clarity so I'm starting a new path armed with the insights from questions asked. Thank you so much for the impact, Sir.",
      rating: 5,
      category: "Goal Setting Training"
    },
    {
      name: "Precious Mpamugo",
      role: "Digital Marketer, Co-founder",
      company: "Purplight Digics Agency",
      image: [Precious],
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm mb-6">
            <Sparkles className="w-5 h-5" style={{color: '#ffa300'}} />
            <span className="text-orange-800 font-semibold">Client Testimonials</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            Stories of Transformation
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from those whose lives have been impacted through coaching, training, and mentorship
          </p>
        </div>
      </section>

      {/* Main Testimonial Display */}
      <section className="py-12 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 relative bg-gradient-to-br from-orange-100 to-blue-100 p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-600/10" />
                <div className="relative text-center">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse" style={{background: 'linear-gradient(to bottom right, #ffa300, #2563eb)'}} />
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 rounded-full p-2 shadow-lg" style={{background: 'linear-gradient(to bottom right, #ffa300, #fb923c)'}}>
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {currentTestimonial.name}
                  </h3>
                  <p className="font-semibold mb-1" style={{color: '#ffa300'}}>
                    {currentTestimonial.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {currentTestimonial.company}
                  </p>
                  
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="#FBBF24" />
                    ))}
                  </div>

                  <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm">
                    {currentTestimonial.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Quote className="w-12 h-12 opacity-20 mb-4" style={{color: '#ffa300'}} />
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  {currentTestimonial.testimonial}
                </blockquote>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex gap-3">
                    <button
                      onClick={prevTestimonial}
                      className="p-3 rounded-full bg-gray-100 hover:text-white transition-all duration-300 group"
                      style={{'--tw-gradient-from': '#ffa300', '--tw-gradient-to': '#fb923c'}}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom right, #ffa300, #fb923c)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#f3f4f6'}
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-3 rounded-full bg-gray-100 hover:text-white transition-all duration-300 group"
                      onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom right, #ffa300, #fb923c)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#f3f4f6'}
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeTestimonial === index 
                            ? 'w-8' 
                            : 'bg-gray-300 w-2 hover:bg-gray-400'
                        }`}
                        style={activeTestimonial === index ? {background: 'linear-gradient(to right, #ffa300, #fb923c)'} : {}}
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">More Success Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  activeTestimonial === index 
                    ? 'scale-105' 
                    : 'border-transparent hover:border-orange-200'
                }`}
                style={activeTestimonial === index ? {borderColor: '#ffa300'} : {}}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm line-clamp-4 mb-4">
                  {testimonial.testimonial}
                </p>

                <span className="inline-block px-3 py-1 bg-orange-50 rounded-full text-xs font-medium" style={{color: '#ffa300'}}>
                  {testimonial.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
              
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Life Today</h2>
            <p className="text-gray-600 text-lg">Start with free courses or dive deep with our masterclasses</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Courses */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-500">
              <div className="inline-block px-4 py-1 bg-green-500 text-white rounded-full text-sm font-bold mb-4">
                FREE
              </div>
              <h3 className="text-2xl font-bold mb-4">Free Introductory Courses</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold">Goal Setting Fundamentals</p>
                    <p className="text-sm text-gray-600">Learn the art of asking the right questions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold">Purpose Discovery Workshop</p>
                    <p className="text-sm text-gray-600">Uncover your life's calling in 7 days</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold">Mindset Reset Challenge</p>
                    <p className="text-sm text-gray-600">Transform your thinking patterns</p>
                  </div>
                </li>
              </ul>
              <button className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Access Free Courses
              </button>
            </div>

            {/* Master Courses */}
            <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-white" style={{background: 'linear-gradient(to bottom right, #ffa300, #fb923c)'}}>
              <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4">
                PREMIUM
              </div>
              <h3 className="text-2xl font-bold mb-4">Master Course Collection</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 mt-1">★</span>
                  <div>
                    <p className="font-semibold">The One Percent Life</p>
                    <p className="text-sm text-orange-100">Complete life transformation program</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 mt-1">★</span>
                  <div>
                    <p className="font-semibold">Relationship Mastery</p>
                    <p className="text-sm text-orange-100">Build lasting, meaningful connections</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 mt-1">★</span>
                  <div>
                    <p className="font-semibold">Business & Life Strategy</p>
                    <p className="text-sm text-orange-100">Advanced coaching certification</p>
                  </div>
                </li>
              </ul>
              <button className="w-full py-3 bg-white rounded-lg font-semibold hover:bg-orange-50 transition-colors" style={{color: '#ffa300'}}>
                Explore Master Courses
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20" style={{background: 'linear-gradient(to bottom right, #ffa300, #fb923c)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join hundreds of others who have transformed their lives through coaching and mentorship
          </p>
          <button className="px-8 py-4 bg-white rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105" style={{color: '#ffa300'}}>
            Get Started Today
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                number: "500+",
                label: "Lives Transformed",
                icon: Users,
                color: "blue"
              },
              {
                number: "98%",
                label: "Success Rate",
                icon: Target,
                color: "purple"
              },
              {
                number: "50+",
                label: "Workshops Held",
                icon: Coffee,
                color: "pink"
              },
              {
                number: "1000+",
                label: "Coaching Hours",
                icon: Heart,
                color: "red"
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`inline-block p-6 rounded-2xl bg-${stat.color}-50 mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-10 h-10 text-${stat.color}-600`} />
                </div>
                <h4 className="text-5xl font-bold text-gray-800 mb-4">{stat.number}</h4>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Life?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join our community of successful individuals who have embraced their full potential
            through personalized coaching.
          </p>
          <div className="flex justify-center gap-6">
            <button className="text-white px-12 py-6 rounded-full text-xl font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg" style={{background: 'linear-gradient(to right, #ffa300, #fb923c)'}}>
              Begin Your Journey
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;