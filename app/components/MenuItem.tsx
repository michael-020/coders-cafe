import React from 'react'

interface IMenuItem {
    imageURL: string,
    title: string,
    description: string
}

export const MenuItem = ({imageURL, title, description}: IMenuItem) => {
  return (
    <div className='h-60 w-72 flex flex-col items-center'>
        <img src={imageURL} width={200} height={200} />
        <h3 className='text-amber-500 font-extrabold text-xl'>{title}</h3>
        <p className='text-center'>{description}</p>
    </div>
  )
}
