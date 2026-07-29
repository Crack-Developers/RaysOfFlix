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
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Rays of Flix" className="max-w-[200px]" />
            </h1>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Links */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Links</h1>

                <ul className="flex flex-col gap-3">
                  {FooterImpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Social Media</h1>

                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/rays_of_flix_productions?igsh=a2hmN2RtcTN4NjB1">
                  <FaInstagram className="text-3xl hover:text-pink-500 duration-300" />
                </a>

                <a href="https://www.facebook.com/Raysofflixproductions?mibextid=ZbWKwL">
                  <FaFacebook className="text-3xl hover:text-blue-500 duration-300" />
                </a>

                <a href="https://youtube.com/@RaysofFlix?si=D-_4pC7xCi33A8Hi">
                  <FaYoutube className="text-3xl hover:text-red-500 duration-300" />
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

      {/* Copyright Section */}
      <div className="border-t border-gray-600 py-5">
        <div className="container text-center">
          <p className="text-gray-200 text-base">
            © 2026 <span className="font-semibold">Rays of Flix</span>. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-gray-300">
            Developed By{" "}
            <a
              href="https://crackdevelopers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-red-400 transition duration-300"
            >
              crackdevelopers.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
