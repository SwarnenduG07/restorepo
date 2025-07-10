"use client"

import ScrollNavigation from '@/components/ScrollNavigation';
import React, { useState, useEffect } from 'react';

const GrayPippleCoffeeWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const infoSection = document.getElementById('info-section');
      if (infoSection) {
        const rect = infoSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.7) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollNavigation />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder - Replace with your image */}
        
          {/* Coffee beans pattern overlay */}
           <div className="absolute inset-0 opacity-80" style={{
            backgroundImage: `url('https://images2.alphacoders.com/488/488908.jpg')`,
            backgroundSize: '1000px'
          }} />
          


        {/* Hero Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-8xl md:text-9xl font-bold tracking-wider mb-8">
            STORE
          </h1>
        </div>

      </section>

      {/* Information Section with Map */}
      <section id="info-section" className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-4xl font-bold mb-12 text-center">FIND US</h3>
            
            {/* Map Container */}
            <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.6234567890123!2d129.0750000000000!3d35.1500000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA5JzAwLjAiTiAxMjnCsDA0JzMwLjAiRQ!5e0!3m2!1sen!2skr!4v1234567890123!5m2!1sen!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GrayPipple Coffee Location"
              ></iframe>
            </div>

            {/* Location Info Below Map */}
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600 mb-2">
                <strong>Address:</strong> Busan Nam-gu Jinnam-ro 29beon-gil 28 Grey Pipple
              </p>
              <p className="text-lg text-gray-600">
                <strong>Location:</strong> 5-minute walk from Daeyeon Station, Daeyeon Church bus stop location
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Footer Links */}
          <div className="flex justify-center space-x-8 mb-12">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Refusal of unauthorized collection of emails
            </a>
          </div>

          {/* Company Information */}
          <div className="text-center space-y-3 text-gray-600">
            <p>
              <strong>GREYPIPPLE</strong> | CEO: Kang Tae-sung, Lee Sang-hwa | 
              Business Registration Number: 772-86-02577
            </p>
            <p>
              Busan Nam-gu Jinnam-ro 29beon-gil 28 Grey Pipple | 
              Email: graypipple_official@naver.com
            </p>
            <p>
              Franchise Inquires & Customer Support: 1811-9301
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 font-medium">
              COPYRIGHT © GRAYPIPPLE COFFEE ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>

        {/* Franchise Button */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div>
                <p className="font-bold">Franchise</p>
                <p className="text-sm">Inquiry</p>
              </div>
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default GrayPippleCoffeeWebsite;