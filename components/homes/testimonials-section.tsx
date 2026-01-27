import { Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const testimonials = [
  {
    quote: "Tôi thực sự đang giữ động lực! Đó không phải là những lời khuyên về chứng kỹ mà bạn phải nghe. Tôi cảm thấy mạnh mẽ hơn rất nhiều! Đó là một chương trình toàn diện.",
    name: "Simone",
    location: "từ Đức",
    avatar: "/Logo-GacYoga.jpg",
    rating: 5
  },
  {
    quote: "Đạt được tiến bộ lớn với chứng kỳ của tôi! Hãy theo dõi lịch trình chương trình, và sau đó bước vào giai đoạn tập luyện tiếp theo.",
    name: "Jenesia",
    location: "Thực hành viên yoga",
    avatar: "/Logo-GacYoga.jpg",
    rating: 5
  },
  {
    quote: "Hoàn thành chương trình chứng kỳ vào thứ Sáu! Nó không khó lắm. Tôi đã có thể dành tuần này để trải nghiệm các video luồng và theo dõi giai đoạn tập luyện tiếp theo.",
    name: "Chelsea",
    location: "Người yêu thích yoga",
    avatar: "/Logo-GacYoga.jpg",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cộng đồng{' '}
            <span className="text-green-600">10,000+</span>{' '}
            học viên nói gì
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tham gia cộng đồng những người đã thay đổi cuộc sống qua yoga
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
            <div className="text-gray-600">Học viên</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Chương trình</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9</div>
            <div className="text-gray-600">Đánh giá trung bình</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Hài lòng</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-green-100 to-orange-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community CTA */}
        <div className="text-center bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Tham gia cộng đồng yoga Charlie
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Kết nối với những người cùng chí hướng, chia sẻ hành trình và nhận được sự hỗ trợ từ cộng đồng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/community">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                Tham gia cộng đồng
              </Button>
            </Link>
            <Link href="/testimonials">
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                Xem thêm đánh giá
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}