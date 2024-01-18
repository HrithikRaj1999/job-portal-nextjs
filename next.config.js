/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "wroubagr3usmrqp7.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
