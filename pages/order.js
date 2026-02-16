import PageHeading from '../components/pageHeading'
import HOC from '../components/hoc';
import { HeaderOne, Button, Container, HeaderTwo, HeaderThree, Grid } from '../components/layout'

const WrappedComponents = () => {

  return (
    <>
      <PageHeading title="Order Online"></PageHeading>
      <Container>
        <HeaderTwo>Place an Order for Deilvery or Takeout</HeaderTwo>
        {/* <Grid>
          <HeaderThree>Order for Delivery</HeaderThree>
          <HeaderThree>Order for Pickup</HeaderThree>
        </Grid> */}

        <Button title="Order Food Delivery From Taco Nacion Online through Postmates" href="https://www.grubhub.com/restaurant/taco-nacion-1119-s-milliken-ave-ontario/2567777">Delivery</Button>
        <Button title="Order Food Takeout From Taco Nacion Online"href="https://online.skytab.com/889a3304fe5c914d1b6b3eb906548eed">Takeout</Button>


      </Container>

    </>
  )
}
export default function Order() {

  const Page = HOC(WrappedComponents)
  return (
    <>
      <Page />
    </>

  )
}