import Image from 'next/image';

export default function VideoSection() {
  return (
    <section className="px-8 py-16 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0d5fccc30ead?w=800&h=450&fit=crop"
            alt="Instructor video"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white rounded-full w-20 h-20 flex items-center justify-center">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}