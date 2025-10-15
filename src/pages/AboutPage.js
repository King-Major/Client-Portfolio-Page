import React from 'react';
import { Heart, Target, Users, Briefcase, Star, ArrowRight, Quote, Award, TrendingUp, MessageCircle } from 'lucide-react';
import Seven from '../images/seven.jpg'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50 opacity-60" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm text-white" style={{background: 'linear-gradient(to right, #ffa300, #fb923c)'}}>
                <Star className="w-4 h-4 fill-current" />
                <span>CATALYST FOR TRANSFORMATION</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Aworeni Opeyemi<br />Oluwaseun
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                Empowering individuals and businesses to discover purpose and achieve excellence through coaching, leadership, and strategic guidance.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg" style={{background: 'linear-gradient(to right, #ffa300, #fb923c)'}}>
                  Book a Session
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:text-white transition-all" style={{'--hover-bg': 'linear-gradient(to right, #ffa300, #fb923c)'}} onMouseEnter={(e) => {e.currentTarget.style.background = 'linear-gradient(to right, #ffa300, #fb923c)'; e.currentTarget.style.borderColor = '#ffa300';}} onMouseLeave={(e) => {e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.color = '#1f2937';}}>
                  Learn More
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold" style={{color: '#ffa300'}}>500+</div>
                  <div className="text-sm text-gray-600">Lives Transformed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{color: '#ffa300'}}>2</div>
                  <div className="text-sm text-gray-600">Co-Founded Agencies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{color: '#ffa300'}}>100+</div>
                  <div className="text-sm text-gray-600">Businesses Consulted</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative lg:h-[600px]">
              <div className="absolute inset-0 rounded-3xl transform rotate-3 opacity-20" style={{background: 'linear-gradient(to bottom right, #ffa300, #fb923c)'}} />
              <div className="relative h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg">
                  <img
                      src={Seven}
                      alt="Seun Osbi - Professional portrait"
                      className="h-full w-full object-cover object-center"
                    />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border-4" style={{borderColor: '#ffa300'}}>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8" style={{color: '#ffa300'}} />
                  <div>
                    <div className="font-bold text-lg text-gray-900">One Percent Life</div>
                    <div className="text-sm text-gray-600">Founder & Lead Coach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">The Story Behind The Mission</h2>
            <p className="text-xl text-gray-600">Building bridges between purpose and excellence</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-xl font-light">
                  <span className="text-2xl font-semibold" style={{color: '#ffa300'}}>A catalyst for personal and professional growth</span>, Aworeni Opeyemi Oluwaseun is a dynamic leader, coach, and public speaker who is passionate about empowering people for personal and professional excellence.
                </p>
                
                <p className="text-lg">
                  Leading the <span className="font-semibold text-gray-900">One Percent Life Organization</span>, he is dedicated to guiding young individuals on their journey to purpose discovery and becoming highly-effective people. His approach combines practical wisdom with transformational coaching to help individuals unlock their full potential.
                </p>
                
                <p className="text-lg">
                  Through his business acumen and visionary drive for business success, he has consulted for numerous startups and small businesses, helping them achieve significant growth. As a testament to his entrepreneurial expertise, he's a co-founder of two agencies—one in the <span className="font-semibold text-gray-900">digital marketing space</span> and another in the <span className="font-semibold text-gray-900">travel industry</span>.
                </p>
                
                <p className="text-lg">
                  Beyond his business endeavors, his dedication to human flourishing extends to fostering healthy relationships, where he speaks and coaches individuals on <span className="font-semibold text-gray-900">love, relationships, and marriage</span>. His holistic approach recognizes that true success encompasses both professional achievement and personal fulfillment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Impact */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Areas of Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming lives through purpose-driven coaching, strategic business guidance, and relationship excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: "Purpose Discovery",
                description: "Guide young individuals on their journey to becoming highly-effective people through the One Percent Life Organization",
                color: "#ffa300",
                bg: "bg-orange-50",
                borderColor: "#ffa300"
              },
              {
                icon: <Briefcase className="w-10 h-10" />,
                title: "Business Consulting",
                description: "Strategic consulting for startups and small businesses to achieve significant growth and sustainable success",
                color: "#2563eb",
                bg: "bg-blue-50",
                borderColor: "#3b82f6"
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Relationship Coaching",
                description: "Speaking and coaching individuals on love, relationships, and marriage to foster healthy, lasting connections",
                color: "#ec4899",
                bg: "bg-pink-50",
                borderColor: "#f472b6"
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Entrepreneurial Ventures",
                description: "Co-founder of two thriving agencies in digital marketing and travel, bringing entrepreneurial expertise to life",
                color: "#10b981",
                bg: "bg-green-50",
                borderColor: "#34d399"
              },
              {
                icon: <MessageCircle className="w-10 h-10" />,
                title: "Public Speaking",
                description: "Dynamic presentations on personal excellence, leadership, and human flourishing for diverse audiences",
                color: "#f59e0b",
                bg: "bg-amber-50",
                borderColor: "#fbbf24"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Leadership Development",
                description: "Empowering emerging leaders to discover their unique strengths and make meaningful impact in their spheres",
                color: "#6366f1",
                bg: "bg-indigo-50",
                borderColor: "#818cf8"
              }
            ].map((area, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl bg-white border-2 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2`}
                style={{borderColor: area.borderColor}}
              >
                <div className={`${area.bg} p-4 rounded-xl inline-flex mb-6 group-hover:scale-110 transition-transform`} style={{color: area.color}}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 text-white" style={{background: 'linear-gradient(to bottom right, #ffa300, #fb923c)'}}>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Quote className="w-16 h-16 mx-auto mb-8 opacity-50" />
          <blockquote className="text-3xl lg:text-4xl font-light italic mb-8 leading-relaxed">
            "For there is hope for a tree, if it be cut down, that it will sprout again, 
            and that its shoots will not cease."
          </blockquote>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-white opacity-50" />
            <p className="text-xl font-semibold">Job 14:7</p>
            <div className="h-px w-16 bg-white opacity-50" />
          </div>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">
            This verse embodies the core belief: no matter where you've been or what you've faced, 
            there is always hope for renewal, growth, and transformation.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide every coaching session, consultation, and conversation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Human Flourishing",
                description: "Believing that every person has inherent worth and potential for extraordinary growth in all areas of life"
              },
              {
                title: "Excellence & Effectiveness",
                description: "Pursuing the highest standards in both personal character and professional achievement"
              },
              {
                title: "Purpose-Driven Living",
                description: "Helping individuals discover their unique calling and align their actions with their deepest values"
              },
              {
                title: "Holistic Growth",
                description: "Recognizing that true success encompasses relationships, business, and personal development equally"
              }
            ].map((value, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all" style={{'--hover-border': '#ffa300'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ffa300'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Whether you're seeking purpose, building a business, or strengthening relationships, 
            take the first step toward transformation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="text-white px-12 py-5 rounded-full text-xl font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl" style={{background: 'linear-gradient(to right, #ffa300, #fb923c)'}}>
              Schedule Your Session
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="bg-white text-gray-800 px-12 py-5 rounded-full text-xl font-semibold border-2 border-gray-300 hover:text-white transition-all" onMouseEnter={(e) => {e.currentTarget.style.background = 'linear-gradient(to right, #ffa300, #fb923c)'; e.currentTarget.style.borderColor = '#ffa300';}} onMouseLeave={(e) => {e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.color = '#1f2937';}}>
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;