'use client'

import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation values based on scroll
  const textOpacity = Math.max(0, 1 - scrollY / 300);
  const textTransform = `translateY(${scrollY * 0.5}px)`;
  
  // Rectangle overlap animation - they come together and overlap to form a small square
  const rectangleProgress = Math.min(1, scrollY / 400);
  const overlapAmount = rectangleProgress * 40; // How much they overlap
  
  // Video scaling - faster scaling as rectangles overlap
  const videoScale = Math.max(0.7, 1 - scrollY * 0.0008); // Increased scaling speed
  const videoTransform = `scale(${videoScale})`;

  // Cafe name animation - appears, stays, then moves down smoothly
  const cafeNameOpacity = scrollY > 200 ? Math.min(1, (scrollY - 200) / 200) : 0;
  const cafeNameStayDuration = 400; // How long it stays before moving
  const cafeNameMoveStart = 600; // When it starts moving down
  const cafeNameTransform = scrollY > cafeNameMoveStart ? 
    `translateY(${(scrollY - cafeNameMoveStart) * 0.3}px)` : 
    'translateY(0px)';

  // Smooth hero section downward movement
  const heroMoveStart = 800;
  const heroTransform = scrollY > heroMoveStart ? 
    `translateY(${(scrollY - heroMoveStart) * 0.2}px)` : 
    'translateY(0px)';

  return (
    <div 
      className="relative h-screen overflow-hidden"
      style={{ transform: heroTransform }}
    >
      {/* Video Background */}
      <div 
        className="absolute inset-0 z-0 w-full h-full flex items-center justify-center"
        style={{
          transform: videoTransform,
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/1009066827?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          style={{ 
            width: '100vw', 
            height: '100vh', 
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: '0',
            left: '0'
          }}
        />
      </div>

      {/* Top Rectangle - overlaps downward */}
      <div 
        className="absolute inset-x-0 top-0 z-10 bg-green-900 transition-all duration-500"
        style={{ 
          height: `${Math.min(50, 20 + overlapAmount)}vh`,
        }}
      />

      {/* Bottom Rectangle - overlaps upward */}
      <div 
        className="absolute inset-x-0 bottom-0 z-10 bg-green-900 transition-all duration-500"
        style={{ 
          height: `${Math.min(50, 20 + overlapAmount)}vh`,
        }}
      />

      {/* Left Rectangle - overlaps rightward */}
      <div 
        className="absolute inset-y-0 left-0 z-10 bg-green-900 transition-all duration-500"
        style={{ 
          width: `${Math.min(50, 20 + overlapAmount)}vw`,
        }}
      />

      {/* Right Rectangle - overlaps leftward */}
      <div 
        className="absolute inset-y-0 right-0 z-10 bg-green-900 transition-all duration-500"
        style={{ 
          width: `${Math.min(50, 20 + overlapAmount)}vw`,
        }}
      />

      {/* Initial Hero Text */}
      <div 
        className="absolute inset-0 z-20 flex items-center justify-center"
        style={{
          opacity: textOpacity,
          transform: textTransform,
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-4 drop-shadow-2xl">
            BEST CAFE
          </h1>
          <p className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-widest drop-shadow-lg">
            IN THE WORLD
          </p>
        </div>
      </div>

      {/* Cafe Name Popup - appears, stays, then moves down smoothly */}
      <div 
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
        style={{
          opacity: cafeNameOpacity,
          transform: cafeNameTransform,
        }}
      >
        <div className="text-center text-white px-4">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-widest drop-shadow-2xl leading-none">
            GRAYPIPPLE
          </h2>
          <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest drop-shadow-2xl mt-2 sm:mt-4">
            COFFEE
          </h3>
          <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-widest mt-4 sm:mt-6 lg:mt-8 drop-shadow-lg">
            Premium Coffee Experience
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 text-white animate-bounce"
        style={{ opacity: textOpacity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm tracking-wider">SCROLL</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center mt-2">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
