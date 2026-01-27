import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, BookOpen, Users } from 'lucide-react';
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
}

interface ProgramCardProps {
  program: Program;
  onQuickView?: (program: Program) => void;
  isMobile?: boolean;
}

export default function ProgramCard({ program, onQuickView, isMobile = false }: ProgramCardProps) {
  const levelColors = {
    'Người mới': 'bg-green-100 text-green-700',
    'Trung bình': 'bg-yellow-100 text-yellow-700',
    'Nâng cao': 'bg-red-100 text-red-700'
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4">
          <Badge
            className={levelColors[program.level as keyof typeof levelColors] || 'bg-gray-100 text-gray-700'}
          >
            {program.level}
          </Badge>
        </div>

        {(program.isPopular || program.isNew) && (
          <div className="absolute top-4 right-4">
            {program.isPopular && (
              <Badge className="bg-orange-500 text-white mr-2">
                Phổ biến
              </Badge>
            )}
            {program.isNew && (
              <Badge className="bg-blue-500 text-white">
                Mới
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
          {program.title}
        </h3>

        {/* Meta Info */}
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

        {/* Rating */}
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
          <span className="text-sm font-medium text-gray-900">{program.rating}</span>
          <span className="text-sm text-gray-500">({program.reviews} đánh giá)</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-2">
          {program.description}
        </p>

        {/* Price */}
        {program.price && (
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">{program.price}</span>
            {program.originalPrice && (
              <span className="text-lg text-gray-400 line-through">{program.originalPrice}</span>
            )}
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link href={`/programs/${program.slug}`} className="flex-1">
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full"
            >
              Bắt đầu thử miễn phí
            </Button>
          </Link>

        </div>

        {!isMobile && (
          <Button
            variant="outline"
            onClick={() => onQuickView?.(program)}
            className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full"
          >
            Xem chi tiết
          </Button>
        )}

        {/* Mobile Quick View */}
        {isMobile && (
          <Button
            variant="outline"
            onClick={() => onQuickView?.(program)}
            className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full"
          >
            Xem chi tiết
          </Button>
        )}
      </div>
    </div>
  );
}