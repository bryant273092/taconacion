import Images from '../components/images';
import HOC from '../components/hoc';
import Banner from '../components/banner'


const WrappedComponents = () => {
  return (
    <>
      <html lang="en" />
      <Banner />
      {/* <Images /> */}
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
