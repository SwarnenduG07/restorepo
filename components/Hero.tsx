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
  
  // Video transformation - starts full screen, becomes vertical rectangle
  const videoTransitionStart = 150;
  const videoTransitionEnd = 600;
  const videoProgress = Math.min(1, Math.max(0, (scrollY - videoTransitionStart) / (videoTransitionEnd - videoTransitionStart)));
  
  // Video dimensions matching the reference - vertical rectangle positioned
  const videoWidth = 100 - (videoProgress * 64.435); // From 100vw to 35.565vw
  const videoHeight = 100 - (videoProgress * 18.519); // From 100vh to 81.481vh
  const videoBorderRadius = videoProgress * 12; // Subtle border radius
  
  // Green background opacity - only appears when video starts shrinking significantly
  const greenBgOpacity = videoProgress > 0.3 ? (videoProgress - 0.3) * 1.36 : 0;
  
  // Video positioning - keep centered throughout transformatio  
  // Text animations with better timing
  const cafeNameOpacity = scrollY > 250 ? Math.min(1, (scrollY - 250) / 200) : 0;
  const cafeNameMoveStart = 700;
  const cafeNameTransform = scrollY > cafeNameMoveStart ? 
    `translateY(${(scrollY - cafeNameMoveStart) * 0.25}px)` : 
    'translateY(0px)';

  // Secondary text animation - appears over video when transformation is complete
  const secondaryTextOpacity = scrollY > 550 ? Math.min(1, (scrollY - 550) / 150) : 0;
  const secondaryTextTransform = scrollY > 800 ? 
    `translateY(${(scrollY - 800) * 0.15}px)` : 
    'translateY(0px)';

  // Side content animation - appears when video transformation is complete
  const sideContentOpacity = scrollY > 600 ? Math.min(1, (scrollY - 600) / 200) : 0;
  const sideContentTransform = scrollY > 900 ? 
    `translateY(${(scrollY - 900) * 0.1}px)` : 
    'translateY(0px)';

  // Extended pause for the vertical rectangle view
  const rectangleViewStart = 700;
  const rectangleViewEnd = 1100; // Extended viewing time for the rectangle
  const rectangleIsVisible = scrollY >= rectangleViewStart && scrollY <= rectangleViewEnd;

  // Hero section movement - only starts after rectangle viewing period
  const heroMoveStart = 1200; // Delayed to allow proper viewing of rectangle
  const heroTransform = scrollY > heroMoveStart ? 
    `translateY(${(scrollY - heroMoveStart) * 0.2}px)` : 
    'translateY(0px)';

  return (
    <div 
      className="relative overflow-hidden hero-no-bg"
      style={{ 
        transform: heroTransform,
        height: '150vh', // Extended height to accommodate scroll phases
        paddingBottom: '2rem', // Ensures smooth transition to next section
        backgroundColor: 'transparent',
        background: 'transparent'
      }}
    >
      {/* Green Background - only appears when video shrinks significantly */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900 transition-opacity duration-1000"
        style={{ 
          opacity: greenBgOpacity,
          display: greenBgOpacity > 0 ? 'block' : 'none'
        }}
      />

      {/* Main Video Container - transforms from full screen to vertical rectangle */}
      <div 
        className="absolute transition-all duration-1000 ease-out"
        style={{
          width: `${videoWidth}vw`,
          height: `${videoHeight}vh`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: `${videoBorderRadius}px`,
          overflow: 'hidden',
          boxShadow: videoProgress > 0.1 ? '0 25px 50px rgba(0,0,0,0.5)' : 'none',
          zIndex: videoProgress === 0 ? 1 : 10 // Ensure full screen video is behind text initially
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/1009066827?badge=&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
        
        {/* Text overlay on video - appears when video transforms */}
        <div 
          className="absolute bottom-6 left-6 text-white z-10"
          style={{
            opacity: secondaryTextOpacity,
            transform: secondaryTextTransform,
          }}
        >
          <p className="text-sm md:text-base font-light tracking-wider leading-relaxed opacity-80">
            A CHANGE OF MOOD<br className="block sm:hidden" />
            <span className="hidden sm:inline">  </span>IN A BUSY DAILY LIFE
          </p>
        </div>
      </div>

      {/* Side Content - appears alongside transformed video */}
      <div 
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20"
        style={{
          opacity: sideContentOpacity,
          transform: `translateY(-50%) ${sideContentTransform}`,
        }}
      >
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img 
            src="/asset/img/common/logo.svg" 
            alt="GrayPipple Logo" 
            className="w-16 h-16 md:w-20 md:h-20 opacity-90"
          />
        </div>

        {/* Side Text Content */}
        <div className="text-white text-right max-w-xs">
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-light tracking-wide leading-relaxed mb-2">
              In busy daily life
            </h3>
            <h3 className="text-lg md:text-xl font-light tracking-wide leading-relaxed">
              A cup of coffee to refresh your mood
            </h3>
          </div>
          
          {/* Scroll Indicator - shows different states */}
          <div className="flex flex-col items-center mt-8">
            <div 
              className="w-8 h-8 border border-white rounded-full flex items-center justify-center mb-2 transition-opacity duration-300"
              style={{ opacity: rectangleIsVisible ? 1 : 0.6 }}
            >
              <img 
                src="/asset/img/main/scroll_arrow.png" 
                alt="Scroll" 
                className="w-3 h-3"
              />
            </div>
            <p className="text-xs tracking-wider">
              {rectangleIsVisible ? 'CONTINUE' : 'SCROLL'}
            </p>
          </div>
        </div>
      </div>

      {/* Initial Hero Text - fades out early */}
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

      {/* Cafe Name Popup - appears as video transforms */}
      <div 
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
        style={{
          opacity: cafeNameOpacity,
          transform: `translate(-50%, -50%) ${cafeNameTransform}`,
        }}
      >
        <div className="text-center text-white px-4">
          <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold tracking-widest drop-shadow-2xl leading-none">
            GRAYPIPPLE
          </h2>
          <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest drop-shadow-2xl mt-2 sm:mt-4">
            COFFEE
          </h3>
        </div>
      </div>

      {/* Scroll Indicator - only visible initially */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 text-white"
        style={{ 
          opacity: textOpacity,
          animation: textOpacity > 0 ? 'bounce 2s infinite' : 'none'
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm tracking-wider">SCROLL</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center mt-2">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Rectangle Phase Complete Indicator */}
      {rectangleIsVisible && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 text-white animate-pulse">
          <div className="flex flex-col items-center">
            <span className="text-xs sm:text-sm tracking-wider">CONTINUE SCROLLING</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center mt-2">
              <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
