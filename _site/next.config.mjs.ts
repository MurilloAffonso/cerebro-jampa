import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  // Performance: Ensure fast builds
  swcMinify: true,
};

export default nextConfig;
