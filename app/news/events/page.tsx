'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ScrollNavigation from '@/components/ScrollNavigation'

const eventsData = [
  {
    id: 1,
    title: "Grand Opening Event - Daegu Flagship Store",
    date: "2025.07.15",
    time: "10:00 AM - 6:00 PM",
    location: "Daegu Downtown",
    address: "123 Main Street, Daegu, South Korea",
    description: "Join us for the grand opening of our newest flagship store in Daegu. Enjoy free coffee samples, live music, and special opening day discounts. Meet our baristas and learn about our coffee sourcing process.",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop&q=60",
    highlights: ["Free coffee samples", "Live music performance", "20% opening discount", "Meet & greet with baristas"]
  },
  {
    id: 2,
    title: "Summer Menu Tasting Event",
    date: "2025.07.20",
    time: "2:00 PM - 8:00 PM",
    location: "All Stores",
    address: "Nationwide Event",
    description: "Experience our new summer menu including the signature peach drinks and New York cheesecake. Limited time tasting event across all locations with special summer pricing.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&auto=format&fit=crop&q=60",
    highlights: ["3 new peach beverages", "NY Cheesecake tasting", "Summer menu preview", "Special pricing"]
  },
  {
    id: 3,
    title: "Franchise Information Session",
    date: "2025.08.05",
    time: "9:00 AM - 5:00 PM",
    location: "Seoul Convention Center",
    address: "159 Samsung-ro, Gangnam-gu, Seoul",
    description: "Learn about franchise opportunities with GrayPipple Coffee. Meet our team, understand investment requirements, and discover success stories from existing franchisees.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
    highlights: ["Investment details", "Business model presentation", "Success stories", "Q&A session"]
  },
  {
    id: 4,
    title: "Barista Training Workshop",
    date: "2025.08.12",
    time: "10:00 AM - 4:00 PM",
    location: "GrayPipple Training Center",
    address: "456 Coffee Street, Seoul",
    description: "Professional barista training workshop covering coffee brewing techniques, latte art, and customer service. Perfect for coffee enthusiasts and aspiring baristas.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop&q=60",
    highlights: ["Brewing techniques", "Latte art training", "Professional certification", "Hands-on practice"]
  },
  {
    id: 5,
    title: "Coffee Cupping Session",
    date: "2025.08.19",
    time: "3:00 PM - 5:00 PM",
    location: "Flagship Store - Gangnam",
    address: "789 Gangnam-daero, Seoul",
    description: "Join our coffee experts for a professional cupping session. Learn to identify different flavor profiles and understand the nuances of our premium coffee blends.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=60",
    highlights: ["Professional cupping", "Flavor identification", "Coffee education", "Expert guidance"]
  },
  {
    id: 6,
    title: "Community Appreciation Day",
    date: "2025.08.26",
    time: "12:00 PM - 8:00 PM",
    location: "All Stores",
    address: "Nationwide Event",
    description: "A day dedicated to our loyal customers and local communities. Enjoy special discounts, community art displays, and support for local charities.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=60",
    highlights: ["Community support", "Local art displays", "Special discounts", "Charity partnerships"]
  }
]

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <ScrollNavigation />
      
      {/* Hero Section with News Image */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/news.avif"
          alt="Events Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Centered EVENTS Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-wider drop-shadow-2xl">
            EVENTS
          </h1>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Join us for exciting events and experiences at GrayPipple Coffee
            </p>
          </div>

          {/* Events Grid */}
          <div className="space-y-12">
            {eventsData.map((event, index) => (
              <div key={event.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
                {/* Event Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-green-600">{event.date}</span>
                      <span className="text-lg text-gray-600">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{event.address}</p>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{event.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{event.description}</p>

                  {/* Event Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                      Register Now
                    </Button>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-green-100 mb-8">
            Never miss an event! Subscribe to our newsletter for the latest updates and exclusive invitations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 rounded-full text-lg border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 flex-1 max-w-md"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-3xl font-bold mb-4 text-black">GRAYPIPPLE</h3>
              <p className="text-gray-900 mb-6 text-lg">
                A change of mood in a busy daily life
              </p>
              <p className="text-gray-600 text-sm">
                Premium coffee for your daily moments
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 text-black">Site Map</h4>
              <ul className="space-y-3 text-gray-700">
                <li><a href="/#brand" className="hover:text-black transition-colors">Brand</a></li>
                <li><a href="/#menu" className="hover:text-black transition-colors">Menu</a></li>
                <li><a href="/#store" className="hover:text-black transition-colors">Stores</a></li>
                <li><a href="/news" className="hover:text-black transition-colors">News</a></li>
                <li><a href="/#franchise" className="hover:text-black transition-colors">Franchise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 text-black">Contact Us</h4>
              <Button className="w-full bg-black text-white hover:bg-gray-800 mb-4 py-3">
                Franchise Inquiry
              </Button>
              <p className="text-gray-600 text-sm">
                Monday - Friday: 9:00 - 18:00<br />
                Saturday, Sunday: Closed
              </p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              COPYRIGHT © GRAYPIPPLE COFFEE ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page
