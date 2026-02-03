'use client';

import { useRef, useState } from 'react';
import { Search } from 'lucide-react';
import { PostCategory } from '@/lib/types/journal';

interface JournalFiltersProps {
  onFilterChange: (category: PostCategory | 'all') => void;
  onSearchChange: (query: string) => void;
  activeFilter: PostCategory | 'all';
  searchQuery: string;
}

const filterOptions = [
  { value: 'all' as const, label: 'Tất cả' },
  { value: 'diary' as PostCategory, label: 'Tạp chí lớp học' },
  { value: 'schedule' as PostCategory, label: 'Lịch & thông báo' },
  { value: 'knowledge' as PostCategory, label: 'Kiến thức Yoga' },
  { value: 'course' as PostCategory, label: 'Lớp học tại Gác' }
];

export default function JournalFilters({
  onFilterChange,
  onSearchChange,
  activeFilter,
  searchQuery
}: JournalFiltersProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; // tốc độ kéo
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Filter Tabs – Drag to Scroll */}
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className="
              w-full
              overflow-hidden
              cursor-grab
              active:cursor-grabbing
              select-none
              -mx-25 px-50
            "
          >
            <div className="flex gap-2 min-w-max">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => onFilterChange(option.value)}
                  className={`
                    flex-shrink-0
                    px-3 py-1.5 text-sm rounded-full font-medium
                    transition-all duration-200
                    ${activeFilter === option.value
                      ? 'bg-green-600 text-white shadow'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
