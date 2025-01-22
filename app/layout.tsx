import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'High-kymatic Waving Festival 2025',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <head>
        {/* WhatsApp specific meta tags */}
        <meta property="og:image:secure_url" content="/opengraph.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        {/* Force WhatsApp to fetch new image version */}
        <meta property="og:image:alt" content="High-kymatic Festival 2025 Logo" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}

