import React from 'react'
import Button from './Button'

function Hero() {
 
    
  return (
    <>
     
    <div className='text-center relative'>
        <div className=''>
            <img className='object-cover md:pt-20 md:block sm:hidden relative' src="https://cdn.sanity.io/images/qa41whrn/staging/988d9b1f291fb4692b4cd52d6b4338d3ec9942e7-2880x1040.jpg?w=2160&q=80&auto=format" />
            <img className='pt-10 md:hidden' src='https://cdn.sanity.io/images/qa41whrn/staging/d6f8ef67f9821e3c2e405cee3b812db19e61f0b5-1536x1536.jpg?w=720&q=80&auto=format'/>
        </div>
        <div className='absolute md:top-[15rem] md:left-3 sm:ml-[10vw]'>
            <h1 className='md:text-5xl sm:text-2xl text-5xl font-bold text-center'>New & Trending</h1>
            <p className='md:text-2xl sm:text-lg text-2xl font-medium text-left uppercase'>Level up your style game</p>
            <div className='flex pt-2 flex-row gap-4'>
                <Button className='bg-black text-white' href={`/Men`} text={"Men"}/>
                <Button className='bg-black text-white' href={`/Women`} text={"Women"}/>
                <Button className='bg-black text-white' href={`/Kid`} text={"Kids"}/>
            </div>
        </div>    
    </div>
    </>
  )
}

export default Hero