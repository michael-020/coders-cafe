import React from 'react'

const Purchase = () => {
  return (
    <div className='h-[444px] w-screen  mt-16 '>
          <div className='flex px-44 py-12 '>
            {/* left part */}
            <div className='w-1/2 flex flex-col gap-12'>
              <div>
                <h4 className='text-4xl font-bold font-serif'>Buy our products <br/> from anywhere</h4>
              </div>
              <div className='grid grid-cols-3 gap-2 w-[24rem]'>
                <input type='text' placeholder='Name' className='col-span-1 rounded-md px-3 py-2 border-2 border-gray-300 mb-6' />
                <input type='text' placeholder='Email' className='col-span-2 rounded-md px-3 py-2 border-2 border-gray-300 mb-6 ml-2' />
                <input type='text' placeholder='Country' className='col-span-2 rounded-md px-3 py-2 border-2 border-gray-300 mr-2'/>
                <input type='text' placeholder='Zipcode' className='col-span-1 rounded-md px-3 py-2 border-2 border-gray-300' />
                <button className='w-[24rem] bg-amber-500 py-2 rounded-md mt-6'>Order Now</button>
              </div>
            </div>

            {/* right part */}
            <div>
              <div>
                <img src="world-map.png" width={500} />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Purchase