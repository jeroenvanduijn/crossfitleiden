import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 't18gxeooihdd4vax.public.blob.vercel-storage.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
