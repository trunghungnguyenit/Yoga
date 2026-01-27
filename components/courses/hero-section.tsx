import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Users, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="px-8 py-16 bg-gradient-to-br from-green-50 via-orange-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content (7/12) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Level Badge */}
            <div className="flex items-center gap-3">
              <Badge className="bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">
                Trung bình
              </Badge>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9</span>
                <span>(1,250+ đánh giá)</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Momentum Flow:{' '}
                <span className="text-green-600">4 tuần</span>{' '}
                xây dựng sức mạnh & linh hoạt
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Chương trình được thiết kế đặc biệt để giúp bạn xây dựng sức mạnh, tính linh hoạt, 
                và sự tự tin thông qua thực hành yoga hướng dẫn từng bước.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>4 tuần • 28 bài học</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>5,420+ học viên</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Cập nhật mới nhất: Tháng 1, 2025</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#pricing">
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[160px]"
                >
                  Đăng ký ngay
                </Button>
              </Link>
              <Link href="#roadmap">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 min-w-[160px]"
                >
                  Xem lộ trình
                </Button>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-500">
              <span>✓ Dùng thử miễn phí 14 ngày</span>
              <span>✓ Hoàn tiền 100%</span>
              <span>✓ Truy cập trọn đời</span>
            </div>
          </div>

          {/* Right Column - Video/Image (5/12) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-video bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=600&fit=crop"
                alt="Momentum Flow Yoga Course Preview"
                fill
                className="object-cover"
                priority
              />
              
              {/* Video Play Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer hover:bg-black/40 transition-colors">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play size={32} className="text-green-600 ml-1" />
                </div>
              </div>

              {/* Video Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-gray-900 px-3 py-1 text-xs font-medium">
                  🎥 Xem trailer khóa học
                </Badge>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-black/70 text-white px-3 py-1 text-xs">
                  2:30
                </Badge>
              </div>
            </div>

            {/* Sample Lesson Link */}
            <div className="mt-4 text-center">
              <Link 
                href="#sample-lesson" 
                className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center gap-2 hover:underline"
              >
                <Play size={14} />
                Xem bài học mẫu miễn phí
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}