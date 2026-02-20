import Head from 'next/head';

const schema = {
  "@context": "https://schema.org",
  "@type": "MexicanRestaurant",
  "name": "Taco Nacion",
  "url": "https://taco-nacion.com",
  "telephone": "+19099062045",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1119 S Milliken Ave STE G",
    "addressLocality": "Ontario",
    "addressRegion": "CA",
    "postalCode": "91761",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.052728,
    "longitude": -117.557599
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "07:30",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "07:30",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "07:30",
      "closes": "14:30"
    }
  ],
  "servesCuisine": "Mexican",
  "priceRange": "$$",
  "image": "https://taco-nacion.com/taco_nacion_logo.webp",
  "sameAs": [
    "https://www.instagram.com/taco.nacion/",
    "https://www.yelp.com/biz/taco-nacion-ontario"
  ]
};

export const LocalBusinessSchema = () => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  </Head>
);
