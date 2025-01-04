import React from 'react'
import { MenuItem } from './MenuItem'

const Menu = () => {
  return (
    <div className='h-[444px] w-screen px-44 py-12 '>
      <div className=' h-full  flex flex-col items-center gap-5'>
        {/* heading */}
        <div className=''>
          <h4 className='text-center text-3xl font-bold'>
            <span className=''>Fresh and </span> <span className='text-amber-500'>Tasty coffee</span>
          </h4>
          <p className='text-center my-2'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum <br></br> ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga.
          </p>
        </div>
        {/* menu items */}
        <div className='grid grid-cols-3 gap-16 justify-items-stretch mt-8'>
          <MenuItem imageURL='black-coffee.png' title='Black Coffee' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          <div className="relative -top-12 -z-10">

            <MenuItem  imageURL='hot-coffee-2.png' title='Hot Coffee' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          </div>
          <MenuItem imageURL='cold-coffee.png' title='Cold Coffee' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
        </div>
      </div>
    </div>
  )
}

export default Menu