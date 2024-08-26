import React from "react";
import Footer from "../Footer/Footer";
import Location from "../Location/Location";
import Navbar from "../Navbar/Navbar";
import Popup from "../Popup/Popup";

const AboutUs = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <div className="container pt-14">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Welcome to Rays of Flix!<br /><br />
            At Rays of Flix, we are passionate about bringing stories to life through the magic of film and multimedia. Established with a vision to create captivating and high-quality entertainment, we specialize in the development, creation, production, and post-production of motion picture films, including short films and multimedia entertainment content.<br /><br />
            Our team of dedicated professionals works tirelessly to craft compelling narratives and stunning visuals that resonate with audiences worldwide. From the initial concept to the final cut, we are committed to excellence in every aspect of the filmmaking process.<br /><br />
            With a blend of creativity, innovation, and technical expertise, Rays of Flix is your go-to destination for all your entertainment needs. We pride ourselves on our ability to transform ideas into reality, delivering content that entertains, inspires, and engages.
          </p>
        </div>
      </div>
      <Location />
      <br /><br />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default AboutUs;
