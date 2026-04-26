/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  swcMinify: true,
};

module.exports = nextConfig;
