import { HeroSection } from '@/components/shared';

export default function ContactHeroSection() {
  const title = (
    <>
      Liên hệ với <span className="text-green-600">Gác Yoga</span>
    </>
  );

  return (
    <HeroSection
      title={title}
      description="Sẵn sàng bắt đầu hành trình yoga của bạn? Hãy liên hệ ngay để được tư vấn!"
      showCta={false}
    />
  );
}