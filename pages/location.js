import HOC from '../components/hoc';
import PageHeading from '../components/pageHeading'
import Map from '../components/map'

const WrappedComponents = () => {
  
    return (
      <>
        <PageHeading title="Location"></PageHeading>
        <Map />
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