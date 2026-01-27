import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const features = [
  {
    title: "Kế hoạch thực hành hàng tuần có cấu trúc",
    description: "Không còn phải đoán mò những gì cần làm mỗi ngày. Theo dõi các kế hoạch hàng tuần đơn giản, cân bằng giúp bạn giữ sự nhất quán và xây dựng tiến bộ thực sự, có thể đo lường được.",
    image: "/Logo-GacYoga.jpg",
    icon: "📅",
    category: "Cho người mới"
  },
  {
    title: "Các chương trình hướng dẫn tạo ra thay đổi thực sự",
    description: "Các chương trình từng bước được thiết kế để cải thiện sức mạnh, khả năng di chuyển, sự tự tin, và kỷ luật của bạn - mà không quá tải. Chỉ cần theo dõi con đường và cảm nhận sự khác biệt.",
    image: "/Logo-GacYoga.jpg",
    icon: "💪",
    category: "Nâng cao"
  },
  {
    title: "Cộng đồng hỗ trợ",
    description: "Giữ động lực với cộng đồng của tôi thách thức bạn, hỗ trợ bạn, và nhắc nhở bạn rằng bạn có khả năng hơn những gì bạn nghĩ.",
    image: "/Logo-GacYoga.jpg",
    icon: "🤝",
    category: "Yoga trị liệu"
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Chương trình học được thiết kế{' '}
            <span className="text-green-600">riêng cho bạn</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Từ người mới bắt đầu đến chuyên gia, chúng tôi có chương trình phù hợp với mọi trình độ
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4">
                {feature.category}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>

              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-green-50 to-orange-50">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Card CTA */}
                <Button 
                  variant="outline" 
                  className="w-full border-green-200 text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
                >
                  Khám phá chi tiết
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Link href="/programs">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Tìm một chương trình
            </Button>
          </Link>
          
          {/* Additional info */}
          <p className="mt-4 text-gray-500 text-sm">
            Miễn phí 7 ngày đầu • Hủy bất kỳ lúc nào
          </p>
        </div>
      </div>
    </section>
  );
}