import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

const featuredArticles = [
  {
    id: 1,
    title: 'Cách đăng ký và bắt đầu khóa học đầu tiên',
    description: 'Hướng dẫn chi tiết từng bước để bắt đầu hành trình yoga của bạn',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
    readTime: '5 phút',
    tag: 'Mới',
    tagColor: 'bg-green-100 text-green-700',
    href: '/support/getting-started'
  },
  {
    id: 2,
    title: 'Giải quyết sự cố video không phát được',
    description: 'Khắc phục các vấn đề phổ biến khi xem video bài học',
    thumbnail: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=250&fit=crop',
    readTime: '3 phút',
    tag: 'Phổ biến',
    tagColor: 'bg-orange-100 text-orange-700',
    href: '/support/video-issues'
  },
  {
    id: 3,
    title: 'Quản lý thanh toán và đăng ký',
    description: 'Cách thay đổi phương thức thanh toán và quản lý đăng ký',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    readTime: '4 phút',
    tag: 'Cập nhật',
    tagColor: 'bg-blue-100 text-blue-700',
    href: '/support/billing'
  },
  {
    id: 4,
    title: 'Tải xuống chứng chỉ hoàn thành',
    description: 'Hướng dẫn tải và in chứng chỉ sau khi hoàn thành khóa học',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
    readTime: '2 phút',
    tag: 'Hướng dẫn',
    tagColor: 'bg-purple-100 text-purple-700',
    href: '/support/certificates'
  },
  {
    id: 5,
    title: 'Sử dụng ứng dụng di động hiệu quả',
    description: 'Mẹo và thủ thuật để tận dụng tối đa ứng dụng yoga trên điện thoại',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
    readTime: '6 phút',
    tag: 'Mẹo hay',
    tagColor: 'bg-yellow-100 text-yellow-700',
    href: '/support/mobile-app'
  }
];

export default function FeaturedArticles() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bài viết nổi bật
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những hướng dẫn phổ biến và hữu ích nhất từ cộng đồng
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group block"
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${article.tagColor}`}>
                      {article.tag}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  
                  {/* Read More */}
                  <div className="flex items-center text-green-600 group-hover:text-green-700 font-medium text-sm">
                    <span>Đọc thêm</span>
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Additional Articles List */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Hướng dẫn khác
          </h3>
          <div className="space-y-4">
            {featuredArticles.slice(3).map((article) => (
              <Link
                key={article.id}
                href={article.href}
                className="group flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300"
              >
                {/* Small Thumbnail */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${article.tagColor}`}>
                      {article.tag}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock size={10} />
                      {article.readTime}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-1">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {article.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight size={16} className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-8">
          <Link href="/support/articles">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Xem tất cả bài viết
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}