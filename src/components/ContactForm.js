import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader, AlertCircle, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'your@email.com' // Replace with recipient email
        },
        'YOUR_PUBLIC_KEY'  // Replace with your EmailJS public key
      );

      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      setStatus('');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/4"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-6">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 mr-2.5" />
            <span className="text-orange-500 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
              Connect With Us
            </span>
          </div>

          <h1 className="font-['Anton'] text-4xl md:text-5xl lg:text-7xl uppercase tracking-wide text-white mb-6 leading-[1.1]">
            Let's Start a <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">Conversation</span>
          </h1>

          <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Transform your potential into extraordinary success. Reach out to schedule a consultation or inquire about speaking engagements.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md">
              <h3 className="font-['Anton'] text-2xl uppercase tracking-wide text-white mb-10">
                Direct Contact
              </h3>
              
              <div className="space-y-8">
                {/* Email Item */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/50 transition-colors">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-1">Email</p>
                    <a href="mailto:contact@example.com" className="text-sm font-light text-gray-300 hover:text-white transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/50 transition-colors">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-sm font-light text-gray-300 hover:text-white transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/50 transition-colors">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-1">Location</p>
                    <p className="text-sm font-light text-gray-300">
                      New York, NY<br />
                      <span className="text-gray-500 text-xs">Available for Global Travel</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Optional Secondary Card for extra visual weight */}
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 p-8 rounded-3xl text-center">
              <p className="text-sm font-light text-orange-100 italic leading-relaxed">
                "Leadership isn't about grand gestures; it's about the small, consistent conversations that compound over time."
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Subtle glow inside the form card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              
              {/* Status Messages - Dark Mode Optimized */}
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-light rounded-xl flex items-center gap-3 backdrop-blur-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {error}
                </div>
              )}
              
              {status === 'sent' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-light rounded-xl flex items-center gap-3 backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  Message sent successfully! We will get back to you shortly.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold block">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold block">Your Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold block">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="How can we collaborate?"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold block">Your Message</label>
                <textarea
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all h-40 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your goals or event details..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 px-8 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-semibold text-sm uppercase tracking-wide hover:from-orange-600 hover:to-amber-700 transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === 'sending' ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;