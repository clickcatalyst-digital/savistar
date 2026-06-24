import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    // Sources are already optimized webp at sane sizes, so skip Next's on-demand
    // optimizer entirely. AVIF/webp re-encoding of large images is very memory-heavy
    // and was OOM-ing the Render instance. Serving the static webp directly is cheap.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;