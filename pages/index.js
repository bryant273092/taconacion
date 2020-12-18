import Images from '../components/images';
import HOC from '../components/hoc';
import Banner from '../components/banner'
import LandingSection from '../components/landing'
import ReactModal from 'react-modal';
import CovidModal from '../components/covidModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CenteredDiv } from '../components/layout'

const customStyles = {
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
     
    transform             : 'translate(-50%, -50%)',
    width: "70%"
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)'
  }
};

const WrappedComponents = () => {
  const [modalIsOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <html lang="en-US" />
      <Banner />
      <LandingSection />

      <ReactModal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel={"COVID-19 Update"}>
        <a onClick={() => {
          setIsOpen(false)
        }}>
          <FontAwesomeIcon style={{ color: "red", fontSize: "30px" }} icon={faTimesCircle} />
        </a>
        <CenteredDiv>
          <CovidModal setIsOpen={setIsOpen} />
        </CenteredDiv>


      </ReactModal>


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
