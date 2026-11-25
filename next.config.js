/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Relative to this file so it resolves both locally and on Vercel's build machines
  // (an absolute /Users/... path breaks remote builds).
  outputFileTracingRoot: __dirname,
  // Keep the old logo URL working (indexed by search engines / linked externally).
  async redirects() {
    return [
      { source: '/taco_nacion_logo.webp', destination: '/taco-nacion-logo.webp', permanent: true },
    ]
  },
}

module.exports = nextConfig
