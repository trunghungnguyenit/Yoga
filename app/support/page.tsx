import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  SupportHeroSection,
  QuickAccessCards,
  FeaturedArticles,
  CategoryList,
  FaqSection,
  TicketForm,
  ChatWidget
} from '@/components/supports';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Search */}
      <SupportHeroSection />
      
      {/* Quick Access Cards */}
      <QuickAccessCards />
      
      {/* Featured Articles */}
      <FeaturedArticles />
      
      {/* Category List */}
      <CategoryList />
      
      {/* FAQ Section */}
      <FaqSection />
      
      {/* Ticket Form */}
      <TicketForm />
      
      {/* Chat Widget */}
      <ChatWidget />

      <Footer />
    </div>
  );
}
