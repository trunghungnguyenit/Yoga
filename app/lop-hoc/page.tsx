import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  HeroSection,
  ClassesGrid,
  FinalCtaSection
} from '@/components/lop-hoc';

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ClassesGrid />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}