import Link from 'next/link';
import { Facebook, Youtube, TicketIcon as TikTok, Instagram } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-green-100 to-orange-100 p-1">
            <Image
              src="/Logo-GacYoga.jpg"
              alt="Gác Yoga Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <div>
            <span className="text-lg font-bold text-gray-900 leading-tight">
              Gác Yoga
            </span>
            <br />
            <span className="text-sm text-green-600 font-medium">
              HLV Luận
            </span>
          </div>
        </Link>
          </div>
        </div>

        <nav className="flex justify-center gap-8 mb-8 flex-wrap">
          <Link href="/lop-hoc" className="text-sm hover:text-accent underline">
            Lớp học
          </Link>
          <Link href="/gioi-thieu" className="text-sm hover:text-accent underline">
            Giới thiệu
          </Link>
          <Link href="/tap-chi" className="text-sm hover:text-accent underline">
            Tạp chí
          </Link>
        </nav>

        {/* Main CTA */}
        <div className="flex justify-center mb-8">
          <a 
            href="https://zalo.me/your-zalo-number" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg">
              💬 Chat Zalo – Tư vấn lớp phù hợp
            </Button>
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-white/90">📍 Gác Yoga, Bình Định</p>
          <p className="text-white/90">📞 Liên hệ: <a href="tel:+84123456789" className="hover:text-accent">0123 456 789</a></p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Facebook size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Youtube size={20} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <TikTok size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Instagram size={20} />
          </a>
        </div>

        <div className="text-center text-xs text-white/70">
          <p>&copy; 2024 Gác Yoga - HLV Luận. Yoga tại nhà, Bình Định.</p>
        </div>
      </div>
    </footer>
  );
}
