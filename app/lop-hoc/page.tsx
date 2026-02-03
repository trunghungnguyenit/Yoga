import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const classes = [
  {
    title: "Yoga Cộng Đồng",
    description: "Lớp học nhóm với không khí vui vẻ, thân thiện. Phù hợp cho mọi lứa tuổi và trình độ.",
    location: "Gác Yoga, Bình Định",
    schedule: "Thứ 2, 4, 6 - 18:00-19:30",
    price: "300.000đ/tháng",
    suitableFor: "Mọi lứa tuổi, người mới bắt đầu",
    ctaText: "Nhắn Zalo giữ chỗ",
    icon: "👥",
    highlights: ["Lịch cố định", "Không khí vui vẻ", "Giá ưu đãi"]
  },
  {
    title: "Yoga Trị Liệu",
    description: "Hỗ trợ điều trị các vấn đề sức khỏe như đau lưng, vai gáy, stress, mất ngủ.",
    location: "Online hoặc tại Gác Yoga",
    schedule: "Linh hoạt theo lịch hẹn",
    price: "500.000đ/buổi hoặc 2.000.000đ/gói 5 buổi",
    suitableFor: "Người có vấn đề sức khỏe cần hỗ trợ",
    ctaText: "Tư vấn liệu trình",
    icon: "🏥",
    highlights: ["1-1 hoặc nhóm nhỏ", "Tư vấn chuyên sâu", "Online/Offline"]
  },
  {
    title: "Yoga Căn Bản - 12 buổi",
    description: "Khóa học hoàn chỉnh dành cho người mới bắt đầu. Từ những tư thế cơ bản đến nâng cao.",
    location: "Gác Yoga, Bình Định",
    schedule: "Tối đa 5 người/lớp",
    price: "1.500.000đ/khóa (12 buổi)",
    suitableFor: "Người mới bắt đầu muốn học bài bản",
    ctaText: "Nhắn Zalo hỏi lịch",
    icon: "🌱",
    highlights: ["Tối đa 5 người", "Học bài bản", "Hướng dẫn chi tiết"]
  },
  {
    title: "Trị Liệu Mạc Cơ",
    description: "Điều trị đau nhức cơ bắp, cải thiện tư thế, phục hồi chức năng vận động.",
    location: "Gác Yoga, Bình Định",
    schedule: "Linh hoạt theo lịch hẹn",
    price: "400.000đ/buổi (Sinh viên: 300.000đ/buổi)",
    suitableFor: "Người đau nhức, tư thế không tốt",
    ctaText: "Chat Zalo",
    icon: "💪",
    highlights: ["Hiệu quả nhanh", "Giảm giá sinh viên", "Chuyên sâu"]
  }
];

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-orange-50 to-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Các lớp học tại <span className="text-green-600">Gác Yoga</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Chọn lớp học phù hợp với nhu cầu và thể trạng của bạn. 
            Mỗi lớp được thiết kế để mang lại hiệu quả tối ưu.
          </p>
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
      </section>

      {/* Classes Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {classes.map((classItem, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{classItem.icon}</div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {classItem.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-2">
                        {classItem.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">📍</span>
                      <div>
                        <span className="font-medium text-gray-900">Địa điểm:</span>
                        <p className="text-gray-600">{classItem.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">⏰</span>
                      <div>
                        <span className="font-medium text-gray-900">Lịch học:</span>
                        <p className="text-gray-600">{classItem.schedule}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">💰</span>
                      <div>
                        <span className="font-medium text-gray-900">Giá:</span>
                        <p className="text-gray-600">{classItem.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">👤</span>
                      <div>
                        <span className="font-medium text-gray-900">Phù hợp:</span>
                        <p className="text-gray-600">{classItem.suitableFor}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {classItem.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a 
                    href="https://zalo.me/your-zalo-number" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full text-lg py-3">
                      💬 {classItem.ctaText}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chưa chắc lớp nào phù hợp?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Hãy chat với Luận để được tư vấn lớp học phù hợp nhất với nhu cầu và thể trạng của bạn.
          </p>
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
      </section>

      <Footer />
    </div>
  );
}