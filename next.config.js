const path = require('path')
const withPWA = require('next-pwa')

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
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
})
