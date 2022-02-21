/** @type {import('next').NextConfig} */
const path = require('path')
const withPWA = require('next-pwa')
const nextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    MONGODB_URL: process.env.NEXT_PUBLIC_MONGODB_URL,
  },
  pwa: {
    dest: 'public',
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
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}

module.exports = withPWA(nextConfig)
