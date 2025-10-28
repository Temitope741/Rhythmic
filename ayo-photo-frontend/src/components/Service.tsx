import React from 'react';
import { Camera, Heart, Briefcase, Users, Clock, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Complete wedding day coverage from preparation to reception",
      features: ["8-10 hours coverage", "Edited photos", "Online gallery", "Print release"],
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Camera,
      title: "Portrait Sessions",
      description: "Individual, couple, and family portrait sessions",
      features: ["1-2 hour session", "Edited photos", "Multiple outfits", "Location flexibility"],
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Briefcase,
      title: "Branding Photography",
      description: "Professional headshots for business/products and brand photography",
      features: ["Professional lighting", "Multiple looks", "High-res files", "Same-day editing"],
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Users,
      title: "Event Photography",
      description: "Corporate events, parties, and special celebrations",
      features: ["Full event coverage", "Candid moments", "Group photos", "Quick turnaround"],
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const additionalServices = [
    { icon: Clock, service: "Rush Delivery", description: "48-hour turnaround available" },
    { icon: MapPin, service: "Travel Available", description: "Destination shoots welcome" },
    { icon: Camera, service: "Second Shooter", description: "Additional photographer for events" }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Services & Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored photography services to capture your most important moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-amber-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.service}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Custom packages available for unique requirements. All sessions include professional editing and high-resolution images.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;