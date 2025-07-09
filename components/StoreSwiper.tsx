'use client'

import { useState, useEffect } from 'react'

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
    src: "https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  return (
   <></>
  )
}

export default StoreSwiper
