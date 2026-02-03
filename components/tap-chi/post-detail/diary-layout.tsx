import Image from 'next/image';
import { Post } from '@/lib/types/journal';
import { PostLayoutWrapper, PostContentSection, PostCtaSection } from '@/components/shared';

interface DiaryLayoutProps {
  post: Post;
}

export default function DiaryLayout({ post }: DiaryLayoutProps) {
  return (
    <PostLayoutWrapper post={post} maxWidth="md">
      {/* Hero Image */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
        {post.title}
      </h1>

      {/* Quote */}
      <blockquote className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl mb-8">
        <p className="text-lg italic text-gray-800 leading-relaxed">
          "Buổi học hôm nay thật tuyệt vời! Tôi cảm thấy cơ thể mình linh hoạt hơn và tâm trí thư thái hơn rất nhiều."
        </p>
        <footer className="mt-3 text-green-600 font-semibold">
          — Học viên chia sẻ
        </footer>
      </blockquote>

      {/* Content, Gallery, Video */}
      <PostContentSection post={post} />

      {/* CTA Section */}
      <PostCtaSection
        category={post.category}
        title="Bạn cũng muốn trải nghiệm như vậy?"
        description="Tham gia buổi học thử miễn phí để cảm nhận sự khác biệt mà yoga mang lại cho cuộc sống của bạn."
      />
    </PostLayoutWrapper>
  );
}