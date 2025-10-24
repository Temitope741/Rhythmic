import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';
import { MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const scrollToSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Camera className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold">Ayomide Babs</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Professional photographer specializing in weddings, portraits, and commercial photography.
              Capturing life's beautiful moments with artistic vision and technical expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-gray-400 hover:text-white transition-colors"
              > Home
              </button>
               {/* <Link
                to="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              > About
             </Link> */}
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block text-gray-400 hover:text-white transition-colors"
              > Portfolio
              </button>
               <Link
                to="/services"
                className="block text-gray-400 hover:text-white transition-colors"
              > Services
              </Link> 
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-400 hover:text-white transition-colors"
              >  Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:hassanbabsayomide@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hassanbabsayomide@gmail.com</span>
              </a>
              <a
                href="https://wa.link/tah1lt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span>WhatsApp: 0818 189 3795</span>
              </a>
              <p className="text-gray-400">Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rhythmic shot. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;