import Head from 'next/head';
import Banner from '../components/banner';
import LandingSection from '../components/landing';
import { PageSeo } from '../components/seo/PageSeo';

const HomeContent = () => {
  return (
    <>
      <PageSeo
        title="Taco Nacion | Authentic Mexican Restaurant in Ontario, CA"
        description="Authentic Mexican food in Ontario, CA. Street tacos, breakfast burritos, seafood, birria ramen and $4.99 draft beer happy hour. Patio dining, takeout & delivery."
        path="/"
      />
      <Head>
        {/* Preload above-the-fold banner background — CSS backgrounds are invisible to the preload scanner */}
        <link rel="preload" as="image" href="/grill.webp" fetchPriority="high" />
      </Head>
      <Banner />
      <LandingSection />
    </>
  )
}

export default HomeContent
