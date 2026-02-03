export default function PhilosophySection() {
  return (
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
  );
}