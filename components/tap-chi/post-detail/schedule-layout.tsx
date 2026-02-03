import { Post } from '@/lib/types/journal';
import { PostLayoutWrapper, PostCtaSection, JournalCta } from '@/components/shared';
import { Clock } from 'lucide-react';
import { JOURNAL_SCHEDULE_DATA } from '@/lib/constants/journal-constants';

interface ScheduleLayoutProps {
  post: Post;
}

export default function ScheduleLayout({ post }: ScheduleLayoutProps) {
  return (
    <PostLayoutWrapper post={post} maxWidth="xl">
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
            <h3 className="font-semibold text-orange-800 mb-2">Lưu ý quan trọng</h3>
            <p className="text-orange-700 text-sm leading-relaxed">
              Lịch có thể thay đổi theo số lượng học viên – vui lòng nhắn Zalo để xác nhận.
            </p>
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="bg-green-600 text-white p-6">
          <h2 className="text-2xl font-bold mb-2">Lịch tập tuần này tại Gác Yoga</h2>
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Phù hợp</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Liên hệ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {JOURNAL_SCHEDULE_DATA.map((item, index) => (
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
                    <JournalCta category="schedule" size="default" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden p-4 space-y-4">
          {JOURNAL_SCHEDULE_DATA.map((item, index) => (
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
                <JournalCta category="schedule" size="default" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <PostCtaSection
        category={post.category}
        title="Không biết chọn lớp nào phù hợp?"
        description="Hãy chat Zalo với Luận để được tư vấn lớp học phù hợp nhất với thể trạng và nhu cầu của bạn."
        variant="gradient"
      />
    </PostLayoutWrapper>
  );
}