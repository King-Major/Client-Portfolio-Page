import React, { useState } from 'react';
import { BookOpen, Sparkles, ArrowRight, Calendar, User, ArrowLeft, Clock, Share2, Twitter, Facebook, MessageCircle } from 'lucide-react';

const AnimatedSection = ({ children, className = '' }) => {
  return (
    <div className={`animate-fade-in ${className}`}>
      {children}
    </div>
  );
};

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);
  
  const blogPosts = [
    {
      id: 1,
      title: "The 5 Habits of High-Impact Leaders",
      category: "purpose-strategy",
      categoryLabel: "Purpose & Strategy",
      date: "March 15, 2026",
      author: "Leadership Team",
      excerpt: "Discover the daily practices that separate good leaders from great ones. These five essential habits will transform your leadership effectiveness and team performance.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
      readTime: "8 min read",
      content: `
        <p>Leadership isn't about grand gestures or occasional moments of brilliance. It's about the small, consistent habits that compound over time to create extraordinary results.</p>
        
        <h2>1. Start with Strategic Clarity</h2>
        <p>High-impact leaders begin each day by reviewing their strategic priorities. They ask themselves: "What are the 3 most important things I need to accomplish today?" This habit ensures they're always working on what matters most, not just what's urgent.</p>
        
        <h2>2. Practice Active Listening</h2>
        <p>Great leaders understand that listening is more powerful than speaking. They create space for their team members to share ideas, concerns, and feedback. This habit builds trust and uncovers insights that would otherwise remain hidden.</p>
        
        <h2>3. Make Time for Reflection</h2>
        <p>Whether it's journaling, meditation, or a simple walk, high-impact leaders build reflection into their daily routine. This practice helps them process experiences, learn from mistakes, and maintain perspective during challenging times.</p>
        
        <h2>4. Invest in Relationships</h2>
        <p>Leadership is fundamentally about people. Successful leaders dedicate time each day to strengthening relationships—whether through one-on-one conversations, sending encouragement, or simply being present with their team.</p>
        
        <h2>5. Commit to Continuous Learning</h2>
        <p>The best leaders are perpetual students. They read, attend workshops, seek mentorship, and stay curious. This habit keeps them adaptable and ensures they're always growing alongside their organizations.</p>
        
        <p>Implementing these five habits won't transform your leadership overnight, but stick with them for 90 days, and you'll be amazed at the results. Start small, stay consistent, and watch your impact multiply.</p>
      `
    },
    {
      id: 2,
      title: "Leading with Divine Authority",
      category: "faith-calling",
      categoryLabel: "Faith & Calling",
      date: "March 12, 2026",
      author: "Ministry Team",
      excerpt: "Understanding how to step into your God-given authority as a leader. Learn to lead with confidence rooted in divine purpose and calling.",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=1200&q=80",
      readTime: "10 min read",
      content: `
        <p>There's a difference between leading with human confidence and leading with divine authority. The former is self-derived and can crumble under pressure. The latter is rooted in something greater—a calling that transcends circumstances.</p>
        
        <h2>Understanding Divine Authority</h2>
        <p>Divine authority isn't about being domineering or controlling. It's about operating in the spiritual confidence that comes from knowing God has positioned you for leadership. It's the assurance that your decisions are guided by wisdom that exceeds your own understanding.</p>
        
        <h2>The Source of Your Authority</h2>
        <p>Your authority as a leader doesn't come from your title, experience, or natural abilities—though these may be tools in your hands. It comes from your relationship with God and your willingness to submit your leadership to His will. When you lead from this place, people sense something different about your presence.</p>
        
        <h2>Operating in Spiritual Confidence</h2>
        <p>Leading with divine authority means making decisions with prayer as your foundation. It means having the courage to take stands that may not be popular but align with kingdom principles. It means leading with both strength and humility, knowing that your power comes from above.</p>
        
        <h2>Practical Steps to Walk in Authority</h2>
        <p>Start each day by surrendering your leadership to God. Seek His guidance before making major decisions. Surround yourself with spiritually mature advisors. Study leaders in Scripture who walked in divine authority. Remember that with great authority comes great responsibility—steward it well.</p>
        
        <p>When you lead with divine authority, you're not just building organizations or achieving goals. You're participating in God's redemptive work in the world. That's a calling worth embracing fully.</p>
      `
    },
    {
      id: 3,
      title: "How to Overcome Procrastination",
      category: "purpose-strategy",
      categoryLabel: "Purpose & Strategy",
      date: "March 10, 2026",
      author: "Productivity Experts",
      excerpt: "Break free from the cycle of delay with proven strategies. Practical steps to take action and achieve your goals consistently.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80",
      readTime: "6 min read",
      content: `
        <p>Procrastination isn't about laziness—it's often about fear, perfectionism, or feeling overwhelmed. Understanding the root cause is the first step to overcoming it.</p>
        
        <h2>The Two-Minute Rule</h2>
        <p>If a task takes less than two minutes, do it immediately. This simple rule prevents small tasks from piling up and creating mental clutter that leads to procrastination on bigger projects.</p>
        
        <h2>Break It Down</h2>
        <p>Large projects feel overwhelming. Break them into smaller, manageable steps. Instead of "write report," think "outline key points" or "draft introduction." Small wins build momentum.</p>
        
        <h2>Use Implementation Intentions</h2>
        <p>Research shows that planning when and where you'll do something dramatically increases follow-through. Instead of "I'll work on this," say "At 9am in my office, I'll spend 30 minutes on this task."</p>
        
        <h2>Embrace Imperfection</h2>
        <p>Perfectionism is procrastination's best friend. Give yourself permission to create a messy first draft. You can always refine later. Done is better than perfect.</p>
        
        <p>Remember, overcoming procrastination is a practice, not a one-time fix. Be patient with yourself and celebrate progress, no matter how small.</p>
      `
    },
    {
      id: 4,
      title: "Finding Your God-Given Purpose",
      category: "faith-calling",
      categoryLabel: "Faith & Calling",
      date: "March 8, 2026",
      author: "Ministry Team",
      excerpt: "Navigate the journey of discovering your unique calling. Practical steps to discern and walk in your divine purpose with clarity and confidence.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
      readTime: "12 min read",
      content: `
        <p>Every person is created with a unique purpose—a divine assignment that only they can fulfill. But discovering that purpose isn't always straightforward. It's a journey of listening, learning, and trusting.</p>
        
        <h2>The Intersection of Gifts and Passion</h2>
        <p>Your God-given purpose often lies at the intersection of what you're naturally good at and what makes you come alive. Pay attention to the activities that energize you and the problems you feel compelled to solve. These are clues to your calling.</p>
        
        <h2>Listen to the Holy Spirit</h2>
        <p>Purpose discovery requires spiritual sensitivity. Create space for prayer and meditation. Journal what you sense God speaking to your heart. Sometimes the call comes as a whisper, not a shout. Cultivate the discipline of listening.</p>
        
        <h2>Confirmation Through Community</h2>
        <p>God often confirms your purpose through the people around you. What do others consistently recognize in you? What needs do people bring to you? Your community can help you see gifts and calling that you might overlook.</p>
        
        <h2>Start Where You Are</h2>
        <p>You don't need to have everything figured out before you begin. Take the next faithful step. Serve where you're planted. Your current season is preparing you for your ultimate calling. Be faithful in the small things.</p>
        
        <h2>Embrace the Process</h2>
        <p>Finding your purpose isn't usually a lightning bolt moment—it's more like piecing together a puzzle over time. Trust the process. Each season, relationship, and experience is shaping you for what's ahead.</p>
        
        <p>Your purpose isn't just about what you do—it's about who you're becoming in Christ. As you align your life with God's plan, you'll discover that your purpose becomes clearer and your impact becomes greater.</p>
      `
    },
    {
      id: 5,
      title: "Building Resilience in Uncertain Times",
      category: "purpose-strategy",
      categoryLabel: "Purpose & Strategy",
      date: "March 5, 2026",
      author: "Leadership Team",
      excerpt: "Develop the mental toughness needed to thrive through challenges. Learn how successful leaders maintain composure and lead effectively during crisis.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
      readTime: "7 min read",
      content: `
        <p>Resilience isn't about avoiding difficulties—it's about developing the capacity to bounce back stronger. In times of uncertainty, resilient leaders become anchors for their teams.</p>
        
        <h2>Cultivate Mental Flexibility</h2>
        <p>Rigid thinking breaks under pressure. Resilient leaders practice mental flexibility—they can pivot, adapt, and find creative solutions when plans fall apart. They ask "What can we learn?" instead of "Who can we blame?"</p>
        
        <h2>Maintain Physical and Emotional Health</h2>
        <p>You can't lead effectively if you're running on empty. Prioritize sleep, exercise, and nutrition. Make time for activities that restore your emotional energy. Your resilience depends on taking care of yourself.</p>
        
        <h2>Build a Support Network</h2>
        <p>No leader is an island. Surround yourself with people who challenge you, encourage you, and provide honest feedback. Having a strong support system makes all the difference when facing adversity.</p>
        
        <h2>Focus on What You Can Control</h2>
        <p>Uncertainty breeds anxiety. Combat this by focusing your energy on what's within your control—your attitude, your responses, your preparation. Let go of what you can't change.</p>
        
        <p>Remember, resilience is built over time through small daily choices. Each challenge you overcome strengthens your capacity for the next one.</p>
      `
    },
    {
      id: 6,
      title: "Spiritual Disciplines for Modern Leaders",
      category: "faith-calling",
      categoryLabel: "Faith & Calling",
      date: "March 3, 2026",
      author: "Ministry Team",
      excerpt: "Integrate timeless spiritual practices into your leadership journey. Discover how prayer, meditation, and scripture transform your leadership impact.",
      image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200&q=80",
      readTime: "9 min read",
      content: `
        <p>In a world that celebrates hustle and productivity, spiritual disciplines might seem like luxuries. But for the leader who wants to make a lasting impact, they're essential—the fuel that sustains meaningful leadership.</p>
        
        <h2>The Power of Daily Prayer</h2>
        <p>Prayer isn't just asking God for things—it's aligning your heart with His. Start your day by surrendering your agenda to God. Throughout the day, maintain a posture of ongoing conversation with Him. This practice keeps you grounded in what truly matters.</p>
        
        <h2>Meditation on Scripture</h2>
        <p>Don't just read the Bible—meditate on it. Choose a passage and sit with it. Let it speak to your current circumstances. Scripture meditation renews your mind and provides divine wisdom for your leadership challenges.</p>
        
        <h2>Fasting for Clarity</h2>
        <p>Fasting isn't about earning God's favor—it's about creating space to hear His voice more clearly. Whether it's food, social media, or another distraction, periodic fasting sharpens your spiritual sensitivity and strengthens your self-control.</p>
        
        <h2>Sabbath Rest</h2>
        <p>Rest isn't weakness—it's obedience. God designed us to work from rest, not for rest. Establishing a regular Sabbath rhythm demonstrates trust in God's provision and prevents burnout.</p>
        
        <h2>Integrating Disciplines into Busy Schedules</h2>
        <p>You don't need hours each day. Start with 15 minutes of prayer and scripture reading. Build from there. The key is consistency, not perfection. These practices will transform not just your leadership, but your entire life.</p>
        
        <p>As you cultivate these spiritual disciplines, you'll find that your leadership becomes less about your own strength and more about being a conduit for God's power and wisdom.</p>
      `
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryIcon = (category) => {
    if (category === 'purpose-strategy') return <BookOpen className="w-3.5 h-3.5" />;
    if (category === 'faith-calling') return <Sparkles className="w-3.5 h-3.5" />;
    return null;
  };

  // ==========================================
  // SINGLE POST VIEW
  // ==========================================
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">
        
        {/* Hero Image & Header */}
        <div className="relative h-[60vh] overflow-hidden bg-[#050505]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10" />
          <img 
            src={selectedPost.image} 
            alt={selectedPost.title}
            className="w-full h-full object-cover grayscale-[30%] opacity-80"
          />
          
          {/* Back Button - Exclusively visible here, UPDATED POSITION to clear the fixed nav */}
          <button 
            onClick={() => setSelectedPost(null)}
            className="absolute top-24 md:top-28 left-6 md:left-12 px-5 py-2.5 bg-black/40 border border-white/10 backdrop-blur-md rounded-full flex items-center gap-2 text-xs uppercase tracking-widest text-gray-300 hover:text-white hover:border-orange-500 transition-all z-30 group shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 z-20">
            <div className="max-w-4xl mx-auto">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-6 border ${
                selectedPost.category === 'purpose-strategy' 
                  ? 'bg-white/5 border-white/20 text-white' 
                  : 'bg-orange-500/10 border-orange-500/30 text-orange-400'
              }`}>
                {getCategoryIcon(selectedPost.category)}
                {selectedPost.categoryLabel}
              </div>
              
              <h1 className="font-['Anton'] text-4xl md:text-5xl lg:text-7xl uppercase tracking-wide text-white mb-6 leading-[1.1]">
                {selectedPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-orange-500" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  {selectedPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  {selectedPost.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="relative z-20 max-w-4xl mx-auto px-6 py-16 md:py-20">
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-['Anton'] prose-headings:font-normal prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-white prose-headings:mt-16 prose-headings:mb-6
              prose-h2:text-3xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
              prose-p:text-gray-300 prose-p:font-light prose-p:leading-relaxed prose-p:mb-8 prose-p:text-base md:prose-p:text-lg
              prose-a:text-orange-500 prose-a:no-underline hover:prose-a:text-orange-400
              prose-strong:text-white prose-strong:font-medium
              prose-ul:my-8 prose-li:my-3 prose-li:text-gray-300 prose-li:font-light"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />

          {/* Share Section */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6">Share this article</h3>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#1DA1F2] hover:border-transparent hover:text-white transition-all flex items-center gap-2 group">
                <Twitter className="w-4 h-4" /> Twitter
              </button>
              <button className="px-6 py-3 bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#4267B2] hover:border-transparent hover:text-white transition-all flex items-center gap-2 group">
                <Facebook className="w-4 h-4" /> Facebook
              </button>
              <button className="px-6 py-3 bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#25D366] hover:border-transparent hover:text-white transition-all flex items-center gap-2 group">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="font-['Anton'] text-2xl uppercase tracking-wide text-white mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(post => post.id !== selectedPost.id && post.category === selectedPost.category)
                .slice(0, 2)
                .map(post => (
                  <button
                    key={post.id}
                    onClick={() => {
                      setSelectedPost(post);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-orange-500/30 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 mb-3">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </div>
                    <h4 className="font-bold text-lg text-white mb-3 group-hover:text-orange-400 transition-colors">{post.title}</h4>
                    <p className="text-gray-400 text-sm font-light line-clamp-2">{post.excerpt}</p>
                  </button>
                ))}
            </div>
          </div>
        </article>
      </div>
    );
  }

  // ==========================================
  // BLOG LIST VIEW
  // ==========================================
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans relative overflow-hidden">
      
      {/* Global Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-amber-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-orange-600/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center mb-6">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 mr-2.5" />
            <span className="text-orange-500 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
              Insights for Purpose-Driven Leaders
            </span>
          </div>

          <h1 className="font-['Anton'] text-4xl md:text-5xl lg:text-7xl uppercase tracking-wide text-white mb-6 leading-[1.1]">
            Content Hub
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mt-2">
              Where Wisdom Meets Purpose
            </span>
          </h1>

          <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed uppercase tracking-wide">
            Discover insights that transform your impact and deepen your calling. Leadership wisdom meets divine purpose.
          </p>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 lg:px-12">
        
        {/* Category Filter (Pill Design) */}
        <AnimatedSection className="mb-16">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-[0_4px_15px_rgba(249,115,22,0.3)]'
                  : 'bg-[#0a0a0a] border border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Articles
            </button>
            
            <button
              onClick={() => setSelectedCategory('purpose-strategy')}
              className={`px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === 'purpose-strategy'
                  ? 'bg-white/10 border border-white/20 text-white shadow-lg'
                  : 'bg-[#0a0a0a] border border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Purpose & Strategy
            </button>
            
            <button
              onClick={() => setSelectedCategory('faith-calling')}
              className={`px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === 'faith-calling'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-[0_4px_15px_rgba(249,115,22,0.3)]'
                  : 'bg-[#0a0a0a] border border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Faith & Calling
            </button>
          </div>
        </AnimatedSection>

        {/* Category Descriptions */}
        {selectedCategory === 'purpose-strategy' && (
          <AnimatedSection className="mb-12 bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl max-w-4xl mx-auto backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-['Anton'] text-xl tracking-wide text-white mb-2 uppercase">Purpose & Strategy</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Universal leadership insights and practical strategies to elevate your effectiveness. 
                  These articles cover timeless principles applicable to leaders across all fields and industries.
                </p>
              </div>
            </div>
          </AnimatedSection>
        )}

        {selectedCategory === 'faith-calling' && (
          <AnimatedSection className="mb-12 bg-orange-500/5 border border-orange-500/20 p-6 md:p-8 rounded-2xl max-w-4xl mx-auto backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-['Anton'] text-xl tracking-wide text-orange-500 mb-2 uppercase">Faith & Calling</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Spiritual guidance for leaders seeking to align their work with divine purpose. 
                  Explore the intersection of faith, leadership, and calling in these transformative articles.
                </p>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post) => (
            <AnimatedSection key={post.id}>
              <article 
                className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 group h-full flex flex-col cursor-pointer"
                onClick={() => {
                  setSelectedPost(post);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Category Tag Overlay */}
                  <div className={`absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-widest flex items-center gap-2 backdrop-blur-md border ${
                    post.category === 'purpose-strategy' 
                      ? 'bg-black/60 border-white/20 text-white' 
                      : 'bg-black/60 border-orange-500/30 text-orange-400'
                  }`}>
                    {getCategoryIcon(post.category)}
                    {post.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col relative">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500 font-medium mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      {post.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors leading-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm font-light mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">{post.readTime}</span>
                    <span className="text-orange-500 text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection className="mt-24 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1005] to-[#0a0a0a] border border-orange-500/30 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="font-['Anton'] text-3xl md:text-5xl uppercase tracking-wide text-white mb-4">
              Ready to Transform Your Leadership?
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Explore our premium coaching packages designed to help you lead with purpose and divine authority.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold text-sm hover:from-orange-600 hover:to-amber-700 transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] uppercase tracking-wide">
              Explore Premium Packages
            </button>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default BlogPage;