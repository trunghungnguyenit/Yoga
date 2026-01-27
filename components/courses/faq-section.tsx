'use client';

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface FAQSectionProps {
  expandedFAQ: number | null;
  onToggleFAQ: (index: number) => void;
}

const faqItems = [
  {
    question: 'Tôi có quyền truy cập khóa học bao lâu?',
    answer: 'Bạn có quyền truy cập suốt đời vào tất cả các tài liệu khóa học, bao gồm bất kỳ cập nhật trong tương lai và nội dung tiền thưởng nào mà chúng tôi thêm vào khóa học.',
    category: 'truy cập'
  },
  {
    question: 'Điều gì sẽ xảy ra nếu khóa học không phù hợp với tôi?',
    answer: 'Chúng tôi cung cấp bảo đảm hoàn tiền 14 ngày nếu bạn không hoàn toàn hài lòng với khóa học. Không cần lý do, chỉ cần liên hệ với chúng tôi.',
    category: 'thanh toán'
  },
  {
    question: 'Tôi có thể tải xuống tài liệu khóa học không?',
    answer: 'Có, bạn có thể tải xuống tất cả các video khóa học, bảng tính và tài nguyên để xem ngoại tuyến trên các thiết bị của bạn. Ứng dụng mobile cũng hỗ trợ xem offline.',
    category: 'tính năng'
  },
  {
    question: 'Nếu tôi tụt lại trong khóa học thì sao?',
    answer: 'Không có dòng thời gian cố định. Bạn có thể tiến hành khóa học với tốc độ của riêng mình và truy cập tài liệu bất kỳ lúc nào bạn cần. Cộng đồng luôn sẵn sàng hỗ trợ.',
    category: 'học tập'
  },
  {
    question: 'Tôi có nhận được chứng chỉ không?',
    answer: 'Có, bạn sẽ nhận được chứng chỉ hoàn thành mà bạn có thể chia sẻ trên LinkedIn và các nền tảng chuyên nghiệp khác sau khi hoàn thành khóa học.',
    category: 'chứng chỉ'
  },
  {
    question: 'Khóa học có phù hợp với người mới bắt đầu không?',
    answer: 'Có! Khóa học được thiết kế cho mọi trình độ. Chúng tôi cung cấp các biến thể cho từng tư thế và hướng dẫn chi tiết để người mới bắt đầu có thể theo dõi dễ dàng.',
    category: 'trình độ'
  },
  {
    question: 'Tôi cần thiết bị gì để tham gia khóa học?',
    answer: 'Bạn chỉ cần một thảm yoga và không gian thoải mái để thực hành. Một số bài có thể sử dụng gạch yoga hoặc dây đai, nhưng chúng tôi sẽ hướng dẫn cách thay thế bằng đồ vật trong nhà.',
    category: 'thiết bị'
  },
  {
    question: 'Làm thế nào để tham gia buổi coaching nhóm?',
    answer: 'Sau khi đăng ký, bạn sẽ nhận được link Zoom và lịch trình chi tiết. Tất cả buổi coaching đều được ghi lại nếu bạn không thể tham gia trực tiếp.',
    category: 'coaching'
  }
];

export default function FAQSection({ expandedFAQ, onToggleFAQ }: FAQSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Tất cả' },
    { value: 'truy cập', label: 'Truy cập' },
    { value: 'thanh toán', label: 'Thanh toán' },
    { value: 'tính năng', label: 'Tính năng' },
    { value: 'học tập', label: 'Học tập' },
    { value: 'chứng chỉ', label: 'Chứng chỉ' },
    { value: 'trình độ', label: 'Trình độ' },
    { value: 'thiết bị', label: 'Thiết bị' },
    { value: 'coaching', label: 'Coaching' }
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="px-8 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Câu hỏi{' '}
            <span className="text-green-600">thường gặp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tìm câu trả lời cho những thắc mắc phổ biến về khóa học Momentum Flow
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Tìm kiếm câu hỏi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, idx) => {
              const originalIndex = faqItems.findIndex(faq => faq.question === item.question);
              return (
                <div key={originalIndex} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-green-300 transition-colors">
                  <button
                    onClick={() => onToggleFAQ(originalIndex)}
                    className="w-full px-6 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-green-600 transition-transform flex-shrink-0 ${
                        expandedFAQ === originalIndex ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFAQ === originalIndex && (
                    <div className="px-6 py-6 bg-green-50 border-t border-green-100">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy câu hỏi</h3>
              <p className="text-gray-600 mb-4">Thử từ khóa khác hoặc chọn danh mục khác</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Vẫn có thắc mắc?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn. Gửi câu hỏi và nhận phản hồi trong vòng 24 giờ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              Liên hệ hỗ trợ
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors">
              Tham gia cộng đồng
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}