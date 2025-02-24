import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'High-kymatic Waving Festival 2025',
    template: '%s | High-kymatic Festival'
  },
  description: 'Join us for an unforgettable waving dance experience in Greece. Featuring world-class performers, workshops, and competitions.',
  keywords: ['waving', 'dance', 'Greece', 'High-kymatic', 'performance'],
  authors: [{ name: 'High-kymatic Festival Team' }],
  openGraph: {
    title: 'High-kymatic Festival 2025',
    description: 'Join us for an unforgettable waving dance experience in Greece. Featuring world-class performers, workshops, and competitions.',
    url: 'https://highkymatic.com',
    siteName: 'High-kymatic Festival',
    images: [
      {
        url: '/opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'High-kymatic Festival 2025',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: 'index, follow',
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  verification: {
    google: 'e6BpvEk7xm7hwAghfKU26JsID1qcEFdAd19iK33NyCY'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
