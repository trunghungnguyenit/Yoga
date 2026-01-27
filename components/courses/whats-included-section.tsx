import Link from 'next/link';
import { Play, Download, Users, Calendar, BookOpen, Award } from 'lucide-react';

const includedFeatures = [
  {
    icon: Play,
    title: '28 video bài học HD',
    description: 'Video chất lượng cao với hướng dẫn chi tiết từng động tác',
    link: '#sample-lesson'
  },
  {
    icon: Download,
    title: 'Tài liệu thực hành',
    description: 'PDF hướng dẫn, bảng theo dõi tiến độ và checklist',
    link: '#resources'
  },
  {
    icon: Users,
    title: 'Cộng đồng riêng tư',
    description: 'Truy cập forum độc quyền và nhóm hỗ trợ 24/7',
    link: '#community'
  },
  {
    icon: Calendar,
    title: 'Coaching nhóm hàng tuần',
    description: 'Buổi Q&A trực tiếp với Charlie mỗi tuần',
    link: '#schedule'
  }
];

const additionalBenefits = [
  'Truy cập trọn đời tất cả nội dung',
  'Cập nhật miễn phí khi có nội dung mới',
  'Chứng chỉ hoàn thành khóa học',
  'Hỗ trợ kỹ thuật 24/7',
  'Tương thích mọi thiết bị',
  'Xem offline với ứng dụng mobile'
];

export default function WhatsIncludedSection() {
  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Những gì bạn nhận được với{' '}
            <span className="text-green-600">Momentum Flow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khóa học toàn diện với mọi thứ bạn cần để thành công trong hành trình yoga
          </p>
        </div>

        {/* Main Features - Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {includedFeatures.map((feature, index) => (
            <div key={index} className="group text-center space-y-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              {/* Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors">
                <feature.icon size={32} className="text-green-600" />
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>

              {/* Link */}
              <Link 
                href={feature.link}
                className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium hover:underline"
              >
                Xem mẫu
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Lợi ích bổ sung
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {additionalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Value Highlight */}
            <div className="text-center lg:text-left space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                  <Award size={16} className="text-green-600" />
                  Giá trị tổng cộng
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-gray-900">$497</div>
                  <div className="text-gray-600">Giá khóa học riêng lẻ</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-green-600 font-semibold">Giá đặc biệt hôm nay:</div>
                <div className="text-4xl font-bold text-green-600">$99</div>
                <div className="text-sm text-gray-500">Tiết kiệm 80% • Chỉ còn 3 ngày</div>
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}