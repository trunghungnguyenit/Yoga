import { ZaloCta } from '@/components/shared';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-50 via-orange-50 to-white overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-green-100 to-orange-100"></div>
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
                Từ đam mê cá nhân đến{' '}
                <span className="text-green-600">Gác Yoga</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Luận chia sẻ hành trình từ người tập yoga đến HLV, 
                và cách Gác Yoga trở thành ngôi nhà chung của cộng đồng yêu yoga tại Bình Định.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <ZaloCta />
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600">
              <span>✓ 5+ năm kinh nghiệm</span>
              <span>✓ 200+ học viên tin tưởng</span>
              <span>✓ Chứng chỉ RYT 300h</span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-orange-200 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/5] bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-4">📸</div>
                    <p className="text-lg font-medium">Ảnh HLV Luận</p>
                    <p className="text-sm">Đang dạy yoga</p>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">200+</div>
                    <div className="text-xs text-gray-600">Học viên</div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">5+</div>
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