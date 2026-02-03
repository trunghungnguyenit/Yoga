import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Calendar, Award, Users, Heart, Star } from 'lucide-react';

// Stats data for Luận
const stats = [
  {
    icon: Users,
    number: '200+',
    label: 'Học viên',
    description: 'Đã đồng hành cùng Gác Yoga'
  },
  {
    icon: Calendar,
    number: '5+',
    label: 'Năm kinh nghiệm',
    description: 'Giảng dạy yoga tại Bình Định'
  },
  {
    icon: Award,
    number: '300h',
    label: 'Chứng chỉ RYT',
    description: 'Đào tạo chuyên nghiệp được công nhận'
  },
  {
    icon: Heart,
    number: '4',
    label: 'Loại lớp học',
    description: 'Đa dạng phù hợp mọi nhu cầu'
  }
];

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-50 via-orange-50 to-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-green-100 to-orange-100"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-green-700 border border-green-200">
                <span>✨</span>
                <span>Câu chuyện của tôi</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Từ đam mê cá nhân đến{' '}
                  <span className="text-green-600">Gác Yoga</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                  Luận chia sẻ hành trình từ người tập yoga đến HLV, 
                  và cách Gác Yoga trở thành ngôi nhà chung của cộng đồng yêu yoga tại Bình Định.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a 
                  href="https://zalo.me/your-zalo-number" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    💬 Chat Zalo – Tư vấn lớp phù hợp
                  </Button>
                </a>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600">
                <span>✓ 5+ năm kinh nghiệm</span>
                <span>✓ 200+ học viên tin tưởng</span>
                <span>✓ Chứng chỉ RYT 300h</span>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-orange-200 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/5] bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-4">📸</div>
                      <p className="text-lg font-medium">Ảnh HLV Luận</p>
                      <p className="text-sm">Đang dạy yoga</p>
                    </div>
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">200+</div>
                      <div className="text-xs text-gray-600">Học viên</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">5+</div>
                      <div className="text-xs text-gray-600">Năm kinh nghiệm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hành trình{' '}
              <span className="text-green-600">đáng tin cậy</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những con số nói lên cam kết và chất lượng trong việc mang yoga đến với cộng đồng Bình Định
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <stat.icon size={32} className="text-green-600" />
                </div>
                
                {/* Number */}
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Tham gia cộng đồng học viên đang phát triển tại Gác Yoga
            </p>
            <a 
              href="https://zalo.me/your-zalo-number" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                💬 Chat Zalo – Tư vấn lớp phù hợp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
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

      {/* Teaching Philosophy */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Triết lý giảng dạy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những nguyên tắc định hướng cách tôi chia sẻ yoga với mọi người
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cá nhân hóa</h3>
              <p className="text-gray-600 leading-relaxed">
                Mỗi học viên là duy nhất. Tôi luôn điều chỉnh bài tập phù hợp với 
                thể trạng và nhu cầu cụ thể của từng người.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Từ từ và bền vững</h3>
              <p className="text-gray-600 leading-relaxed">
                Yoga là hành trình dài. Tôi tin vào sự tiến bộ từng bước, 
                an toàn và bền vững hơn là vội vàng.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Yêu thương bản thân</h3>
              <p className="text-gray-600 leading-relaxed">
                Yoga dạy chúng ta cách yêu thương và chấp nhận bản thân, 
                từ đó lan tỏa tình yêu thương đến mọi người xung quanh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Photos Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Không gian thực tế tại Gác Yoga
            </h2>
            <p className="text-xl text-gray-600">
              Những hình ảnh thật từ các buổi học và không gian của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for real photos */}
            {[
              'Không gian tập luyện',
              'Lớp yoga cộng đồng',
              'Buổi trị liệu 1-1',
              'HLV Luận hướng dẫn',
              'Học viên thực hành',
              'Góc thư giãn'
            ].map((title, index) => (
              <div key={index} className="bg-gray-200 rounded-xl h-64 flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="text-center text-gray-500">
                  <div className="text-3xl mb-2">📸</div>
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-xs">Ảnh thực tế</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Quote */}
      <section className="bg-green-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
            "Yoga không phải là về việc chạm được ngón chân. 
            Yoga là về những gì bạn học được trên con đường đó."
          </blockquote>
          <p className="text-xl text-green-100">— HLV Luận, Gác Yoga</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-20 h-20 border border-white rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-white space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Heart size={16} className="text-orange-300" />
                <span>Cảm ơn bạn đã đọc câu chuyện của tôi</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Sẵn sàng bắt đầu{' '}
                  <span className="text-orange-300">hành trình yoga</span>{' '}
                  tại Gác Yoga?
                </h2>
                <p className="text-xl text-green-100 leading-relaxed">
                  Hãy nhắn Zalo để được tư vấn trực tiếp và tìm lớp học phù hợp nhất với bạn. 
                  Tôi luôn sẵn sàng đồng hành cùng bạn.
                </p>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-6 text-green-100">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-300 fill-current" />
                  <span className="text-sm">Đánh giá tích cực từ học viên</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-orange-300" />
                  <span className="text-sm">200+ học viên tin tưởng</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a 
                  href="https://zalo.me/your-zalo-number" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    💬 Nhắn Zalo để được tư vấn trực tiếp
                  </Button>
                </a>
              </div>

              {/* Additional Info */}
              <div className="pt-6 space-y-2 text-green-100 text-sm">
                <p>✓ Tư vấn miễn phí về lớp học phù hợp</p>
                <p>✓ Có thể học thử trước khi quyết định</p>
                <p>✓ Lịch học linh hoạt theo nhu cầu</p>
                <p>✓ Không gian thân thiện, ấm cúng</p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-3xl transform rotate-3 opacity-20"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/5] bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-4">📸</div>
                      <p className="text-lg font-medium">HLV Luận</p>
                      <p className="text-sm">Chào mừng bạn đến Gác Yoga</p>
                    </div>
                  </div>
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Floating Message */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart size={20} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm">
                          "Tôi hy vọng câu chuyện của tôi truyền cảm hứng cho bạn bắt đầu hành trình yoga tại Gác Yoga."
                        </p>
                        <p className="text-green-600 font-semibold text-xs mt-1">
                          — HLV Luận ❤️
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-bold text-orange-300">200+</div>
                <div className="text-sm text-green-100">Học viên tin tưởng</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-300">4</div>
                <div className="text-sm text-green-100">Loại lớp học</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-300">5+</div>
                <div className="text-sm text-green-100">Năm kinh nghiệm</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-300">300h</div>
                <div className="text-sm text-green-100">Chứng chỉ RYT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}