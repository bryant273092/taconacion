import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import { absoluteUrl } from '../../config/site';

interface PageSeoProps {
  title: string;
  description: string;
  path: string;
}

// Per-page meta: title, description, canonical, and matching Open Graph tags.
export const PageSeo = ({ title, description, path }: PageSeoProps) => (
  <Head>
    {generateNextSeo({
      title,
      description,
      canonical: absoluteUrl(path),
      openGraph: {
        url: absoluteUrl(path),
        title,
        description,
      },
    })}
  </Head>
);
