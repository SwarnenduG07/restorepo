"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  description?: string;
  link?: string;
}

interface NavItem {
  label: string;
  items: DropdownItem[];
}

const navigationItems: NavItem[] = [
  {
    label: "Brand",
    items: [
      { label: "Brand Story", description: "", link: "/brand" },
      { label: "Directions", description: "", link: "/directions" },
    ]
  },
  {
    label: "Menu",
    items: [
      { label: "Signature Coffee", description: "Our premium coffee blends", link: "/menu" },
      { label: "Classic Coffee", description: "Traditional favorites" },
      { label: "Non-Coffee", description: "Tea and other beverages" },
      { label: "Desserts", description: "Sweet treats and pastries" },
      { label: "Seasonal Items", description: "Limited time offerings" }
    ]
  },
  {
    label: "Stores",
    items: [
      { label: "Find a Store", link: '/store' },
    ]
  },
  {
    label: "News",
    items: [
      { label: "News", description: "Recent updates and announcements", link: "/news" },
    ]
  },
  {
    label: "Franchise",
    items: [
      { label: "Why GrayPipple", description: "Benefits of joining us", link: "/franchise/1" },
      { label: "Investment Details", description: "Financial requirements", link: "/franchise/2" },
      { label: "Support & Training", description: "What we provide", link: "/franchise/3" },
      { label: "Application Process", description: "How to get started", link: "/franchise/4" },
      { label: "Success Stories", description: "Franchise owner testimonials", link: "/franchise/5" }
    ]
  }
];

export default function ScrollNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavigation = (link?: string) => {
    if (link) {
      setActiveDropdown(null);
      setIsMobileMenuOpen(false);
      if (typeof window !== 'undefined') {
        if (link.includes('#events')) {
          // Special handling for events tab
          window.location.href = '/news';
          setTimeout(() => {
            // Set the events tab active after navigation
            const event = new CustomEvent('setActiveTab', { detail: 'events' });
            window.dispatchEvent(event);
          }, 100);
        } else {
          window.location.href = link;
        }
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Always visible navigation */}
      <nav className="fixed top-0 w-full z-[100] transition-all duration-500 translate-y-0 opacity-100">
        <div className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg border-b border-gray-100' 
            : 'bg-white border-b border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="text-lg sm:text-xl font-bold text-gray-800 hover:text-green-600 transition-colors">
                  GRAYPIPPLE
                </Link>
              </div>

              {/* Desktop Navigation Menu */}
              <div className="hidden lg:flex items-center space-x-2">
                {navigationItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 lg:px-4 py-2 text-base font-medium transition-colors duration-200 rounded-lg hover:bg-gray-100 ${
                        activeDropdown === item.label
                          ? 'text-green-600 bg-green-50'
                          : 'text-gray-900'
                      }`}
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      <span className="font-semibold">{item.label}</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Desktop Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 z-20 ${
                      activeDropdown === item.label 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}>
                      <div className="py-2">
                        {item.items.map((dropdownItem, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-green-600 transition-colors duration-150 group"
                            onClick={() => handleNavigation(dropdownItem.link)}
                          >
                            <div className="font-medium text-gray-900 text-sm group-hover:text-green-600">
                              {dropdownItem.label}
                            </div>
                            {dropdownItem.description && (
                              <div className="text-xs text-gray-500 mt-1">
                                {dropdownItem.description}
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop CTA Button */}
              <button className="hidden sm:block bg-green-600 hover:bg-green-700 text-white px-4 lg:px-6 py-2 text-sm rounded-lg transition-colors duration-200 font-medium">
                Franchise Inquiry
              </button>

              {/* Mobile menu button */}
              <button 
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 touch-manipulation"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            <div className="py-4 space-y-3">
              {navigationItems.map((item) => (
                <div key={item.label} className="border-b border-gray-50 last:border-b-0 pb-3 last:pb-0">
                  <button
                    className="flex items-center justify-between w-full text-left py-2 px-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-green-600 rounded-lg touch-manipulation transition-colors"
                    onClick={() => handleDropdownToggle(item.label)}
                  >
                    <span>{item.label}</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile Dropdown Items */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    activeDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="ml-4 mt-2 space-y-1">
                      {item.items.map((dropdownItem, index) => (
                        <button
                          key={index}
                          className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded touch-manipulation transition-colors"
                          onClick={() => handleNavigation(dropdownItem.link)}
                        >
                          <div className="font-medium">
                            {dropdownItem.label}
                          </div>
                          {dropdownItem.description && (
                            <div className="text-xs text-gray-500 mt-1">
                              {dropdownItem.description}
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 text-sm rounded-lg transition-colors duration-200 touch-manipulation font-medium">
                  Franchise Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content jump */}
      <div className="h-14 sm:h-16" />
    </>
  );
}