import React from 'react'
import Navbar from '../Navbar/Navbar'
import OurProjects from "../Projects/Places"
import Footer from '../Footer/Footer'
import Popup from "../Popup/Popup";

const Projects = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
    <Navbar handleOrderPopup={handleOrderPopup} />
    <br />
    <br />
      <OurProjects />
    <Footer/>
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  )
}

export default Projects