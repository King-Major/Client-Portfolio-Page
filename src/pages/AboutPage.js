import React from 'react';
import { Heart, Target, Users, Calendar, Star, ArrowRight, Quote } from 'lucide-react';
import seven from '../images/seven.jpg'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Photo */}
      <section className="relative min-h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
        
        <div className="relative max-w-7xl mx-auto pt-20 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="flex items-center gap-2 text-blue-600 font-semibold mb-4">
                  <Star className="w-5 h-5" />
                  <span>PURPOSE & RELATIONSHIP COACH</span>
                </div>
              </div>
              
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Aworeni Oluwaseun Osbi
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforming lives through purpose-driven coaching and authentic relationship building. 
                Team lead at One Percent Life.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2">
                  Book a Session
                  <ArrowRight className="w-5 h-5" />
                </button> */}
                {/* <button className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-600 transition-all">
                  Learn More
                </button> */}
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-white/50 rounded-3xl backdrop-blur-sm" />
              <img
                src={seven}
                alt="Aworeni Oluwaseun Osbi"
                className="relative rounded-2xl w-full object-cover shadow-2xl transform hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="font-bold text-2xl text-blue-600">500+</div>
                  <div className="text-gray-600">Lives Transformed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Transform Your Life</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience breakthrough in every aspect of your life through personalized coaching
              and strategic guidance.
            </p>
          </div>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">This will be what you want me to say about you</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              what YOU will say
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Purpose Discovery",
                description: "Uncover your unique calling and create a roadmap for fulfillment",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Relationship Mastery",
                description: "Build lasting connections and deepen your relationships",
                color: "text-red-600",
                bg: "bg-red-50"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Group Coaching",
                description: "Grow alongside others in our supportive community",
                color: "text-green-600",
                bg: "bg-green-50"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Private Sessions",
                description: "One-on-one guidance tailored to your journey",
                color: "text-purple-600",
                bg: "bg-purple-50"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className={`${service.bg} ${service.color} p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Quote */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="w-16 h-16 text-blue-600 mx-auto mb-8 opacity-50" />
          <blockquote className="text-3xl font-serif italic text-gray-800 mb-8 leading-relaxed">
            "For there is hope for a tree, if it be cut down, that it will sprout again, 
            and that its shoots will not cease."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gray-300" />
            <p className="text-xl text-gray-600">Job 14:7</p>
            <div className="h-px w-12 bg-gray-300" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Take the first step towards transforming your life with personalized coaching 
            that empowers you to reach your full potential.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-blue-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-3">
              Schedule Your Session
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;