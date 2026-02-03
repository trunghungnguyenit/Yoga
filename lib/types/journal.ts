export type PostCategory = 'diary' | 'schedule' | 'knowledge' | 'course';

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  gallery?: string[];
  videoUrl?: string;
  category: PostCategory;
  readingTime: number;
  publishedAt: string;
}

export const categoryConfig = {
  diary: {
    label: 'Tạp chí lớp học',
    color: 'bg-green-100 text-green-700',
    bgColor: 'bg-green-50'
  },
  schedule: {
    label: 'Lịch tập',
    color: 'bg-orange-100 text-orange-700',
    bgColor: 'bg-orange-50'
  },
  knowledge: {
    label: 'Kiến thức',
    color: 'bg-blue-100 text-blue-700',
    bgColor: 'bg-blue-50'
  },
  course: {
    label: 'Khóa học',
    color: 'bg-purple-100 text-purple-700',
    bgColor: 'bg-purple-50'
  }
};