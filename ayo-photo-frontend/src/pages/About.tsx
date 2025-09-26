import React from 'react';
import { Award, Camera, Heart, Users } from 'lucide-react';
import photo1000 from '../assets/photo1000.jpg';

const About = () => {
  const stats = [
    { icon: Camera, number: '500+', label: 'Projects Completed' },
    { icon: Users, number: '200+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Awards Won' },
    { icon: Heart, number: '3', label: 'Years Experience' }
  ];

  const experience = [
    {
      year: '2022',
      title: 'Started Photography Journey',
      description: 'Began as a freelance photographer specializing in portrait photography'
    },
    {
      year: '2023',
      title: 'Wedding Photography Focus',
      description: 'Expanded into wedding photography and established signature style'
    },
    {
      year: '2025',
      title: 'Commercial Expansion',
      description: 'Added commercial and corporate photography services'
    },
    {
      year: '2023',
      title: 'Award Recognition',
      description: 'Received multiple photography awards and industry recognition'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">
              About Ayomide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about capturing authentic moments and creating timeless memories through the art of photography
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={photo1000}
                alt="Ayomide Babs - Professional Photographer"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">3+ Years</p>
                <p className="text-sm">Experience</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                My Photography Journey
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  With over 3 years of experience behind the lens, I specialize in capturing the authentic emotions and genuine moments that make each story unique. My approach combines technical expertise with artistic vision to create timeless images.
                </p>
                <p>
                  From intimate portraits to grand weddings, I believe every moment deserves to be preserved with care and creativity. My goal is to make you feel comfortable and confident, allowing your true personality to shine through.
                </p>
                <p>
                  Based in the heart of Lagos Nigeria, I travel wherever your story takes us, ensuring that every precious moment is captured with the attention and artistry it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in my photography career</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
            
            {experience.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-amber-600 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">My Philosophy</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-6">
              "Photography is not just about capturing what you see, but about revealing the emotions and stories that live within each moment. Every click of the shutter is an opportunity to preserve a piece of someone's heart."
            </blockquote>
            <p className="text-gray-600 text-lg">
              This philosophy guides every session, ensuring that your photos are not just beautiful images, but meaningful memories that will be treasured for generations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;