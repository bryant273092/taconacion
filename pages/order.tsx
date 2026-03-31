import PageHeading from '../components/pageHeading'
import HOC from '../components/hoc';
import { Button, Container, HeaderTwo } from '../components/layout'
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';

const OrderContent = () => {
  return (
    <>
      <Head>
        {generateNextSeo({
          title: "Order Online | Taco Nacion - Delivery & Takeout Ontario CA",
          description: "Order Taco Nacion online for delivery or takeout. Available through Grubhub for delivery or directly for pickup at our Ontario, CA location.",
          canonical: "https://taco-nacion.com/order",
        })}
      </Head>
      <PageHeading title="Order Online"></PageHeading>
      <Container>
        <HeaderTwo>Place an Order for Delivery or Takeout</HeaderTwo>
        <Button title="Order Food Delivery From Taco Nacion Online through Postmates" href="https://www.grubhub.com/restaurant/taco-nacion-1119-s-milliken-ave-ontario/2567777">Delivery</Button>
        <Button title="Order Food Takeout From Taco Nacion Online" href="https://online.skytab.com/889a3304fe5c914d1b6b3eb906548eed">Takeout</Button>
      </Container>
    </>
  )
}

export default HOC(OrderContent)
