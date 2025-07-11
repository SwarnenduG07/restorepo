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
      if (window.innerWidth >= 1280) return 4.5 // XL: 4.5 slides
      if (window.innerWidth >= 1024) return 3.5 // Desktop: 3.5 slides
      if (window.innerWidth >= 768) return 2.5   // Tablet: 2.5 slides
      if (window.innerWidth >= 640) return 1.8   // Small tablet: 1.8 slides
      return 1.2 // Mobile: 1.2 slides for better preview
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

  // Touch handlers for mobile swipe with improved sensitivity
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 30 // Reduced threshold for easier swiping
    const isRightSwipe = distance < -30

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrev()
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white promotion-section">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 sm:mb-12 lg:mb-16 gap-4">
          <div className="animate-slideInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 animate-floatSlow">
              PROMOTION
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 animate-floatDelay">
              그레이피플에서 새롭게 출시한 신메뉴들을 소개합니다.
            </p>
          </div>
          <div className="animate-slideInUp w-full md:w-auto">
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-6 sm:px-8 py-2 sm:py-3 transition-all duration-300 font-medium text-sm sm:text-base w-full md:w-auto"
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
                  className="swiper-slide flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${item.bgColor} aspect-[3/4] group cursor-pointer`}>
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                      <div className={`text-white animate-float`}>
                        <h3 className="text-base text-white sm:text-lg md:text-xl font-bold tracking-wider mb-1 sm:mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm opacity-90 mb-2 sm:mb-3 tracking-wide">
                          {item.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Hover Button */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-white/30 transition-colors duration-200">
                          자세히 보기
                        </button>
                      </div>
                    </div>

                    {/* Index indicator */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
                        <span className={`text-xs font-medium ${item.textColor}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile for better touch experience */}
          <button 
            onClick={goToPrev}
            className="hidden sm:flex swiper-button-prev absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-700 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="hidden sm:flex swiper-button-next absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-700 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {promotionItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`swiper-pagination-bullet w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gray-800 w-6 sm:w-8' 
                    : 'bg-gray-300 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile swipe indicator */}
        <div className="flex sm:hidden justify-center mt-4">
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Swipe to browse</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromotionSwiper
