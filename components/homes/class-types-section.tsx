import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const classTypes = [
  {
    title: "Yoga Cộng Đồng",
    description: "Lớp học nhóm với không khí vui vẻ, thân thiện",
    features: ["Lịch cố định", "Giá theo tháng", "Phù hợp mọi lứa tuổi"],
    icon: "👥"
  },
  {
    title: "Yoga Trị Liệu",
    description: "Hỗ trợ điều trị các vấn đề sức khỏe cụ thể",
    features: ["1-1 hoặc nhóm nhỏ", "Online/Offline", "Tư vấn chuyên sâu"],
    icon: "🏥"
  },
  {
    title: "Yoga Căn Bản",
    description: "Khóa 12 buổi dành cho người mới bắt đầu",
    features: ["Tối đa 5 người", "Từ cơ bản đến nâng cao", "Hướng dẫn chi tiết"],
    icon: "🌱"
  },
  {
    title: "Trị Liệu Mạc Cơ",
    description: "Điều trị đau nhức, cải thiện tư thế",
    features: ["Giá theo buổi", "Giảm giá sinh viên", "Hiệu quả nhanh"],
    icon: "💪"
  }
];

export default function ClassTypesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Các loại lớp học tại Gác Yoga
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chọn lớp học phù hợp với nhu cầu và thể trạng của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classTypes.map((classType, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{classType.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {classType.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {classType.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {classType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://zalo.me/your-zalo-number" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                    💬 Chat Zalo
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Không chắc lớp nào phù hợp với bạn?
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
      </div>
    </section>
  );
}