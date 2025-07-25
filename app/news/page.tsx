'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ScrollNavigation from '@/components/ScrollNavigation'
import Link from 'next/link'
import Header from '@/components/Header'

const newsData = [
  {
    id: 26,
    category: "Media reports",
    title: "Gray Peeple Coffee launches '3 peach drinks' and signature dessert 'New York cheesecake' for the summer season",
    date: "2025.06.19",
    excerpt: "Our summer menu features three refreshing peach beverages and our signature New York Cheesecake. These seasonal offerings have been crafted to provide the perfect balance of flavor and refreshment during the warmer months.",
    image: "https://images.unsplash.com/photo-1558234469-50fc184d1cc9?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 25,
    category: "Media reports", 
    title: "Gray Peeple successfully completes Daegu Startup Expo... 'Daegu's first store' confirmed to open and additional stores announced",
    date: "2025.05.16",
    excerpt: "Following our successful participation in the Daegu startup expo, we've confirmed the opening of our first Daegu location. Additional store openings are planned for the region based on overwhelming response from local entrepreneurs.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 24,
    category: "Media reports",
    title: "Gray Peeple participates in the 'KFA Franchise Startup Expo 2025 Daegu'... and reveals start-up benefits worth 70 million won",
    date: "2025.04.24",
    excerpt: "We're offering comprehensive startup benefits including equipment financing, training programs, and marketing support. This package is designed to ensure new franchisees have everything needed for a successful launch.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 23,
    category: "Media reports",
    title: "Gray Peeple Coffee launches 4 new menu items 'Jeju Matcha Series'...introduces differentiated matcha recipes",
    date: "2025.04.15",
    excerpt: "Our new Jeju Matcha Series features four unique beverages showcasing the finest matcha from Jeju Island. Each drink offers a distinctive take on traditional matcha preparations with modern twists.",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 22,
    category: "Notice",
    title: "Gray pipple exceeds 80 million won in monthly sales...increased franchise inquiries",
    date: "2025.02.19",
    excerpt: "Our franchise program has reached a new milestone with record-breaking revenue. We're now accepting applications for new franchise locations nationwide. Contact us for exclusive territory opportunities.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 21,
    category: "Notice",
    title: "Gray Peeple successfully completes Busan Startup Expo, \"Consultation is full for 3 days\"",
    date: "2024.12.04",
    excerpt: "Our team provided comprehensive franchise consultations at the Busan startup expo. Over 200 potential franchisees showed interest in our proven business model and support system.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&auto=format&fit=crop&q=60"
  }
]

const eventsData = [
  {
    id: 1,
    title: "Grand Opening Event - Daegu Flagship Store",
    date: "2025.07.15",
    location: "Daegu Downtown",
    description: "Join us for the grand opening of our newest flagship store in Daegu. Enjoy free coffee samples, live music, and special opening day discounts.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Summer Menu Tasting Event",
    date: "2025.07.20",
    location: "All Stores",
    description: "Experience our new summer menu including the signature peach drinks and New York cheesecake. Limited time tasting event across all locations.",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Franchise Information Session",
    date: "2025.08.05",
    location: "Seoul Convention Center",
    description: "Learn about franchise opportunities with GrayPipple Coffee. Meet our team, understand investment requirements, and discover success stories.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=400&auto=format&fit=crop&q=60"
  }
]

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState('news')

  useEffect(() => {
    // Listen for custom event to set active tab
    const handleSetActiveTab = (event: CustomEvent) => {
      setActiveTab(event.detail);
    };

    window.addEventListener('setActiveTab', handleSetActiveTab as EventListener);
    
    return () => {
      window.removeEventListener('setActiveTab', handleSetActiveTab as EventListener);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
     <Header></Header>
      
      {/* Hero Section with News Image */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/news.avif"
          alt="News Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Centered NEWS Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white tracking-wider drop-shadow-2xl">
            NEWS
          </h1>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 sm:space-x-8">
            <button
              onClick={() => setActiveTab('news')}
              className={`text-lg sm:text-xl lg:text-2xl font-medium pb-3 sm:pb-4 border-b-2 transition-all duration-300 touch-manipulation ${
                activeTab === 'news'
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`text-lg sm:text-xl lg:text-2xl font-medium pb-3 sm:pb-4 border-b-2 transition-all duration-300 touch-manipulation ${
                activeTab === 'events'
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Events
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'news' ? (
            <div>
              {/* Search Bar */}
              <div className="mb-8 sm:mb-12 max-w-xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Post search"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-10 sm:pr-12 text-base sm:text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* News Table - Desktop and Tablet */}
              <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 lg:p-6 bg-gray-100 border-b font-medium text-black">
                  <div className="col-span-1 text-center text-black">NO</div>
                  <div className="col-span-2 text-black">Category</div>
                  <div className="col-span-7 text-black">Title</div>
                  <div className="col-span-2 text-center text-black">Creation date</div>
                </div>

                {/* News Items */}
                <div className="divide-y divide-gray-200">
                  {newsData.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 gap-4 p-4 lg:p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="col-span-1 text-center text-gray-600 text-sm lg:text-base">{item.id}</div>
                      <div className="col-span-2 text-gray-600 text-sm lg:text-base">{item.category}</div>
                      <div className="col-span-7">
                        <h3 className="text-gray-900 hover:text-green-600 transition-colors font-medium text-sm lg:text-base leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <div className="col-span-2 text-center text-gray-500 text-sm lg:text-base">{item.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* News Cards - Mobile */}
              <div className="block md:hidden space-y-4">
                {newsData.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500">#{item.id}</span>
                    </div>
                    <h3 className="text-gray-900 font-medium text-sm leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                ))}
              </div>

              {/* Suggestion Text */}
              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-green-600 text-base sm:text-lg">
                  <span className="font-medium">{newsData.length}</span>
                  <span className="ml-2">There is a suggested post.</span>
                </p>
              </div>
            </div>
          ) : (
            <div>
              {/* Events Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {eventsData.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-40 sm:h-48">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs sm:text-sm text-green-600 font-medium">{event.date}</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{event.location}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-tight">{event.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{event.description}</p>
                      <div className="mt-4">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 text-sm sm:text-base touch-manipulation">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black">GRAYPIPPLE</h3>
              <p className="text-gray-900 mb-4 sm:mb-6 text-base sm:text-lg">
                A change of mood in a busy daily life
              </p>
              <p className="text-gray-600 text-sm">
                Premium coffee for your daily moments
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 text-black">Site Map</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                <li><Link href="/brand" className="hover:text-green-500 text-black transition-colors">Brand</Link></li>
                <li><Link href="/menu" className="hover:text-green-500 text-black transition-colors">Menu</Link></li>
                <li><Link href="/store" className="hover:text-green-500 text-black transition-colors">Stores</Link></li>
                <li><Link href="/news" className="hover:text-green-500 text-black transition-colors">News</Link></li>
                <li><Link href="/franchise" className="hover:text-green-500 text-black transition-colors">Franchise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 text-black">Contact Us</h4>
              <Button className="w-full bg-black text-white hover:bg-gray-800 mb-3 sm:mb-4 py-2 sm:py-3 text-sm sm:text-base">
                Franchise Inquiry
              </Button>
              <p className="text-gray-600 text-xs sm:text-sm">
                Monday - Friday: 9:00 - 18:00<br />
                Saturday, Sunday: Closed
              </p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-gray-600 text-xs sm:text-sm">
              COPYRIGHT © GRAYPIPPLE COFFEE ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default NewsPage
