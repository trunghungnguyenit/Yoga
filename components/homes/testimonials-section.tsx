import { Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "Tôi đã tập yoga với thầy Luận được 6 tháng. Cơn đau lưng mãn tính của tôi đã giảm đáng kể. Thầy rất tận tâm và chỉ dạy rất kỹ.",
    name: "Chị Hương",
    location: "Quy Nhon, Bình Định",
    avatar: "/Logo-GacYoga.jpg",
    rating: 5
  },
  {
    quote: "Không gian Gác Yoga rất ấm cúng và thân thiện. Lớp yoga cộng đồng giúp tôi có thêm nhiều bạn bè và tinh thần thoải mái hơn rất nhiều.",
    name: "Anh Minh",
    location: "Bình Định",
    avatar: "/Logo-GacYoga.jpg",
    rating: 5
  },
  {
    quote: "Lần đầu tập yoga, tôi rất lo lắng. Nhưng thầy Luận hướng dẫn rất kiên nhẫn. Giờ tôi đã tự tin hơn và cơ thể dẻo dai hơn nhiều.",
    name: "Em Linh",
    location: "Sinh viên, Bình Định",
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
            Học viên nói gì về{' '}
            <span className="text-green-600">Gác Yoga</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những chia sẻ thật từ học viên đã và đang tập tại Gác Yoga
          </p>
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

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bạn cũng muốn có trải nghiệm tương tự?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Hãy chat Zalo để được tư vấn lớp học phù hợp và bắt đầu hành trình yoga của bạn tại Gác Yoga
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