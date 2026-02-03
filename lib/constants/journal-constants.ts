// Shared constants for journal/tap-chi components

export const JOURNAL_CTA_TEXTS = {
  diary: '💬 Nhắn Zalo – Đăng ký buổi học thử tại Gác Yoga',
  schedule: '💬 Chat Zalo – Giữ chỗ lớp phù hợp',
  knowledge: '💬 Nhắn Zalo để được Luận tư vấn lớp căn bản phù hợp',
  course: '💬 Chat Zalo – Tư vấn lớp phù hợp với bạn'
} as const;

export const JOURNAL_STICKY_CTA = {
  titles: {
    diary: 'Bạn cũng muốn trải nghiệm?',
    schedule: 'Muốn tham gia lớp này?',
    knowledge: 'Bạn mới bắt đầu?',
    course: 'Quan tâm đến lớp này?'
  },
  descriptions: {
    diary: 'Đăng ký buổi học thử để trải nghiệm',
    schedule: 'Chat Zalo để giữ chỗ lớp phù hợp',
    knowledge: 'Nhắn Zalo cho Luận để được tư vấn',
    course: 'Nhắn Zalo cho Luận để được tư vấn'
  }
} as const;

export const JOURNAL_BENEFITS = [
  'Nhóm nhỏ tối đa 5 người',
  'HLV chỉnh sửa trực tiếp',
  'Phù hợp từng thể trạng',
  'Học tại Gác Yoga hoặc online qua Zoom',
  'Lịch học linh hoạt theo nhu cầu',
  'Tư vấn miễn phí trước khi bắt đầu'
];

export const JOURNAL_SCHEDULE_DATA = [
  {
    day: 'Thứ 2',
    time: '6:00 - 7:00',
    class: 'Yoga Cộng Đồng',
    level: 'Cơ bản',
    levelColor: 'bg-green-100 text-green-700'
  },
  {
    day: 'Thứ 3',
    time: '19:00 - 20:00',
    class: 'Yoga Trị Liệu',
    level: 'Cá nhân',
    levelColor: 'bg-blue-100 text-blue-700'
  },
  {
    day: 'Thứ 4',
    time: '6:00 - 7:00',
    class: 'Yoga Căn Bản',
    level: 'Người mới',
    levelColor: 'bg-green-100 text-green-700'
  },
  {
    day: 'Thứ 5',
    time: '19:00 - 20:00',
    class: 'Trị Liệu Mạc Cơ',
    level: 'Cá nhân',
    levelColor: 'bg-purple-100 text-purple-700'
  },
  {
    day: 'Thứ 6',
    time: '6:00 - 7:00',
    class: 'Yoga Cộng Đồng',
    level: 'Tất cả',
    levelColor: 'bg-orange-100 text-orange-700'
  },
  {
    day: 'Thứ 7',
    time: '8:00 - 9:30',
    class: 'Lớp Cuối Tuần',
    level: 'Trung bình',
    levelColor: 'bg-orange-100 text-orange-700'
  }
];

export const POSTS_PER_PAGE = 6;