import PageHeading from '../components/pageHeading';
import HOC from '../components/hoc';
import { Button, ButtonRow, Container, HeaderTwo, Lead } from '../components/layout';
import { PageSeo } from '../components/seo/PageSeo';
import { JsonLd, breadcrumbSchema } from '../components/seo/JsonLd';
import { site } from '../config/site';

const OrderContent = () => {
  return (
    <>
      <PageSeo
        title="Order Online | Taco Nacion – Takeout & Delivery in Ontario, CA"
        description="Order Taco Nacion online for pickup or get delivery through Grubhub. Fresh Mexican food in Ontario, CA."
        path="/order"
      />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema('Order Online', '/order')} />
      <PageHeading title="Order Online" />
      <Container>
        <HeaderTwo>Takeout or Delivery?</HeaderTwo>
        <Lead>Order ahead for pickup at our Ontario location, or get Taco Nacion delivered through Grubhub.</Lead>
        <ButtonRow>
          <Button title="Order takeout from Taco Nacion online" href={site.orderTakeoutUrl} target="_blank" rel="noopener noreferrer">
            Takeout
          </Button>
          <Button title="Order delivery from Taco Nacion on Grubhub" href={site.orderDeliveryUrl} target="_blank" rel="noopener noreferrer">
            Delivery
          </Button>
        </ButtonRow>
      </Container>
    </>
  )
}

export default HOC(OrderContent)
