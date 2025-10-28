import React, { useState } from 'react';
import { X } from 'lucide-react';
import ayophoto from '../assets/ayophoto2.jpg';
import ayophoto3 from '../assets/ayophoto3.jpg'; 
import ruger1 from '../assets/ruger1.jpg';
import ruger4 from '../assets/Rhythmic56.jpg';
import ruger3 from '../assets/ruger3.jpg';
import Rhythmic3 from '../assets/Rhythmic3.jpg';
import Rhythmic from '../assets/Rhythmic.jpg';
import ayoshot from '../assets/ayoshot.jpg';
import Rhythmic4 from '../assets/Rhythmic4.jpg';
import Rhythmic6 from '../assets/Rhythmic6.jpg';
const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioImages = [
    {
      src: ruger4 ,
      category: "",
      title: ""
    },
    {
      src: Rhythmic3,
    },
    {
      src: Rhythmic,
    },
    {
      src: ruger1,
    },
    {
      src: ayophoto,
    },
    {
      src: ayophoto3,
    },
    {
      src: ruger3,
    },
    {
      src: Rhythmic6,
    },
    {
      src: Rhythmic4,
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into some of my favorite captures - each telling a unique story
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium text-amber-300">{image.category}</p>
                  <p className="text-lg font-semibold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Portfolio image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;