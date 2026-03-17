import React from 'react';
import { Heart, Target, Users, Briefcase, Star, ArrowRight, Quote, Award, TrendingUp, MessageCircle } from 'lucide-react';
import Seven from '../images/Floww.jpeg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">
      
      {/* Global Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-orange-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-amber-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              {/* Highlight Label */}
              <div className="flex items-center">
                <Star className="w-3.5 h-3.5 text-orange-500 mr-2.5" />
                <span className="text-orange-500 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
                  Catalyst For Transformation
                </span>
              </div>
              
              <h1 className="font-['Anton'] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-wide uppercase">
                Aworeni Opeyemi<br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mt-2 block">
                  Oluwaseun
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light max-w-lg">
                Empowering individuals and businesses to discover purpose and achieve excellence through coaching, leadership, and strategic guidance.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold text-sm hover:from-orange-600 hover:to-amber-700 transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] flex items-center justify-center group">
                  Book a Session
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center">
                  Learn More
                </button>
              </div>

              {/* Quick Stats - Editorial Style */}
              <div className="flex items-center gap-6 md:gap-10 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">500<span className="text-orange-500">+</span></div>
                  <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em]">Lives Transformed</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">2</div>
                  <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em]">Agencies Founded</div>
                </div>
                <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                <div className="hidden sm:block">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">100<span className="text-orange-500">+</span></div>
                  <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em]">Businesses Guided</div>
                </div>
              </div>
            </div>

            {/* Profile Image with Glassmorphism Badge */}
          <div className="relative lg:h-[600px] w-full max-w-md mx-auto lg:max-w-none">
  <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent rounded-3xl blur-2xl"></div>
  <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
    <img
      src="/SeunOpeyemi.webp" 
      alt="Seun Osbi - Professional portrait"
      // Removed mix-blend-luminosity to restore full color
      className="h-full w-full object-cover object-top opacity-95 md:opacity-100 bg-[#050505]"
      fetchPriority="high"
      loading="eager"
      decoding="sync"
    />
  </div>
  
  {/* Floating Badge */}
  <div className="absolute -bottom-6 -left-2 md:-left-6 bg-[#050505]/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-2xl">
    <div className="flex items-center gap-4">
      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2.5 rounded-xl">
        <Award className="w-6 h-6 text-white" />
      </div>
      <div>
        <div className="font-bold text-sm text-white tracking-wide">One Percent Life</div>
        <div className="text-[10px] text-orange-400 uppercase tracking-widest mt-0.5">Founder & Lead Coach</div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-['Anton'] text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white mb-3">The Story Behind The Mission</h2>
            <p className="text-sm md:text-base text-gray-400 font-light tracking-wide uppercase">Building bridges between purpose and excellence</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 space-y-6 text-gray-300 leading-relaxed font-light text-sm md:text-base">
              <p className="text-lg md:text-xl text-white font-medium">
                <span className="text-orange-500">A catalyst for personal and professional growth</span>, Aworeni Opeyemi Oluwaseun is a dynamic leader, coach, and public speaker who is passionate about empowering people for personal and professional excellence.
              </p>
              <p>
                Leading the <span className="text-white font-medium">One Percent Life Organization</span>, he is dedicated to guiding young individuals on their journey to purpose discovery and becoming highly-effective people. His approach combines practical wisdom with transformational coaching to help individuals unlock their full potential.
              </p>
              <p>
                Through his business acumen and visionary drive for business success, he has consulted for numerous startups and small businesses, helping them achieve significant growth. As a testament to his entrepreneurial expertise, he's a co-founder of two agencies—one in the <span className="text-white font-medium">digital marketing space</span> and another in the <span className="text-white font-medium">travel industry</span>.
              </p>
              <p>
                Beyond his business endeavors, his dedication to human flourishing extends to fostering healthy relationships, where he speaks and coaches individuals on <span className="text-white font-medium">love, relationships, and marriage</span>. His holistic approach recognizes that true success encompasses both professional achievement and personal fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Impact */}
      <section className="relative z-10 py-24 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-['Anton'] text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white mb-4">Areas of Impact</h2>
            <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto">
              Transforming lives through purpose-driven coaching, strategic business guidance, and relationship excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Target className="w-6 h-6" />, title: "Purpose Discovery", description: "Guiding young individuals on their journey to becoming highly-effective people through the One Percent Life Organization." },
              { icon: <Briefcase className="w-6 h-6" />, title: "Business Consulting", description: "Strategic consulting for startups and small businesses to achieve significant growth and sustainable success." },
              { icon: <Heart className="w-6 h-6" />, title: "Relationship Coaching", description: "Speaking and coaching individuals on love, relationships, and marriage to foster healthy, lasting connections." },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Entrepreneurial Ventures", description: "Co-founder of two thriving agencies in digital marketing and travel, bringing entrepreneurial expertise to life." },
              { icon: <MessageCircle className="w-6 h-6" />, title: "Public Speaking", description: "Dynamic presentations on personal excellence, leadership, and human flourishing for diverse audiences." },
              { icon: <Users className="w-6 h-6" />, title: "Leadership Development", description: "Empowering emerging leaders to discover their unique strengths and make meaningful impact in their spheres." }
            ].map((area, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="bg-[#050505] border border-white/10 p-3 rounded-xl inline-flex mb-6 group-hover:border-orange-500/50 transition-colors">
                  <div className="text-orange-500">{area.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white tracking-wide">{area.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 py-32 border-y border-white/10 overflow-hidden">
        {/* Core background glow for the quote */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-[80vw] h-[300px] bg-gradient-to-r from-orange-600/10 via-amber-500/10 to-orange-600/10 blur-[100px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-10 h-10 mx-auto mb-8 text-orange-500/40" />
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic mb-10 leading-relaxed text-gray-200">
            "For there is hope for a tree, if it be cut down, that it will sprout again, 
            and that its shoots will not cease."
          </blockquote>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-white/20" />
            <p className="text-[10px] md:text-xs font-semibold text-orange-500 uppercase tracking-[0.3em]">Job 14:7</p>
            <div className="h-px w-12 bg-white/20" />
          </div>
          <p className="text-sm text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            This verse embodies the core belief: no matter where you've been or what you've faced, 
            there is always hope for renewal, growth, and transformation.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-24 bg-[#020202]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-['Anton'] text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white mb-4">Core Values</h2>
            <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto">
              The principles that guide every coaching session, consultation, and conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Human Flourishing", description: "Believing that every person has inherent worth and potential for extraordinary growth in all areas of life." },
              { title: "Excellence & Effectiveness", description: "Pursuing the highest standards in both personal character and professional achievement." },
              { title: "Purpose-Driven Living", description: "Helping individuals discover their unique calling and align their actions with their deepest values." },
              { title: "Holistic Growth", description: "Recognizing that true success encompasses relationships, business, and personal development equally." }
            ].map((value, index) => (
              <div key={index} className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/30 transition-all group">
                <div className="flex items-start gap-4">
                  <span className="text-orange-500 font-['Anton'] text-2xl opacity-50 mt-1">0{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-wide">{value.title}</h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Anton'] text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-white mb-6">Ready to Begin?</h2>
          <p className="text-base text-gray-400 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you're seeking purpose, building a business, or strengthening relationships, 
            take the first step toward transformation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold text-sm hover:from-orange-600 hover:to-amber-700 transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] flex items-center justify-center group">
              Schedule Your Session
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center">
              Explore Services
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutPage;