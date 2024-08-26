import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Facts from '../Facts/Facts';
import Projects from '../Projects/HomePlaces';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Loading from '../Loading';

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar handleOrderPopup={handleOrderPopup} />
          <Hero handleOrderPopup={handleOrderPopup} />
          <About />
          <Facts />
          <Projects />
          <Footer />
          <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </>
      )}
    </>
  );
};

export default Home;
