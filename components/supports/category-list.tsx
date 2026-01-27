import Link from 'next/link';
import { ChevronRight, BookOpen, User, CreditCard, Settings, MessageCircle } from 'lucide-react';

const supportCategories = [
  {
    id: 'about-charlie',
    title: 'Về Charlie Follows Yoga',
    description: 'Tìm hiểu về Charlie và triết lý giảng dạy yoga',
    articleCount: 8,
    icon: User,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'momentum-flow',
    title: 'Về Momentum Flow',
    description: 'Phương pháp độc quyền và cách thực hành hiệu quả',
    articleCount: 12,
    icon: BookOpen,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'account-billing',
    title: 'Tài khoản & Thanh toán',
    description: 'Quản lý tài khoản, thanh toán và đăng ký',
    articleCount: 15,
    icon: CreditCard,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: 'technical-support',
    title: 'Hỗ trợ kỹ thuật',
    description: 'Giải quyết sự cố kỹ thuật và lỗi hệ thống',
    articleCount: 20,
    icon: Settings,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'contact',
    title: 'Liên hệ chúng tôi',
    description: 'Thông tin liên hệ và hỗ trợ trực tiếp',
    articleCount: 5,
    icon: MessageCircle,
    color: 'bg-red-100 text-red-600'
  }
];

export default function CategoryList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Danh mục hỗ trợ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tìm câu trả lời theo từng chủ đề cụ thể
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportCategories.map((category) => (
            <Link
              key={category.id}
              href={`/support/${category.id}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${category.color} group-hover:scale-110`}>
                    <category.icon size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {category.title}
                      </h3>
                      <ChevronRight 
                        size={20} 
                        className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all flex-shrink-0" 
                      />
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {category.articleCount} bài viết
                      </span>
                      <span className="text-sm font-medium text-green-600 group-hover:text-green-700">
                        Xem tất cả
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Popular Topics */}
        <div className="mt-12 bg-white rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Chủ đề phổ biến
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Cách đăng ký khóa học',
              'Quên mật khẩu',
              'Lỗi thanh toán',
              'Video không phát',
              'Tải chứng chỉ',
              'Hủy đăng ký',
              'Thay đổi email',
              'Liên hệ hỗ trợ',
              'Cập nhật thông tin'
            ].map((topic, index) => (
              <Link
                key={index}
                href={`/support/search?q=${encodeURIComponent(topic)}`}
                className="group flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm text-gray-700 group-hover:text-green-600">
                  {topic}
                </span>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}