import PageHeading from '../components/pageHeading';
import HOC from '../components/hoc';

const WrappedComponents = () => {
  
    return (
      <>
        <PageHeading title="Contact"></PageHeading>
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