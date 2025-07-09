'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const storeImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=680&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Modern Cafe Interior",
    location: "Downtown Flagship Store",
    address: "123 Main Street, Downtown",
    status: "OPEN NOW",
    phone: "+1 (555) 123-4567"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=680&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Cozy Coffee Shop",
    location: "Riverside Branch",
    address: "456 River Walk, Riverside",
    status: "OPEN NOW",
    phone: "+1 (555) 987-6543"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=680&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Elegant Restaurant",
    location: "Central Plaza",
    address: "789 Plaza Drive, Central",
    status: "OPEN NOW",
    phone: "+1 (555) 456-7890"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=680&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Warm Cafe Atmosphere",
    location: "Garden District",
    address: "321 Garden Ave, District",
    status: "OPENS 8AM",
    phone: "+1 (555) 321-6547"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=680&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Modern Bistro",
    location: "Arts Quarter",
    address: "654 Arts Blvd, Quarter",
    status: "OPEN NOW",
    phone: "+1 (555) 654-3210"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=680&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Chic Coffee Bar",
    location: "Business District",
    address: "987 Business Blvd, District",
    status: "OPEN NOW",
    phone: "+1 (555) 987-1234"
  }
]

const StoreSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Calculate how many slides to show based on screen width
  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3 // Desktop: 3 slides
      if (window.innerWidth >= 768) return 2   // Tablet: 2 slides
      return 1 // Mobile: 1 slide
    }
    return 3
  }

  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView())
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return

    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isTransitioning, currentIndex, slidesPerView])

  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const goToPrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    const maxIndex = Math.max(0, storeImages.length - slidesPerView)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    setIsAutoPlaying(false)
    setTimeout(() => {
      setIsTransitioning(false)
      setIsAutoPlaying(true)
    }, 500)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    const maxIndex = Math.max(0, storeImages.length - slidesPerView)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    setIsAutoPlaying(false)
    setTimeout(() => {
      setIsTransitioning(false)
      setIsAutoPlaying(true)
    }, 500)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrev()
    }
  }

  const maxDots = Math.max(1, storeImages.length - slidesPerView + 1)

  return (
    <section id="store" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-4 animate-slideInUp animate-float">
            Gray Pipple franchise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-slideInUp animate-floatSlow">
            OUR STORE
          </h2>
          <p className="text-lg text-gray-600 animate-slideInUp animate-floatDelay">
            Find a Gray Pipple store near you!
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative animate-slideInUp">
          <div 
            className="swiper-container overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="swiper-wrapper flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                width: `${(storeImages.length * 100) / slidesPerView}%`
              }}
            >
              {storeImages.map((store, index) => (
                <div 
                  key={store.id} 
                  className={`swiper-slide flex-shrink-0 px-3 ${
                    slidesPerView === 1 ? 'w-full' : 
                    slidesPerView === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="group cursor-pointer h-96 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <Image
                      src={store.src}
                      alt={store.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                    
                    {/* Store Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl font-bold mb-2 animate-float">{store.location}</h3>
                        <p className="text-sm opacity-90 mb-3 animate-floatDelay">{store.address}</p>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-xs px-3 py-1 rounded-full font-medium animate-floatDelayMore ${
                            store.status === 'OPEN NOW' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-yellow-500 text-white'
                          }`}>
                            {store.status}
                          </span>
                          <a 
                            href={`tel:${store.phone}`}
                            className="text-xs hover:text-green-300 transition-colors animate-floatButton"
                          >
                            {store.phone}
                          </a>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          <button className="flex-1 text-xs bg-white/20 backdrop-blur-sm hover:bg-white/30 px-3 py-2 rounded-lg transition-all duration-300">
                            DIRECTIONS
                          </button>
                          <button className="flex-1 text-xs bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg transition-colors duration-300">
                            VISIT STORE
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Store Number Badge */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center">
                      #{index + 1}
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg flex items-center space-x-1">
                      <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            disabled={isTransitioning}
            className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group disabled:opacity-50"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext}
            disabled={isTransitioning}
            className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group disabled:opacity-50"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="swiper-pagination flex justify-center space-x-2 mt-8">
            {Array.from({ length: maxDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`swiper-pagination-bullet h-3 rounded-full transition-all duration-300 disabled:opacity-50 ${
                  index === currentIndex 
                    ? 'bg-gray-800 w-8 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-500 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-gray-800 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / maxDots) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Visit any of our locations for the complete Gray Pipple experience</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              FIND NEAREST STORE
            </button>
            <button className="border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              STORE LOCATOR
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoreSwiper
