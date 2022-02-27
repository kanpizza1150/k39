/**
 * @type {import('next').NextConfig}
 */
import withPWA from 'next-pwa'
import path from 'path'

module.exports = withPWA({
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    MONGODB_URL: process.env.NEXT_PUBLIC_MONGODB_URL,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['https://k39.netlify.app/'],
    loader: 'akamai',
    path: '',
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
    ]
  },
})
