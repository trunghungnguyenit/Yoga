'use client';

import { useState } from 'react';
import { Search, MessageCircle, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const popularSearches = [
  'Thanh toán',
  'Đăng nhập',
  'Khóa học',
  'Lỗi video',
  'Hủy đăng ký',
  'Chứng chỉ'
];

export default function SupportHeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Title */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Cần giúp đỡ? 
            <span className="text-orange-300"> Chúng tôi sẵn sàng hỗ trợ.</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Tìm câu trả lời nhanh chóng hoặc liên hệ trực tiếp với đội ngũ hỗ trợ của chúng tôi
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Tìm câu hỏi hoặc nhập mã lỗi (ví dụ: ERR123)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="w-full pl-14 pr-4 py-4 text-lg rounded-2xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-300 shadow-lg"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl"
              >
                Tìm kiếm
              </Button>
            </div>

            {/* Search Suggestions */}
            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 z-10">
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-3 font-medium">Tìm kiếm phổ biến:</p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(search)}
                        className="px-3 py-1 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Quick Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Send size={20} className="mr-2" />
            Gửi yêu cầu
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            <MessageCircle size={20} className="mr-2" />
            Chat ngay
          </Button>
        </div>

        {/* Trust Signals */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-green-100 text-sm">
          <span>✓ Phản hồi trong 24 giờ</span>
          <span>✓ Hỗ trợ 7 ngày/tuần</span>
          <span>✓ Đội ngũ chuyên nghiệp</span>
        </div>
      </div>
    </section>
  );
}