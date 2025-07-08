"use client";

import { Button } from "@/components/ui/button";

export default function FloatingActionButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button 
        className="rounded-full w-14 h-14 bg-gray-800 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={scrollToTop}
      >
        TOP
      </Button>
    </div>
  );
}
