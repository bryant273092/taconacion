import Head from 'next/head';
import NavBar from '../navBar';
import Footer from '../footer';
import { generateDefaultSeo } from 'next-seo/pages';
import { LocalBusinessJsonLd } from 'next-seo';
import config from '../../config/seo.json';
import { ComponentType } from 'react';

export const HOC = <P extends object>(Content: ComponentType<P>) => {
    const WrappedComponent = (props: P) => {
        return (
            <>
                <Head>{generateDefaultSeo(config)}</Head>
                <LocalBusinessJsonLd
                    type="MexicanRestaurant"
                    scriptId="local-business-schema"
                    name="Taco Nacion"
                    url="https://taco-nacion.com"
                    telephone="+19099062045"
                    address={{
                        streetAddress: "1119 S Milliken Ave STE G",
                        addressLocality: "Ontario",
                        addressRegion: "CA",
                        postalCode: "91761",
                        addressCountry: "US",
                    }}
                    image="https://taco-nacion.com/taco_nacion_logo.webp"
                    sameAs={[
                        "https://www.instagram.com/taco.nacion/",
                        "https://www.yelp.com/biz/taco-nacion-ontario",
                    ]}
                    openingHoursSpecification={[
                        { opens: "07:30", closes: "18:00", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"] },
                        { opens: "07:30", closes: "19:00", dayOfWeek: ["Friday"] },
                        { opens: "07:30", closes: "14:30", dayOfWeek: ["Saturday"] },
                    ]}
                />
                <NavBar />
                <Content {...props} />
                <Footer />
            </>
        );
    };

    return WrappedComponent;
}