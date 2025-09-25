import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Alexandra Chen - Professional Photographer"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold">3+ Years</p>
              <p className="text-sm">Experience</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Meet Ayomide
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                With over 3 years of experience behind the lens, I specialize in capturing the authentic emotions and genuine moments that make each story unique. My approach combines technical expertise with artistic vision to create timeless images.
              </p>
              <p>
                From intimate portraits to grand weddings, I believe every moment deserves to be preserved with care and creativity. My goal is to make you feel comfortable and confident, allowing your true personality to shine through.
              </p>
              <p>
                Based in the heart of the city, I travel wherever your story takes us, ensuring that every precious moment is captured with the attention and artistry it deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
