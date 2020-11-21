import PageHeading from '../components/pageHeading';
import { Container, HeaderTwo, HeaderThree, Button, Image, Text } from '../components/layout';
import HOC from '../components/hoc';

const WrappedComponents = () => {
  
    return (
      <>
        <PageHeading title="Contact"></PageHeading>
        <Container>
          <HeaderTwo>Reach out to us</HeaderTwo>
          <HeaderThree>(909)906-2045</HeaderThree>
          <Button> Call Now</Button>
        </Container>
      </>
    )
  }
  export default function Contact() {
    
    const Page = HOC(WrappedComponents)
    return (
      <>
        <Page />
      </>
  
    )
  }