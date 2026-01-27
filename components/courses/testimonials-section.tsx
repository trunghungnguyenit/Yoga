const testimonials = [
  {
    name: 'Simone',
    rating: 5,
    text: 'Tôi đã thực hành yoga một lúc, đạt được rất nhiều tiến bộ trong chứng kỳ của tôi!'
  },
  {
    name: 'Jessica',
    rating: 5,
    text: 'Hoàn thành chương trình chứng kỳ vào thứ Sáu. Nó thực sự giúp tôi cải thiện!'
  },
  {
    name: 'Chelsea',
    rating: 5,
    text: 'Hoàn thành chương trình chứng kỳ vào thứ Sáu. Nó thực sự đã giúp. Tuần này để trải nghiệm các video luồng.'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="px-8 py-16 bg-orange-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">What students say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}