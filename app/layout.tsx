import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gác Yoga - HLV Luận - Yoga tại nhà Bình Định',
  description: 'Yoga cộng đồng, trị liệu, nhóm nhỏ với HLV Luận tại Gác Yoga, Bình Định. Liên hệ Zalo để tư vấn lớp phù hợp.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Logo-GacYoga.jpg',
        type: 'image/jpeg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
