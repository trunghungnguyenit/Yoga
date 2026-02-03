import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  HeroSection,
  AboutLuanSection,
  ClassTypesSection,
  LocationSection,
  TestimonialsSection
} from '@/components/homes';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutLuanSection />
      <ClassTypesSection />
      <LocationSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
