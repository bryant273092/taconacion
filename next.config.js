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
  // Keep old image URLs working (indexed by search engines / linked externally).
  async redirects() {
    return [
      ['/taco_nacion_logo.webp', '/taco-nacion-logo.webp'],
      ['/taco_nacion_physical.jpg', '/taco-nacion-ontario-storefront.jpg'],
      ['/taco_beer.webp', '/taco-beer.webp'],
      ['/taco_catering.webp', '/taco-catering.webp'],
    ].map(([source, destination]) => ({ source, destination, permanent: true }))
  },
}

module.exports = nextConfig
