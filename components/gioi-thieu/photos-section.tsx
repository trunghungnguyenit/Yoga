export default function PhotosSection() {
  return (
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
  );
}