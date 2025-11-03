import React from "react";
import footerLogo from "../../assets/imglogo.jpeg";
import Banner from "../../assets/footer.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterImpLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/aboutus",
  },
  {
    title: "Contact",
    link: "#",
  },
  {
    title: "Services",
    link: "#",
  },
];

const FooterLinks = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/groups/13052787/",
  },
  {
    title: "Face Book",
    link: "https://www.facebook.com/Raysofflixproductions?mibextid=ZbWKwL",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/rays_of_flix_productions?igsh=a2hmN2RtcTN4NjB1",
  },
  {
    title: "Youtube",
    link: "https://youtube.com/@RaysofFlix?si=D-_4pC7xCi33A8Hi",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[200px]" />
            </h1>
            <p></p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterImpLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Social Media
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/rays_of_flix_productions?igsh=a2hmN2RtcTN4NjB1">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/Raysofflixproductions?mibextid=ZbWKwL">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://youtube.com/@RaysofFlix?si=D-_4pC7xCi33A8Hi">
                  <FaYoutube className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Chennai, Tamil Nadu</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 93600 19584</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
