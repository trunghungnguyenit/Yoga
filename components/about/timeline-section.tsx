'use client';

import { useState } from 'react';
import { ChevronRight, Calendar, Award, Users, Video, Globe, Star } from 'lucide-react';

const timelineEvents = [
  {
    year: '2016',
    title: 'Bắt đầu hành trình',
    description: 'Thực hành yoga đầu tiên trong phòng ngủ sinh viên',
    details: 'Khám phá yoga qua YouTube để giảm căng thẳng học tập. Bắt đầu chia sẻ với bạn bè và gia đình.',
    icon: Calendar,
    color: 'bg-blue-500'
  },
  {
    year: '2017',
    title: 'Hoàn thành đào tạo RYT 200h',
    description: 'Chứng chỉ giáo viên yoga vinyasa đầu tiên',
    details: 'Hoàn thành khóa đào tạo 200 giờ, xây dựng nền tảng vững chắc về giải phẫu, triết học và kỹ thuật giảng dạy.',
    icon: Award,
    color: 'bg-green-500'
  },
  {
    year: '2018',
    title: 'Dạy tại studio địa phương',
    description: 'Từ 1 lớp/tuần đến 20 lớp/tuần',
    details: 'Bắt đầu với một lớp học nhỏ, nhanh chóng mở rộng thành 20 lớp mỗi tuần tại nhiều studio khác nhau.',
    icon: Users,
    color: 'bg-purple-500'
  },
  {
    year: '2020',
    title: 'Chuyển sang YouTube',
    description: 'COVID thúc đẩy chuyển mình trực tuyến',
    details: 'Đại dịch mở ra cơ hội mới. Bắt đầu tạo nội dung YouTube một cách nghiêm túc và có hệ thống.',
    icon: Video,
    color: 'bg-red-500'
  },
  {
    year: '2022',
    title: 'Bước ngoặt viral',
    description: 'Đạt 100K subscribers đầu tiên',
    details: 'Sau 4 năm kiên trì, kênh YouTube bùng nổ. Cộng đồng bắt đầu phát triển mạnh mẽ.',
    icon: Globe,
    color: 'bg-orange-500'
  },
  {
    year: '2025',
    title: 'Hiện tại',
    description: '1M+ học viên, 1000+ video',
    details: 'Đã tạo ra hơn 1000 video bài học, phục vụ cộng đồng hơn 1 triệu người trên toàn thế giới.',
    icon: Star,
    color: 'bg-yellow-500'
  }
];

export default function TimelineSection() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mốc thời gian{' '}
            <span className="text-green-600">quan trọng</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những khoảnh khắc định hình hành trình từ sinh viên đến giáo viên yoga được hàng triệu người yêu mến
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gray-200"></div>
          <div className="absolute top-20 left-0 w-5/6 h-1 bg-green-500"></div>

          {/* Timeline Events */}
          <div className="grid grid-cols-6 gap-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Year Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm mb-6 mx-auto relative z-10 cursor-pointer transition-all duration-300 hover:scale-110 ${
                  index < 5 ? event.color : 'bg-gray-300'
                }`}>
                  <event.icon size={24} />
                </div>

                {/* Event Card */}
                <div 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-200"
                  onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                >
                  <div className="text-center space-y-3">
                    <div className="text-2xl font-bold text-gray-900">{event.year}</div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{event.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                    
                    <button className="flex items-center justify-center gap-1 text-green-600 hover:text-green-700 text-sm font-medium mt-3 mx-auto">
                      Chi tiết
                      <ChevronRight size={14} className={`transition-transform ${selectedEvent === index ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {selectedEvent === index && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-700 text-sm leading-relaxed">{event.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < timelineEvents.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-gray-200"></div>
              )}

              <div className="flex gap-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${event.color}`}>
                  <event.icon size={24} />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-bold text-gray-900">{event.year}</div>
                      <div className="h-6 w-px bg-gray-300"></div>
                      <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    
                    <button 
                      onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                      className="flex items-center gap-1 text-green-600 hover:text-green-700 font-medium"
                    >
                      Chi tiết
                      <ChevronRight size={14} className={`transition-transform ${selectedEvent === index ? 'rotate-90' : ''}`} />
                    </button>

                    {selectedEvent === index && (
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">{event.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Hành trình vẫn tiếp tục...
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Mỗi ngày là một cơ hội mới để học hỏi, phát triển và chia sẻ. 
            Tham gia cùng tôi trong hành trình này!
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Bắt đầu hành trình của bạn
          </button>
        </div>
      </div>
    </section>
  );
}