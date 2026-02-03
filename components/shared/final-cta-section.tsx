import { ReactNode } from 'react';
import { COMMON_STYLES } from '@/lib/constants/yoga-constants';
import ZaloCta from './zalo-cta';

interface FinalCtaSectionProps {
  title: string;
  description: string;
  ctaText?: string;
  variant?: 'green' | 'gray';
  children?: ReactNode;
}

export default function FinalCtaSection({
  title,
  description,
  ctaText,
  variant = 'gray',
  children
}: FinalCtaSectionProps) {
  const sectionClass = variant === 'green' 
    ? 'bg-green-600' 
    : 'bg-gray-50';
  
  const titleClass = variant === 'green' 
    ? 'text-white' 
    : 'text-gray-900';
  
  const descriptionClass = variant === 'green' 
    ? 'text-green-100' 
    : 'text-gray-600';

  const ctaVariant = variant === 'green' ? 'secondary' : 'primary';

  return (
    <section className={`${sectionClass} py-20`}>
      <div className={`${COMMON_STYLES.containers.sectionSmall} text-center`}>
        <h2 className={`text-3xl font-bold ${titleClass} mb-6`}>
          {title}
        </h2>
        <p className={`text-xl ${descriptionClass} mb-8`}>
          {description}
        </p>
        <ZaloCta text={ctaText} variant={ctaVariant} />
        {children}
      </div>
    </section>
  );
}