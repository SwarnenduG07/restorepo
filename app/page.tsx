import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FloatingActionButton from "@/components/FloatingActionButton";
import ScrollNavigation from "@/components/ScrollNavigation";
import AnimatedInteriorSection from "@/components/AnimatedInteriorSection";
import CafeSlideshowSection from "@/components/CafeSlideshowSection";
import AnimatedBestMenuSection from "@/components/AnimatedBestMenuSection";
import StoreSwiper from "@/components/StoreSwiper";
import PromotionSwiper from "@/components/PromotionSwiper";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen hero-container" style={{ background: 'transparent' }}>
      {/* Scroll Navigation */}
      <Header></Header>

      {/* Hero Section */}
        <div className="min-h-[150vh]"> {/* or min-h-[120vh] */}
    <Hero />
  </div>

      {/* Content sections with background */}
      <div className="">
        {/* Animated Interior Design Section */}
        <AnimatedInteriorSection />

        {/* Cafe Slideshow Section */}
        <CafeSlideshowSection />

    

      {/* Animated Best Menu Section */}
      <AnimatedBestMenuSection />

      {/* Brand Story Section */}
      <section id="brand" className="relative min-h-screen overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden animate-slideInLeft order-2 lg:order-1 h-64 sm:h-80 md:h-96 lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhZmV8ZW58MHx8MHx8fDA%3D"
              alt="Coffee Cup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          

          {/* Right Side - Dark Content */}
          <div className="bg-gray-900 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 animate-slideInRight order-1 lg:order-2 py-8 sm:py-12 lg:py-0">
            <div className="max-w-lg w-full">
              <div className="mb-4 sm:mb-6">
                <p className="text-green-400 mt-5 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4 animate-float">
                  BRAND STORY
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8 animate-floatSlow">
                  WHO<br />
                  WE ARE
                </h1>
              </div>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 animate-floatDelay">
                For modern people who need a change of mood from their busy daily life, 
                we deliver freedom and unique joy contained in a cup of coffee.
              </p>
              
              <Button className="bg-transparent mb-7 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
                VIEW MORE
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Action Buttons - positioned absolutely */}
       
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="relative min-h-screen overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Dark Content */}
          <div className="bg-gray-900 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 animate-slideInLeft py-8 sm:py-12 lg:py-0">
            <div className="max-w-lg w-full">
              <div className="mb-4 sm:mb-6">
                <p className="text-blue-400 mt-5 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4 animate-float">
                  FRANCHISE OPPORTUNITY
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8 animate-floatSlow">
                  JOIN<br />
                  OUR FAMILY
                </h1>
              </div>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 animate-floatDelay">
                GrayPipple ensures your success through differentiated branding 
                and consistent, continuous menu development.
              </p>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 animate-floatDelayMore">
                Start your own coffee business with our proven franchise model 
                and comprehensive support system.
              </p>
              
              <Button className="bg-transparent mb-7 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
                VIEW MORE
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative overflow-hidden animate-slideInRight h-64 sm:h-80 md:h-96 lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1655968692023-21cf3f021054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyZWFkJTIwaW4lMjBjYWZlfGVufDB8fDB8fHww"
              alt="Cafe Bread and Pastries"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

      </section>

      {/* Success Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white success-story-section">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-slideInUp">
      <h2 className="text-4xl sm:text-3xl md:text-6xl font-bold text-black mb-4 ">
        Success Stories
      </h2>
      <h3 className="text-2xl sm:text-2xl font-medium text-black mb-4 sm:mb-6 ">INTERVIEW</h3>
      <p className="text-base sm:text-lg text-black font-medium  px-4">
        Meet our special franchise owners and their success stories.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration bg-white">
        <CardContent className="p-0">
          <div className="h-48 sm:h-56 md:h-64 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Coffee shop owner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 ">
                <span className="text-green-600 text-xs font-medium">SUCCESS STORY</span>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <h4 className="text-base sm:text-lg font-medium text-black mb-2  leading-snug">
              Owner who decided to open a second store in just 6 months
            </h4>
            <p className="text-sm sm:text-base text-gray-600 ">GrayPipple Changwon Store</p>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300  bg-white">
        <CardContent className="p-0">
          <div className="h-48 sm:h-56 md:h-64 relative overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1723773731793-79fbc649a9c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhZmUlMjB3YWl0ZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Young entrepreneur cafe owner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 ">
                <span className="text-purple-600 text-xs font-medium">SUCCESS STORY</span>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <h4 className="text-base sm:text-lg font-medium text-black mb-2  leading-snug">
              29-year-old entrepreneur earning $80,000 monthly
            </h4>
            <p className="text-sm sm:text-base text-gray-600 ">GrayPipple Seomyeon Store</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* Store Locations */}
      <StoreSwiper />

      {/* Promotion Section */}
      <PromotionSwiper />

      {/* News & Notice Section */}
      <section id="news" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4">
              Latest Updates
            </h2>
            <p className="text-green-200 text-base sm:text-lg px-4">
              Stay informed with our latest news and announcements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Notice */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 gap-4">
                <h3 className="text-xl sm:text-2xl font-medium text-white">NOTICE</h3>
                <Button variant="outline" className="bg-blue-500 text-white border-white/30 hover:bg-white/10 hover:text-white text-sm sm:text-base px-4 sm:px-6 py-2 w-full sm:w-auto">
                  VIEW MORE
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { 
                    title: "GrayPipple surpasses $800,000 monthly revenue, franchise inquiries increase", 
                    date: "2025.02.19.",
                    content: "Our franchise program has reached a new milestone with record-breaking revenue. We're now accepting applications for new franchise locations nationwide. Contact us for exclusive territory opportunities."
                  },
                  { 
                    title: "GrayPipple's successful participation in Busan startup expo - 'Full consultations for 3 days'", 
                    date: "2024.12.04.",
                    content: "Our team provided comprehensive franchise consultations at the Busan startup expo. Over 200 potential franchisees showed interest in our proven business model and support system."
                  },
                  { 
                    title: "'First month rent support' GrayPipple participates in 'KFA Franchise Startup Expo 2024 Busan'", 
                    date: "2024.11.26.",
                    content: "We're offering first month rent support for new franchisees. This limited-time promotion includes comprehensive training and ongoing business support to ensure your success."
                  }
                ].map((notice, index) => (
                  <div key={index} className="group border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300 cursor-pointer">
                    <div className="p-3 sm:p-4 hover:bg-white/10 transition-colors">
                      <h4 className="text-white group-hover:text-green-100 transition-colors text-sm sm:text-base leading-relaxed font-medium">
                        {notice.title}
                      </h4>
                      <p className="text-xs text-green-200 mt-2">{notice.date}</p>
                    </div>
                    <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out">
                      <div className="p-3 sm:p-4 pt-0 bg-white/5">
                        <p className="text-green-100 text-xs sm:text-sm leading-relaxed">
                          {notice.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 gap-4">
                <h3 className="text-xl sm:text-2xl font-medium text-white">NEWS</h3>
                <Button variant="outline" className="bg-blue-500 text-white border-white/30 hover:bg-white/10 hover:text-white text-sm sm:text-base px-4 sm:px-6 py-2 w-full sm:w-auto">
                  VIEW MORE
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { 
                    title: "GrayPipple Coffee launches '3 peach beverages' and signature dessert 'New York Cheesecake' for summer season", 
                    date: "2025.06.19.",
                    content: "Our summer menu features three refreshing peach beverages and our signature New York Cheesecake. These seasonal offerings have been crafted to provide the perfect balance of flavor and refreshment during the warmer months."
                  },
                  { 
                    title: "GrayPipple successfully concludes Daegu startup expo - 'Daegu Store #1' confirmed and additional openings announced", 
                    date: "2025.05.16.",
                    content: "Following our successful participation in the Daegu startup expo, we've confirmed the opening of our first Daegu location. Additional store openings are planned for the region based on overwhelming response from local entrepreneurs."
                  },
                  { 
                    title: "GrayPipple participates in 'KFA Franchise Startup Expo 2025 Daegu' - Provides startup benefits worth $52,500", 
                    date: "2025.04.12.",
                    content: "We're offering comprehensive startup benefits including equipment financing, training programs, and marketing support. This package is designed to ensure new franchisees have everything needed for a successful launch."
                  }
                ].map((news, index) => (
                  <div key={index} className="group border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300 cursor-pointer">
                    <div className="p-3 sm:p-4 hover:bg-white/10 transition-colors">
                      <h4 className="text-white group-hover:text-green-100 transition-colors text-sm sm:text-base leading-relaxed font-medium">
                        {news.title}
                      </h4>
                      <p className="text-xs text-green-200 mt-2">{news.date}</p>
                    </div>
                    <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out">
                      <div className="p-3 sm:p-4 pt-0 bg-white/5">
                        <p className="text-green-100 text-xs sm:text-sm leading-relaxed">
                          {news.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-8 sm:py-12 lg:py-16">
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
                <li><a href="#brand" className="text-black transition-colors">Brand</a></li>
                <li><a href="#menu" className="text-black transition-colors">Menu</a></li>
                <li><a href="#store" className="text-black transition-colors">Stores</a></li>
                <li><a href="#news" className="text-black transition-colors">News</a></li>
                <li><a href="#franchise" className="text-black transition-colors">Franchise</a></li>
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

      {/* Floating Action Button - Top */}
      <FloatingActionButton />
      </div> {/* End of bg-black content sections */}
      
    </div>
  );
}
