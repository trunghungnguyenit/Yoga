import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-50 via-orange-50 to-amber-50 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Background pattern or image placeholder */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-green-100 to-orange-100"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Trust Badge */}
          <Badge variant="secondary" className="bg-white/90 text-green-700 px-4 py-2 text-sm font-medium">
            ⭐ Yoga tại nhà - Bình Định
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Luận – HLV Yoga tại{' '}
            <span className="text-green-600">Gác Yoga</span>{' '}
            (Bình Định)
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Yoga cộng đồng – Trị liệu – Nhóm nhỏ
          </p>

          {/* Main CTA */}
          <div className="flex justify-center pt-4">
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

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-600">📍</span>
              <span>Gác Yoga, Bình Định</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">👥</span>
              <span>Lớp nhóm nhỏ</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">🏠</span>
              <span>Yoga tại nhà</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
}