import type { NextConfig } from "next";

const nextConfig: NextConfig = {
env: {
    API_URL: process.env.API_URL,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home-page',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
