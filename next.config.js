/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: process.env.NEXT_PUBLIC_API_URL ? [
      {
        protocol: new URL(process.env.NEXT_PUBLIC_API_URL).protocol.replace(':', ''),
        hostname: new URL(process.env.NEXT_PUBLIC_API_URL).hostname,
        port: new URL(process.env.NEXT_PUBLIC_API_URL).port || undefined,
        pathname: '/uploads/**',
      },
    ] : [],
  },
  compress: true,
  poweredByHeader: false,
  // Защита от iframe embedding
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  // Rewrites для проксирования API запросов через Vercel (HTTPS)
  async rewrites() {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      return []
    }
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `${apiUrl}/uploads/:path*`,
      },
      {
        source: '/health',
        destination: `${apiUrl}/health`,
      },
    ]
  },
}

module.exports = nextConfig


