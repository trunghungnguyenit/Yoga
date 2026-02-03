import Link from 'next/link';
import { Post } from '@/lib/types/journal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';

interface ScheduleLayoutProps {
  post: Post;
}

const scheduleData = [
  {
    day: 'Thứ 2',
    time: '6:00 - 7:00',
    class: 'Morning Flow',
    level: 'Cơ bản',
    levelColor: 'bg-green-100 text-green-700'
  },
  {
    day: 'Thứ 3',
    time: '19:00 - 20:00',
    class: 'Vinyasa Flow',
    level: 'Trung bình',
    levelColor: 'bg-orange-100 text-orange-700'
  },
  {
    day: 'Thứ 4',
    time: '6:00 - 7:00',
    class: 'Gentle Yoga',
    level: 'Cơ bản',
    levelColor: 'bg-green-100 text-green-700'
  },
  {
    day: 'Thứ 5',
    time: '19:00 - 20:00',
    class: 'Power Yoga',
    level: 'Nâng cao',
    levelColor: 'bg-red-100 text-red-700'
  },
  {
    day: 'Thứ 6',
    time: '6:00 - 7:00',
    class: 'Flow & Restore',
    level: 'Tất cả',
    levelColor: 'bg-blue-100 text-blue-700'
  },
  {
    day: 'Thứ 7',
    time: '8:00 - 9:30',
    class: 'Weekend Special',
    level: 'Trung bình',
    levelColor: 'bg-orange-100 text-orange-700'
  },
  {
    day: 'Chủ nhật',
    time: '8:00 - 9:00',
    class: 'Restorative Yoga',
    level: 'Cơ bản',
    levelColor: 'bg-green-100 text-green-700'
  }
];

export default function ScheduleLayout({ post }: ScheduleLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {post.excerpt}
        </p>
      </div>

      {/* Alert Box */}
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-sm font-bold">!</span>
          </div>
          <div>
            <h3 className="font-semibold text-orange-800 mb-2">Thông báo quan trọng</h3>
            <p className="text-orange-700 text-sm leading-relaxed">
              Vui lòng đăng ký trước ít nhất 2 giờ để đảm bảo chỗ. Lớp học có thể thay đổi theo điều kiện thời tiết và sức khỏe giảng viên.
            </p>
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="bg-green-600 text-white p-6">
          <h2 className="text-2xl font-bold mb-2">Lịch tập tuần này</h2>
          <p className="text-green-100">Chọn lớp học phù hợp với trình độ và thời gian của bạn</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Thứ</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Giờ</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Lớp học</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Trình độ</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Đăng ký</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {scheduleData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.day}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-1">
                    <Clock size={14} />
                    {item.time}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.class}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.levelColor}`}>
                      {item.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                      Đăng ký
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden p-4 space-y-4">
          {scheduleData.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-900">{item.day}</span>
                  <span className="text-sm text-gray-600 flex items-center gap-1">
                    <Clock size={12} />
                    {item.time}
                  </span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.levelColor}`}>
                  {item.level}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{item.class}</span>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                  Đăng ký
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Không biết chọn lớp nào phù hợp?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Đội ngũ tư vấn của chúng tôi sẽ giúp bạn tìm lớp học phù hợp nhất với trình độ và mục tiêu của bạn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/course">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Đăng ký lớp phù hợp
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
          <Link href="/support">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Tư vấn miễn phí
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}