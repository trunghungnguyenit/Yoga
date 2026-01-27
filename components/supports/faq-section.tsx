'use client';

import { useState } from 'react';
import { ChevronDown, Search, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const faqCategories = [
  {
    id: 'general',
    title: 'Câu hỏi chung',
    faqs: [
      {
        question: 'Làm thế nào để bắt đầu với Charlie Follows Yoga?',
        answer: 'Bạn có thể bắt đầu bằng cách đăng ký tài khoản miễn phí và thử nghiệm các lớp học cơ bản. Chúng tôi có hướng dẫn chi tiết cho người mới bắt đầu.',
        helpful: true
      },
      {
        question: 'Tôi có cần kinh nghiệm yoga trước đó không?',
        answer: 'Không cần thiết! Các khóa học của chúng tôi được thiết kế cho mọi trình độ, từ người mới bắt đầu đến người có kinh nghiệm.',
        helpful: true
      },
      {
        question: 'Tôi có thể hủy đăng ký bất kỳ lúc nào không?',
        answer: 'Có, bạn có thể hủy đăng ký bất kỳ lúc nào từ trang quản lý tài khoản. Không có phí hủy và bạn vẫn có thể truy cập đến hết chu kỳ thanh toán hiện tại.',
        helpful: true
      }
    ]
  },
  {
    id: 'technical',
    title: 'Kỹ thuật',
    faqs: [
      {
        question: 'Video không phát được, tôi phải làm gì?',
        answer: 'Hãy thử làm mới trang, kiểm tra kết nối internet, hoặc thử trình duyệt khác. Nếu vẫn không được, hãy liên hệ với chúng tôi.',
        helpful: false
      },
      {
        question: 'Ứng dụng di động có sẵn không?',
        answer: 'Có, chúng tôi có ứng dụng cho cả iOS và Android. Bạn có thể tải xuống từ App Store hoặc Google Play.',
        helpful: true
      },
      {
        question: 'Tôi có thể tải video để xem offline không?',
        answer: 'Hiện tại tính năng này chỉ có sẵn trên ứng dụng di động với gói Premium. Bạn có thể tải xuống tối đa 10 video cùng lúc.',
        helpful: false
      }
    ]
  },
  {
    id: 'billing',
    title: 'Thanh toán',
    faqs: [
      {
        question: 'Các phương thức thanh toán nào được chấp nhận?',
        answer: 'Chúng tôi chấp nhận thẻ tín dụng/ghi nợ Visa, MasterCard, và PayPal. Thanh toán được xử lý an toàn qua Stripe.',
        helpful: true
      },
      {
        question: 'Khi nào tôi sẽ bị tính phí?',
        answer: 'Bạn sẽ được tính phí vào ngày đăng ký hàng tháng. Ví dụ: nếu đăng ký ngày 15, bạn sẽ bị tính phí vào ngày 15 hàng tháng.',
        helpful: true
      },
      {
        question: 'Làm thế nào để thay đổi phương thức thanh toán?',
        answer: 'Vào Cài đặt tài khoản > Thanh toán > Thay đổi phương thức thanh toán. Thay đổi sẽ có hiệu lực từ chu kỳ thanh toán tiếp theo.',
        helpful: false
      }
    ]
  }
];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory);
  const filteredFaqs = currentCategory?.faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const toggleFaq = (index: number) => {
    const faqId = `${activeCategory}-${index}`;
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tìm câu trả lời nhanh chóng cho những thắc mắc phổ biến
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Tìm kiếm trong FAQ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white border border-gray-200"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenFaq(null);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const faqId = `${activeCategory}-${index}`;
              const isOpen = openFaq === faqId;

              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-500 transition-transform flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {faq.answer}
                        </p>

                        {/* Helpful Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">
                              Câu trả lời này có hữu ích không?
                            </span>
                            <div className="flex gap-2">
                              <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors">
                                Có
                              </button>
                              <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                                Không
                              </button>
                            </div>
                          </div>

                          <Link
                            href="#ticket-form"
                            className="flex items-center gap-1 text-sm text-green-600 hover:text-green-700 font-medium"
                          >
                            Vẫn chưa giải quyết? Mở ticket
                            <ExternalLink size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                Không tìm thấy câu hỏi nào phù hợp với "{searchQuery}"
              </p>
              <Link href="#ticket-form">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  Đặt câu hỏi mới
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        {filteredFaqs.length > 0 && (
          <div className="text-center mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Vẫn cần hỗ trợ thêm?
            </h3>
            <p className="text-gray-600 mb-6">
              Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#ticket-form">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  Gửi yêu cầu hỗ trợ
                </button>
              </Link>
              <Link href="#chat">
                <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  Chat trực tiếp
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}