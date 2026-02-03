'use client';

import Link from 'next/link';
import { Post } from '@/lib/types/journal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Share2, Facebook } from 'lucide-react';

interface KnowledgeLayoutProps {
  post: Post;
}

export default function KnowledgeLayout({ post }: KnowledgeLayoutProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${post.title} - ${post.excerpt}`;

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleZaloShare = () => {
    const url = `https://zalo.me/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* SEO Optimized Header */}
      <header className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        
        {/* Intro */}
        <div className="bg-green-50 rounded-2xl p-6 mb-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
          <span>📅 {new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
          <span>⏱ {post.readingTime} phút đọc</span>
          <span>👁 1,234 lượt xem</span>
        </div>
      </header>

      {/* Content Sections */}
      <article className="prose prose-lg max-w-none mb-8">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        
        {/* Additional structured content for knowledge posts */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lợi ích chính</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Cải thiện sự linh hoạt và sức mạnh cơ thể</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Giảm căng thẳng và lo âu hiệu quả</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Tăng cường khả năng tập trung và chánh niệm</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Cải thiện chất lượng giấc ngủ</span>
            </li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lưu ý quan trọng</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-yellow-800">
              <strong>Lưu ý:</strong> Luôn lắng nghe cơ thể và không ép buộc bản thân vào các tư thế quá khó. 
              Nếu có vấn đề sức khỏe, hãy tham khảo ý kiến bác sĩ trước khi tập luyện.
            </p>
          </div>
        </section>
      </article>

      {/* Beginner Suggestion Box */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 mb-8 border border-blue-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🌱</span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Bạn mới bắt đầu?
            </h3>
            <p className="text-gray-700 mb-4">
              Đừng lo lắng! Chúng tôi có lớp học căn bản được thiết kế đặc biệt cho người mới bắt đầu. 
              Bạn sẽ được hướng dẫn từng bước một cách an toàn và hiệu quả.
            </p>
            <Link href="/course">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Đăng ký lớp căn bản
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="border-t border-gray-200 pt-8 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Chia sẻ bài viết</h3>
        <div className="flex gap-4">
          <button
            onClick={handleFacebookShare}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
          >
            <Facebook size={16} />
            Facebook
          </button>
          <button
            onClick={handleZaloShare}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            <Share2 size={16} />
            Zalo
          </button>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Bài viết liên quan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/yoga-journal/loi-ich-tho-dung-cach" className="group">
            <div className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                Lợi ích của việc thở đúng cách trong yoga
              </h4>
              <p className="text-sm text-gray-600">
                Khám phá tầm quan trọng của hơi thở trong yoga...
              </p>
            </div>
          </Link>
          <Link href="/yoga-journal/buoi-hoc-dau-tien-cua-toi" className="group">
            <div className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                Buổi học đầu tiên của tôi - Cảm xúc và trải nghiệm
              </h4>
              <p className="text-sm text-gray-600">
                Chia sẻ những cảm xúc và trải nghiệm đầu tiên...
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}