'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
            Trang chủ
          </Link>
          <Link href="/lop-hoc" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
            Lớp học
          </Link>
          <Link href="/gioi-thieu" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
            Giới thiệu
          </Link>
          <Link href="/yoga-journal" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
            Nhật ký
          </Link>
          <Link href="/lien-he" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
            Liên hệ
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a 
            href="https://zalo.me/your-zalo-number" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-full">
              💬 Chat Zalo
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-700 hover:text-green-600" onClick={() => setOpen(!open)}
  aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
      <div className="md:hidden border-t border-gray-200 bg-white">
        <nav className="px-4 py-4 space-y-3">
          <Link href="/" className="block text-gray-700 hover:text-green-600 font-medium py-2">
            Trang chủ
          </Link>
          <Link href="/lop-hoc" className="block text-gray-700 hover:text-green-600 font-medium py-2">
            Lớp học
          </Link>
          <Link href="/gioi-thieu" className="block text-gray-700 hover:text-green-600 font-medium py-2">
            Giới thiệu
          </Link>
          <Link href="/yoga-journal" className="block text-gray-700 hover:text-green-600 font-medium py-2">
            Nhật ký
          </Link>
          <Link href="/lien-he" className="block text-gray-700 hover:text-green-600 font-medium py-2">
            Liên hệ
          </Link>
          <div className="pt-4">
            <a 
              href="https://zalo.me/your-zalo-number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                💬 Chat Zalo – Tư vấn lớp phù hợp
              </Button>
            </a>
          </div>
        </nav>
      </div>
      )}
    </header>
  );
}
