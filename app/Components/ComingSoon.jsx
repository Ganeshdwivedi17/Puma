import React from 'react'
import TimeComingSoon from './TimeComingSoon'

function ComingSoon() {
  return (
    <>
    <div>
        
        <img className='sm:block md:hidden lg:hidden' src='https://cdn.sanity.io/images/qa41whrn/staging/2903eabe51a12db9f6489cbf88e6515b137aad4e-1536x1536.jpg?w=720&q=80&auto=format'/>
    </div>
    <TimeComingSoon day={29} month={"March"} year={2024}/>
    </>
  )
}

export default ComingSoon