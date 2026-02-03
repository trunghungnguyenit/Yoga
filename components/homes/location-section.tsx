import { Button } from '@/components/ui/button';

export default function LocationSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Đến với Gác Yoga
          </h2>
          <p className="text-xl text-gray-600">
            Không gian yoga ấm cúng tại Bình Định
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-lg font-medium">Google Map</p>
                <p className="text-sm">Gác Yoga, Bình Định</p>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Địa chỉ</h3>
                  <p className="text-gray-600">
                    Gác Yoga<br />
                    [Địa chỉ cụ thể], Bình Định<br />
                    Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Liên hệ</h3>
                  <p className="text-gray-600">
                    Điện thoại: <a href="tel:+84123456789" className="text-green-600 hover:underline">0123 456 789</a><br />
                    Zalo: <a href="https://zalo.me/your-zalo-number" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Chat ngay</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">⏰</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Giờ dạy</h3>
                  <p className="text-gray-600">
                    Thứ 2 - Thứ 6: 6:00 - 21:00<br />
                    Thứ 7 - Chủ nhật: 7:00 - 19:00<br />
                    <span className="text-sm text-green-600">Linh hoạt theo lịch hẹn</span>
                  </p>
                </div>
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
                  💬 Chat Zalo – Tư vấn lớp phù hợp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}