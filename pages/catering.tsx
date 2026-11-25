import PageHeading from '../components/pageHeading';
import CateringPage from '../components/catering';
import { PageSeo } from '../components/seo/PageSeo';
import { JsonLd, breadcrumbSchema } from '../components/seo/JsonLd';

const CateringContent = () => {
    return (
      <>
        <PageSeo
          title="Taco Catering in Ontario, CA | Taco Nacion"
          description="Taco Nacion caters parties, office lunches and events in Ontario and the Inland Empire. Call (909) 906-2045 to book Mexican food catering."
          path="/catering"
        />
        <JsonLd id="breadcrumb-schema" data={breadcrumbSchema('Catering', '/catering')} />
        <PageHeading title="Catering" />
        <CateringPage />
      </>
    )
}

export default CateringContent
