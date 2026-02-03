import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/lib/types/journal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

interface DiaryLayoutProps {
  post: Post;
}

export default function DiaryLayout({ post }: DiaryLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
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

      {/* Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Gallery */}
      {post.gallery && post.gallery.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Hình ảnh từ buổi học</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {post.gallery.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Video */}
      {post.videoUrl && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Video highlights</h3>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
            <iframe
              src={post.videoUrl}
              title="Video highlights"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Bạn cũng muốn trải nghiệm như vậy?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Tham gia buổi học thử miễn phí để cảm nhận sự khác biệt mà yoga mang lại cho cuộc sống của bạn.
        </p>
        <Link href="/course">
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Đăng ký buổi học thử
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}