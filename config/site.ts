// Single source of truth for business info (NAP, hours, links).
// Used by structured data, footer, and location page so they never drift apart.

export const SITE_URL = 'https://taco-nacion.com';

export const site = {
  name: 'Taco Nacion',
  url: SITE_URL,
  phone: '+19099062045',
  phoneDisplay: '(909) 906-2045',
  priceRange: '$$',
  cuisine: ['Mexican', 'Tacos', 'Seafood', 'Breakfast'],
  address: {
    streetAddress: '1119 S Milliken Ave STE G',
    addressLocality: 'Ontario',
    addressRegion: 'CA',
    postalCode: '91761',
    addressCountry: 'US',
  },
  addressDisplay: '1119 S Milliken Ave STE G, Ontario, CA 91761',
  geo: { latitude: 34.052728, longitude: -117.557599 },
  directionsUrl:
    'https://maps.apple.com/?address=1119%20S%20Milliken%20Ave,%20Unit%20G,%20Ontario,%20CA%20%2091761,%20United%20States&auid=18390287420442012809&ll=34.052728,-117.557599&lsp=9902&q=Taco%20Nacion&_ext=ChkKBQgEEOIBCgQIBRADCgQIBhAUCgQIChAAEiYpCSJBmCwGQUAxwU38hAhkXcA5h/dm9FIHQUBBN9fE4FZjXcBQBA%3D%3D',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d211880.4777792414!2d-117.575223!3d33.9248577!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x80c3351b7666baad%3A0x7fc95fd75e8370cd!2sTaco%20Nacion%2C%201119%20S%20Milliken%20Ave%20STE%20G%2C%20Ontario%2C%20CA%2091761!3m2!1d34.0523891!2d-117.5576833!5e0!3m2!1sen!2sus!4v1605662579084!5m2!1sen!2sus',
  orderDeliveryUrl: 'https://www.grubhub.com/restaurant/taco-nacion-1119-s-milliken-ave-ontario/2567777',
  orderTakeoutUrl: 'https://online.skytab.com/889a3304fe5c914d1b6b3eb906548eed',
  social: {
    instagram: 'https://www.instagram.com/taco.nacion/',
    yelp: 'https://www.yelp.com/biz/taco-nacion-ontario',
  },
  // Display rows + schema.org spec derived from the same data
  hours: [
    { label: 'Mon–Thu', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '07:30', closes: '18:00', display: '7:30 AM – 6:00 PM' },
    { label: 'Fri', days: ['Friday'], opens: '07:30', closes: '19:00', display: '7:30 AM – 7:00 PM' },
    { label: 'Sat', days: ['Saturday'], opens: '07:30', closes: '14:30', display: '7:30 AM – 2:30 PM' },
    { label: 'Sun', days: [], opens: '', closes: '', display: 'Closed' },
  ],
} as const;

export const absoluteUrl = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;
