/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return config;
  },
  images: {
    deviceSizes: [575, 767, 828, 1080, 1200, 1920, 2048, 3840],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default nextConfig;
