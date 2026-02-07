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
  experimental: {
    optimizeCss: true,
  },
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
  // Rewrites для доступа к загруженным изображениям через бэкенд
  async rewrites() {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      return []
    }
    return [
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/uploads/:path*`,
      },
    ]
  },
}

module.exports = nextConfig


