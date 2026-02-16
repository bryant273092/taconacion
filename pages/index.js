import HOC from '../components/hoc';
import Banner from '../components/banner'
import LandingSection from '../components/landing'
import React from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',

    transform: 'translate(-50%, -50%)',
    width: "70%"
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)'
  }
};

const WrappedComponents = () => {
  return (
    <div>
      <html lang="en-US" />
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
