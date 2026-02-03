import { Button } from '@/components/ui/button';
import { ZALO_URL, COMMON_STYLES } from '@/lib/constants/yoga-constants';

interface ZaloCtaProps {
  text?: string;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

export default function ZaloCta({ 
  text = '💬 Chat Zalo – Tư vấn lớp phù hợp',
  variant = 'primary',
  size = 'lg',
  className = '',
  fullWidth = false
}: ZaloCtaProps) {
  const buttonClass = variant === 'primary' 
    ? COMMON_STYLES.buttons.primary 
    : COMMON_STYLES.buttons.secondary;

  return (
    <a 
      href={ZALO_URL} 
      target="_blank" 
      rel="noopener noreferrer"
      className={fullWidth ? 'block' : ''}
    >
      <Button 
        size={size}
        className={`${buttonClass} ${fullWidth ? 'w-full' : ''} ${className}`}
      >
        {text}
      </Button>
    </a>
  );
}