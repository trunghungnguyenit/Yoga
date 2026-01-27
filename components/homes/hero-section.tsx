import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-50 via-orange-50 to-amber-50 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Background pattern or image placeholder */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-green-100 to-orange-100"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Trust Badge */}
          <Badge variant="secondary" className="bg-white/90 text-green-700 px-4 py-2 text-sm font-medium">
            ⭐ 10.000+ học viên tin tưởng
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Khởi đầu hành trình{' '}
            <span className="text-green-600">Yoga</span>{' '}
            của bạn cùng Charlie
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Khám phá sức mạnh tiềm ẩn trong bạn qua các chương trình yoga được thiết kế riêng cho mọi trình độ. 
            Tăng linh hoạt, giảm stress, và xây dựng sự tự tin từng ngày.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/course">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Bắt đầu ngay
              </Button>
            </Link>
            <Link href="/program">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Xem chương trình
              </Button>
            </Link>
          </div>

          {/* Additional Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span>Đánh giá 5 sao</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Miễn phí 7 ngày đầu</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Hủy bất kỳ lúc nào</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
}