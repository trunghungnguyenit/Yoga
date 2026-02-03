import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Heart size={16} className="text-orange-300" />
              <span>Cảm ơn bạn đã đọc câu chuyện của tôi</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Sẵn sàng bắt đầu{' '}
                <span className="text-orange-300">hành trình yoga</span>{' '}
                tại Gác Yoga?
              </h2>
              <p className="text-xl text-green-100 leading-relaxed">
                Hãy nhắn Zalo để được tư vấn trực tiếp và tìm lớp học phù hợp nhất với bạn. 
                Tôi luôn sẵn sàng đồng hành cùng bạn.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 text-green-100">
              <div className="flex items-center gap-2">
                <Star size={16} className="text-yellow-300 fill-current" />
                <span className="text-sm">Đánh giá tích cực từ học viên</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-orange-300" />
                <span className="text-sm">200+ học viên tin tưởng</span>
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
                  className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  💬 Nhắn Zalo để được tư vấn trực tiếp
                </Button>
              </a>
            </div>

            {/* Additional Info */}
            <div className="pt-6 space-y-2 text-green-100 text-sm">
              <p>✓ Tư vấn miễn phí về lớp học phù hợp</p>
              <p>✓ Có thể học thử trước khi quyết định</p>
              <p>✓ Lịch học linh hoạt theo nhu cầu</p>
              <p>✓ Không gian thân thiện, ấm cúng</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-3xl transform rotate-3 opacity-20"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/5] bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-4">📸</div>
                    <p className="text-lg font-medium">HLV Luận</p>
                    <p className="text-sm">Chào mừng bạn đến Gác Yoga</p>
                  </div>
                </div>
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Floating Message */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm">
                        "Tôi hy vọng câu chuyện của tôi truyền cảm hứng cho bạn bắt đầu hành trình yoga tại Gác Yoga."
                      </p>
                      <p className="text-green-600 font-semibold text-xs mt-1">
                        — HLV Luận ❤️
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-orange-300">200+</div>
              <div className="text-sm text-green-100">Học viên tin tưởng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-300">4</div>
              <div className="text-sm text-green-100">Loại lớp học</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-300">5+</div>
              <div className="text-sm text-green-100">Năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-300">300h</div>
              <div className="text-sm text-green-100">Chứng chỉ RYT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}