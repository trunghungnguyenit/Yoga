import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AboutLuanSection() {
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
                  alt="HLV Luận - Giáo viên Yoga"
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
                <span className="text-green-600">Luận</span>
              </h2>
              <p className="text-xl text-green-700 font-semibold">
                HLV Yoga tại Gác Yoga, Bình Định. Đồng hành cùng bạn trên hành trình khám phá yoga.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Tôi tin rằng yoga không chỉ là những tư thế đẹp mắt, mà là cách để chúng ta kết nối với chính mình, 
                tìm thấy sự cân bằng trong cuộc sống bận rộn.
              </p>
              <p className="text-lg">
                Tại Gác Yoga, tôi tạo ra một không gian ấm cúng, thân thiện để mọi người có thể thực hành yoga 
                một cách thoải mái và hiệu quả nhất.
              </p>
              <p className="text-lg">
                Dù bạn là người mới bắt đầu hay đã có kinh nghiệm, tôi sẽ hướng dẫn bạn tìm được lớp học 
                phù hợp với nhu cầu và thể trạng của mình.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-6">
              <a 
                href="https://zalo.me/your-zalo-number" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  💬 Chat Zalo – Tư vấn lớp phù hợp
                </Button>
              </a>

              {/* Quick info */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">📍</span>
                  <span>Gác Yoga, Bình Định</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">👥</span>
                  <span>Lớp nhóm nhỏ</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">🏠</span>
                  <span>Yoga tại nhà</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}