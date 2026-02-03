'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { PostCategory } from '@/lib/types/journal';

interface StickyCTAProps {
  category: PostCategory;
}

export default function StickyCTA({ category }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 800; // Show after scrolling 800px
      
      if (scrolled > threshold && !isHidden) {
        setIsVisible(true);
      } else if (scrolled <= threshold) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <>
      {/* Desktop Sidebar CTA */}
      <div className={`hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 transition-all duration-300 z-40 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-xs border border-gray-200">
          <button
            onClick={() => setIsHidden(true)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧘‍♀️</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">
              Bạn phù hợp với lớp này?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Nhắn Zalo cho Luận để được tư vấn trực tiếp
            </p>
            <a 
              href="https://zalo.me/your-zalo-number" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="sm"
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold"
              >
                💬 Chat Zalo
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom CTA */}
      <div className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg transition-all duration-300 z-40 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              Bạn phù hợp với lớp này?
            </p>
            <p className="text-xs text-gray-600">
              Nhắn Zalo cho Luận
            </p>
          </div>
          <a 
            href="https://zalo.me/your-zalo-number" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold px-6"
            >
              💬 Chat Zalo
            </Button>
          </a>
          <button
            onClick={() => setIsHidden(true)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </>
  );
}