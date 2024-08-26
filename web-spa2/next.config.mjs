/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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

export default nextConfig;
