import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging.excellenttrek.com',
        port: '',
        pathname: '/wp-content/uploads/2021/05/**',
        search: '',
      },
    ],
  },
   
};

export default nextConfig;
