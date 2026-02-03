import { ZaloCta } from '@/components/shared';
import { BRAND_STATS } from '@/lib/constants/yoga-constants';
import { Calendar, Award, Users, Heart } from 'lucide-react';

// Stats data for Luận
const stats = [
  {
    icon: Users,
    number: BRAND_STATS.students,
    label: 'Học viên',
    description: 'Đã đồng hành cùng Gác Yoga'
  },
  {
    icon: Calendar,
    number: `${BRAND_STATS.experience}`,
    label: 'Năm kinh nghiệm',
    description: 'Giảng dạy yoga tại Bình Định'
  },
  {
    icon: Award,
    number: `${BRAND_STATS.certification}`,
    label: 'Chứng chỉ RYT',
    description: 'Đào tạo chuyên nghiệp được công nhận'
  },
  {
    icon: Heart,
    number: BRAND_STATS.classTypes,
    label: 'Loại lớp học',
    description: 'Đa dạng phù hợp mọi nhu cầu'
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hành trình{' '}
            <span className="text-green-600">đáng tin cậy</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những con số nói lên cam kết và chất lượng trong việc mang yoga đến với cộng đồng Bình Định
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <stat.icon size={32} className="text-green-600" />
              </div>
              
              {/* Number */}
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Tham gia cộng đồng học viên đang phát triển tại Gác Yoga
          </p>
          <ZaloCta text="💬 Chat Zalo – Tư vấn lớp phù hợp" />
        </div>
      </div>
    </section>
  );
}