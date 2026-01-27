import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  return (
    <section className="px-8 py-16 bg-primary text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your practice?</h2>
        <p className="text-orange-100 mb-8">Start your 4-week journey to strength, flexibility, and confidence today</p>
        <Button className="bg-white hover:bg-gray-100 text-primary font-bold px-8 py-3 rounded-lg">
          Enroll Now
        </Button>
      </div>
    </section>
  );
}