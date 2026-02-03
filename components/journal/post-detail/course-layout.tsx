'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/lib/types/journal';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Clock, Users, Star, CheckCircle } from 'lucide-react';

interface CourseLayoutProps {
  post: Post;
}

const benefits = [
  'Xây dựng nền tảng yoga vững chắc từ cơ bản',
  'Học các tư thế an toàn và đúng kỹ thuật',
  'Cải thiện sự linh hoạt và sức mạnh cơ thể',
  'Giảm căng thẳng và tăng cường sức khỏe tinh thần',
  'Tham gia cộng đồng yoga tích cực',
  'Nhận chứng chỉ hoàn thành khóa học'
];

const schedule = [
  { week: 'Tuần 1-2', topic: 'Làm quen với yoga cơ bản', sessions: 6 },
  { week: 'Tuần 3-4', topic: 'Các tư thế đứng và cân bằng', sessions: 6 },
  { week: 'Tuần 5-6', topic: 'Tư thế ngồi và xoắn cột sống', sessions: 6 },
  { week: 'Tuần 7-8', topic: 'Backbends và hip openers', sessions: 6 }
];

export default function CourseLayout({ post }: CourseLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            <span>🎓</span>
            <span>Khóa học mới</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Course Stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-green-600" />
              <span>30 ngày</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-green-600" />
              <span>1,234+ học viên</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-500 fill-current" />
              <span>4.9/5 (456 đánh giá)</span>
            </div>
          </div>

          {/* Price */}
          <div className="bg-green-50 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-green-600">1,990,000₫</span>
              <span className="text-lg text-gray-500 line-through">2,990,000₫</span>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Giảm 33%
              </span>
            </div>
            <p className="text-sm text-gray-600">
              ⏰ Ưu đãi có hạn đến hết tháng này
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/course" className="flex-1">
              <Button 
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Đăng ký ngay
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <Link href="/support" className="flex-1">
              <Button 
                variant="outline"
                size="lg"
                className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                <MessageCircle size={20} className="mr-2" />
                Chat tư vấn
              </Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group">
                <div className="w-0 h-0 border-l-[16px] border-l-green-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1 group-hover:border-l-green-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Checklist */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Những gì bạn sẽ đạt được
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
          Giảng viên của bạn
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=200&h=200&fit=crop"
              alt="Charlie - Yoga Instructor"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Charlie</h3>
            <p className="text-green-600 font-semibold mb-4">Certified Yoga Instructor (RYT 500)</p>
            <p className="text-gray-600 leading-relaxed">
              Với hơn 6 năm kinh nghiệm giảng dạy yoga và đã hướng dẫn hơn 1 triệu học viên trên toàn thế giới, 
              Charlie mang đến phương pháp giảng dạy độc đáo, dễ hiểu và phù hợp với người Việt Nam.
            </p>
          </div>
        </div>
      </div>

      {/* Schedule & Pricing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Schedule */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Lịch học chi tiết</h3>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">{item.week}</span>
                  <span className="text-sm text-gray-500">{item.sessions} buổi</span>
                </div>
                <p className="text-gray-600 text-sm">{item.topic}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Details */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Chi tiết khóa học</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Thời lượng</span>
              <span className="font-semibold">30 ngày</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Số buổi học</span>
              <span className="font-semibold">24 buổi</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Thời gian mỗi buổi</span>
              <span className="font-semibold">45-60 phút</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Hỗ trợ</span>
              <span className="font-semibold">24/7</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Chứng chỉ</span>
              <span className="font-semibold text-green-600">✓ Có</span>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">
          Sẵn sàng bắt đầu hành trình yoga của bạn?
        </h3>
        <p className="text-green-100 mb-6 max-w-2xl mx-auto">
          Tham gia cùng hàng nghìn học viên đã thay đổi cuộc sống của họ thông qua yoga. 
          Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/course">
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Đăng ký ngay - 1,990,000₫
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
          <Link href="/support">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <MessageCircle size={20} className="mr-2" />
              Chat tư vấn miễn phí
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}