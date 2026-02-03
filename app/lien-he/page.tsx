import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  HeroSection,
  ContactInfoSection,
  FaqSection,
  FinalCtaSection
} from '@/components/lien-he';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ContactInfoSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}