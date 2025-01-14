import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone the response
  const response = NextResponse.next()

  // Add cache control headers
  response.headers.set('Cache-Control', 'public, max-age=31536000')
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // Enable back/forward cache
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

