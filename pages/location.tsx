import HOC from '../components/hoc';
import PageHeading from '../components/pageHeading';
import Map from '../components/map';
import { PageSeo } from '../components/seo/PageSeo';
import { JsonLd, breadcrumbSchema } from '../components/seo/JsonLd';

const LocationContent = () => {
    return (
      <>
        <PageSeo
          title="Location & Hours | Taco Nacion – Ontario, CA"
          description="Visit Taco Nacion at 1119 S Milliken Ave STE G, Ontario, CA 91761. Open Mon–Sat from 7:00 AM. Get directions, hours and phone number."
          path="/location"
        />
        <JsonLd id="breadcrumb-schema" data={breadcrumbSchema('Location', '/location')} />
        <PageHeading title="Location & Hours" />
        <Map />
      </>
    )
}

export default HOC(LocationContent)
