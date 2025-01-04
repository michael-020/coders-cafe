import React from 'react'

const DownloadCard = () => {
  return (
    <div className='h-[444px] w-screen  rounded-lg relative'>
      <div className='grid place-content-center px-28 rounded-lg'>
        <img src='coffee-cover.png'  className='object-contain rounded-3xl' />
      </div>
      {/* download section */}
      <div className='w-96 absolute top-28 right-56 flex flex-col gap-5'>
        <div className='text-center flex flex-col gap-5'>
          <h3 className='font-bold text-3xl'>Download the app</h3>
          <p>Lorem ipsum dolor sit amet consedolor sit amet <br /> consectetur adipisicing elit. Officiis</p>
        </div>
        <div className='grid grid-cols-2'>
          <button>
              <img src='app_store.png' />
          </button>
          <button>
              <img src="play_store.png" />
          </button>
        </div>
      </div>
    </div>  
  )
}

export default DownloadCard