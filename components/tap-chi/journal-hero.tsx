import { HeroSection } from '@/components/shared';
import { BookOpen } from 'lucide-react';

export default function JournalHero() {
  const title = 'Tạp chí Yoga – Gác Yoga';
  const description = 'Theo dõi những chia sẻ thực tế từ các buổi học tại Gác Yoga, kiến thức yoga cơ bản và thông báo lịch tập mới nhất.';
  const trustSignals = ['Chia sẻ thực tế', 'Từ HLV Luận', 'Cập nhật thường xuyên'];

  return (
    <HeroSection
      badge="Chia sẻ từ Gác Yoga"
      badgeIcon={<BookOpen size={16} />}
      title={title}
      description={description}
      ctaText="💬 Chat Zalo – Đăng ký buổi học thử"
      trustSignals={trustSignals}
      className="bg-gradient-to-br from-green-50 via-orange-50 to-white"
    >
      {/* Subtitle */}
      <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
        Tạp chí lớp học • Lịch tập • Kiến thức • Thông tin lớp tại Gác Yoga
      </p>
    </HeroSection>
  );
}