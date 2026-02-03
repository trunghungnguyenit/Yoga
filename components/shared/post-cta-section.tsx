import { ReactNode } from 'react';
import { PostCategory } from '@/lib/types/journal';
import JournalCta from './journal-cta';

interface PostCtaSectionProps {
  category: PostCategory;
  title: string;
  description: string;
  variant?: 'gradient' | 'solid' | 'outline';
  children?: ReactNode;
}

export default function PostCtaSection({ 
  category, 
  title, 
  description, 
  variant = 'gradient',
  children 
}: PostCtaSectionProps) {
  const sectionClass = {
    gradient: 'bg-gradient-to-r from-green-50 to-orange-50',
    solid: 'bg-green-600',
    outline: 'bg-white border-2 border-green-200'
  }[variant];

  const titleClass = variant === 'solid' ? 'text-white' : 'text-gray-900';
  const descriptionClass = variant === 'solid' ? 'text-green-100' : 'text-gray-600';
  const ctaVariant = variant === 'solid' ? 'secondary' : 'primary';

  return (
    <div className={`${sectionClass} rounded-2xl p-8 text-center`}>
      <h3 className={`text-2xl font-bold ${titleClass} mb-4`}>
        {title}
      </h3>
      <p className={`${descriptionClass} mb-6 max-w-2xl mx-auto`}>
        {description}
      </p>
      <JournalCta category={category} variant={ctaVariant} />
      {children}
    </div>
  );
}