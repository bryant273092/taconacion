import Head from 'next/head';
import { site, absoluteUrl } from '../../config/site';
import type { MenuCategory } from '../../types/menu';

interface JsonLdProps {
  id: string;
  data: Record<string, unknown>;
}

export const JsonLd = ({ id, data }: JsonLdProps) => (
  <Head>
    <script
      key={id}
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  </Head>
);

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${site.url}/#restaurant`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  priceRange: site.priceRange,
  servesCuisine: site.cuisine,
  image: [absoluteUrl('/og-image.jpg'), absoluteUrl('/taco_nacion_physical.jpg')],
  logo: absoluteUrl('/taco_nacion_logo.webp'),
  hasMenu: absoluteUrl('/menu'),
  acceptsReservations: false,
  address: { '@type': 'PostalAddress', ...site.address },
  geo: { '@type': 'GeoCoordinates', ...site.geo },
  hasMap: site.directionsUrl,
  openingHoursSpecification: site.hours
    .filter((h) => h.days.length > 0)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  sameAs: Object.values(site.social),
  potentialAction: {
    '@type': 'OrderAction',
    target: [
      { '@type': 'EntryPoint', urlTemplate: site.orderTakeoutUrl, actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'] },
      { '@type': 'EntryPoint', urlTemplate: site.orderDeliveryUrl, actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'] },
    ],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: { '@id': `${site.url}/#restaurant` },
};

const parsePrice = (price: string) => price.replace(/[^0-9.]/g, '');

export const menuSchema = (menu: MenuCategory[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Menu',
  '@id': `${site.url}/menu#menu`,
  name: `${site.name} Menu`,
  url: absoluteUrl('/menu'),
  inLanguage: 'en-US',
  hasMenuSection: menu.map((section) => ({
    '@type': 'MenuSection',
    name: section.category,
    ...(section.description ? { description: section.description } : {}),
    hasMenuItem: section.items.map((item) => ({
      '@type': 'MenuItem',
      name: item.name,
      description: item.description,
      ...(parsePrice(item.price)
        ? { offers: { '@type': 'Offer', price: parsePrice(item.price), priceCurrency: 'USD' } }
        : {}),
    })),
  })),
});

export const breadcrumbSchema = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
    { '@type': 'ListItem', position: 2, name, item: absoluteUrl(path) },
  ],
});
