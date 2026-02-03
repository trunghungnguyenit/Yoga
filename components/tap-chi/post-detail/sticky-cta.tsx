'use client';

import { useState, useEffect } from 'react';
import { JournalCta } from '@/components/shared';
import { X } from 'lucide-react';
import { PostCategory } from '@/lib/types/journal';
import { JOURNAL_STICKY_CTA } from '@/lib/constants/journal-constants';

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

  // Get CTA text based on category
  const getTitle = () => JOURNAL_STICKY_CTA.titles[category] || 'Bạn phù hợp với lớp này?';
  const getDescription = () => JOURNAL_STICKY_CTA.descriptions[category] || 'Nhắn Zalo cho Luận để được tư vấn';

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
              {getTitle()}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {getDescription()}
            </p>
            <JournalCta 
              category={category}
              size="default"
              className="w-full text-xs px-3 py-2"
            />
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
              {getTitle()}
            </p>
            <p className="text-xs text-gray-600">
              {getDescription()}
            </p>
          </div>
          <JournalCta 
            category={category}
            size="default"
            className="text-xs px-4 py-2"
          />
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