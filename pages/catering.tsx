import PageHeading from '../components/pageHeading';
import HOC from '../components/hoc';
import CateringPage from '../components/catering'
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';

const CateringContent = () => {
    return (
      <>
        <Head>
          {generateNextSeo({
            title: "Catering | Taco Nacion - Mexican Food Catering Ontario CA",
            description: "Taco Nacion offers catering for all events in Ontario, California. Contact us to book catering for your next party or corporate event.",
            canonical: "https://taco-nacion.com/catering",
          })}
        </Head>
        <PageHeading title="Catering"></PageHeading>
        <CateringPage />
      </>
    )
}

export default HOC(CateringContent)
