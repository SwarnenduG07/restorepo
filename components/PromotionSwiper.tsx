'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const promotionItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "New York Cheesecake",
    title: "NEW YORK CHEESECAKE",
    subtitle: "SMOOTH AND RICH FLAVOR",
    description: "뉴욕치즈케이크 진한 풍미, 조화로운 가격의 정점",
    bgColor: "from-orange-800 via-orange-700 to-red-800",
    textColor: "text-white"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1515823064285-0b55bcdf0c90?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Jeju Matcha",
    title: "JEJU MATCHA",
    subtitle: "LAYERS OF FLAVOR",
    description: "제주의 청정한 말차로 완성된 완성된 감미의 절정 온리 원의 진수 흐름",
    bgColor: "from-green-800 via-green-700 to-green-900",
    textColor: "text-white"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Cookie Choux",
    title: "COOKIE CHOUX",
    subtitle: "CRISPY AND CREAMY",
    description: "바닐라 쿠키슈 Cookie Choux 초코 쿠키슈",
    bgColor: "from-gray-900 via-black to-gray-800",
    textColor: "text-orange-200"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Cold Brew Coffee",
    title: "COLD BREW",
    subtitle: "SMOOTH COFFEE EXPERIENCE",
    description: "콜드브루 커피 매끄러운 커피 경험",
    bgColor: "from-purple-900 via-purple-800 to-indigo-900",
    textColor: "text-pink-200"
  }
]

const PromotionSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Calculate how many slides to show based on screen width
  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3.2 // Desktop: 3.2 slides
      if (window.innerWidth >= 768) return 2.2   // Tablet: 2.2 slides
      return 1.1 // Mobile: 1.1 slides
    }
    return 3.2
  }

  const [slidesPerView, setSlidesPerView] = useState(3.2)

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
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isTransitioning, currentIndex])

  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 6000)
  }

  const goToPrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev <= 0 ? promotionItems.length - 1 : prev - 1))
    setIsAutoPlaying(false)
    setTimeout(() => {
      setIsTransitioning(false)
      setIsAutoPlaying(true)
    }, 500)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev >= promotionItems.length - 1 ? 0 : prev + 1))
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div className="animate-slideInUp">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 animate-floatSlow">
              PROMOTION
            </h2>
            <p className="text-lg text-gray-600 animate-floatDelay">
              그레이피플에서 새롭게 출시한 신메뉴들을 소개합니다.
            </p>
          </div>
          <div className="animate-slideInUp hidden md:block">
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 transition-all duration-300 font-medium"
            >
              VIEW MORE
            </Button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative animate-slideInUp">
          <div 
            className="swiper-container overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="swiper-wrapper flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                width: `${(promotionItems.length * 100) / slidesPerView}%`
              }}
            >
              {promotionItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`swiper-slide flex-shrink-0 px-3 ${
                    slidesPerView === 1.1 ? 'w-full' :
                    slidesPerView === 2.2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <a href="/menu/" className="block group">
                    <div className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br ${item.bgColor}`}>
                      
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                          priority={index < 3}
                        />
                      </div>

                      {/* Content Overlay */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                        <div>
                          <p className={`text-sm font-medium tracking-widest uppercase mb-4 ${item.textColor} opacity-90`}>
                            {item.subtitle}
                          </p>
                          <h3 className={`text-4xl md:text-5xl font-black leading-tight mb-6 ${item.textColor}`}>
                            {item.title.split(' ').map((word, i) => (
                              <div key={i}>{word}</div>
                            ))}
                          </h3>
                        </div>

                        <div className="mt-auto">
                          <p className={`text-sm leading-relaxed ${item.textColor} opacity-80`}>
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white/20"></div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-3xl"></div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            disabled={isTransitioning}
            className="swiper-arrow-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group disabled:opacity-50"
          >
            <svg className="w-6 h-6 text-gray-800 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext}
            disabled={isTransitioning}
            className="swiper-arrow-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group disabled:opacity-50"
          >
            <svg className="w-6 h-6 text-gray-800 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Dots - Mobile Only */}
          <div className="swiper-pagination flex justify-center space-x-2 mt-8 md:hidden">
            {promotionItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`swiper-pagination-bullet h-3 rounded-full transition-all duration-300 disabled:opacity-50 ${
                  index === currentIndex 
                    ? 'bg-black w-8 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-500 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile View More Button */}
        <div className="text-center mt-12 md:hidden">
          <Button 
            variant="outline" 
            className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 transition-all duration-300 font-medium"
          >
            VIEW MORE
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PromotionSwiper
