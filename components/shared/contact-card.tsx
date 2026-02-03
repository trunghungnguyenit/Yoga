import { ReactNode } from 'react';

interface ContactCardProps {
  icon: string;
  title: string;
  description: string;
  children: ReactNode;
  highlighted?: boolean;
}

export default function ContactCard({
  icon,
  title,
  description,
  children,
  highlighted = false
}: ContactCardProps) {
  const cardClass = highlighted
    ? 'bg-green-50 p-6 rounded-2xl border-2 border-green-200'
    : 'flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200';

  if (highlighted) {
    return (
      <div className={cardClass}>
        <div className="flex items-center gap-4 mb-4">
          <div className="text-3xl">{icon}</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-green-600 font-medium">Phản hồi nhanh nhất</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
    );
  }

  return (
    <div className={cardClass}>
      <div className="text-2xl">{icon}</div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        {children}
      </div>
    </div>
  );
}