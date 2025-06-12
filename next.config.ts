import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
   images: {
    domains: ['staging.excellenttrek.com'],
  },
};

export default nextConfig;
