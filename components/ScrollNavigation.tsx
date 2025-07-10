"use client";

import { useState, useEffect } from "react";

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
      { label: "Events", description: "Recent Events" },
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
      if (typeof window !== 'undefined') {
        window.location.href = link;
      }
    }
  };

  return (
    <>

      {/* Scroll-triggered header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800">GRAYPIPPLE</h1>
              </div>

              {/* Navigation Menu */}
              <div className="hidden lg:flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                        activeDropdown === item.label
                          ? 'text-gray-900 bg-gray-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      <span>{item.label}</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 z-10 ${
                      activeDropdown === item.label 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}>
                      <div className="py-2">
                        {item.items.map((dropdownItem, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
                            onClick={() => handleNavigation(dropdownItem.link)}
                          >
                            <div className="font-medium text-gray-900 text-sm">
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

              {/* CTA Button */}
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 text-sm rounded-lg transition-colors duration-200">
                Franchise Inquiry
              </button>

              {/* Mobile menu button */}
              <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content jump */}
      <div className={`transition-all duration-500 ${isScrolled ? 'h-16' : 'h-0'}`} />
    </>
  );
}