import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702_1280.jpg'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
          Hotels with Private Beach in India
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
          We are a part of your vacation. A piece that always stays with you even when you depart for your next journey. To choose us is to make lifelong memories under the spell of sea, beach and sun. 
          </p>
          <button className='bg-white text-black '>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
