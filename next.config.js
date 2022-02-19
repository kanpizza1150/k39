/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    MONGODB_URL: process.env.MONGODB_URL,
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
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/cattle': { page: '/cattle' },
      '/semen': { page: '/semen' },
    }
  },
}

module.exports = nextConfig
