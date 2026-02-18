import HOC from '../components/hoc';
import PageHeading from '../components/pageHeading'
import Map from '../components/map'
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';

const LocationContent = () => {
    return (
      <>
        <Head>
          {generateNextSeo({
            title: "Location & Hours | Taco Nacion - Ontario CA",
            description: "Find Taco Nacion at 1119 S Milliken Ave STE G, Ontario, CA 91761. Open Monday-Saturday. Get directions and hours.",
            canonical: "https://taco-nacion.com/location",
          })}
        </Head>
        <PageHeading title="Location"></PageHeading>
        <Map />
      </>
    )
}

export default HOC(LocationContent)
