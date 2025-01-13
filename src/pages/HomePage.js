import React from 'react';
import Hero from '../components/sections/Hero';
import Portfolio from '../components/portfolio';
import ContactSection from '../components/ContactForm';
import MediaPlayer from './Media';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Portfolio />
      <MediaPlayer/>
      <ContactSection />
    </div>
  );
};

export default HomePage;