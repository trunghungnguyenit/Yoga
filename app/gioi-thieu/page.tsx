import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  HeroSection,
  StatsSection,
  StorySection,
  PhilosophySection,
  PhotosSection,
  QuoteSection,
  FinalCtaSection
} from '@/components/gioi-thieu';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <StorySection />
      <PhilosophySection />
      <PhotosSection />
      <QuoteSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}