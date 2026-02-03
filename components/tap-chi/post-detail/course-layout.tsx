'use client';

import Image from 'next/image';
import { Post } from '@/lib/types/journal';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Clock, MapPin } from 'lucide-react';

interface CourseLayoutProps {
  post: Post;
}

const benefits = [
  'Nhóm nhỏ tối đa 5 người',
  'HLV chỉnh sửa trực tiếp',
  'Phù hợp từng thể trạng',
  'Học tại Gác Yoga hoặc online qua Zoom',
  'Lịch học linh hoạt theo nhu cầu',
  'Tư vấn miễn phí trước khi bắt đầu'
];

export default function CourseLayout({ post }: CourseLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            <span>🏠</span>
            <span>Lớp Yoga tại Gác Yoga</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Dạy trực tiếp – Nhóm nhỏ – Cá nhân hóa theo thể trạng
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Class Info */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-green-600" />
              <span>Tối đa 5 người/lớp</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-green-600" />
              <span>60-90 phút/buổi</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green-600" />
              <span>Gác Yoga, Bình Định</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a 
              href="https://zalo.me/your-zalo-number" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                💬 Chat Zalo – Tư vấn lớp phù hợp với bạn
              </Button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">📸</div>
                <p className="text-lg font-medium">Ảnh lớp học thực tế</p>
                <p className="text-sm">Tại Gác Yoga</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Checklist */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Điểm đặc biệt của lớp học tại Gác Yoga
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
              <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor Info */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Thông tin giảng viên
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-3xl mb-2">👨‍🏫</div>
                <p className="text-xs">HLV Luận</p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Luận – HLV chính tại Gác Yoga</h3>
            <p className="text-green-600 font-semibold mb-4">• Trực tiếp giảng dạy • Tư vấn theo tình trạng cơ thể • Ưu tiên an toàn & trị liệu</p>
            <p className="text-gray-600 leading-relaxed">
              Với nhiều năm kinh nghiệm trong lĩnh vực yoga và trị liệu, Luận luôn chú trọng đến việc 
              cá nhân hóa từng buổi học để phù hợp với thể trạng và nhu cầu của từng học viên.
            </p>
          </div>
        </div>
      </div>

      {/* Class Types */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Available Classes */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Các loại lớp học</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Yoga Cộng Đồng</h4>
              <p className="text-gray-600 text-sm">Lớp học nhóm với không khí vui vẻ, thân thiện</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Yoga Trị Liệu</h4>
              <p className="text-gray-600 text-sm">Hỗ trợ điều trị các vấn đề sức khỏe cụ thể</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Yoga Căn Bản</h4>
              <p className="text-gray-600 text-sm">Khóa 12 buổi dành cho người mới bắt đầu</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Trị Liệu Mạc Cơ</h4>
              <p className="text-gray-600 text-sm">Điều trị đau nhức, cải thiện tư thế</p>
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Địa chỉ</p>
                <p className="text-gray-600">Gác Yoga, Bình Định</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Giờ hoạt động</p>
                <p className="text-gray-600">Thứ 2 - CN: 6:00 - 21:00</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users size={20} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Lớp học</p>
                <p className="text-gray-600">Nhóm nhỏ & cá nhân</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">
          Sẵn sàng bắt đầu hành trình yoga tại Gác Yoga?
        </h3>
        <p className="text-green-100 mb-6 max-w-2xl mx-auto">
          Hãy chat Zalo với Luận để được tư vấn lớp học phù hợp nhất với thể trạng và nhu cầu của bạn. 
          Tư vấn hoàn toàn miễn phí!
        </p>
        <a 
          href="https://zalo.me/your-zalo-number" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            💬 Chat Zalo – Tư vấn lớp phù hợp với bạn
          </Button>
        </a>
      </div>
    </div>
  );
}