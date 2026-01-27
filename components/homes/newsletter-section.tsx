import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function NewsletterSection() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-green-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-100 p-4 rounded-full">
              <Heart className="text-green-600 fill-green-600" size={40} />
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-6 mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Nhận bài học{' '}
              <span className="text-green-600">miễn phí</span>{' '}
              đầu tiên
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Một liều hàng tuần về sự rõ ràng, can đảm, và cảm hứng lắng đọng để giúp bạn giữ sự nhất quán và tiến về phía trước - trên và ngoài thảm.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Tên của bạn
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nhập tên của bạn"
                  className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập email của bạn"
                  required
                  className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
                />
              </div>
            </div>

            {/* Optional Goal Selection */}
            <div className="space-y-2">
              <label htmlFor="goal" className="text-sm font-medium text-gray-700">
                Mục tiêu của bạn (tùy chọn)
              </label>
              <select 
                id="goal"
                className="w-full h-12 border border-gray-200 rounded-xl px-4 focus:border-green-500 focus:ring-green-500 bg-white"
              >
                <option value="">Chọn mục tiêu</option>
                <option value="flexibility">Tăng tính linh hoạt</option>
                <option value="strength">Xây dựng sức mạnh</option>
                <option value="stress">Giảm stress</option>
                <option value="beginner">Học yoga từ đầu</option>
                <option value="advanced">Nâng cao kỹ năng</option>
              </select>
            </div>

            {/* CTA Button */}
            <Button 
              type="submit"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Đăng ký nhận bài học miễn phí
            </Button>
          </form>

          {/* Security Note */}
          <div className="text-center mt-6 space-y-2">
            <p className="text-sm text-gray-500">
              🔒 Không spam. Hủy bất kỳ lúc nào. Thông tin của bạn được bảo mật 100%.
            </p>
            <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
              <span>✓ Miễn phí hoàn toàn</span>
              <span>✓ Không chia sẻ email</span>
              <span>✓ Hủy dễ dàng</span>
            </div>
          </div>

          {/* Bonus Info */}
          <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-100">
            <div className="text-center">
              <h3 className="font-semibold text-green-800 mb-2">
                🎁 Bonus khi đăng ký ngay hôm nay:
              </h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Video hướng dẫn yoga cơ bản 15 phút</li>
                <li>• Bài tập thở để giảm stress ngay lập tức</li>
                <li>• Checklist tạo không gian yoga tại nhà</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}