import React from 'react';
import PlaceCard from './PlaceCard';
import Img1 from '../../assets/arcmobiles.jpg';
import Img2 from '../../assets/pro2.png';
import Img3 from '../../assets/pro4.jpg';
import Img4 from '../../assets/pro3.jpeg';
import Img5 from '../../assets/pro5.jpg';
import Img6 from '../../assets/pro6.jpg';
import Img7 from '../../assets/pro01.jpg';
import Img8 from '../../assets/pro04.jpg';
import Img9 from '../../assets/pro05.jpg';
import Img10 from '../../assets/pro06.jpg';
import Img11 from '../../assets/pro07.jpg';
import Img12 from '../../assets/pro08.jpg';
import Img13 from '../../assets/pro02.jpeg';
import Img14 from '../../assets/pro03.png';
import Img15 from '../../assets/pro09.png';
import Img16 from '../../assets/pro10.jpeg';
import Img17 from '../../assets/pro11.jpeg';

const PlacesData = [
  {
    img: Img2,
    title: 'Pradeep kumar Music Concert',
    location: 'Chidambaram',
    description:"Promotional coverage for Pradeep Kumar's live music concert.",
    price: 2024,
    type: 'Year',
  },
  {
    img: Img5,
    title: 'Song Editing',
    location: 'Chenni',
    description:'Edited Video for Album Song.',
    price: 2024,
    type: 'Year',
  },
  {
    img: Img16,
    title: 'Video Production and Editing',
    location: 'Chenni',
    description:'Filmed and edited video advertisement for wild honey shop.',
    price: 2024,
    type: 'Year',
  },
  {
    img: Img4,
    title: 'Logo Designing',
    location: 'Chennai',
    description: 'Designed a logo for JIV Tamil World.',
    price: 2023,
    type: 'Year',
  },
  {
    img: Img7,
    title: 'Video Editing',
    location: 'Chennai',
    description: 'Edited a vlog for a Serial actor.',
    price: 2023,
    type: 'Year',
  },
  {
    img: Img8,
    title: 'Video Editing',
    location: 'Chennai',
    description: 'Edited a vlog for a Serial actor.',
    price: 2023,
    type: 'Year',
  },
  {
    img: Img9,
    title: 'Video Editing',
    location: 'Chennai',
    description: 'Edited a vlog for a Serial actor.',
    price: 2023,
    type: 'Year',
  },
  {
    img: Img10,
    title: 'Video Editing',
    location: 'Chennai',
    description: 'Edited a vlog for a Serial actor.',
    price: 2023,
    type: 'Year',
  },
  {
    img: Img11,
    title: 'Video Editing',
    location: 'Chennai',
    description: 'Edited a vlog for a Serial actor.',
    price: 2023,
    type: 'Year',
  },
  {
    img: Img12,
    title: 'Video Editing',
    location: 'Chennai',
    description: 'Edited a vlog for a Youtuber.',
    price: 2023,
    type: 'Year',
  },
  {
    img: Img6,
    title: 'Movie Name Designing',
    location: 'Chennai',
    description:'Designed titles for movies.',
    price: 2023,
    type: 'Year',
  },
  {
    img: Img17,
    title: 'Video Production and Editing',
    location: 'Chenni',
    description:'Filmed and edited video advertisement for Construction Company.',
    price: 2022,
    type: 'Year',
  },
  {
    img: Img13,
    title: 'Movie Intro Editing',
    location: 'Chennai',
    description: 'Designed introduction for movies.',
    price: 2022,
    type: 'Year',
  },
  {
    img: Img14,
    title: 'Presentation video',
    location: 'Chennai',
    description: 'Presentation video for Explora.',
    price: 2020,
    type: 'Year',
  },
  {
    img: Img3,
    title: 'Moodar Teaser',
    location: 'Chennai',
    description:"Teaser for the movie 'Moodar'.",
    price: 2020,
    type: 'Year',
  },
  {
    img: Img15,
    title: 'DHL Presentation video',
    location: 'Chennai',
    description: 'Presentation video for DLH.',
    price: 2020,
    type: 'Year',
  },
  {
    img: Img1,
    title: 'Arc Mobile',
    location: 'France',
    description: 'Advertisement for the network company Arc Mobiles.',
    price: 2017,
    type: 'Year',
  },
];

const Places = ({ handleOrderPopup }) => {
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
    </div>
  );
};

export default Places;
