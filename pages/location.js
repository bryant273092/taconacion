import HOC from '../components/hoc';
import PageHeading from '../components/pageHeading'

const WrappedComponents = () => {
  
    return (
      <>
        <PageHeading title="Location"></PageHeading>
      </>
    )
  }
  export default function Location() {
    
    const Page = HOC(WrappedComponents)
    return (
      <>
        <Page />
      </>
  
    )
  }