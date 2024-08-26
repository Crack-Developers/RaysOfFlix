import React from "react";
import CImg from "../../assets/imglogo.jpeg";
import { BsCameraReelsFill } from "react-icons/bs";
import { BiSolidCameraHome } from "react-icons/bi";
import { PiVideoFill } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={CImg}
                  alt="biryani img"
                  className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  Rays Of Flix: From concept to creation.<br /> We make it happen.
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-8"
                >
                  We bring your vision to life with top-notch production services, 
                  delivering captivating films and dynamic advertisements with unmatched 
                  quality and creativity
                  <br />
                </p>
                <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 text-sm">
                    <BiSolidCameraHome size={20} />
                    <p className="text-gray-500 font-semibold">production</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <BsCameraReelsFill size={20} />
                    <p className="text-gray-500 font-semibold">short films</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <PiVideoFill size={20} />
                    <p className="text-gray-500 font-semibold">digital media and films</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <MdLocalMovies size={20} />
                    <p className="text-gray-500 font-semibold">multimedia entertainment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
