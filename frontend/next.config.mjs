/** @type {import('next').NextConfig} */
// frontend/next.config.mjs
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3000/:path*', // NestJS backend
        },
      ];
    },
  };
  
  export default nextConfig;
