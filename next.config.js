/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  env: {
    API_URL: 'http://localhost:3000/api/',
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
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/cattle': { page: '/cattle' },
      '/semen': { page: '/semen' },
    }
  },
}

module.exports = nextConfig
