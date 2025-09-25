import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string, path: string = '/') => {
    if (location.pathname !== path) {
      // If we're not on the target page, navigate there first
      window.location.href = `${path}#${sectionId}`;
    } else {
      // If we're on the same page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="w-8 h-8 text-gray-800" />
            <span className="text-xl font-bold text-gray-800">Ayomide Babs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home', '/')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >    Home
            </button>
            <Link 
              to="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </Link>
            <button 
              onClick={() => scrollToSection('portfolio', '/')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Portfolio
            </button>
            <Link 
              to="/services"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Services
            </Link>
            <button 
              onClick={() => scrollToSection('contact', '/')}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home', '/')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-left"
              >
                Home
              </button>
              <Link 
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-left"
              >
                About
              </Link>
              <button 
                onClick={() => scrollToSection('portfolio', '/')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-left"
              >
                Portfolio
              </button>
              <Link 
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-left"
              >
                Services
              </Link>
              <button 
                onClick={() => scrollToSection('contact', '/')}
                className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium w-fit"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;