import React from 'react'
import Button from './Button'

function Neymar() {
  return (<>
  <div className='m-2 md:mb-0 sm:mb-36 flex flex-row relative'>
    <div className='neymar md:relative '>
    </div>
    <div className='ml-8 mb-40 sm:mt-4 sm:top-[100%] text-center md:top-[40%] absolute  md:self-center sm:self-end flex flex-col'>
    <h1 className='uppercase md:text-4xl sm:text-2xl font-bold'>PROJECT FUTURE</h1>
     <h3 className='mb-4 text-xl sm:text-base'>PUMA x INSTITUTO NEYMAR JR</h3>
     <Button className='bg-black text-white' text={"Shop Now"}/>
     </div>
     </div>
     </>
    )
}

export default Neymar