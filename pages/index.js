import HOC from '../components/hoc';
import Banner from '../components/banner'
import Images from '../components/images';
import 'bootstrap/dist/css/bootstrap.min.css';
const WrappedComponents = () => {
  return (
    <>
      <Banner />
      <Images />
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
