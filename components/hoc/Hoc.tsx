import Head from 'next/head';
import NavBar from '../navBar';
import Footer from '../footer';
import { generateDefaultSeo } from 'next-seo/pages';
import { defaultSeo } from '../../config/seo';
import { JsonLd, restaurantSchema, websiteSchema } from '../seo/JsonLd';
import { ComponentType } from 'react';
import { MobileActionBar, ActionBarSpacer } from '../actionBar/MobileActionBar';

export const HOC = <P extends object>(Content: ComponentType<P>) => {
    const WrappedComponent = (props: P) => {
        return (
            <>
                <Head>{generateDefaultSeo(defaultSeo)}</Head>
                <JsonLd id="restaurant-schema" data={restaurantSchema} />
                <JsonLd id="website-schema" data={websiteSchema} />
                <a className="skip-link" href="#main-content">Skip to content</a>
                <NavBar />
                <main id="main-content">
                    <Content {...props} />
                </main>
                <Footer />
                <ActionBarSpacer />
                <MobileActionBar />
            </>
        );
    };

    return WrappedComponent;
}
