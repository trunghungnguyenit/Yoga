'use client';

import { useState, useEffect, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  ProgramHero,
  ProgramFilters,
  ProgramCard,
  ProgramQuickView,
  StickyCTA
} from '@/components/programs';

// Mock data
const programs = [
  {
    id: 1,
    title: 'Yoga Mạnh - Xây dựng sức mạnh toàn thân',
    description: 'Chương trình yoga tập trung vào việc xây dựng sức mạnh cơ bắp, cải thiện độ bền và tạo dựng cơ thể khỏe mạnh thông qua các tư thế thách thức.',
    image: '/Logo-GacYoga.jpg',
    slug: 'yoga-strong',
    level: 'Trung bình',
    duration: '4 tuần',
    lessons: 28,
    rating: 4.8,
    reviews: 1250,
    students: 5420,
    isPopular: true,
    price: 'Miễn phí',
    originalPrice: '299.000đ'
  },
  {
    id: 2,
    title: 'Chương trình linh hoạt - Tăng độ dẻo dai',
    description: 'Phát triển tính linh hoạt và phạm vi chuyển động của cơ thể qua các bài tập kéo giãn và tư thế yoga chuyên sâu.',
    image: '/Logo-GacYoga.jpg',
    slug: 'flexibility-program',
    level: 'Người mới',
    duration: '6 tuần',
    lessons: 36,
    rating: 4.9,
    reviews: 890,
    students: 3210,
    isNew: true,
    price: '199.000đ',
    originalPrice: '399.000đ'
  },
  {
    id: 3,
    title: 'Chương trình chứng kỳ - Handstand Master',
    description: 'Làm chủ nghệ thuật chứng kỳ từ cơ bản đến nâng cao. Xây dựng sức mạnh vai, cân bằng và kỹ thuật hoàn hảo.',
    image: '/Logo-GacYoga.jpg',
    slug: 'handstand-master',
    level: 'Nâng cao',
    duration: '8 tuần',
    lessons: 48,
    rating: 4.7,
    reviews: 650,
    students: 2180,
    price: '399.000đ',
    originalPrice: '599.000đ'
  },
  {
    id: 4,
    title: 'Forearm Stand - Chứng kỳ cẳng tay',
    description: 'Học kỹ thuật chứng kỳ cẳng tay an toàn và hiệu quả. Phù hợp cho những ai muốn thử thách bản thân với tư thế đảo ngược.',
    image: '/Logo-GacYoga.jpg',
    slug: 'forearm-stand',
    level: 'Trung bình',
    duration: '6 tuần',
    lessons: 32,
    rating: 4.6,
    reviews: 420,
    students: 1560,
    price: '299.000đ'
  },
  {
    id: 5,
    title: 'Momentum Flow - Yoga động lực',
    description: 'Chuỗi động tác liên kết mượt mà giúp xây dựng sức mạnh, cải thiện tuần hoàn máu và tạo cảm giác năng lượng tích cực.',
    image: '/Logo-GacYoga.jpg',
    slug: 'momentum-flow',
    level: 'Trung bình',
    duration: '4 tuần',
    lessons: 24,
    rating: 4.8,
    reviews: 980,
    students: 4320,
    isPopular: true,
    price: 'Miễn phí'
  },
  {
    id: 6,
    title: 'Yoga trị liệu - Phục hồi và thư giãn',
    description: 'Chương trình yoga nhẹ nhàng tập trung vào việc phục hồi cơ thể, giảm căng thẳng và cải thiện giấc ngủ.',
    image: '/Logo-GacYoga.jpg',
    slug: 'therapeutic-yoga',
    level: 'Người mới',
    duration: '8 tuần',
    lessons: 40,
    rating: 4.9,
    reviews: 1100,
    students: 6780,
    price: '249.000đ',
    originalPrice: '449.000đ'
  }
];

const filterOptions = {
  levels: ['Người mới', 'Trung bình', 'Nâng cao'],
  goals: ['Xây dựng sức mạnh', 'Tăng linh hoạt', 'Giảm căng thẳng', 'Cải thiện cân bằng', 'Phục hồi'],
  durations: ['2-4 tuần', '4-6 tuần', '6-8 tuần', '8+ tuần'],
  formats: ['Video HD', 'Live stream', 'Âm thanh', 'PDF hướng dẫn'],
  tags: ['Phổ biến', 'Mới', 'Miễn phí', 'Có phí']
};

const sortOptions = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'popular', label: 'Phổ biến nhất' },
  { value: 'rating', label: 'Đánh giá cao nhất' },
  { value: 'duration', label: 'Thời lượng ngắn' },
  { value: 'price', label: 'Giá thấp nhất' }
];

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    levels: [],
    goals: [],
    durations: [],
    formats: [],
    tags: []
  });
  const [sortBy, setSortBy] = useState('popular');
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFilterChange = (category: string, value: string) => {
    setActiveFilters(prev => {
      const currentFilters = prev[category] || [];
      const isActive = currentFilters.includes(value);
      
      return {
        ...prev,
        [category]: isActive 
          ? currentFilters.filter(f => f !== value)
          : [...currentFilters, value]
      };
    });
  };

  const handleClearAllFilters = () => {
    setActiveFilters({
      levels: [],
      goals: [],
      durations: [],
      formats: [],
      tags: []
    });
  };

  const handleQuickView = (program: any) => {
    setSelectedProgram(program);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProgram(null);
  };

  const filteredAndSortedPrograms = useMemo(() => {
    let filtered = programs.filter(program => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!program.title.toLowerCase().includes(query) && 
            !program.description.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Level filter
      if (activeFilters.levels.length > 0 && !activeFilters.levels.includes(program.level)) {
        return false;
      }

      // Tags filter
      if (activeFilters.tags.length > 0) {
        const programTags: string[] = [];
        if (program.isPopular) programTags.push('Phổ biến');
        if (program.isNew) programTags.push('Mới');
        if (program.price === 'Miễn phí') programTags.push('Miễn phí');
        else programTags.push('Có phí');

        if (!activeFilters.tags.some(tag => programTags.includes(tag))) {
          return false;
        }
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id - a.id;
        case 'popular':
          return b.students - a.students;
        case 'rating':
          return b.rating - a.rating;
        case 'duration':
          return a.lessons - b.lessons;
        case 'price':
          const aPrice = a.price === 'Miễn phí' ? 0 : parseInt(a.price.replace(/[^\d]/g, ''));
          const bPrice = b.price === 'Miễn phí' ? 0 : parseInt(b.price.replace(/[^\d]/g, ''));
          return aPrice - bPrice;
        default:
          return 0;
      }
    });

    return filtered;
  }, [programs, searchQuery, activeFilters, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <ProgramHero 
        totalPrograms={programs.length}
        onSearch={setSearchQuery}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          {!isMobile && (
            <ProgramFilters
              filters={filterOptions}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAllFilters}
            />
          )}

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Mobile Filters */}
            {isMobile && (
              <ProgramFilters
                filters={filterOptions}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearAllFilters}
                isMobile={true}
              />
            )}

            {/* Sort and Results Count */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-600">
                Hiển thị {filteredAndSortedPrograms.length} trong số {programs.length} chương trình
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sắp xếp:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Programs Grid */}
            <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}`}>
              {filteredAndSortedPrograms.map(program => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  onQuickView={handleQuickView}
                  isMobile={isMobile}
                />
              ))}
            </div>

            {/* No Results */}
            {filteredAndSortedPrograms.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy chương trình</h3>
                <p className="text-gray-600 mb-4">Thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm</p>
                <Button variant="outline" onClick={handleClearAllFilters}>
                  Xóa tất cả bộ lọc
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProgramQuickView
        program={selectedProgram}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
        isMobile={isMobile}
      />

      {/* Sticky CTA */}
      <StickyCTA />

      <Footer />
    </div>
  );
}