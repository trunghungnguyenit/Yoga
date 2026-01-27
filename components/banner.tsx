import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Banner() {
  return (
    <section className="bg-secondary text-white py-4">
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center gap-4">
        <p className="text-sm font-medium">
          ⭐ CHƯƠNG TRÌNH MỚI VỚI HỖ TRỢ TRỰC TIẾP TỪ TÔI: Xây dựng sức mạnh và tính linh hoạt với Momentum Flow
        </p>
        <Link href="/course">
          <Button className="bg-accent hover:bg-accent/90 text-white px-8">
            Bắt đầu tại đây
          </Button>
        </Link>
      </div>
    </section>
  );
}
