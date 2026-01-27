'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed fixed right-6 bottom-6 z-40 space-y-3">
          <Button 
          variant="outline" 
          size="sm"
          onClick={scrollToTop}
          className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full"
        >
          <ArrowUp size={16} />
        </Button>
      </div>

      {/* Desktop Sticky Right CTA */}
      <div className="hidden md:block fixed right-6 bottom-6 z-40 space-y-3">
        <Button 
          variant="outline" 
          size="sm"
          onClick={scrollToTop}
          className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full"
        >
          <ArrowUp size={16} />
        </Button>
      </div>
    </>
  );
}