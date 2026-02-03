export default function FaqSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-lg text-gray-600">
            Một số thông tin nhanh trước khi bạn liên hệ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-2">Tôi chưa bao giờ tập yoga, có được không?</h3>
            <p className="text-gray-600 text-sm">
              Hoàn toàn được! Chúng tôi có lớp Yoga Căn Bản dành riêng cho người mới bắt đầu.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-2">Có cần mang dụng cụ gì không?</h3>
            <p className="text-gray-600 text-sm">
              Chúng tôi cung cấp đầy đủ thảm và dụng cụ. Bạn chỉ cần mang theo tinh thần thoải mái.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-2">Có thể học thử trước không?</h3>
            <p className="text-gray-600 text-sm">
              Có! Hãy chat Zalo để được tư vấn về buổi học thử phù hợp.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-2">Lịch học có linh hoạt không?</h3>
            <p className="text-gray-600 text-sm">
              Tùy loại lớp. Lớp cộng đồng có lịch cố định, lớp trị liệu có thể linh hoạt theo nhu cầu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}