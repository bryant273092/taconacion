import PageHeading from '../components/pageHeading';
import HOC from '../components/hoc';
import CateringPage from '../components/catering'

const WrappedComponents = () => {
  
    return (
      <>
        <PageHeading title="Catering"></PageHeading>
        <CateringPage />
      </>
    )
  }
  export default function Catering() {
    
    const Page = HOC(WrappedComponents)
    return (
      <>
        <Page />
      </>
  
    )
  }