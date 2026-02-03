import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

export default function JournalHero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-orange-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-green-700 border border-green-200 mb-6">
          <BookOpen size={16} />
          <span>Chia sẻ từ Gác Yoga</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Nhật ký{' '}
          <span className="text-green-600">Yoga</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
          Nhật ký lớp học – Kiến thức yoga – Thông báo lịch tập
        </p>
        
        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Theo dõi những chia sẻ thực tế từ các buổi học tại Gác Yoga, 
          kiến thức yoga cơ bản và thông báo lịch tập mới nhất.
        </p>

        {/* CTA */}
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

        {/* Trust Signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-600">
          <span>✓ Chia sẻ thực tế</span>
          <span>✓ Từ HLV Luận</span>
          <span>✓ Cập nhật thường xuyên</span>
        </div>
      </div>
    </section>
  );
}