import React from 'react';
import video from '../../assets/hero.mp4';
import Text from '../../assets/herotext.png';

const Hero = ({ handleOrderPopup }) => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src={video}
        autoPlay
        loop
        muted
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-full' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto p-4'>
          <p className='text-sm md:text-base'>All Inclusive</p>
          <div className='font-bold text-5xl md:text-7xl' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
            <img src={Text} alt="Rays Of Flix" className='w-3/4 md:w-1/2 h-auto md:ml-0' style={{ marginLeft: '-3%' }} />
            {/* Adjust margin-left as needed */}
          </div>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-sm md:text-xl'>
            Unleashing Creativity, Crafting Excellence<br />
            From Vision to Reality, We Tell Your Story<br />
            Innovative Productions, Memorable Experiences<br />
            Your Dreams, Our Passion, Boundless Possibilities
          </p>
          <button
            className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-full"
            onClick={handleOrderPopup}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
