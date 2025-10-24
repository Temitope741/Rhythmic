import React from 'react';
import { Star, Quote } from 'lucide-react';
import dailan from '../assets/dailan.jpg';
import couples from '../assets/couples.jpg';
import ruger2 from '../assets/ruger2.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Scotty & Oyinkansola",
      service: "Wedding Photography",
      rating: 5,
      text: "Ayomide captured our wedding day perfectly! Every photo tells our story beautifully. His attention to detail and ability to capture candid moments is incredible. We couldn't be happier with our gallery.",
      image: couples,
    },
    {
      name: "Dailan Toyourears",
      service: "Corporate Headshots",
      rating: 5,
      text: "Professional, efficient, and the results exceeded my expectations. Ayomide made the entire process comfortable and delivered stunning headshots that have elevated my professional presence.",
      image: dailan,
    },
    {
      name: "The Blownboy Family",
      service: "Family Portrait Session",
      rating: 5,
      text: "Working with Ayomide was a joy! He has an amazing ability to capture our family's personality. Our kids were comfortable with him immediately, and the photos are treasures we'll keep forever.",
      image: ruger2,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Client Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What my clients say about their photography experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-amber-500 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-amber-50 px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-800 font-semibold">
              5.0 average rating from 50+ clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
