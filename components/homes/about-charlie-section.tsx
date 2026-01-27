import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AboutCharlieSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar/Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-orange-100 p-8">
                <Image
                  src="/Logo-GacYoga.jpg"
                  alt="Charlie - Giáo viên Yoga"
                  fill
                  className="object-contain rounded-xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-200 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Xin chào, tôi là{' '}
                <span className="text-green-600">Charlie</span>
              </h2>
              <p className="text-xl text-green-700 font-semibold">
                Giáo viên yoga, YouTuber, và người tin rằng bạn có khả năng hơn những gì bạn nghĩ.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Hành trình yoga của tôi bắt đầu trực tuyến gần một thập kỷ trước, và nó đã thay đổi tất cả. 
                Yoga đã giúp tôi tìm được sức mạnh mà tôi không biết mình có.
              </p>
              <p className="text-lg">
                Bây giờ nhiệm vụ của tôi là giúp những người khác khám phá sức mạnh tương tự trong chính họ. 
                Nếu bạn đang tìm kiếm câu trả lời, hướng dẫn, và một chút hy vọng - bạn đang ở đúng nơi.
              </p>
              <p className="text-lg">
                Tôi đã tạo các chương trình để giúp mọi người ở mọi cấp độ xây dựng sức mạnh, 
                tính linh hoạt, và sự tự tin trong thực hành của họ.
              </p>
            </div>

            {/* CTA and Stats */}
            <div className="space-y-6">
              <Link href="/course">
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Bắt đầu tại đây
                </Button>
              </Link>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">10+</span>
                  <span>Năm kinh nghiệm</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">10,000+</span>
                  <span>Học viên</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">50+</span>
                  <span>Chương trình</span>
                </div>
              </div>

              {/* Micro CTA */}
              <Link 
                href="/about" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Tìm hiểu thêm về Charlie
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}