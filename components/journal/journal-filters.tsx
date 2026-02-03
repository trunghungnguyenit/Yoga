'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { PostCategory, categoryConfig } from '@/lib/types/journal';

interface JournalFiltersProps {
  onFilterChange: (category: PostCategory | 'all') => void;
  onSearchChange: (query: string) => void;
  activeFilter: PostCategory | 'all';
  searchQuery: string;
}

const filterOptions = [
  { value: 'all' as const, label: 'Tất cả' },
  { value: 'diary' as PostCategory, label: 'Nhật ký lớp học' },
  { value: 'schedule' as PostCategory, label: 'Lịch tập' },
  { value: 'knowledge' as PostCategory, label: 'Kiến thức' },
  { value: 'course' as PostCategory, label: 'Khóa học' }
];

export default function JournalFilters({ 
  onFilterChange, 
  onSearchChange, 
  activeFilter, 
  searchQuery 
}: JournalFiltersProps) {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-200 transition-colors"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onFilterChange(option.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === option.value
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}