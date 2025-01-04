import React from 'react'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Menu from './Menu';
import Purchase from './Purchase';


 const HomePage = () => {
  return (
    <div className='relative w-screen overflow-x-hidden '>
      
      <div className='absolute top-0 z-30 w-full'>
        <Navbar />
      </div>
      <div className='relative  w-full'>
        <HeroSection />

      </div>
      <div className="absolute top-[100%]">
          <Menu />
          <div className='translate-y-20'>
            <Purchase />
          </div>
          
      </div>
     
    </div>
  )
}

export default HomePage;