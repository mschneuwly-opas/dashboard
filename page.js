/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.spread.name' },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
