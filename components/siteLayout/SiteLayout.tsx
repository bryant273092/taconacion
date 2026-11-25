import Head from 'next/head';
import { ReactNode } from 'react';
import { generateDefaultSeo } from 'next-seo/pages';
import NavBar from '../navBar';
import Footer from '../footer';
import { MobileActionBar, ActionBarSpacer } from '../actionBar/MobileActionBar';
import { JsonLd, restaurantSchema, websiteSchema } from '../seo/JsonLd';
import { defaultSeo } from '../../config/seo';

// Persistent site chrome, rendered once in _app so the nav, footer and action bar
// stay mounted across client-side navigations (no remount flash between pages).
// Pages render their own <PageSeo>, which overrides these defaults.
export const SiteLayout = ({ children }: { children: ReactNode }) => (
    <>
        <Head>{generateDefaultSeo(defaultSeo)}</Head>
        <JsonLd id="restaurant-schema" data={restaurantSchema} />
        <JsonLd id="website-schema" data={websiteSchema} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
        <ActionBarSpacer />
        <MobileActionBar />
    </>
);

export default SiteLayout;
