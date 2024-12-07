'use client'
import React, { useState, useEffect } from 'react';

const VerticalDotIndicator = () => {
  // State to track the active dot
  const [activeDot, setActiveDot] = useState(1);

  // Scroll event handler
  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Update the active dot based on scroll position
    if (scrollY < 500) {
      setActiveDot(1);  // Active dot for the top section
    } else if (scrollY >= 500 && scrollY < 1000) {
      setActiveDot(2);  // Active dot for the second section
    } else if (scrollY >= 1000 && scrollY < 1500) {
      setActiveDot(3);  // Active dot for the third section
    } else {
      setActiveDot(4);  // Active dot for the fourth section
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //
  return (
    <div className="hidden fixed top-1/2 right-4 transform -translate-y-1/2 md:flex flex-col justify-evenly items-center space-y-4">
      <div className='w-8 h-32 bg-gray-600 rounded-full flex flex-col justify-evenly items-center p-2'>
      <div className={`w-2 h-2 ${activeDot === 1 ? 'bg-yellow-500' : 'bg-white'} rounded-full transition-all`} />
      <div className={`w-2 h-2 ${activeDot === 2 ? 'bg-yellow-500' : 'bg-white'} rounded-full transition-all`} />
      <div className={`w-2 h-2 ${activeDot === 3 ? 'bg-yellow-500' : 'bg-white'} rounded-full transition-all`} />
      <div className={`w-2 h-2 ${activeDot === 4 ? 'bg-yellow-500' : 'bg-white'} rounded-full transition-all`} />
   
      </div>
    </div>
  );
};

export default VerticalDotIndicator;
