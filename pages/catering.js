import PageHeading from '../components/pageHeading';
import HOC from '../components/hoc';

const WrappedComponents = () => {
  
    return (
      <>
        <PageHeading title="Catering"></PageHeading>
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