import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  AboutHeroSection,
  StatsSection,
  StorySection,
  TimelineSection,
  FinalCtaSection
} from '@/components/about';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <AboutHeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Detailed Story Section */}
      <StorySection />
      
      {/* Timeline Section */}
      <TimelineSection />
      
      {/* Final CTA Section */}
      <FinalCtaSection />

      <Footer />
    </div>
  );
}
