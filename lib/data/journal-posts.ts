import { Post } from '@/lib/types/journal';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Buổi học đầu tiên của tôi - Cảm xúc và trải nghiệm',
    slug: 'buoi-hoc-dau-tien-cua-toi',
    excerpt: 'Chia sẻ những cảm xúc và trải nghiệm đầu tiên khi bước vào thế giới yoga cùng Charlie.',
    content: '<p>Hôm nay là buổi học đầu tiên của tôi...</p>',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'diary',
    readingTime: 5,
    publishedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Lịch tập tuần này - Chuẩn bị cho hành trình mới',
    slug: 'lich-tap-tuan-nay',
    excerpt: 'Lịch tập chi tiết cho tuần này với các lớp học phù hợp cho mọi trình độ.',
    content: '<p>Lịch tập tuần này...</p>',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    category: 'schedule',
    readingTime: 3,
    publishedAt: '2024-01-14'
  },
  {
    id: '3',
    title: '5 tư thế yoga cơ bản cho người mới bắt đầu',
    slug: '5-tu-the-yoga-co-ban',
    excerpt: 'Hướng dẫn chi tiết 5 tư thế yoga cơ bản giúp bạn bắt đầu hành trình yoga một cách an toàn.',
    content: '<h2>1. Tư thế núi (Mountain Pose)</h2><p>Đây là tư thế cơ bản nhất...</p>',
    thumbnail: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop',
    category: 'knowledge',
    readingTime: 8,
    publishedAt: '2024-01-13'
  },
  {
    id: '4',
    title: 'Khóa học Yoga cho người mới bắt đầu - 30 ngày',
    slug: 'khoa-hoc-yoga-30-ngay',
    excerpt: 'Khóa học toàn diện 30 ngày giúp bạn xây dựng nền tảng yoga vững chắc từ những bước đầu tiên.',
    content: '<p>Khóa học 30 ngày...</p>',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    category: 'course',
    readingTime: 10,
    publishedAt: '2024-01-12'
  },
  {
    id: '5',
    title: 'Nhật ký tuần 2 - Những thay đổi tích cực',
    slug: 'nhat-ky-tuan-2',
    excerpt: 'Sau 2 tuần tập luyện, tôi đã cảm nhận được những thay đổi tích cực trong cơ thể và tinh thần.',
    content: '<p>Tuần thứ 2 của hành trình...</p>',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop'
    ],
    category: 'diary',
    readingTime: 6,
    publishedAt: '2024-01-11'
  },
  {
    id: '6',
    title: 'Lợi ích của việc thở đúng cách trong yoga',
    slug: 'loi-ich-tho-dung-cach',
    excerpt: 'Khám phá tầm quan trọng của hơi thở trong yoga và cách thực hành các kỹ thuật thở cơ bản.',
    content: '<h2>Tại sao hơi thở quan trọng?</h2><p>Hơi thở là linh hồn của yoga...</p>',
    thumbnail: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop',
    category: 'knowledge',
    readingTime: 7,
    publishedAt: '2024-01-10'
  }
];