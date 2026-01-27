import { Button } from '@/components/ui/button';
import Link from 'next/link';

const practiceSteps = [
  {
    step: 1,
    icon: "📋",
    title: "Đánh giá",
    description: "Xác định trình độ và mục tiêu cá nhân của bạn"
  },
  {
    step: 2,
    icon: "🗺️",
    title: "Lộ trình",
    description: "Nhận kế hoạch thực hành được cá nhân hóa"
  },
  {
    step: 3,
    icon: "🧘‍♀️",
    title: "Thực hành",
    description: "Theo dõi các bài tập hàng ngày và hàng tuần"
  },
  {
    step: 4,
    icon: "📈",
    title: "Theo dõi",
    description: "Ghi nhận tiến bộ và điều chỉnh kế hoạch"
  },
  {
    step: 5,
    icon: "🎯",
    title: "Đạt mục tiêu",
    description: "Hoàn thành mục tiêu và đặt thử thách mới"
  }
];

export default function PracticePlanSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kế hoạch thực hành{' '}
            <span className="text-green-600">cá nhân hóa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Từ đánh giá đến thành công - hành trình yoga được thiết kế riêng cho bạn
          </p>
        </div>

        {/* Timeline/Infographic */}
        <div className="relative mb-16">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="flex justify-between items-center relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-200 -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-0 w-3/4 h-1 bg-green-500 -translate-y-1/2 z-10"></div>

              {practiceSteps.map((step, index) => (
                <div key={index} className="relative z-20 flex flex-col items-center">
                  {/* Step Circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 ${
                    index < 4 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.icon}
                  </div>
                  
                  {/* Step Content */}
                  <div className="text-center max-w-32">
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {practiceSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0 ${
                  index < 4 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sẵn sàng tạo kế hoạch yoga của riêng bạn?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Chỉ mất 3 phút để hoàn thành bài đánh giá và nhận kế hoạch thực hành được cá nhân hóa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Tạo kế hoạch cá nhân
              </Button>
            </Link>
            <Link href="/sample-plan">
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                Xem kế hoạch mẫu
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="flex justify-center items-center gap-6 mt-8 text-sm text-gray-500">
            <span>✓ Hoàn toàn miễn phí</span>
            <span>✓ Không cần thẻ tín dụng</span>
            <span>✓ Kết quả ngay lập tức</span>
          </div>
        </div>
      </div>
    </section>
  );
}