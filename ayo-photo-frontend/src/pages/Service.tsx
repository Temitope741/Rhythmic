import React from 'react';
import { Camera, Heart, Briefcase, Users, Clock, MapPin, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Complete wedding day coverage from preparation to reception",
      price: "Starting at ₦1,800,000",
      features: [
        "8-10 hours coverage",
        "500+ edited photos",
        "Online gallery",
        "Print release",
        "Engagement session included",
        "Second shooter available"
      ],
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
      popular: true
    },
    {
      icon: Camera,
      title: "Portrait Sessions",
      description: "Individual, couple, and family portrait sessions",
      price: "Starting at ₦350,000",
      features: [
        "1-2 hour session",
        "30+ edited photos",
        "Multiple outfits",
        "Location flexibility",
        "Professional retouching",
        "Print ordering available"
      ],
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Briefcase,
      title: "Commercial Photography",
      description: "Professional headshots and brand photography",
      price: "Starting at ₦500,000",
      features: [
        "Professional lighting",
        "Multiple looks",
        "High-res files",
        "Same-day editing",
        "Usage rights included",
        "LinkedIn optimization"
      ],
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Users,
      title: "Event Photography",
      description: "Corporate events, parties, and special celebrations",
      price: "Starting at ₦820,000",
      features: [
        "Full event coverage",
        "Candid moments",
        "Group photos",
        "Quick turnaround",
        "Online gallery",
        "Social media ready"
      ],
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const additionalServices = [
    { 
      icon: Clock, 
      service: "Rush Delivery", 
      description: "48-hour turnaround available",
      price: "+₦250,000"
    },
    { 
      icon: MapPin, 
      service: "Travel Photography", 
      description: "Destination shoots welcome",
      price: "Travel costs apply"
    },
    { 
      icon: Camera, 
      service: "Second Shooter", 
      description: "Additional photographer for events",
      price: "+₦400,000"
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "₦390,000",
      duration: "1 hour",
      photos: "20 edited photos",
      features: ["Basic retouching", "Online gallery", "Print release"]
    },
    {
      name: "Premium",
      price: "₦650,000",
      duration: "2 hours",
      photos: "50 edited photos",
      features: ["Advanced retouching", "Multiple locations", "Outfit changes", "Print credits"],
      popular: true
    },
    {
      name: "Luxury",
      price: "₦1,000,000",
      duration: "3 hours",
      photos: "80 edited photos",
      features: ["Professional styling consultation", "Hair & makeup artist", "Premium locations", "Same-day preview"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">
            Photography Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional photography services tailored to capture your most important moments with artistic vision and technical excellence
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Main Services</h2>
            <p className="text-xl text-gray-600">Comprehensive photography solutions for every occasion</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${service.popular ? 'ring-2 ring-amber-400' : ''}`}>
                {service.popular && (
                  <div className="bg-amber-400 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
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
                  <p className="text-3xl font-bold text-amber-600 mb-6">{service.price}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portrait Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Portrait Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your portrait session</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow relative ${pkg.popular ? 'ring-2 ring-amber-400 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-white px-6 py-2 rounded-full font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-bold text-amber-600 mb-2">{pkg.price}</p>
                  <p className="text-gray-600">{pkg.duration} • {pkg.photos}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white'}`}>
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Enhance your photography experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <item.icon className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.service}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-lg font-semibold text-amber-600">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Process</h2>
            <p className="text-xl text-gray-600">From consultation to final delivery</p>
          </div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Consultation", description: "We discuss your vision, style preferences, and session details" },
              { step: "02", title: "Planning", description: "Location scouting, timeline creation, and preparation guidance" },
              { step: "03", title: "Photo Session", description: "Professional photography session with direction and guidance" },
              { step: "04", title: "Editing", description: "Careful selection and professional editing of your best images" },
              { step: "05", title: "Delivery", description: "High-resolution images delivered via online gallery" }
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Book Your Session?</h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Let's create beautiful memories together. Contact me to discuss your photography needs and find the perfect package for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Book Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;