import React from 'react'
import Button from './Button'

function Pumaxpleasure() {
    return (
        <div className=' relative flex justify-center items-center'>
            <div className='pumaxpleasure'>        
            </div>
            <div className='absolute sm:top-[40%] md:top-auto text-center md:backdrop-blur-none sm:backdrop-blur-md sm:py-3 sm:px-2 md:invert-0 sm:invert-[5%]'>
                    <h1 className=' md:text-3xl sm:text-xl text-5xl  text-white font-bold uppercase'>Puma x Pleasure</h1>
                    <p className='mt-3 md:text-xl sm:text-xs text-2xl text-white  uppercase'>Satisfaction guaranted</p>
                    <p className=' mt-2 mb-6  text-xs  text-white'>Collection Worn by Virat Kohli</p>
                    <Button className='text-black bg-white' text={"Shop Now"} />
                </div>
        </div>
  )
}

export default Pumaxpleasure