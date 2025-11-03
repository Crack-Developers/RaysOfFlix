import React from "react";
import { useNavigate } from "react-router-dom";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/pro03.png";
import Img2 from "../../assets/pro2.png";
import Img3 from "../../assets/pro4.jpg";
import Img4 from "../../assets/pro01.jpg";
import Img5 from "../../assets/pro5.jpg";
import Img6 from "../../assets/pro02.jpeg";

const PlacesData = [
  {
    img: Img2,
    title: "Pradeep kumar Music Concert",
    location: "Chidambaram",
    description: "Promotional coverage for Pradeep Kumar's live music concert.",
    price: 2024,
    type: "Year",
  },
  {
    img: Img5,
    title: "Song Editing",
    location: "Chenni",
    description: "Edited Video for Album Song.",
    price: 2024,
    type: "Year",
  },
  {
    img: Img4,
    title: "Video Editing",
    location: "Chennai",
    description: "Edited a vlog for a Serial actor.",
    price: 2023,
    type: "Year",
  },
  {
    img: Img6,
    title: "Movie Intro Editing",
    location: "Chennai",
    description: "Designed Intro for Movies.",
    price: 2022,
    type: "Year",
  },
  {
    img: Img3,
    title: "Moodar Teaser",
    location: "Chennai",
    description: "Teaser for the movie Moodar.",
    price: 2020,
    type: "Year",
  },
  {
    img: Img1,
    title: "Presentation video",
    location: "Chennai",
    description: "Presentation video for Explora.",
    price: 2020,
    type: "Year",
  },
];

const Places = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleViewMoreClick = () => {
    navigate("./Projects");
    scrollToTop();
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Our Latest Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
      </section>
      <div className="flex justify-center mt-8">
        <button
          type="button"
          onClick={handleViewMoreClick}
          className="text-white bg-gradient-to-br from-gray-700 to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-500 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Places;
