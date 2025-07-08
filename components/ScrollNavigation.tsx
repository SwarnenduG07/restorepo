"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  description?: string;
}

interface NavItem {
  label: string;
  items: DropdownItem[];
}

const navigationItems: NavItem[] = [
  {
    label: "Brand",
    items: [
      { label: "Our Story", description: "Learn about our journey" },
      { label: "Mission & Vision", description: "Our goals and values" },
      { label: "Team", description: "Meet our coffee experts" },
      { label: "Sustainability", description: "Our environmental commitment" }
    ]
  },
  {
    label: "Menu",
    items: [
      { label: "Signature Coffee", description: "Our premium coffee blends" },
      { label: "Classic Coffee", description: "Traditional favorites" },
      { label: "Non-Coffee", description: "Tea and other beverages" },
      { label: "Desserts", description: "Sweet treats and pastries" },
      { label: "Seasonal Items", description: "Limited time offerings" }
    ]
  },
  {
    label: "Stores",
    items: [
      { label: "Find a Store", description: "Locate stores near you" },
      { label: "Store Features", description: "What makes our stores special" },
      { label: "Opening Hours", description: "When we're open" },
      { label: "Store Events", description: "Upcoming events and activities" }
    ]
  },
  {
    label: "News",
    items: [
      { label: "Latest News", description: "Recent updates and announcements" },
      { label: "Press Releases", description: "Official company news" },
      { label: "Company Updates", description: "Business developments" },
      { label: "Awards & Recognition", description: "Our achievements" }
    ]
  },
  {
    label: "Franchise",
    items: [
      { label: "Why GrayPipple", description: "Benefits of joining us" },
      { label: "Investment Details", description: "Financial requirements" },
      { label: "Support & Training", description: "What we provide" },
      { label: "Application Process", description: "How to get started" },
      { label: "Success Stories", description: "Franchise owner testimonials" }
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

  const handleMouseLeave = () => {
    setTimeout(() => setActiveDropdown(null), 150);
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
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                        activeDropdown === item.label
                          ? 'text-gray-900 bg-gray-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 ${
                      activeDropdown === item.label 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="py-2">
                        {item.items.map((dropdownItem, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
                            onClick={() => setActiveDropdown(null)}
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
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 text-sm">
                Franchise Inquiry
              </Button>

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
