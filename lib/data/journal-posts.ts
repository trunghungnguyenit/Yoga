import { Post } from '@/lib/types/journal';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Buổi học yoga cộng đồng tuần này - Cảm xúc và năng lượng tích cực',
    slug: 'buoi-hoc-yoga-cong-dong-tuan-nay',
    excerpt: 'Chia sẻ những khoảnh khắc đáng nhớ từ buổi học yoga cộng đồng tại Gác Yoga. Không khí vui vẻ, thân thiện và đầy năng lượng tích cực.',
    content: '<p>Buổi học yoga cộng đồng hôm nay thật tuyệt vời! Chúng tôi có 8 học viên tham gia, từ những người mới bắt đầu đến những người đã có kinh nghiệm. Không khí rất vui vẻ và thân thiện.</p><p>Trong buổi học, chúng tôi tập trung vào các tư thế cơ bản như Mountain Pose, Downward Dog và Child Pose. Tôi đã hướng dẫn từng học viên điều chỉnh tư thế phù hợp với thể trạng của mình.</p><p>Điều tôi thích nhất là thấy sự tiến bộ của các học viên. Chị Hương đã có thể giữ được tư thế Warrior I lâu hơn, còn anh Minh thì đã cải thiện được độ linh hoạt ở phần hông.</p>',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    ],
    category: 'diary',
    readingTime: 4,
    publishedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Lịch tập tuần này tại Gác Yoga - Cập nhật mới nhất',
    slug: 'lich-tap-tuan-nay-gac-yoga',
    excerpt: 'Lịch tập chi tiết cho tuần này với các lớp yoga cộng đồng, trị liệu và căn bản. Đăng ký sớm để đảm bảo chỗ.',
    content: '<p>Lịch tập tuần này đã được cập nhật với nhiều lớp học đa dạng phù hợp cho mọi trình độ.</p>',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    category: 'schedule',
    readingTime: 2,
    publishedAt: '2024-01-14'
  },
  {
    id: '3',
    title: '5 tư thế yoga cơ bản an toàn cho người mới bắt đầu',
    slug: '5-tu-the-yoga-co-ban-an-toan',
    excerpt: 'Hướng dẫn chi tiết 5 tư thế yoga cơ bản giúp bạn bắt đầu hành trình yoga một cách an toàn và hiệu quả.',
    content: '<h2>1. Tư thế núi (Mountain Pose - Tadasana)</h2><p>Đây là tư thế cơ bản nhất trong yoga, giúp cải thiện tư thế đứng và tăng cường sự tập trung.</p><p><strong>Cách thực hiện:</strong></p><ul><li>Đứng thẳng, hai chân song song, cách nhau bằng chiều rộng hông</li><li>Phân bố đều trọng lượng lên cả hai chân</li><li>Duỗi thẳng cột sống, vai thả lỏng</li><li>Hai tay buông thõng tự nhiên hai bên thân</li><li>Thở đều và giữ tư thế 30 giây đến 1 phút</li></ul><h2>2. Tư thế chó úp mặt (Downward Facing Dog)</h2><p>Tư thế này giúp kéo giãn toàn thân, tăng cường sức mạnh tay và vai.</p><p><strong>Lưu ý an toàn:</strong> Không ép buộc nếu cảm thấy đau ở cổ tay hoặc vai.</p>',
    thumbnail: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop',
    category: 'knowledge',
    readingTime: 6,
    publishedAt: '2024-01-13'
  },
  {
    id: '4',
    title: 'Lớp Yoga Trị Liệu tại Gác Yoga - Hỗ trợ điều trị đau lưng',
    slug: 'lop-yoga-tri-lieu-gac-yoga',
    excerpt: 'Lớp yoga trị liệu chuyên biệt giúp hỗ trợ điều trị đau lưng, vai gáy và các vấn đề về cột sống. Được thiết kế riêng cho từng cá nhân.',
    content: '<p>Lớp yoga trị liệu tại Gác Yoga được thiết kế đặc biệt để hỗ trợ những người gặp vấn đề về đau lưng, vai gáy và các bệnh lý về cột sống.</p><p>Với kinh nghiệm nhiều năm trong lĩnh vực trị liệu, tôi sẽ đánh giá tình trạng cụ thể của từng học viên và thiết kế bài tập phù hợp.</p>',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    category: 'course',
    readingTime: 5,
    publishedAt: '2024-01-12'
  },
  {
    id: '5',
    title: 'Tạp chí lớp Yoga Căn Bản - Tuần 2: Sự tiến bộ đáng kinh ngạc',
    slug: 'nhat-ky-yoga-can-ban-tuan-2',
    excerpt: 'Sau 2 tuần tập luyện trong lớp Yoga Căn Bản, các học viên đã có những tiến bộ đáng kinh ngạc về độ linh hoạt và sự tự tin.',
    content: '<p>Tuần thứ 2 của khóa Yoga Căn Bản đã kết thúc với nhiều cảm xúc tích cực từ các học viên.</p><p>Em Linh, một sinh viên 20 tuổi, đã có thể thực hiện được tư thế Warrior I một cách tự tin. "Em cảm thấy cơ thể mình linh hoạt hơn rất nhiều và tinh thần cũng thoải mái hơn", em chia sẻ.</p><p>Chị Mai, 35 tuổi, ban đầu rất lo lắng vì chưa bao giờ tập yoga. Nhưng giờ chị đã có thể theo kịp các động tác cơ bản và cảm thấy rất hài lòng với sự tiến bộ của mình.</p>',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop'
    ],
    category: 'diary',
    readingTime: 4,
    publishedAt: '2024-01-11'
  },
  {
    id: '6',
    title: 'Tầm quan trọng của hơi thở trong yoga - Kỹ thuật thở cơ bản',
    slug: 'tam-quan-trong-cua-hoi-tho-trong-yoga',
    excerpt: 'Khám phá tầm quan trọng của hơi thở trong yoga và học các kỹ thuật thở cơ bản giúp tăng hiệu quả tập luyện.',
    content: '<h2>Tại sao hơi thở quan trọng trong yoga?</h2><p>Hơi thở là linh hồn của yoga. Nó không chỉ cung cấp oxy cho cơ thể mà còn giúp chúng ta kết nối với tâm trí và tinh thần.</p><h2>Kỹ thuật thở bụng (Diaphragmatic Breathing)</h2><p>Đây là kỹ thuật thở cơ bản nhất mà mọi người tập yoga cần biết:</p><ul><li>Nằm ngửa, một tay đặt lên ngực, một tay đặt lên bụng</li><li>Hít vào chậm qua mũi, để bụng nở ra</li><li>Thở ra chậm qua miệng, bụng xẹp xuống</li><li>Tay trên ngực gần như không di chuyển</li></ul><p><strong>Lưu ý:</strong> Thực hành 5-10 phút mỗi ngày để làm quen với kỹ thuật này.</p>',
    thumbnail: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop',
    category: 'knowledge',
    readingTime: 5,
    publishedAt: '2024-01-10'
  },
  {
    id: '7',
    title: 'Lớp Trị Liệu Mạc Cơ tại Gác Yoga - Giải pháp cho đau nhức cơ bắp',
    slug: 'lop-tri-lieu-mac-co-gac-yoga',
    excerpt: 'Lớp trị liệu mạc cơ chuyên sâu giúp giải quyết các vấn đề về đau nhức cơ bắp, cải thiện tư thế và phục hồi chức năng vận động.',
    content: '<p>Trị liệu mạc cơ là phương pháp điều trị hiệu quả cho các vấn đề về đau nhức cơ bắp, đặc biệt phù hợp với những người làm việc văn phòng hoặc có tư thế không tốt.</p><p>Tại Gác Yoga, tôi kết hợp các kỹ thuật trị liệu mạc cơ với yoga để mang lại hiệu quả tối ưu cho học viên.</p>',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    category: 'course',
    readingTime: 4,
    publishedAt: '2024-01-09'
  },
  {
    id: '8',
    title: 'Thông báo lịch nghỉ lễ và lịch bù tại Gác Yoga',
    slug: 'thong-bao-lich-nghi-le-gac-yoga',
    excerpt: 'Thông báo về lịch nghỉ lễ Tết Nguyên Đán và lịch học bù cho các lớp tại Gác Yoga. Vui lòng xem chi tiết.',
    content: '<p>Kính gửi các học viên thân yêu của Gác Yoga,</p><p>Nhân dịp Tết Nguyên Đán 2024, Gác Yoga xin thông báo lịch nghỉ và học bù như sau:</p><p><strong>Lịch nghỉ:</strong> Từ ngày 8/2 đến 18/2/2024</p><p><strong>Lịch học bù:</strong> Sẽ được thông báo chi tiết qua Zalo group của từng lớp</p>',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    category: 'schedule',
    readingTime: 2,
    publishedAt: '2024-01-08'
  }
];