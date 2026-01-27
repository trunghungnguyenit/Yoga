'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  HeroSection,
  VideoSection,
  InfoHighlightSection,
  PricingSection,
  RoadmapSection,
  WhatsIncludedSection,
  LearnerTypeSection,
  GroupCallsSection,
  CommunitySection,
  TestimonialsSection,
  FAQSection,
  FinalCTASection
} from '@/components/courses';

export default function CoursePage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedLearnerType, setSelectedLearnerType] = useState<string | null>(null);

  const handleToggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleSelectLearnerType = (type: string) => {
    setSelectedLearnerType(type);
  };

  return (
    <div className="bg-background">
      <Header />
      
      {/* Mobile-first order: Hero → Pricing → Roadmap → Content → Testimonials → FAQ */}
      <HeroSection />
      <VideoSection />
      <InfoHighlightSection />
      
      {/* Pricing moved up for better conversion */}
      <PricingSection />
      
      {/* Roadmap after pricing to show value */}
      <RoadmapSection />
      
      {/* What's included to reinforce value */}
      <WhatsIncludedSection />
      
      {/* Learner type selection */}
      <LearnerTypeSection 
        selectedLearnerType={selectedLearnerType}
        onSelectLearnerType={handleSelectLearnerType}
      />
      
      {/* Schedule and community */}
      <GroupCallsSection />
      <CommunitySection />
      
      {/* Social proof */}
      <TestimonialsSection />
      
      {/* FAQ near the end */}
      <FAQSection 
        expandedFAQ={expandedFAQ}
        onToggleFAQ={handleToggleFAQ}
      />
      
      {/* Final CTA */}
      <FinalCTASection />
      
      <Footer />
    </div>
  );
}
