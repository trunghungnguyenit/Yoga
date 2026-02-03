import { ReactNode } from 'react';
import { COMMON_STYLES } from '@/lib/constants/yoga-constants';
import ZaloCta from './zalo-cta';

interface HeroSectionProps {
  title: string | ReactNode;
  description: string;
  badge?: string;
  badgeIcon?: string;
  showCta?: boolean;
  ctaText?: string;
  trustSignals?: string[];
  className?: string;
  children?: ReactNode;
}

export default function HeroSection({
  title,
  description,
  badge,
  badgeIcon = '✨',
  showCta = true,
  ctaText,
  trustSignals,
  className = '',
  children
}: HeroSectionProps) {
  return (
    <section className={`${COMMON_STYLES.gradients.heroAlt} py-20 ${className}`}>
      <div className={`${COMMON_STYLES.containers.section} text-center`}>
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-green-700 border border-green-200 mb-8">
            <span>{badgeIcon}</span>
            <span>{badge}</span>
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          {description}
        </p>
        
        {showCta && (
          <div className="mb-8">
            <ZaloCta text={ctaText} />
          </div>
        )}
        
        {trustSignals && (
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            {trustSignals.map((signal, index) => (
              <span key={index}>✓ {signal}</span>
            ))}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
}