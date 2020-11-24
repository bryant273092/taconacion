import PageHeading from '../components/pageHeading'
import HOC from '../components/hoc';
import {HeaderOne} from '../components/layout'

const WrappedComponents = () => {
  
    return (
      <>
        <PageHeading title="Order Online"></PageHeading>
        <HeaderOne>Coming Soon...</HeaderOne>
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