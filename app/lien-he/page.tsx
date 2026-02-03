import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-orange-50 to-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Liên hệ với <span className="text-green-600">Gác Yoga</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Sẵn sàng bắt đầu hành trình yoga của bạn? Hãy liên hệ ngay để được tư vấn!
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Thông tin liên hệ
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn. Hãy chọn cách liên hệ thuận tiện nhất!
                </p>
              </div>

              {/* Zalo - Primary Contact */}
              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Chat Zalo (Khuyến khích)</h3>
                    <p className="text-green-600 font-medium">Phản hồi nhanh nhất</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Cách tốt nhất để liên hệ và được tư vấn trực tiếp về lớp học phù hợp.
                </p>
                <a 
                  href="https://zalo.me/your-zalo-number" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    💬 Chat Zalo ngay
                  </Button>
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200">
                <div className="text-2xl">📞</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Điện thoại</h3>
                  <p className="text-gray-600 mb-3">
                    Gọi trực tiếp để được tư vấn nhanh chóng
                  </p>
                  <a 
                    href="tel:+84123456789" 
                    className="text-green-600 hover:text-green-700 font-medium text-lg"
                  >
                    0123 456 789
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200">
                <div className="text-2xl">📍</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Địa chỉ</h3>
                  <p className="text-gray-600 mb-3">
                    Đến trực tiếp để tham quan không gian và trải nghiệm
                  </p>
                  <p className="text-gray-800 font-medium">
                    Gác Yoga<br />
                    [Địa chỉ cụ thể], Bình Định<br />
                    Việt Nam
                  </p>
                </div>
              </div>

              {/* Teaching Hours */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200">
                <div className="text-2xl">⏰</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Giờ dạy</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Thứ 2 - Thứ 6: 6:00 - 21:00</p>
                    <p>Thứ 7 - Chủ nhật: 7:00 - 19:00</p>
                    <p className="text-green-600 font-medium text-sm mt-2">
                      * Lịch có thể linh hoạt theo nhu cầu học viên
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Vị trí Gác Yoga
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Chúng tôi nằm tại vị trí thuận tiện, dễ dàng di chuyển trong Bình Định.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-lg font-medium">Google Map</p>
                  <p className="text-sm">Gác Yoga, Bình Định</p>
                  <p className="text-xs mt-2 text-gray-400">
                    Bản đồ sẽ được nhúng tại đây
                  </p>
                </div>
              </div>

              {/* Directions */}
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Hướng dẫn đường đi
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Từ trung tâm thành phố: [Hướng dẫn cụ thể]</li>
                  <li>• Gần các địa điểm: [Landmark gần đó]</li>
                  <li>• Có chỗ đậu xe: [Thông tin parking]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Câu hỏi thường gặp
            </h2>
            <p className="text-lg text-gray-600">
              Một số thông tin nhanh trước khi bạn liên hệ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Tôi chưa bao giờ tập yoga, có được không?</h3>
              <p className="text-gray-600 text-sm">
                Hoàn toàn được! Chúng tôi có lớp Yoga Căn Bản dành riêng cho người mới bắt đầu.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Có cần mang dụng cụ gì không?</h3>
              <p className="text-gray-600 text-sm">
                Chúng tôi cung cấp đầy đủ thảm và dụng cụ. Bạn chỉ cần mang theo tinh thần thoải mái.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Có thể học thử trước không?</h3>
              <p className="text-gray-600 text-sm">
                Có! Hãy chat Zalo để được tư vấn về buổi học thử phù hợp.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Lịch học có linh hoạt không?</h3>
              <p className="text-gray-600 text-sm">
                Tùy loại lớp. Lớp cộng đồng có lịch cố định, lớp trị liệu có thể linh hoạt theo nhu cầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Đừng chần chừ nữa! Hãy liên hệ ngay để được tư vấn và bắt đầu hành trình yoga của bạn.
          </p>
          <a 
            href="https://zalo.me/your-zalo-number" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              💬 Chat Zalo – Tư vấn lớp phù hợp
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}