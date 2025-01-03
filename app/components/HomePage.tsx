import React from 'react'
import Navbar from './Navbar';

 const HomePage = () => {
  return (
    <div>
      <div>
        <img src='bg-slate.png' />
      </div>
      <div className='fixed top-0 '>
        <Navbar />
      </div>
    </div>
  )
}

export default HomePage;