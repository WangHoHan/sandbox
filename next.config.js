/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'pl'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
