import React from "react";
import Footer from "../Footer/Footer";
import Location from "../Location/Location";
import Navbar from "../Navbar/Navbar";
import Popup from "../Popup/Popup";
import founderImg from "../../assets/founderIMG.jpg"; // ensure this is in jpg/png format

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
            About Us
          </h1>

          {/* Founder Section */}
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-10">
            <div className="flex justify-center lg:w-1/2">
              <div className="w-[280px] aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={founderImg}
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold">Mohan</h2>
              <p className="text-lg font-semibold mt-2 mb-4">
                Founder & Managing Director
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mohan, Founder and Managing Director of Rays of Flix, drives the
                company’s excellence in creating innovative entertainment and
                digital media solutions.
              </p>
            </div>
          </div>

          {/* About Company Section */}
          <div>
            <p className="text-gray-800 leading-relaxed">
              Welcome to Rays of Flix!
              <br />
              <br />
              At Rays of Flix, we are passionate about bringing stories to life
              through the magic of film and multimedia. Established with a
              vision to create captivating and high-quality entertainment, we
              specialize in the development, creation, production, and
              post-production of motion picture films, including short films and
              multimedia entertainment content.
              <br />
              <br />
              Our team of dedicated professionals works tirelessly to craft
              compelling narratives and stunning visuals that resonate with
              audiences worldwide. From the initial concept to the final cut, we
              are committed to excellence in every aspect of the filmmaking
              process.
              <br />
              <br />
              With a blend of creativity, innovation, and technical expertise,
              Rays of Flix is your go-to destination for all your entertainment
              needs. We pride ourselves on our ability to transform ideas into
              reality, delivering content that entertains, inspires, and
              engages.
            </p>
          </div>
        </div>
      </div>

      <Location />
      <div className="mt-10">
        <Footer />
      </div>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default AboutUs;
