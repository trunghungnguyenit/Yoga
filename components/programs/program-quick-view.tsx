'use client';

import { X, Star, Clock, BookOpen, Users, Play } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  level: string;
  duration: string;
  lessons: number;
  rating: number;
  reviews: number;
  students: number;
  isPopular?: boolean;
  isNew?: boolean;
  price?: string;
  originalPrice?: string;
  syllabus?: string[];
  testimonials?: {
    name: string;
    text: string;
    rating: number;
  }[];
}

interface ProgramQuickViewProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

export default function ProgramQuickView({ program, isOpen, onClose, isMobile = false }: ProgramQuickViewProps) {
  if (!program || !isOpen) return null;

  const levelColors = {
    'Người mới': 'bg-green-100 text-green-700',
    'Trung bình': 'bg-yellow-100 text-yellow-700',
    'Nâng cao': 'bg-red-100 text-red-700'
  };

  const defaultSyllabus = [
    'Khởi động và chuẩn bị cơ thể',
    'Các tư thế cơ bản và căn chỉnh',
    'Kỹ thuật thở và thiền',
    'Chuỗi động tác liên kết',
    'Thư giãn và phục hồi'
  ];

  const defaultTestimonials = [
    {
      name: 'Mai Anh',
      text: 'Chương trình rất chi tiết và dễ theo dõi. Tôi đã cải thiện được rất nhiều!',
      rating: 5
    },
    {
      name: 'Hoàng Nam',
      text: 'Charlie giải thích rất rõ ràng, phù hợp cho người mới bắt đầu như tôi.',
      rating: 5
    }
  ];

  if (isMobile) {
    // Mobile Bottom Sheet
    return (
      <div className="fixed inset-0 z-50 bg-black/50">
        <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Chi tiết chương trình</h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Hero */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                  <Play size={20} className="mr-2" />
                  Xem trailer
                </Button>
              </div>
            </div>

            {/* Title and Meta */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <Badge className={levelColors[program.level as keyof typeof levelColors]}>
                    {program.level}
                  </Badge>
                  <h2 className="text-2xl font-bold text-gray-900">{program.title}</h2>
                </div>
                {program.price && (
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{program.price}</div>
                    {program.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">{program.originalPrice}</div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen size={16} />
                  <span>{program.lessons} bài</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{program.students.toLocaleString('vi-VN')}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(program.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="font-medium">{program.rating}</span>
                <span className="text-gray-500">({program.reviews} đánh giá)</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-semibold mb-2">Mô tả</h4>
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
            </div>

            {/* Syllabus */}
            <div>
              <h4 className="font-semibold mb-3">Nội dung chương trình</h4>
              <div className="space-y-2">
                {(program.syllabus || defaultSyllabus).map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h4 className="font-semibold mb-3">Đánh giá từ học viên</h4>
              <div className="space-y-4">
                {(program.testimonials || defaultTestimonials).map((testimonial, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-medium text-sm">{testimonial.name}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky CTA */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold">
              Bắt đầu thử miễn phí
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Modal
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <h3 className="text-xl font-semibold">Chi tiết chương trình</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Hero */}
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                    <Play size={20} className="mr-2" />
                    Xem trailer
                  </Button>
                </div>
              </div>

              {/* Syllabus */}
              <div>
                <h4 className="font-semibold mb-3">Nội dung chương trình</h4>
                <div className="space-y-2">
                  {(program.syllabus || defaultSyllabus).map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Title and Meta */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge className={levelColors[program.level as keyof typeof levelColors]}>
                      {program.level}
                    </Badge>
                    <h2 className="text-2xl font-bold text-gray-900">{program.title}</h2>
                  </div>
                  {program.price && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{program.price}</div>
                      {program.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">{program.originalPrice}</div>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={16} />
                    <span>{program.lessons} bài</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{program.students.toLocaleString('vi-VN')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(program.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{program.rating}</span>
                  <span className="text-gray-500">({program.reviews} đánh giá)</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-semibold mb-2">Mô tả</h4>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>

              {/* Testimonials */}
              <div>
                <h4 className="font-semibold mb-3">Đánh giá từ học viên</h4>
                <div className="space-y-4">
                  {(program.testimonials || defaultTestimonials).map((testimonial, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium text-sm">{testimonial.name}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{testimonial.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold">
                  Bắt đầu thử miễn phí
                </Button>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Thêm vào danh sách yêu thích
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}