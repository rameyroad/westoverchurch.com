/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['assets.maccarianagency.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'westovercontent.blob.core.windows.net',
        port: '',
        pathname: '/cmscontent/**',
      },
    ],
  },
};

module.exports = nextConfig;
