import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-50 via-orange-50 to-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop"
          alt="Charlie teaching yoga"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-green-700 border border-green-200">
              <span>✨</span>
              <span>Câu chuyện của tôi</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Từ phòng ngủ đến{' '}
                <span className="text-green-600">lớp học trực tuyến</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Charlie chia sẻ chuỗi bài tập vinyasa đã giúp hàng triệu người tập tại nhà 
                và khám phá sức mạnh tiềm ẩn trong chính họ.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/course">
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Bắt đầu miễn phí
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link href="#sample-video">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                >
                  <Play size={20} className="mr-2" />
                  Xem lớp mẫu 10 phút
                </Button>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600">
              <span>✓ Hơn 1 triệu học viên</span>
              <span>✓ 6 năm kinh nghiệm</span>
              <span>✓ 1000+ video bài học</span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-orange-200 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=750&fit=crop"
                  alt="Charlie - Yoga Instructor"
                  fill
                  className="object-cover"
                />
                
                {/* Floating Stats */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">1M+</div>
                    <div className="text-xs text-gray-600">Học viên</div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">6</div>
                    <div className="text-xs text-gray-600">Năm kinh nghiệm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
}