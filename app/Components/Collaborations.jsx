import React from 'react'
import Button from './Button'

function Collaborations() {
  return (<>
     <h1 className='text-center sm:text-xl md:text-2xl font-bold my-3 uppercase'>Latest in collaborations</h1>
    <div className='flex md:flex-row sm:flex-col'>
     <div className='p-5 text-center'>
      <img className='' src='https://cdn.sanity.io/images/qa41whrn/staging/cccebe003a3d94b52506ff94f10fe0bf760f473a-1536x1536.jpg?w=720&q=80&auto=format'/>
      <p className='uppercase text-lg font-bold mt-[10px]'>Puma x staple</p>
      <p className='uppercase text-xs font-normal mb-[20px]'>COLLEGIATE CLASSICS, REIMAGINED
</p>
      <Button className=' text-white bg-black px-20' text={"Shop Now"} />
     </div>
     <div className='p-5 text-center'>
     <img className='' src='https://cdn.sanity.io/images/qa41whrn/staging/9172eb822933e6b6beeb6880dfa1d0505d17092d-1280x1280.jpg?w=720&q=80&auto=format'/>
      <p className='uppercase text-lg font-bold mt-[10px]'>Puma x p.a.m</p>
      <p className='uppercase text-xs font-normal mb-[20px]'>re entering the pam/puma bio/verse</p>
      <Button className=' text-white bg-black px-20' text={"Shop Now"} />
     </div>
    </div>
    </>
  )
}

export default Collaborations