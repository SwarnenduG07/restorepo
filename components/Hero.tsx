'use client'

import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const heroRef = useRef(null);
  const scrollTimeoutRef = useRef<any>(null);

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  if (typeof window !== 'undefined') {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
}, []);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Check if we're in the animation zone (0 to 1200px)
      const isInAnimationZone = currentScrollY >= 0 && currentScrollY <= 1200;
      
      if (isInAnimationZone && !isAnimationActive) {
        setIsAnimationActive(true);
        
        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        // Temporarily slow down scrolling during key animation moments
        const isKeyAnimationMoment = (currentScrollY >= 150 && currentScrollY <= 600) || 
                                   (currentScrollY >= 700 && currentScrollY <= 900);
        
        if (isKeyAnimationMoment) {
          document.body.style.scrollBehavior = 'smooth';
          
          // Reset scroll behavior after a brief moment
          scrollTimeoutRef.current = setTimeout(() => {
            document.body.style.scrollBehavior = 'auto';
          }, 100);
        }
      } else if (!isInAnimationZone && isAnimationActive) {
        setIsAnimationActive(false);
        document.body.style.scrollBehavior = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      document.body.style.scrollBehavior = 'auto';
    };
  }, [isAnimationActive]);

  const textOpacity = Math.max(0, 1 - scrollY / 300);
  const textTransform = `translateY(${scrollY * 0.5}px)`;

  const videoTransitionStart = 150;
  const videoTransitionEnd = 600;
  const videoProgress = Math.min(1, Math.max(0, (scrollY - videoTransitionStart) / (videoTransitionEnd - videoTransitionStart)));

  
  const baseVideoWidth = isMobile ? 85 : 100;
  const baseVideoHeight = isMobile ? 90 : 100;

  const videoWidth = baseVideoWidth - (videoProgress * (isMobile ? 50 : 64.435));
  const videoHeight = baseVideoHeight - (videoProgress * (isMobile ? 20 : 18.519));
  const videoBorderRadius = videoProgress * (isMobile ? 8 : 12);

  const greenBgOpacity = videoProgress > 0.3 ? (videoProgress - 0.3) * 1.36 : 0;

  const cafeNameOpacity = scrollY > 250 ? Math.min(1, (scrollY - 250) / 200) : 0;
  const cafeNameMoveStart = 700;
  const cafeNameTransform = scrollY > cafeNameMoveStart ? 
    `translateY(${(scrollY - cafeNameMoveStart) * 0.25}px)` : 
    'translateY(0px)';

  // const secondaryTextOpacity = scrollY > 550 ? Math.min(1, (scrollY - 550) / 150) : 0;
  // const secondaryTextTransform = scrollY > 800 ? 
  //   `translateY(${(scrollY - 800) * 0.15}px)` : 
  //   'translateY(0px)';

  const sideContentOpacity = scrollY > 600 ? Math.min(1, (scrollY - 600) / 200) : 0;
  const sideContentTransform = scrollY > 900 ? 
    `translateY(${(scrollY - 900) * 0.1}px)` : 
    'translateY(0px)';

  const rectangleViewStart = 700;
  const rectangleViewEnd = 1100;
  const rectangleIsVisible = scrollY >= rectangleViewStart && scrollY <= rectangleViewEnd;

  const heroMoveStart = 1200;
  const heroTransform = scrollY > heroMoveStart ? 
    `translateY(${(scrollY - heroMoveStart) * 0.2}px)` : 
    'translateY(0px)';

  return (
   <div
  ref={heroRef}
  className="relative overflow-hidden hero-no-bg pb-8 bg-transparent h-[150vh] md:h-[200vh]"
  style={{
    transform: heroTransform,
  }}
>
      {/* Scroll Progress Indicator
      <div className="fixed top-0 left-0 w-full h-1 bg-black bg-opacity-20 z-50">
        <div 
          className="h-full bg-white transition-all duration-100"
          style={{ 
            width: `${Math.min(100, (scrollY / 1200) * 100)}%`,
            opacity: isAnimationActive ? 0.8 : 0
          }}
        />
      </div> */}

      {/* Green Background - starts from green */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900 transition-opacity duration-1000 z-0"
        style={{ 
          opacity: 1, // Always start with green
        }}
      />

      {/* Fullscreen Video Wrapper */}
      <div 
        className="absolute top-0 left-0 w-screen h-screen transition-all duration-1000 ease-out flex items-center justify-center z-10"
      >
        {/* Scalable Video Container */}
        <div
          style={{
            width: `${videoWidth}vw`,
            height: `${videoHeight}vh`,
            borderRadius: `${videoBorderRadius}px`,
            overflow: 'hidden',
            boxShadow: videoProgress > 0.1 ? '0 25px 50px rgba(0,0,0,0.5)' : 'none',
            transition: 'all 0.3s ease',
            position: 'relative',
          }}
        >
          {/* Zoomed Fullscreen Video */}
          <iframe
            src="https://player.vimeo.com/video/1009066827?badge=&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            style={{ 
              objectFit: 'cover',
              transform: 'scale(1.5)', // Removes white sidebars
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
          />
        </div>
      </div>

      {/* Initial Hero Text */}
      <div 
        className="absolute inset-0 z-20 flex items-center justify-center"
        style={{
          opacity: textOpacity,
          transform: textTransform,
          marginTop: '-30rem'
        }}
      >
        <div className="text-center text-white px-4 top-9">
          <h1 className="text-xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-wider mb-2 sm:mb-4 drop-shadow-2xl max-w-[1000px]">
           BEST CAFE IN TOWN.
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-light tracking-widest drop-shadow-lg">
            PREMIUM COFFEE.
          </p>
        </div>
      </div>

      {/* Cafe Name Popup */}
      <div 
        className="fixed inset-0 flex items-end justify-center pointer-events-none pb-[20rem] z-10"
        style={{
          opacity: cafeNameOpacity,
          transform: cafeNameTransform,
        }}
      >
        <div className="text-center text-white px-4">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-wider mb-2 sm:mb-4 drop-shadow-2xl ">
            GRAYPIPPLE
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-light tracking-widest drop-shadow-lg opacity-80">
            PREMIUM COFFEE EXPERIENCE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;