import PageHeading from '../components/pageHeading';
import HOC from '../components/hoc';
import MenuList from '../components/menuList';

const WrappedComponents = () => {
  
    return (
      <>
        <PageHeading title="Menu"></PageHeading>
        <MenuList />
      </>
    )
  }
  export default function Menu() {
    
    const Page = HOC(WrappedComponents)
    return (
      <>
        <Page />
      </>
  
    )
  }