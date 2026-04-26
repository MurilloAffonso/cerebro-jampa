/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  swcMinify: true,
};

module.exports = nextConfig;