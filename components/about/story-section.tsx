import Image from 'next/image';

const storyParts = [
  {
    id: 'beginning',
    title: 'Khởi đầu từ phòng ngủ sinh viên',
    subtitle: '2016 - Những bước đầu tiên',
    content: [
      'Hành trình yoga của tôi bắt đầu từ năm 2016 khi tôi đang học trở thành nhà thiết kế nội thất tại đại học. Tôi thường thực hành các video YouTube trong một không gian nhỏ ở chỗ ở của sinh viên để giúp tôi giải tỏa căng thẳng từ học tập.',
      'Trong những ngày đầu, tôi thường ghi nhớ các chuỗi động tác tôi đã học từ các lớp YouTube và chia sẻ chúng với gia đình, bạn bè, bạn cùng phòng hoặc bất kỳ ai sẵn sàng lắng nghe.',
      'Tôi nhận ra rằng tôi yêu thích chia sẻ những gì tôi đã học, đặc biệt là khi tôi thấy tác động tích cực nó có lên mọi người.'
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    imageAlt: 'Charlie practicing yoga in dorm room',
    quote: '"Tôi nhận ra rằng tôi yêu thích chia sẻ những gì tôi đã học, đặc biệt là khi tôi thấy tác động tích cực nó có lên mọi người."',
    imagePosition: 'right'
  },
  {
    id: 'training',
    title: 'Chuyên nghiệp hóa đam mê',
    subtitle: '2017-2019 - Đào tạo và giảng dạy',
    content: [
      'Sau khi tốt nghiệp, tôi quyết định đi và hoàn thành khóa đào tạo giáo viên yoga vinyasa 200 giờ đầu tiên của mình. Đây là bước ngoặt quan trọng giúp tôi có nền tảng vững chắc.',
      'Tôi bắt đầu dạy tại một studio địa phương ở quê hương một lần một tuần. Một lớp học trở thành 2 lớp và trước khi tôi biết, 2 năm sau tôi đã lên đến gần 20 lớp mỗi tuần.',
      'Tôi mới 24 tuổi lúc đó và biết rằng điều này không bền vững, đó là lúc tôi bắt đầu xem xét các lựa chọn của mình.'
    ],
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop',
    imageAlt: 'Charlie with yoga certification',
    quote: '"20 lớp mỗi tuần ở tuổi 24 - tôi biết cần tìm cách bền vững hơn để chia sẻ đam mê này."',
    imagePosition: 'left'
  },
  {
    id: 'online',
    title: 'Chuyển mình trực tuyến',
    subtitle: '2020-nay - Kỷ nguyên YouTube',
    content: [
      'COVID đã đến và mặc dù lúc đó tôi không biết - tôi đã nhận được sự khuyến khích mà tôi cần để đi trực tuyến và quay lại nơi thực hành của tôi bắt đầu - YouTube.',
      'Trong những năm đầu tiên trên YouTube, tôi cảm thấy khá vô hình. Nhưng tôi kiên trì và cuối cùng 4 năm vào kênh YouTube của tôi, tôi đã có bước ngoặt.',
      'Bây giờ tôi đã 6 năm trên YouTube, tôi đã đăng hơn 1.000 lớp học và dạy cho hơn 1 triệu người đăng ký mỗi tuần. Tôi không bao giờ nghĩ rằng tôi sẽ kết thúc ở đây nhưng tôi rất biết ơn vì là vậy.'
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    imageAlt: 'Charlie filming yoga video',
    quote: '"Đột nhiên mọi người tìm thấy tôi và thực sự thích các lớp học của tôi - điều mà tôi không nghĩ sẽ bao giờ xảy ra."',
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
            Hành trình từ một sinh viên thực hành yoga trong phòng ngủ đến việc truyền cảm hứng cho hàng triệu người trên toàn thế giới
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
                      — Charlie
                    </footer>
                  </blockquote>
                </div>

                {/* Image */}
                <div className={`relative ${
                  part.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={part.image}
                      alt={part.imageAlt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    
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