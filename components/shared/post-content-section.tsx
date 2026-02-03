import Image from 'next/image';
import { Post } from '@/lib/types/journal';

interface PostContentSectionProps {
  post: Post;
  showGallery?: boolean;
  showVideo?: boolean;
}

export default function PostContentSection({ 
  post, 
  showGallery = true, 
  showVideo = true 
}: PostContentSectionProps) {
  return (
    <>
      {/* Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Gallery */}
      {showGallery && post.gallery && post.gallery.length > 0 && (
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
      {showVideo && post.videoUrl && (
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
    </>
  );
}