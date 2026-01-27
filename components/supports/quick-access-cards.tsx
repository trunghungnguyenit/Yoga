import Link from 'next/link';
import { HelpCircle, CreditCard, Settings, Phone, ArrowRight } from 'lucide-react';

const quickAccessItems = [
  {
    id: 'faq',
    icon: HelpCircle,
    title: 'FAQ nhanh',
    description: 'Câu hỏi thường gặp và giải đáp',
    action: 'Xem bài',
    href: '#faq',
    color: 'bg-blue-100 text-blue-600',
    hoverColor: 'hover:bg-blue-200'
  },
  {
    id: 'account',
    icon: CreditCard,
    title: 'Tài khoản & Thanh toán',
    description: 'Quản lý tài khoản và thanh toán',
    action: 'Xem hướng dẫn',
    href: '/support/account',
    color: 'bg-green-100 text-green-600',
    hoverColor: 'hover:bg-green-200'
  },
  {
    id: 'technical',
    icon: Settings,
    title: 'Hỗ trợ kỹ thuật',
    description: 'Sự cố kỹ thuật và lỗi hệ thống',
    action: 'Mở ticket',
    href: '#ticket-form',
    color: 'bg-purple-100 text-purple-600',
    hoverColor: 'hover:bg-purple-200'
  },
  {
    id: 'emergency',
    icon: Phone,
    title: 'Liên hệ khẩn cấp',
    description: 'Hỗ trợ trực tiếp và khẩn cấp',
    action: 'Chat ngay',
    href: '#chat',
    color: 'bg-red-100 text-red-600',
    hoverColor: 'hover:bg-red-200'
  }
];

export default function QuickAccessCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Truy cập nhanh
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chọn danh mục phù hợp để được hỗ trợ nhanh chóng và hiệu quả nhất
          </p>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAccessItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group block"
            >
              <div className="bg-white rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${item.color} ${item.hoverColor}`}>
                  <item.icon size={28} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-green-600 group-hover:text-green-700">
                      {item.action}
                    </span>
                    <ArrowRight 
                      size={16} 
                      className="text-green-600 group-hover:text-green-700 group-hover:translate-x-1 transition-all" 
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Không tìm thấy những gì bạn cần?
          </p>
          <Link href="#ticket-form">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              Gửi yêu cầu hỗ trợ
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}