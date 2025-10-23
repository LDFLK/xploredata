import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  /* config options here */
  eslint: {
    // Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // skip TypeScript errors
  },
};

export default nextConfig;
