import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader, AlertCircle } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-24 lg:py-32">
        {/* Keep existing header section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your potential into extraordinary success. Schedule a consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info Card - Keep existing code */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Connect With Me</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 transition-colors hover:bg-blue-50">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600">
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 transition-colors hover:bg-blue-50">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+15551234567" className="text-gray-600 hover:text-blue-600">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 transition-colors hover:bg-blue-50">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">New York, NY</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Updated Form Section */}
          <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {error}
                </div>
              )}
              
              {status === 'sent' && (
                <div className="p-4 bg-green-50 text-green-600 rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Message sent successfully!
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Message</label>
                <textarea
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow h-40 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your goals..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all flex items-center justify-center space-x-2 disabled:bg-gray-400"
              >
                {status === 'sending' ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
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