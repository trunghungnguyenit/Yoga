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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
            Trang chủ
          </Link>
          <Link href="/course" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
            Khóa học
          </Link>
          <Link href="/program" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
            Chương trình
          </Link>
          <Link href="/support" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
            Hỗ trợ
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
            Giới thiệu
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full">
            Đăng nhập
          </Button>
          <Link href="/course">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-full">
              Đăng ký
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-700 hover:text-green-600" onClick={() => setOpen(!open)}
  aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation (Hidden by default - would need state management for toggle) */}
      {open && (
      <div className="md:hidden border-t border-gray-200 bg-white">
        <nav className="px-4 py-4 space-y-3">
          <Link href="/" className="block text-gray-700 hover:text-green-600 font-medium py-2">
            Trang chủ
          </Link>
          <Link href="/course" className="block text-gray-700 hover:text-green-600 font-medium py-2">
            Khóa học
          </Link>
          <Link href="/program" className="block text-gray-700 hover:text-green-600 font-medium py-2">
            Chương trình
          </Link>
          <Link href="/support" className="block text-gray-700 hover:text-green-600 font-medium py-2">
            Hỗ trợ
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-green-600 font-medium py-2">
            Giới thiệu
          </Link>
          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full">
              Đăng nhập
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
              Đăng ký
            </Button>
          </div>
        </nav>
      </div>
      )}
    </header>
  );
}
