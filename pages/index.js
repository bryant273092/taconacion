import Images from '../components/images';
import HOC from '../components/hoc';
import Banner from '../components/banner'
import LandingSection from '../components/landing'


const WrappedComponents = () => {
  return (
    <div>
      <html lang="en" />
      <Banner />
      <LandingSection />
    </div>
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
