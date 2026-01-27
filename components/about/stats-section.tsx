import { Users, Video, Calendar, Award } from 'lucide-react';

const stats = [
  {
    icon: Video,
    number: '1,000+',
    label: 'Video bài học',
    description: 'Thư viện đa dạng cho mọi trình độ'
  },
  {
    icon: Users,
    number: '1M+',
    label: 'Học viên',
    description: 'Cộng đồng toàn cầu tin tưởng'
  },
  {
    icon: Calendar,
    number: '6',
    label: 'Năm trên YouTube',
    description: 'Kinh nghiệm giảng dạy trực tuyến'
  },
  {
    icon: Award,
    number: '200h',
    label: 'Chứng chỉ RYT',
    description: 'Đào tạo chuyên nghiệp được công nhận'
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
            Những con số nói lên cam kết và chất lượng trong việc mang yoga đến với mọi người
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
            Tham gia cộng đồng học viên đang phát triển mạnh mẽ
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Khám phá khóa học
          </button>
        </div>
      </div>
    </section>
  );
}