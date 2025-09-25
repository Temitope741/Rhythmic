import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Calendar, Send, Camera, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setResponseMessage('');

    const form = e.currentTarget;

    // @ts-ignore
    emailjs.sendForm(
      'service_ni7lefp',       // Your EmailJS service ID
      'template_6o58e79',      // Your EmailJS template ID
      form,
      'ZfOPY1iHtfzYaPCjQ'      // Your EmailJS public key
    )
      .then(() => {
        setSubmitStatus('success');
        setResponseMessage('Message sent successfully! ✅');
        form.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setSubmitStatus('error');
        setResponseMessage('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => {
          setSubmitStatus('idle');
          setResponseMessage('');
        }, 8000);
      });
  };

  const getStatusIcon = () => {
    switch (submitStatus) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusBgColor = () => {
    switch (submitStatus) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      default:
        return '';
    }
  };

  const getStatusTextColor = () => {
    switch (submitStatus) {
      case 'success':
        return 'text-green-800';
      case 'error':
        return 'text-red-800';
      default:
        return '';
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to book your session? Get in touch and let's discuss your photography needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Camera className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-bold text-gray-800">Book Your Session</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                  placeholder="(555) 123-4567"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type='date'
                  name="date"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 resize-none"
                  placeholder="Describe your photography needs..."
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="service"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 resize-none"
                  placeholder="Describe your photography needs..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>

              {submitStatus !== 'idle' && (
                <div className={`mt-4 p-4 rounded-lg border ${getStatusBgColor()}`}>
                  <div className="flex items-start space-x-2">
                    {getStatusIcon()}
                    <p className={`${getStatusTextColor()} font-medium`}>
                      {responseMessage}
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7370246183256!2d3.348338416420768!3d6.60183809520681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b924f144d2a97%3A0x9b5e7c96033df3ff!2sIkeja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1690000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', width: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
