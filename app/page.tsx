import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  HeroSection,
  AboutCharlieSection,
  FeaturesSection,
  PracticePlanSection,
  TestimonialsSection,
  NewsletterSection
} from '@/components/homes';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutCharlieSection />
      <FeaturesSection />
      <PracticePlanSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
