import Link from 'next/link';
import { Facebook, Youtube, TicketIcon as TikTok, Instagram } from 'lucide-react';
import Image from 'next/image';


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
              alt="Charlie Yoga Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <div>
            <span className="text-lg font-bold text-gray-900 leading-tight">
              Charlie
            </span>
            <br />
            <span className="text-sm text-green-600 font-medium">
              Follows Yoga
            </span>
          </div>
        </Link>
          </div>
        </div>

        <nav className="flex justify-center gap-8 mb-8 flex-wrap">
          <Link href="/program" className="text-sm hover:text-accent underline">
            Đăng nhập khóa học
          </Link>
          <Link href="/support" className="text-sm hover:text-accent underline">
            Hỗ trợ
          </Link>
          <Link href="/about" className="text-sm hover:text-accent underline">
            Về tôi
          </Link>
        </nav>

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

        <div className="flex justify-center gap-6 text-xs text-white/70 flex-wrap">
          <Link href="#" className="hover:text-accent underline">
            Điều khoản dịch vụ
          </Link>
          <Link href="#" className="hover:text-accent underline">
            Chính sách riêng tư
          </Link>
        </div>
      </div>
    </footer>
  );
}
