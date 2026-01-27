'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, CheckCircle, Clock, BookOpen } from 'lucide-react';

const roadmapWeeks = [
  { 
    week: 'Tuần 1', 
    title: 'Nền tảng', 
    desc: 'Học các tư thế cơ bản và nguyên tắc căn chỉnh',
    details: [
      'Tư thế cơ bản và căn chỉnh',
      'Kỹ thuật thở đúng cách',
      'Xây dựng thói quen thực hành',
      'Khởi động và thư giãn'
    ],
    lessons: 7,
    duration: '15-25 phút/bài'
  },
  { 
    week: 'Tuần 2', 
    title: 'Xây dựng sức mạnh', 
    desc: 'Tăng sức mạnh và sức bền với chuỗi động tác thách thức',
    details: [
      'Chuỗi Surya Namaskara',
      'Tư thế đứng và cân bằng',
      'Tăng cường cơ core',
      'Kỹ thuật chuyển tiếp'
    ],
    lessons: 7,
    duration: '20-30 phút/bài'
  },
  { 
    week: 'Tuần 3', 
    title: 'Tập trung linh hoạt', 
    desc: 'Kéo giãn sâu và rèn luyện tính linh hoạt',
    details: [
      'Tư thế ngồi và xoắn',
      'Mở hông và vai',
      'Backbends cơ bản',
      'Yin yoga và phục hồi'
    ],
    lessons: 7,
    duration: '25-35 phút/bài'
  },
  { 
    week: 'Tuần 4', 
    title: 'Tích hợp', 
    desc: 'Kết hợp tất cả kỹ năng và thực hành tư thế nâng cao',
    details: [
      'Flow sequences nâng cao',
      'Tư thế thách thức',
      'Thiền và mindfulness',
      'Lập kế hoạch thực hành dài hạn'
    ],
    lessons: 7,
    duration: '30-40 phút/bài'
  }
];

export default function RoadmapSection() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  return (
    <section id="roadmap" className="px-8 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lộ trình học tập{' '}
            <span className="text-green-600">4 tuần</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Từ nền tảng đến thành thạo - hành trình được thiết kế khoa học để phát triển từng tuần
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gray-200"></div>
            <div className="absolute top-20 left-0 w-3/4 h-1 bg-green-500"></div>

            {/* Timeline Cards */}
            <div className="grid grid-cols-4 gap-8">
              {roadmapWeeks.map((week, index) => (
                <div key={index} className="relative">
                  {/* Week Number Circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto relative z-10 ${
                    index < 3 ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div 
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-200"
                    onClick={() => setExpandedWeek(expandedWeek === index ? null : index)}
                  >
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">{week.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{week.desc}</p>
                      
                      <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-2">
                        <div className="flex items-center gap-1">
                          <BookOpen size={12} />
                          <span>{week.lessons} bài</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{week.duration}</span>
                        </div>
                      </div>

                      <button className="flex items-center justify-center gap-1 text-green-600 hover:text-green-700 text-sm font-medium mt-3 mx-auto">
                        Chi tiết
                        <ChevronRight size={14} className={`transition-transform ${expandedWeek === index ? 'rotate-90' : ''}`} />
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {expandedWeek === index && (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                        {week.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {roadmapWeeks.map((week, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${
                  index < 3 ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  {index + 1}
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{week.title}</h3>
                    <p className="text-gray-600 text-sm">{week.desc}</p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <BookOpen size={12} />
                      <span>{week.lessons} bài</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{week.duration}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setExpandedWeek(expandedWeek === index ? null : index)}
                    className="flex items-center gap-1 text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Chi tiết
                    <ChevronRight size={14} className={`transition-transform ${expandedWeek === index ? 'rotate-90' : ''}`} />
                  </button>

                  {expandedWeek === index && (
                    <div className="space-y-2 pt-2">
                      {week.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Sẵn sàng bắt đầu hành trình 4 tuần của bạn?
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Xem chi tiết chương trình
          </button>
        </div>
      </div>
    </section>
  );
}