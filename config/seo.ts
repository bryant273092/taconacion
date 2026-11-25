import type { DefaultSeoProps } from 'next-seo/pages';
import { site, absoluteUrl } from './site';

// Site-wide defaults; individual pages override title/description/canonical via <PageSeo>.
export const defaultSeo: DefaultSeoProps = {
  defaultTitle: 'Taco Nacion | Authentic Mexican Restaurant in Ontario, CA',
  description:
    'Taco Nacion serves authentic Mexican food in Ontario, CA — street tacos, burritos, breakfast, seafood, birria ramen, and draft beer on our patio.',
  themeColor: '#000000',
  robotsProps: { maxImagePreview: 'large' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: absoluteUrl('/'),
    siteName: site.name,
    images: [
      {
        url: absoluteUrl('/og-image.jpg'),
        width: 1200,
        height: 630,
        alt: 'Taco Nacion — Authentic Mexican Food in Ontario, CA',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'geo.region', content: 'US-CA' },
    { name: 'geo.placename', content: 'Ontario' },
    { name: 'geo.position', content: `${site.geo.latitude};${site.geo.longitude}` },
    { name: 'ICBM', content: `${site.geo.latitude}, ${site.geo.longitude}` },
  ],
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
  ],
};
