import PageHeading from '../components/pageHeading'
import HOC from '../components/hoc';

const WrappedComponents = () => {
  
    return (
      <>
        <PageHeading title="Order Online"></PageHeading>
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