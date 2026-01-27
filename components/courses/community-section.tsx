import Image from 'next/image';

const communityFeatures = [
  'Private community forum',
  'Direct access to Charlie for questions',
  'Weekly live coaching calls'
];

export default function CommunitySection() {
  return (
    <section className="px-8 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">A community that moves with you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 bg-gradient-to-br from-blue-400 to-primary rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1512941691920-25bda36cb95f?w=500&h=500&fit=crop"
              alt="Mobile community app"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Stay connected with your practice community</h3>
            <p className="text-gray-600 mb-6">
              Join a supportive community of yogis who are on the same journey. Share your progress, ask questions, and celebrate wins together in our private community platform.
            </p>
            <ul className="space-y-3">
              {communityFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}