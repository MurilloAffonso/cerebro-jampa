const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vempassearjampa.com' }],
        destination: 'https://www.vempassearjampa.com/:path*',
        permanent: true,
      },
      {
        source: '/passeios/pacotes/3-dias-completo',
        destination: '/passeios/pacotes/roteiro-do-murillo-3-dias',
        permanent: true,
      },
      {
        source: '/passeios/pacotes/3-dias-basico',
        destination: '/passeios/pacotes/combo-sol-nascente-3-dias',
        permanent: true,
      },
      {
        source: '/passeios/pacotes/super-economico',
        destination: '/passeios/pacotes/combo-mare-boa-2-dias',
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
