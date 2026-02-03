// Story parts for Luận
const storyParts = [
  {
    id: 'beginning',
    title: 'Khởi đầu từ đam mê cá nhân',
    subtitle: '2019 - Những bước đầu tiên',
    content: [
      'Hành trình yoga của tôi bắt đầu từ nhu cầu cá nhân - tìm kiếm sự cân bằng trong cuộc sống bận rộn. Lúc đầu, tôi chỉ tập yoga để giảm căng thẳng và cải thiện sức khỏe.',
      'Càng tập, tôi càng cảm nhận được sự thay đổi tích cực không chỉ về thể chất mà còn về tinh thần. Yoga đã giúp tôi tìm thấy sự bình an trong tâm hồn.',
      'Tôi nhận ra rằng mình muốn chia sẻ những lợi ích tuyệt vời này với mọi người xung quanh, đặc biệt là cộng đồng tại Bình Định.'
    ],
    quote: '"Yoga không chỉ thay đổi cơ thể tôi, mà còn thay đổi cách tôi nhìn nhận cuộc sống."',
    imagePosition: 'right'
  },
  {
    id: 'training',
    title: 'Chuyên nghiệp hóa đam mê',
    subtitle: '2020-2021 - Đào tạo và học hỏi',
    content: [
      'Để có thể chia sẻ yoga một cách chuyên nghiệp và an toàn, tôi quyết định tham gia các khóa đào tạo giáo viên yoga. Đây là bước ngoặt quan trọng trong hành trình của tôi.',
      'Tôi đã hoàn thành khóa đào tạo RYT 300h, học về giải phẫu, triết học yoga, và các kỹ thuật giảng dạy hiệu quả. Kiến thức này giúp tôi hiểu sâu hơn về yoga.',
      'Không chỉ dừng lại ở lý thuyết, tôi còn tham gia nhiều workshop về yoga trị liệu và trị liệu mạc cơ để có thể hỗ trợ tốt hơn cho học viên.'
    ],
    quote: '"Học không bao giờ dừng lại. Mỗi khóa đào tạo đều mở ra một góc nhìn mới về yoga."',
    imagePosition: 'left'
  },
  {
    id: 'gac-yoga',
    title: 'Thành lập Gác Yoga',
    subtitle: '2022-nay - Tạo dựng cộng đồng',
    content: [
      'Với mong muốn tạo ra một không gian yoga thân thiện và gần gũi, tôi đã thành lập Gác Yoga tại Bình Định. Đây không chỉ là studio mà còn là "ngôi nhà" cho những ai yêu thích yoga.',
      'Tại Gác Yoga, tôi tập trung vào việc cá nhân hóa từng buổi học, đảm bảo mỗi học viên đều được chăm sóc và hướng dẫn phù hợp với thể trạng riêng.',
      'Từ những lớp học đầu tiên với vài học viên, giờ đây Gác Yoga đã trở thành nơi quen thuộc của hơn 200 học viên. Mỗi ngày, tôi đều cảm thấy hạnh phúc khi thấy sự thay đổi tích cực của mọi người.'
    ],
    quote: '"Gác Yoga không chỉ là nơi tập luyện, mà là nơi mọi người tìm thấy sự bình an và kết nối với chính mình."',
    imagePosition: 'right'
  }
];

export default function StorySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Câu chuyện{' '}
            <span className="text-green-600">chi tiết</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hành trình từ người tập yoga đến việc thành lập Gác Yoga - 
            không gian yoga thân thiện tại Bình Định
          </p>
        </div>

        {/* Story Parts */}
        <div className="space-y-20">
          {storyParts.map((part, index) => (
            <article key={part.id} className="relative">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                part.imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${
                  part.imagePosition === 'left' ? 'lg:col-start-2' : ''
                }`}>
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                      {part.subtitle}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {part.title}
                    </h3>
                  </div>

                  {/* Content Paragraphs */}
                  <div className="space-y-4">
                    {part.content.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
                    <p className="text-gray-800 italic text-lg leading-relaxed">
                      {part.quote}
                    </p>
                    <footer className="mt-3 text-green-600 font-semibold">
                      — HLV Luận
                    </footer>
                  </blockquote>
                </div>

                {/* Image */}
                <div className={`relative ${
                  part.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-3xl mb-2">📸</div>
                        <p className="text-sm">Ảnh thực tế {index + 1}</p>
                        <p className="text-xs">{part.title}</p>
                      </div>
                    </div>
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Step Number */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}