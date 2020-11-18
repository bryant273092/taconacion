import HOC from '../components/hoc';
import Banner from '../components/banner'

const WrappedComponents = () => {
  return (
    <>
      <Banner />
    </>
  )
}
export default function Home() {
  
  const Page = HOC(WrappedComponents)
  return (
    <>
      <Page />
    </>
  )
}
