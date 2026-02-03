import { ZaloCta } from '@/components/shared';
import { JOURNAL_CTA_TEXTS } from '@/lib/constants/journal-constants';
import { PostCategory } from '@/lib/types/journal';

interface JournalCtaProps {
  category: PostCategory;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

export default function JournalCta({ 
  category,
  variant = 'primary',
  size = 'lg',
  className = '',
  fullWidth = false
}: JournalCtaProps) {
  const ctaText = JOURNAL_CTA_TEXTS[category];

  return (
    <ZaloCta
      text={ctaText}
      variant={variant}
      size={size}
      className={className}
      fullWidth={fullWidth}
    />
  );
}