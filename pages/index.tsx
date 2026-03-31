import HOC from '../components/hoc';
import Banner from '../components/banner'
import LandingSection from '../components/landing'
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';

const HomeContent = () => {
  return (
    <div>
      <Head>
        {generateNextSeo({
          title: "Taco Nacion | Authentic Mexican Restaurant in Ontario, CA",
          description: "Taco Nacion serves authentic Mexican food including street tacos, burritos, seafood, and more in Ontario, California. Patio dining available.",
          canonical: "https://taco-nacion.com/",
        })}
        {/* Preload above-the-fold banner background — CSS backgrounds are invisible to the preload scanner */}
        <link rel="preload" as="image" href="/grill.webp" fetchPriority="high" />
      </Head>
      <Banner />
      <LandingSection />
    </div>
  )
}

export default HOC(HomeContent)
