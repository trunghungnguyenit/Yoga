import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  return (
    <section className="px-8 py-16 bg-primary text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Sẵn sàng thay đổi cách luyện tập của bạn?</h2>
        <p className="text-orange-100 mb-8">Sẵn sàng thay đổi cách luyện tập của bạn? Bắt đầu hành trình 4 tuần hướng đến sức mạnh, sự linh hoạt và sự tự tin ngay hôm nay!</p>
        <Button className="bg-white hover:bg-gray-100 text-primary font-bold px-8 py-3 rounded-lg">
          Đăng ký ngay
        </Button>
      </div>
    </section>
  );
}

 