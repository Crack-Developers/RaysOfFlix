import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from "../About/About";
import Popup from "../Popup/Popup";

const OurServices = () => {
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
            Our Services
          </h1>
          <p>
            <strong>Film Production</strong><br /><br />
            <strong>Development & Creation:</strong> We take your ideas from concept to script, ensuring a strong foundation for your project. Our creative team collaborates closely with writers and directors to develop engaging and original content.<br /><br />
            <strong>Production:</strong> Our experienced production team manages all aspects of filming, from casting and location scouting to directing and cinematography. We ensure a smooth and efficient production process, bringing your vision to life on screen.<br /><br />
            <strong>Post-Production:</strong> Our post-production services include editing, color grading, sound design, and more. We utilize cutting-edge technology to enhance your film and create a polished final product.<br /><br />
            <strong>Multimedia Entertainment Content</strong><br /><br />
            <strong>Online Platforms:</strong> We produce high-quality entertainment programs tailored for various online platforms. Our content is designed to capture the attention of digital audiences, providing engaging and memorable viewing experiences.<br /><br />
            <strong>Special Effects & Animation:</strong> Our post-production services extend to special effects and animation, adding an extra layer of creativity to your projects. From CGI to motion graphics, our talented team brings your ideas to life with stunning visual effects.<br /><br />
            <strong>Audio & Digital Media</strong><br /><br />
            <strong>Audio Production:</strong> We offer comprehensive audio production services, including sound recording, mixing, and mastering. Our audio experts ensure that your content sounds as good as it looks.<br /><br />
            <strong>Digital Media:</strong> Whether it's web series, digital shorts, or social media content, we create impactful digital media that reaches and resonates with your target audience.
          </p>
        </div>
      </div>
      <About />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default OurServices;
