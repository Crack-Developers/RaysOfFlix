import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Routes/Home';
import About from './Components/Routes/AboutUs'
import OurServices from './Components/Routes/OurServices'
import Projects from './Components/Routes/Projects'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/ourservices" element={<OurServices />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;
