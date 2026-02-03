import { ReactNode } from 'react';
import { Post } from '@/lib/types/journal';

interface PostLayoutWrapperProps {
  post: Post;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  showBreadcrumb?: boolean;
}

export default function PostLayoutWrapper({ 
  post, 
  children, 
  maxWidth = 'lg',
  showBreadcrumb = false 
}: PostLayoutWrapperProps) {
  const maxWidthClass = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl'
  }[maxWidth];

  return (
    <div className={`${maxWidthClass} mx-auto px-4 py-8`}>
      {showBreadcrumb && (
        <nav className="text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-green-600">Trang chủ</a>
          <span className="mx-2">/</span>
          <a href="/tap-chi" className="hover:text-green-600">Tạp chí Yoga</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{post.title}</span>
        </nav>
      )}
      {children}
    </div>
  );
}