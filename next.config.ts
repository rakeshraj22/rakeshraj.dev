import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // 🔥 required for static hosting
  images: {
    unoptimized: true,     // required for static export
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
