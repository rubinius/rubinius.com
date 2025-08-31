import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '',
  assetPrefix: '/',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
