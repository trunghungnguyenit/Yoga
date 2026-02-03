import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Post, categoryConfig } from '@/lib/types/journal';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const categoryInfo = categoryConfig[post.category];
  
  // Determine CTA text based on category
  const getCtaText = () => {
    if (post.category === 'course') {
      return 'Tư vấn lớp phù hợp →';
    }
    return 'Xem chi tiết →';
  };
  
  return (
    <Link href={`/tap-chi/${post.slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full">
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryInfo.color}`}>
              {categoryInfo.label}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-full">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
            {post.excerpt}
          </p>
          
          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readingTime} phút
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
              </span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex items-center text-green-600 group-hover:text-green-700 font-medium text-sm">
            <span>{getCtaText()}</span>
            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}