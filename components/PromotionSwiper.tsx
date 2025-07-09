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
    src: "https://images.unsplash.com/photo-1564890273409-09c25ba9eb3b?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Jeju Matcha Latte",
    title: "JEJU MATCHA",
    subtitle: "LAYERS OF FLAVOR",
    description: "제주의 청정한 말차로 완성된 완성된 감미의 절정",
    bgColor: "from-green-800 via-green-700 to-green-900",
    textColor: "text-white"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
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
    alt: "Iced Coffee",
    title: "ICED COFFEE",
    subtitle: "REFRESHING COLD BREW",
    description: "시원한 아이스 커피로 더운 여름을 시원하게",
    bgColor: "from-blue-900 via-blue-800 to-indigo-900",
    textColor: "text-blue-200"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Caramel Frappuccino",
    title: "CARAMEL FRAPPÉ",
    subtitle: "SWEET INDULGENCE",
    description: "달콤한 카라멜과 부드러운 크림의 조화",
    bgColor: "from-amber-800 via-yellow-700 to-orange-800",
    textColor: "text-yellow-100"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    alt: "Cappuccino",
    title: "CAPPUCCINO",
    subtitle: "CLASSIC ITALIAN",
    description: "정통 이탈리안 스타일의 크리미한 카푸치노",
    bgColor: "from-brown-800 via-amber-700 to-orange-700",
    textColor: "text-amber-100"
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
      if (window.innerWidth >= 1024) return 4.5 // Desktop: 4.5 slides
      if (window.innerWidth >= 768) return 3   // Tablet: 3 slides
      return 1.5 // Mobile: 1.5 slides
    }
    return 4.5
  }

  const [slidesPerView, setSlidesPerView] = useState(4.5)

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
    <section className="py-20 bg-white promotion-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div className="animate-slideInUp">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 animate-floatSlow">
              PROMOTION
            </h2>
            <p className="text-lg text-gray-700 animate-floatDelay">
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
                    slidesPerView === 1.5 ? 'w-2/3' :
                    slidesPerView === 3 ? 'w-1/3' : 'w-1/4'
                  }`}
                >
                  <a href="/menu/" className="block group">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                      
                      {/* Product Image Section - Top 2/3 */}
                      <div className="h-2/3 relative overflow-hidden">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          priority={index < 4}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
                        
                        {/* Product Badge */}
                        <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                          NEW
                        </div>

                        {/* Price Badge */}
                        <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                          $5.99
                        </div>
                      </div>
                      
                      {/* Content Section - Bottom 1/3 */}
                      <div className="h-1/3 p-5 flex flex-col justify-center bg-white relative">
                        <p className="text-xs text-gray-600 font-medium tracking-wider uppercase mb-2">
                          {item.subtitle}
                        </p>
                        <h3 className="text-lg font-bold text-black mb-2 group-hover:text-green-600 transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Action Button - Appears on Hover */}
                        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-green-600 hover:bg-green-700 text-white text-xs px-4 py-2 rounded-full transition-colors duration-300">
                            ORDER NOW
                          </button>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-green-200 transition-all duration-300 rounded-2xl"></div>
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
