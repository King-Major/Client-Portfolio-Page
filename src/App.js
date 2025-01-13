// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

// Layout Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Page Components
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Portfolio from './components/portfolio';
import BlogPage from './pages/BlogPage';
import Media from './pages/Media';
import Contact from './components/ContactForm';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
              {/* Add a catch-all route for 404 */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-600">The page you're looking for doesn't exist.</p>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;