import { HeroSection } from '@/components/shared';

export default function ClassesHeroSection() {
  const title = (
    <>
      Các lớp học tại <span className="text-green-600">Gác Yoga</span>
    </>
  );

  return (
    <HeroSection
      title={title}
      description="Chọn lớp học phù hợp với nhu cầu và thể trạng của bạn. Mỗi lớp được thiết kế để mang lại hiệu quả tối ưu."
    />
  );
}