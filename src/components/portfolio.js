import React, { useState } from 'react';
import { Users, Heart, Target, Star, ArrowRight, Quote, Sparkles, Award, Coffee } from 'lucide-react';

const Portfolio = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      title: "Finding Purpose",
      subtitle: "From Uncertainty to Clarity",
      testimonial: "Through Aworeni's guidance, I discovered my true calling and built a life that aligns with my deepest values.",
      category: "Purpose Discovery",
      clientName: "Sarah Johnson",
      role: "Entrepreneur & Speaker",
      impact: ["Career Transition", "Personal Growth", "Life Purpose"],
      image: "/api/placeholder/800/600",
      rating: 5
    },
    {
      title: "Relationship Revival",
      subtitle: "Rekindling Love & Trust",
      testimonial: "Our marriage was transformed. We learned to communicate deeply and rebuild trust in ways we never thought possible.",
      category: "Relationship Coaching",
      clientName: "David & Maria Chen",
      role: "Power Couple",
      impact: ["Marriage Restored", "Deep Connection", "Mutual Growth"],
      image: "/api/placeholder/800/600",
      rating: 5
    },
    {
      title: "Personal Breakthrough",
      subtitle: "Embracing True Potential",
      testimonial: "The One Percent Life program helped me break through limitations I'd carried for years. I'm living my best life now.",
      category: "Life Transformation",
      clientName: "Michael Adams",
      role: "Creative Director",
      impact: ["Self-Confidence", "Goal Achievement", "Inner Peace"],
      image: "/api/placeholder/800/600",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm mb-8">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">Transformational Stories</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Life-Changing Results
          </h1>
          
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover how our coaching programs have transformed lives, rekindled relationships,
            and unlocked extraordinary potential.
          </p>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl transform -rotate-2" />
              <div className="relative">
                <img
                  src={successStories[activeStory].image}
                  alt={successStories[activeStory].title}
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 rounded-lg p-3">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex gap-1 mb-1">
                        {[...Array(successStories[activeStory].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">{successStories[activeStory].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-medium">
                {successStories[activeStory].category}
              </span>
              
              <div>
                <h2 className="text-4xl font-bold mb-4">{successStories[activeStory].title}</h2>
                <p className="text-xl text-gray-600">{successStories[activeStory].subtitle}</p>
              </div>

              <blockquote className="text-xl text-gray-600 italic border-l-4 border-blue-600 pl-6">
                "{successStories[activeStory].testimonial}"
              </blockquote>

              <div className="space-y-4">
                <p className="font-semibold">Key Transformations:</p>
                <div className="flex flex-wrap gap-3">
                  {successStories[activeStory].impact.map((impact, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 flex items-center gap-2"
                    >
                      <Award className="w-4 h-4 text-blue-600" />
                      {impact}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="/api/placeholder/48/48"
                  alt={successStories[activeStory].clientName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{successStories[activeStory].clientName}</p>
                  <p className="text-gray-600">{successStories[activeStory].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Navigation */}
          <div className="flex justify-center gap-4 mt-16">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeStory === index ? 'bg-blue-600 w-12' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
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
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg">
              Begin Your Journey
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;