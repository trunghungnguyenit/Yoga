import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ProgramHeroProps {
  totalPrograms: number;
  onSearch: (query: string) => void;
}

export default function ProgramHero({ totalPrograms, onSearch }: ProgramHeroProps) {
  return (
    <section className="bg-gradient-to-r from-green-50 to-orange-50 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Chương trình{' '}
                <span className="text-green-600">Yoga</span>
              </h1>
              <p className="text-xl text-gray-600">
                Khám phá {totalPrograms}+ chương trình yoga được thiết kế cho mọi trình độ. 
                Từ người mới bắt đầu đến chuyên gia.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 rounded-full"
              >
                Khám phá tất cả
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 rounded-full"
              >
                Bắt đầu miễn phí
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">{totalPrograms}+</span>
                <span>Chương trình</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">10,000+</span>
                <span>Học viên</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">4.9</span>
                <span>Đánh giá trung bình</span>
              </div>
            </div>
          </div>

          {/* Search Box */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Tìm chương trình phù hợp</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Tìm kiếm chương trình..."
                  className="pl-10 h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
                  onChange={(e) => onSearch(e.target.value)}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Ví dụ: "yoga cho người mới", "chứng kỳ", "linh hoạt"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}